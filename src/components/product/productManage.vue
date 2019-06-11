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
	  <el-col :span="6" v-for="iten in 6" >
	    <el-card shadow="hover" style="min-height:240px;margin-bottom:12px;">
	      <div slot="header" style="text-align:left;" class="clearfix">
		    <span>标题</span>
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
			dialogVisible:false
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