<template>
	<div style="width:1200px;font-family:abc;margin:0 auto;" @click="ifDrop = true">
		<el-row>
			<el-col :span="3"  class="title">查看转账账户</el-col>
			<el-col :offset="19" :span="2">
				<p class="demo" @click.stop="ifDrop = !ifDrop">填写范例
					<div class="dropdownmenu" ref="hoverMenu">
			            <div class="dropsj1"></div>
			            <div class="dropsj2"></div>
			            <ul>
			                <li @click="alertDemo(0)">
			                	<img src="../assets/icon-logo/usa.png" alt="" />
			                	<p>美国</p>
			                </li>
			                <li @click="alertDemo(1)">
			                	<img src="../assets/icon-logo/usa.png" alt="" />
			                	<p>美国</p>
			                </li>
			                <li @click="alertDemo(3)">
			                	<img src="../assets/icon-logo/usa.png" alt="" />
			                	<p>美国</p>
			                </li>
			                <li @click="alertDemo(4)">
			                	<img src="../assets/icon-logo/usa.png" alt="" />
			                	<p>美国</p>
			                </li>
			                <li @click="alertDemo(5)">
			                	<img src="../assets/icon-logo/usa.png" alt="" />
			                	<p>美国</p>
			                </li>
			                <li @click="alertDemo(6)">
			                	<img src="../assets/icon-logo/usa.png" alt="" />
			                	<p>美国</p>
			                </li>
			            </ul>
			        </div>
				</p>
			</el-col>
		</el-row>

		<div class="warp">
			<el-row class="row">
		        <el-col :span="4" class="lebel">银行账户类型</el-col>
		        <el-col :span="4" class="mxac">
		           {{transferAccount.bankType | bankTypes}}
		   
		        </el-col>
		    </el-row>

		     <el-row class="row">
		    	<el-col :span="4" class="lebel">银行卡账户类型</el-col>
		    	<el-col :span="20">
		    	{{transferAccount.bankCardType | bankCardTypes}}
		    	</el-col>
		    </el-row>

           <el-row class="tabclass">
		        <el-col :span="4" class="lebel">收款人类型</el-col>
			    	<el-col :span="10">
			    	{{transferAccount.accountType | accountTypes}}
			    	</el-col>
			    </el-row>

		     <el-row class="row">
			    	<el-col :span="4" class="lebel">收款人证件号</el-col>
			    	<el-col :span="8">
			    	    {{transferAccount.certificateNo}}
			    	</el-col>
			    </el-row>


			    <el-row class="tabclass">
			    	<el-col :span="4" class="lebel">证件类型</el-col>
			    	<el-col :span="10">
			    	 	{{transferAccount.certificateType | certificateTypes}}
			    	</el-col>
			    </el-row>


			<!-- 币种  slider -->
		    <el-row style="min-height:64px;line-height:52px;margin-top:30px;">
		    	<el-col :span="4" class="lebel">银行账户币种</el-col>
		    	<el-col :span="19">
		    		<div class="slidewarp">
		    			<div class="slideitem acslide">
		    				<img src="../assets/icon-logo/usa.png" alt="" class="logo" />
		    				<p>{{transferAccount.currency}}</p>
		    			
		    			</div>
		    		</div>
		    	</el-col>
		    </el-row>
		    <!-- //币种  slider -->

		    <el-row class="row">
		    	<el-col :span="4" class="lebel">银行账户所在国家</el-col>
		    	<el-col :span="8">
		    	{{transferAccount.country}}
		    	</el-col>
		    </el-row>

			

				<!-- 中国卡，  只有  姓名证件号 -->
			<div v-show="transferAccount.country.indexOf('中国') >= 0">

				<el-row class="row">
			    	<el-col :span="4" class="lebel">收款银行账户号码</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.bankCard}}
			    	</el-col>
			    	
			    </el-row>


			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款银行名称</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.bankName}}
			    	</el-col>
			    </el-row>

				<el-row class="row">
			    	<el-col :span="4" class="lebel">收款人姓名</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.realName}}
			    	</el-col>
			    </el-row>

			</div>
		    <!-- 中国卡，  只有  姓名证件号   结束 -->


		   <!-- 美国卡  ABA 地址 加 姓名 -->

			<div v-show="transferAccount.country.indexOf('美国') >= 0">

				<el-row class="row">
			    	<el-col :span="4" class="lebel">收款银行账户号码</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.bankCard}}
			    	</el-col>
			    </el-row>


			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款银行名称</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.bankName}}
			    	</el-col>
			    </el-row>

				<el-row class="row">
			    	<el-col :span="4" class="lebel">收款人银行ABA/FW</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.abaFwNo}}
			    	</el-col>
			    </el-row>


			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款人银行地址</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.address}}
			    	</el-col>
			    </el-row>

			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款人姓名</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.realName}}
			    	</el-col>
			    </el-row>
			</div>

		    <!-- 美国卡  ABA 地址 加 姓名  结束 -->

		    <!-- 英国 卡 -->

			<div v-show="transferAccount.country.indexOf('英国') >= 0">


			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款银行名称</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.bankName}}
			    	</el-col>
			    </el-row>

				<el-row class="row">
			    	<el-col :span="4" class="lebel">收款人银行IBAN</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.ibanNo}}
			    	</el-col>
			    </el-row>


			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款人银行地址</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.address}}
			    	</el-col>
			    </el-row>

			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款人姓名</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.realName}}
			    	</el-col>
			    </el-row>
			</div>

		    <!-- 英国卡 -->


		    <!-- 澳大利亚卡 -->

			<div v-show="transferAccount.country.indexOf('澳大利亚') >= 0">
				<el-row class="row">
			    	<el-col :span="4" class="lebel">收款银行账户号码</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.bankCard}}
			    	</el-col>
			    	
			    </el-row>


			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款银行名称</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.bankName}}
			    	</el-col>
			    </el-row>

				<el-row class="row">
			    	<el-col :span="4" class="lebel">收款人银行BSB号</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.bsbNo}}
			    	</el-col>
			    </el-row>


			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款人银行地址</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.address}}
			    	</el-col>
			    </el-row>

			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款人姓名</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.realName}}
			    	</el-col>
			    </el-row>
			</div>


		    <!-- 澳大利亚卡 -->



			<!-- 加拿大/俄罗斯 卡 -->

			<div v-show="transferAccount.country.indexOf('加拿大') >= 0 || transferAccount.country.indexOf('俄罗斯') >= 0">
				<el-row class="row">
			    	<el-col :span="4" class="lebel">收款银行账户号码</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.bankCard}}
			    	</el-col>
			    </el-row>


			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款银行名称</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.bankName}}
			    	</el-col>
			    </el-row>

				<el-row class="row">
			    	<el-col :span="4" class="lebel">收款人银行CC号</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.ccNo}}
			    	</el-col>
			    </el-row>


			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款人银行地址</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.address}}
			    	</el-col>
			    </el-row>

			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款人姓名</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.realName}}
			    	</el-col>
			    </el-row>
			</div>


		    <!-- 加拿大/俄罗斯 卡 -->


		    <!-- 香港卡 -->

			<div v-show="transferAccount.country.indexOf('香港') >= 0">
				<el-row class="row">
			    	<el-col :span="4" class="lebel">收款银行账户号码</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.bankCard}}
			    	</el-col>
			    </el-row>


			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款银行名称</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.bankName}}
			    	</el-col>
			    </el-row>

			    <el-row class="row">
			    	<el-col :span="4" class="lebel">收款人银行地址</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.address}}
			    	</el-col>
			    </el-row>

				<el-row class="row">
			    	<el-col :span="4" class="lebel">收款人姓名</el-col>
			    	<el-col :span="8">
			    	{{transferAccount.realName}}
			    	</el-col>
			    </el-row>


			    
			</div>

		    <!-- 香港卡 -->


		</div>


		<!-- 弹出填写 实例 的 demo -->
		<el-dialog title="填写范例" :visible.sync="dialogVisible" width="44%">
		    <img class="demoimg" :src="demoSrc" alt="" />
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: "lookTransferAccount",
		data(){
			return {
				// 下拉菜单
				ifDrop: true,
				ifChinaCard: false,
				// 弹出 demo
				dialogVisible: false,
				aba: "",
				shouBank: "",
				demoSrcArr: [
					require("../assets/images/china-demo.jpg"),
					require("../assets/images/canada-demo.jpg")
				],
				demoSrc: "",


				row2index: 2,
				radio: '1',
				nameType: '1',
				nameIdType: "1",
				// 已阅读
				checked: true,
				cardId: "",
				country: "",
				nameId: "",
				name: "",
				bankName: "",
				transferAccount:{
	                abaFwNo: "",
					address: "",
					bankType: 2,
					bankCardType: '1',
					accountType: '2',
					nameIdType: "1",
					bankCard: "",
					country:"",
					nameId: "",
					realName: "",
					bsbNo:"",
					bankName: "",
					ccNo:"",
					ibanNo:"",
					certificateType:1,
					certificateNo:"",
					userId:""
                },
				options: [{
		            value: '选项1',
		            label: '黄金糕'
		        }, {
		            value: '选项2',
		            label: '双皮奶'
		        }, {
		            value: '选项3',
		            label: '蚵仔煎'
		        }, {
		            value: '选项4',
		            label: '龙须面'
		        }, {
		            value: '选项5',
		            label: '北京烤鸭'
		        }],
		        slideIndex: 1,
		        param: this.$route.query.data
			}
		},
		methods: {
		    alertDemo: function(index){
		    	this.ifDrop = true;
		    	this.demoSrc = this.demoSrcArr[index];
		    	this.dialogVisible = true;
		    },
		    initDic: function(){
		         
		            this.transferAccount=this.param.id;
		            console.log(this.transferAccount);
		          
		}

		},
		mounted(){
				this.initDic();
		},
		 filters: {
     		bankTypes: function(index) {
            	switch (index){
            	case 1:
             	 return "个人账户";
             	 break;
           	 	case 2:
             	 return "企业账户";
            	 break;
           		 case 3:
              	  return "电商账户";
             	  break;
             }
           },
           bankCardTypes:function(index){
           		switch (index){
            	case 1:
             	 return "储蓄账户";
             	 break;
           	 	case 2:
             	 return "支票账户";
            	 break;
            	}
           },
           accountTypes:function(index){
           		switch (index){
            	case 1:
             	 return "其他人";
             	 break;
           	 	case 2:
             	 return "本人";
            	 break;
            	}
           },
           certificateTypes:function(index){
           		switch (index){
            	case 1:
             	 return "身份证";
             	 break;
           	 	case 2:
             	 return "护照";
            	 break;
            	case 3:
             	 return "驾驶证";
            	 break;
            	}
           }
        },
		watch: {
			ifDrop: function(){
				if(this.ifDrop){
		    		this.$refs.hoverMenu.style.height = "0";
		    		console.log(this.$refs.hoverMenu.style.height);
		    	}else{
		    		this.$refs.hoverMenu.style.height = "260px";
		    	}
			}
		}
	}
</script>

<style scoped>
	.row{height:40px;line-height:40px;margin-top:34px;}
	.warn{color:#f10215;font-size:13px;text-indent:40px;}
	.lebel{font-size:18px;color:#606266;text-indent:30px;font-weight:600;}
	.input{width:100%;}
	.title{height:60px;line-height:60px;font-size:20px;color:#333;cursor:default;font-weight:600;}
	.warn{height:60px;line-height:64px;color:#f10215;font-size:13px;text-indent:10px;}
	.demo{width:70px;height:30px;line-height:30px;text-align:right;font-size:14px;color:#4a6ddb;cursor:pointer;margin-top:20px;
		position:relative;}

	.warp{width:100%;min-height:920px;box-shadow:0 0 20px #e6eced;border-radius:6px;margin-bottom:30px;overflow:hidden;}
	.btn-o{width:138px;height:40px;border-radius:20px;border:1px solid #606266;box-sizing:border-box;text-align:center;line-height:40px;
    font-size:16px;color:#606266;cursor:pointer;float:left;}
    .acbtnimg{display:none;width:28px;height:30px;float:left;margin-top:5px;}
    .mxac .acbtnimg{display:block;}
    .mxac .btn-o{color:#4a6ddb;border:1px solid #4a6ddb;}


    .tabclass{width:100%;height:40px;line-height:40px;overflow:hidden;}
    .addbtn{font-size:14px;color:#fff;width:188px;height:42px;line-height:42px;text-align:center;margin-left:80px;margin-top:10px;
	      border-radius:21px;letter-spacing:1px;background-color:#4a6ddb;transition:all ease 0.2s;cursor:pointer;
	    background: -o-linear-gradient(left top,  #80defc,#4a6ddb);
	    background: -ms-linear-gradient(top,  #80defc 0%,#4a6ddb 70%);
	    background: -webkit-linear-gradient(left top,  #80defc 0%,#4a6ddb 70%);
	    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80defc', endColorstr='#4a6ddb',GradientType=0 );
	    }
	.addbtn:hover{box-shadow:-6px 10px 24px #d4ddde;}



	/*左右  滑动 框*/
	.slidewarp{width:100%;min-height:64px;}

	.slideitem{width:162px;height:52px;border-radius:6px;border:1px solid #7f7f7f;float:left;box-sizing:border-box;margin-right:62px;cursor:pointer;position:relative;margin-bottom:16px;}
	.slideitem:last-child{margin-right:0;}
	.slideitem .logo{display:block;width:auto;height:26px;float:left;margin:12px 16px 12px 16px;}
	.slideitem>p{width:70px;height:50px;line-height:50px;font-size:16px;color:#606266;float:left;}
	.slideitem>.duigou{display:block;width:28px;height:30px;position:absolute;right:-30px;top:10px;display:none;}

	.acslide{border:1px solid #4a6ddb;}
	.acslide>p{color:#4a6ddb !important;}
	.acslide .duigou{display:block;}

	/*填写实例 下拉菜单*/
	.dropdownmenu{width:150px;height:0;position:absolute;left:1051px;top:48px;cursor:default;transition:height linear 0.15s;overflow:hidden;z-index:1000;}

	.dropdownmenu>ul{width:148px;min-height:156px;border:1px solid #ebebeb;margin-top:12px;list-style:none;border-radius:6px;background-color:#fff;}
	.dropdownmenu>ul>li{width:130px;height:34px;line-height:34px;border-radius:6px;cursor:pointer;font-size:14px;color:#606266;margin:0 auto;margin-top:4px;transition:background-color linear 0.13s;text-align:left;padding-left:14%;box-sizing:border-box;overflow:hidden;}
	.dropdownmenu>ul>li:hover{background-color:#efefef;}
	.dropdownmenu>ul>li>img{width:30px;height:auto;margin-top:8px;margin-left:-4px;margin-right:14px;display:block;float:left;}
	.dropdownmenu>ul>li>p{width:66px;height:30px;line-height:35px;float:left;}


	.dropsj1{width:0;height:0;border:10px solid transparent;border-bottom:10px solid #ebebeb;position:absolute;right:18px;top:-7px;}
	.dropsj2{width:0;height:0;border:9px solid transparent;border-bottom:9px solid #fff;position:absolute;right:19px;top:-4px;}



	.demoimg{display:block;width:84%;height:auto;margin:0 auto;}
</style>