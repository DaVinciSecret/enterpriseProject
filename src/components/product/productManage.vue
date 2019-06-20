<template>
<div>
  <el-row>
    <el-col :span="8">
	  <el-breadcrumb separator-class="el-icon-arrow-right">
	    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
	    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
	    <el-breadcrumb-item>商品列表</el-breadcrumb-item>
	  </el-breadcrumb>
    </el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
	<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="8"  align="right">
      <el-button type="primary" size="small">导出</el-button>
      <el-button type="danger" size="small" @click="addProductFormCheck">新建</el-button>
    </el-col>
  </el-row>

  <el-main>
  	<el-row :gutter="12">
  	  <el-col :span="24" align="right">
  		<el-button-group >
		  <el-button @click="showModel('card')" style="font-size:1em;" icon="el-icon-bank-card" size="small"></el-button>
		  <el-button @click="showModel('table')" style="font-size:1em;" icon="el-icon-document" size="small"></el-button>
		</el-button-group>
	  </el-col>
  	</el-row>
    <el-row :gutter="12" v-if="isCard">
	  <el-col :span="6" v-for="product in tableData" >
	    <el-card shadow="hover" style="min-height:240px;margin-bottom:12px;">
	      <div slot="header" style="text-align:left;" class="clearfix">
		    <span>{{product.city}}</span>
		    <el-button style="float: right; padding: 3px 0" type="text">
		    	<el-dropdown size="medium">
				  <span class="el-dropdown-link">
				    操作<i class="el-icon-arrow-down el-icon--right"></i>
				  </span>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item icon="el-icon-edit">编辑</el-dropdown-item>
				    <el-dropdown-item icon="el-icon-delete">删除</el-dropdown-item>
				    <el-dropdown-item icon="el-icon-document">详情</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
		    </el-button>
		  </div>
		  <div v-for="o in 4" :key="o" class="text item">
		    {{'列表内容 ' + o }}
		  </div>
	    </el-card>
	  </el-col>
	</el-row>
	<el-row :gutter="12" v-else="isCard">
	 <el-col :span="24">
	  <el-table
	    :data="tableData"
	    border
	    style="width: 100%">
	    <el-table-column
	      fixed
	      prop="date"
	      label="日期"
	      width="150">
	    </el-table-column>
	    <el-table-column
	      prop="name"
	      label="姓名"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="province"
	      label="省份"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="city"
	      label="市区"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="地址"
	      width="300">
	    </el-table-column>
	    <el-table-column
	      prop="zip"
	      label="邮编"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      fixed="right"
	      label="操作"
	      width="120">
	      <template slot-scope="scope">
	        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
	        <el-button type="text" size="small">编辑</el-button>
	      </template>
	    </el-table-column>
	    </el-table>
	   </el-col>
	</el-row>
	<el-row>
	  <el-pagination
		background
		layout="prev, pager, next"
		:total="1000"
		@current-change= "handleChange"
		@prev-click="handlePrev"
		@next-click="hanleNext"
		>
	  </el-pagination>
	  <addProductForm @flagChange="flagChange" :dialogVisible="dialogVisible"></addProductForm>
	</el-row>
  </el-main>
  </div>
</template>

<script>
import addProductForm from '@/components/product/addProductForm.vue'

export default{
	name:'productManage',
	data:function(){
		return {
			currentDate: new Date(),
			dialogVisible:false,
			isCard:true,
			tableData: [{
	          date: '2016-05-02',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-04',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1517 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-01',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1519 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-03',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1516 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-08',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1516 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-10',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1516 弄',
	          zip: 200333
	        }]
		}
	},
	methods:{
		flagChange:function(data){
			console.log(data)
			this.dialogVisible = data;
		},
		addProductFormCheck:function(){
			this.dialogVisible = !this.dialogVisible;
			console.log(this.dialogVisible);
		},
		//当前页码
		handleChange:function(val){
		  console.log("点击当前"+val)
		},
		//上一页
		handlePrev:function(val){
		  console.log("点击上一页"+val)
		},
		hanleNext:function(val){
		  console.log("点击下一页"+val)
		},
		showModel:function(e){
		console.log(e);
			if(e === "table"){
				this.isCard = false;
			}else{
				this.isCard = true;
			}
			
		}
	},
	components:{
		addProductForm
	}

}
</script>

<style scope>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  /*卡片操作*/
    .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
<style>