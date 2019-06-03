<template>
	<div class="tableContainer">
	  <div style="position:absolute;right:0;top:-0px;z-index:999;margin-top:4px; margin-right:10px;">
		<el-button-group>
		  <el-button size="small" icon="el-icon-edit" plain>导出资源</el-button>
		  <el-button size="small" icon="el-icon-share" plain>上传资源</el-button>
		</el-button-group>
	  </div>
	  <el-tabs type="border-card">

		  <el-tab-pane label="用户管理">
			  <el-table max-height="400" width="100%"
			    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
			    style="width: 100%">
			     <el-table-column
			      type="selection"
			      width="55">
			    </el-table-column>
			    <el-table-column
			      label="Photo"
			      prop="photo"
			      width="120">
			      <img style="width:50px;height:70px;">
			    </el-table-column>
			    <el-table-column
			      label="Name"
			      prop="name"
			      width="120">
			    </el-table-column>
			    <el-table-column
			      label="date"
			      sortable
			      prop="date">
			    </el-table-column>
			    <el-table-column
			      label="IsSale"
			      prop="issale">
			    </el-table-column>
			    <el-table-column
			      align="right">
			      <template slot="header" slot-scope="scope">
			        <el-input
			          v-model="search"
			          size="mini"
			          placeholder="输入关键字搜索"/>
			      </template>
			      <template slot-scope="scope">
			        <el-button
			          size="mini"
			          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
			        <el-button
			          size="mini"
			          type="danger"
			          icon="el-icon-delete"
			          @click="handleDelete(scope.$index, scope.row)"></el-button>
			      </template>
			    </el-table-column>
			  </el-table>
		  </el-tab-pane>

	  <el-tab-pane label="配置管理">配置管理</el-tab-pane>
	  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
	  <router-view></router-view>

	  <div class="block" style="margin-top:30px;">
	  	<el-pagination
	    	layout="prev, pager, next"
	    	:total="1000">
	  	</el-pagination>
	  </div>

	  <div style="position:absolute;bottom:15px;left:20px;">
	  	<el-button-group>
		  <el-button type="danger" size="small" icon="el-icon-delete">删除资源</el-button>
		</el-button-group>
	  </div>
	  </el-tabs>
	</div>
</template>

<script>
	export default {
	  name: 'productDetail',
	   data() {
	      return {
	        tableData: [{
	          date: '2016-05-02',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-04',
	          name: '王二小',
	          address: '上海市普陀区金沙江路 1517 弄'
	        }, {
	          date: '2016-05-01',
	          name: '王马子',
	          address: '上海市普陀区金沙江路 1519 弄'
	        }, {
	          date: '2016-05-08',
	          name: '阿斯顿',
	          address: '上海市普陀区金沙江路 1517 弄'
	        }, {
	          date: '2016-05-12',
	          name: '速度发',
	          address: '上海市普陀区金沙江路 1519 弄'
	        }, {
	          date: '2016-05-06',
	          name: '看得见',
	          address: '上海市普陀区金沙江路 1517 弄'
	        }, {
	          date: '2016-05-09',
	          name: '李四',
	          address: '上海市普陀区金沙江路 1519 弄'
	        }, {
	          date: '2016-05-10',
	          name: '镇关西',
	          address: '上海市普陀区金沙江路 1516 弄'
	        }],
	        search: ''
	      }
	    },
	    methods: {
	      handleEdit(index, row) {
	        console.log(index, row);
	      },
	      handleDelete(index, row) {
	        console.log(index, row);
	      }
	    },
	}
</script>

<style>
.tableContainer{
	position:relative;
}
</style>