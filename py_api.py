#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import flask
from flask import request, jsonify  #获取参数
import json #post请求传入json对象时，通过json获取参数
import pymysql


# 查询 一条
def conn_mysql(sql):
    conn = pymysql.connect(host="localhost",port=3306,user="root",passwd="beiyi313",db="for_python",charset="utf8")
    cur = conn.cursor()
    cur.execute(sql)
    res = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    return res

# 查询 多条
def sel_mysql(sql):
    conn = pymysql.connect(host="localhost",port=3306,user="root",passwd="beiyi313",db="for_python",charset="utf8")
    cur = conn.cursor()
    cur.execute(sql)
    res = cur.fetchall()
    conn.commit()
    cur.close()
    conn.close()
    return res

# 插入
def insert_mysql(sql, arr):
    conn = pymysql.connect(host="localhost",port=3306,user="root",passwd="beiyi313",db="for_python",charset="utf8")
    cur = conn.cursor()
    try:
        cur.execute(sql, arr)
        conn.commit()
    except:
        conn.rollback()
    
    cur.close()
    conn.close()

#删除 一条  列表
def del_mysql(sql):
    conn = pymysql.connect(host="localhost",port=3306,user="root",passwd="beiyi313",db="for_python",charset="utf8")
    cur = conn.cursor()
    cur.execute(sql)
    conn.commit()
    cur.close()
    conn.close()

server = flask.Flask(__name__) #创建一个flask对象

#    登录
@server.route('/login', methods=['post'])
def login():
    # username = str(request.values.get('username')) #获取参数
    # password = request.values.get('password')

    username = request.json.get('username') #入参为json类型时，必须用.json方式获取
    password = request.json.get('password')


    sql = 'select password from users where phone="%s"' %username
    data = conn_mysql(sql)

    # print(list(data)[0])
    
    # print((password))
    if data:
        data = list(data)[0]
        if data == password:
            return '{"code":100, "msg":"登录成功"}'
        else:
            return '{"code":-1, "msg":"密码错误"}'
    else:
        return '{"code":-1, "msg":"用户不存在"}'


#    注册
@server.route('/registor', methods=['post'])
def registor():
    namez = str(request.json.get('name'))
    phonez = str(request.json.get('phone'))
    passwordz = str(request.json.get('password'))

    if namez == '':
        return '{"code":-1, "msg":"姓名不能为空"}'
    if phonez == '':
        return '{"code":-1, "msg":"电话不能为空"}'
    if passwordz == '':
        return '{"code":-1, "msg":"密码不能为空"}'

    sqlz = 'select * from users where phone="%s"' %phonez
    dataz = conn_mysql(sqlz)


    if dataz:
        return '{"code":-1, "msg":"该用户已存在"}'
    else:
        # 插入 数据库
        # sql = 'INSERT INTO `users` (`id`, `name`) VALUES (%s, %s, %s, %s)'
        sqlx = 'INSERT INTO `users` (`name`, `password`, `phone`) VALUES (%s, %s, %s)'
        res = insert_mysql(sqlx, (namez, passwordz, phonez))

        # 查看是否 插入成功
        sqlf = 'select id from users where phone="%s"' %phonez
        dataf = conn_mysql(sqlf)

        if dataf:
            return '{"code":100, "msg":"注册成功"}'
        else:
            return '{"code":-2, "msg":"数据库爆炸"}'




#   查询 用户列表
@server.route('/userlist', methods=['get'])
def userlist():
    sql = 'select * from users'
    data = sel_mysql(sql)
    if data:
        result = []
        r = {}
        for row in data:
            z = {}
            z['id'] = row[0]
            z['name'] = row[1]
            z['password'] = row[2]
            z['phone'] = row[3]

            result.append(z)
        
        # return '{"code":100, "msg":"success", "data": "%s"}' %str(result)
        r['code'] = 100
        r['msg'] = 'success'
        r['data'] = result
        return json.dumps(r, ensure_ascii=False)
    else:
        return '{"code":-1, "msg":"暂无用户"}'



#删除一条记录
@server.route('/deleuser', methods=['delete'])
def deleuser():
    id = request.args.get('id')

    sql = 'select password from users where id="%d"' %int(id)
    data = conn_mysql(sql)

    if data:
        #去删除
        sql = 'delete from users where id = "%d"' %int(id)
        del_mysql(sql)

        sql = 'select password from users where id="%d"' %int(id)
        data = conn_mysql(sql)

        if data:
            '{"code":-1, "msg":"删除失败"}'
        else:
            return '{"code":100, "msg":"删除成功"}'
    else:
        return '{"code":-1, "msg":"该用户不存在"}'


server.run(port=8000, host='0.0.0.0', debug=True) #debug设置为True，修改接口信息后直接刷新接口即可；添加参数host='0.0.0.0'允许同一局域网内访问