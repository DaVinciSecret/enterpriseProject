<template>
<div>
  <el-row>
    <el-col :span="24">
	  <el-breadcrumb separator-class="el-icon-arrow-right">
	    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
	    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
	    <el-breadcrumb-item>商品列表</el-breadcrumb-item>
	  </el-breadcrumb>
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
	</el-row>
  </el-main>
  </div>
</template>

<script>
export default{
	name:'productManage',
	data:function(){
		return {
			currentDate: new Date()
		}
	},
	methods:{
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