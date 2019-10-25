<template>
	<div style="width:1200px;margin:0 auto;font-family:abc;">
		<div class="title">查看收款店铺</div>
		<el-row style="height:90px;line-height:90px;">
			<el-col :span="3" style="text-align:center;" class="qqbi">选择平台:</el-col>
			<el-col :span="21">
			           {{ruleForm.platform}}
			</el-col>
		</el-row>



		<el-row style="height:90px;line-height:90px;">
			<el-col :span="3" style="text-align:center;" class="qqbi">选择站点:</el-col>
			<el-col :span="21">
				{{ruleForm.site}}
			</el-col>
		</el-row>
		<!-- 平台 站点 选择  结束 -->


		<!-- 表单 信息 开始 -->
		<div class="form">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
				<el-row style="height:60px;line-height:44px;">
					<el-col :span="5" class="qqbi">店铺名称：</el-col>
					<el-col :span="15">
						{{ruleForm.shopName}}
					</el-col>
				</el-row>


				<el-row style="height:60px;line-height:44px;">
					<el-col :span="5" class="qqbi">销售类目：</el-col>
					<el-col :span="15">
						{{ruleForm.salesCategory}}
					</el-col>
				</el-row>


				<el-row style="height:60px;line-height:44px;">
					<el-col :span="5" class="qqbi">卖家编号：</el-col>
					<el-col :span="15">
						{{ruleForm.sellerId}}
					</el-col>
				</el-row>


				<el-row style="height:60px;line-height:44px;">
					<el-col :span="5" class="qqbi">店铺链接：</el-col>
					<el-col :span="15">
						{{ruleForm.shopLink}}
					</el-col>
				</el-row>


	          <div v-show="ruleForm.platform.indexOf('amazon') >= 0">

				<el-row style="height:60px;line-height:44px;">
			    	<el-col :span="5" class="qqbi">MWS令牌：</el-col>
			    	<el-col :span="15">
			    	{{ruleForm.mwsAuthToken}}
			    	</el-col>
			    </el-row>

			    <el-row style="height:60px;line-height:44px;">
			    	<el-col :span="5" class="qqbi">商城编号：</el-col>
			    	<el-col :span="15">
			    	{{ruleForm.marketplaceId}}
			    	</el-col>
			    </el-row>

                <el-row style="height:60px;line-height:44px;">
			    	<el-col :span="5" class="qqbi">AWS访问密钥：</el-col>
			    	<el-col :span="15">
			    	{{ruleForm.accessKey}}
			    	</el-col>
			    </el-row>

			    <el-row style="height:60px;line-height:44px;">
			    	<el-col :span="5" class="qqbi">私有密钥：</el-col>
			    	<el-col :span="15">
			    	{{ruleForm.secretKey}}
			    	</el-col>
			    </el-row>


             </div>

              <div v-show="ruleForm.platform.indexOf('ebay') >= 0">

				<el-row style="height:60px;line-height:44px;">
			    	<el-col :span="5" class="qqbi">API用户名</el-col>
			    	<el-col :span="15">
			    	{{ruleForm.acctUsername}}
			    	</el-col>
			    </el-row>



				<el-row style="height:60px;line-height:44px;">
			    	<el-col :span="5" class="qqbi">API密码</el-col>
			    	<el-col :span="15">
			    	{{ruleForm.acctPassword}}
			    	</el-col>
			    </el-row>


				<el-row style="height:60px;line-height:44px;">
			    	<el-col :span="5" class="qqbi">签名</el-col>
			    	<el-col :span="15">
			    	{{ruleForm.acctSignature}}
			    	</el-col>
			    </el-row>

             </div>
			
			</el-form>
		</div>







	</div>
</template>

<script>
import {getDataTypes,addShop,getCurrency,getShopDetail,updateShop} from "../api/hanqing.js";
	export default {
		name: "lookShop",
		data(){
			return {
				row1index2: 1,
				siteArr:[],
				// 表单
				ruleForm: {
				    platform:"amazon",
					shopName: "",
					site:"",
					salesCategory: "",
					sellerId: "",
					shopLink:"",
					mwsAuthToken:"",
					marketplaceId:"",
					accessKey:"",
					secretKey:"",
					acctUsername:"",
					acctPassword:"",
					acctSignature:"",
					currency:""
				},
				options: [],
				param: this.$route.query.data,
				rules: {
					platform: [{ 
						required: true, message: '请输入平台', trigger: 'blur'
	        		}],
	        		shopName: [{ 
						required: true, message: '请输入店铺名称', trigger: 'blur'
	        		}],
	        		site: [{ 
						required: true, message: '请输入站点', trigger: 'blur'
	        		}],
	        		salesCategory: [{ 
						required: true, message: '请输入销售类目', trigger: 'blur'
	        		}],
	        		sellerId: [{ 
						required: true, message: '请输入卖家编号', trigger: 'blur'
	        		}],
	        		shopLink: [{ 
						required: true, message: '请输入店铺链接', trigger: 'blur'
	        		}],
	        		mwsAuthToken: [{ 
						required: false, message: '请输入MWS 授权令牌', trigger: 'blur'
	        		}],
	        		marketplaceId: [{ 
						required: false, message: '请输入商城编号', trigger: 'blur'
	        		}],
	        		accessKey: [{ 
						required: false, message: '请输入AWS访问密钥ID', trigger: 'blur'
	        		}],
	        		secretKey: [{ 
						required: false, message: '请输入私有密钥', trigger: 'blur'
	        		}],
	        		acctUsername: [{ 
						required: false, message: '请输入API用户名', trigger: 'blur'
	        		}],
	        		acctPassword: [{ 
						required: false, message: '请输入API密码', trigger: 'blur'
	        		}],
	        		acctSignature: [{ 
						required: false, message: '请输入签名', trigger: 'blur'
	        		}]
				}
			}
		},
		methods: {
		    initDic: function(){

		        
                getShopDetail(this.param.id.platform,this.param.id.id).then( res => {
                            
			            		if(res.code === 100){
			            			this.ruleForm=res.data;
			            			  this.$message.success('成功!');
			            		   //  this.initPageData();
			            			
			            		}else{
			            			this.$message.error(res.msg);
			            		}

			            	});
			    		

                 getDataTypes('siteType').then( res => {
         		 if(res.code === 100){
           			 this.siteArr = res.data;
          		 }else{
            		this.$message({
                    type: 'error',
                    message: res.msg
                });
               }
            });


                 getDataTypes('productType').then( res => {
         		 if(res.code === 100){
           			 this.options = res.data;
          		 }else{
            		this.$message({
                    type: 'error',
                    message: res.msg
                });
               }
            });


            
		}
		},
		mounted(){
            this.initDic();
		}
	}
</script>

<style scoped>
	.title{width:100%;height:60px;line-height:60px;font-size:20px;color:#333;cursor:default;font-weight:600;}
	.btn-o{width:138px;height:40px;border-radius:20px;border:1px solid #ebebeb;box-sizing:border-box;text-align:center;line-height:40px;
    	cursor:pointer;float:left;}
    .mxac .btn-o{border:1px solid #4a6ddb;}
    .btn-o img{display:block;width:auto;height:24px;margin:0 auto;margin-top:8px;}
	.acbtnimg{display:none;width:28px;height:30px;float:left;margin-top:5px;}
	.mxac .acbtnimg{display:block;}
	.icon{display:block;width:28px;height:30px;position: absolute;top:20px;right:-30px;display:none;}

  .rate5{width:100%;height:70px;font-family:abc;}
  .rate5>div{width:152px;height:70px;float:left;margin-right:40px;border-radius:6px;box-shadow:6px 10px 40px #dbe1e2;background-color:#fdfdff;
    border:1px solid #f1f1f1;box-sizing:border-box;position:relative;background:url(../assets/images/shan-bg-s.png) no-repeat right bottom;cursor:pointer;}
  .rate5>div:last-child{margin-right:0px;}
  .rate5 .mxxac{border:1px solid #4a6ddb;}
  .rate5 .mxxac .icon{display:block;}
  .rate5>div p{width:100%;height:20px;line-height:20px;text-indent:20px;margin-top:10px;font-size:14px;}
  .rate5>div div{width:100%;height:24px;line-height:24px;text-indent:20px;font-size:24px;font-weight:600;}
  .rate5>div .img{display:block;width:42px;height:auto;position:absolute;right:14px;bottom:20px;}


	/*表单*/
  .form{width:620px;height:550px;margin:20px auto 20px 42px;}
  .qqbi{font-size:18px;color:#606266;font-weight:600;}



	.addbtn{font-size:14px;color:#fff;width:188px;height:42px;line-height:42px;text-align:center;margin:0 auto;margin-top:50px;
	      border-radius:21px;letter-spacing:1px;background-color:#4a6ddb;transition:all ease 0.2s;cursor:pointer;
	    background: -o-linear-gradient(left top,  #80defc,#4a6ddb);
	    background: -ms-linear-gradient(top,  #80defc 0%,#4a6ddb 70%);
	    background: -webkit-linear-gradient(left top,  #80defc 0%,#4a6ddb 70%);
	    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80defc', endColorstr='#4a6ddb',GradientType=0 );
	    }
	.addbtn:hover{box-shadow:-6px 10px 24px #d4ddde;}
</style>