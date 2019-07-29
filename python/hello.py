#!/usr/bin/env python3
# -*- coding: utf-8 -*-


import pymysql
 
conn = pymysql.connect(host="localhost",port=3306,user="root",passwd="beiyi313",db="for_python",charset="utf8")
 
cur = conn.cursor()
# 创建表
# cur.execute('create table users (id varchar(20) primary key, name varchar(225), password varchar(225), phone varchar(225))')

#插入数据
# cur.execute('insert into users (id, name, password, phone) values (%s, %s, %s, %s)', ['2', 'Jack', '123ss', '18722638795'])

# 提交事务
# conn.commit()
# cur.close()

# 查询表
cur = conn.cursor()
cur.execute('select * from users')

datas = cur.fetchall()

cur.close()
conn.close()

print (datas)