<template>
	<div class="tableContainer">
	  <el-tabs type="border-card" left>
		  <el-tab-pane label="用户管理">
		  <!--表格过滤条件-->
		    <el-row>
			  <el-col :span="4">
			    <el-input size="small" v-model="input" placeholder="请输入商品名称"></el-input>
			  </el-col>
		      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
			  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
		      <el-col :span="5">
			    <el-button-group>
			  	  <el-button size="small" icon="el-icon-edit" plain>导出资源</el-button>
			  	  <el-button size="small" icon="el-icon-share" plain>上传资源</el-button>
			    </el-button-group>
		 	  </el-col>

		    </el-row>
		    <el-row style="text-align:left;">
			  <el-col :span="24">
			  	<el-checkbox-group v-model="checkList">
			      <el-checkbox size="small" label="复选框 A"></el-checkbox>
			      <el-checkbox size="small" label="复选框 B"></el-checkbox>
			      <el-checkbox size="small" label="复选框 C"></el-checkbox>
			      <el-checkbox size="small" label="禁用" disabled></el-checkbox>
			      <el-checkbox size="small" label="选中且禁用" disabled></el-checkbox>
			    </el-checkbox-group>
			  </el-col>
			</el-row>
			<el-row style="text-align:left;">
			  <el-col :span="24">
			     <el-checkbox size="small" v-model="checked1" label="备选项1" border></el-checkbox>
			     <el-checkbox size="small" v-model="checked2" label="备选项1" border></el-checkbox>
			     <el-checkbox size="small" v-model="checked3" label="备选项1" border></el-checkbox>
			     <el-checkbox size="small" v-model="checked4" label="备选项1" border></el-checkbox>
			  </el-col>
			</el-row> 
			<el-row>
				<div style="height:20px;background: rgb(244, 244, 245);"></div>
			</el-row>

			<!--商品表格-->
			<el-table width="100%" @select-all="selectAll" @select="tableSelect" @row-click="rowClickHander"
			    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
			    style="width: 100%">
			     <el-table-column
			      type="selection"
			      width="55">
			    </el-table-column>
			    <el-table-column
			      label="Photo"
			      prop="photo"
			      align="center"
			      width="100">
			      <img style="width:50px;height:70px;">
			    </el-table-column>
			    <el-table-column
			      label="Name"
			      prop="name"
			      align="center"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      label="date"
			      align="center"
			      sortable
			      prop="date"
			      width="120">
			    </el-table-column>
			    <el-table-column
			      label="comment"
			      prop="comment"
			      align="center"
			      width="120">
			    </el-table-column>
			    <el-table-column
			      label="number"
			      prop="number"
			      sortable
			      align="center"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      label="IsSale"
			      prop="issale">
			    </el-table-column>
			    <el-table-column
			      align="center">
			      <template slot="header" slot-scope="scope">
			        <el-input
			          v-model="search"
			          size="small"
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
	  	 	:page-size="4"
  			:pager-count="11"
	    	layout="prev, pager, next"
	    	:total="tableData.length">
	  	</el-pagination>
	  </div>

	  <div style="position:absolute;bottom:15px;left:20px;">
	  	<el-button-group>
		  <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteProduct">删除资源</el-button>
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
	          name: '贵族圆环',
	          comment:'what the fuck!!',
	          number:2,
	          issale:1,
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-04',
	          name: '手套',
	          comment:'what the fuck!!',
	          number:1,
	          issale:0,
	          address: '上海市普陀区金沙江路 1517 弄'
	        }, {
	          date: '2016-05-01',
	          name: '盾牌',
	          comment:'what the fuck!!',
	          number:3,
	          issale:1,
	          address: '上海市普陀区金沙江路 1519 弄'
	        }, {
	          date: '2016-05-08',
	          name: '食人魔之花',
	          comment:'what the fuck!!',
	          number:12,
	          issale:1,
	          address: '上海市普陀区金沙江路 1517 弄'
	        }, {
	          date: '2016-05-12',
	          name: '狂暴之刃',
	          comment:'what the fuck!!',
	          number:1,
	          issale:0,
	          address: '上海市普陀区金沙江路 1519 弄'
	        }, {
	          date: '2016-05-06',
	          name: '圣枪弹夹',
	          comment:'what the fuck!!',
	          number:5,
	          issale:0,
	          address: '上海市普陀区金沙江路 1517 弄'
	        }, {
	          date: '2016-05-09',
	          name: '红蔷薇',
	          comment:'what the fuck!!',
	          number:30,
	          issale:1,
	          address: '上海市普陀区金沙江路 1519 弄'
	        }, {
	          date: '2016-05-10',
	          name: '芬里尔头骨',
	          comment:'what the fuck!!',
	          number:12,
	          issale:0,
	          address: '上海市普陀区金沙江路 1516 弄'
	        }],
	        search: '',
	        checked1:false,
	        checked2:false,
	        checked3:false,
	        checked4:false,
	        checkList:[],
	        input:''
	      }
	    },
	    methods: {
	      handleEdit(index, row) {
	        console.log(index, row);
	        this.$router.push('',{});
	      },
	      handleDelete(index, row) {
	        console.log(index, row);
	        this.tableData.splice(index,1);
	      },
	      selectAll:function(selection){
	      	console.log(selection);
	      },
	      tableSelect:function(selection,row){
	      	console.log(selection,row);
	      },
	      rowClickHander:function(row,column, event){
	      	console.log(row,column,event)
	      },
	      //删除全部商品
	      deleteProduct:function(){
	      	 this.$Minax({
	      	 	url:"http://localhost:3000/index/",
				type:"post",
				data:{name:'li'},
				dataType:"json"
	      	 }).then(res=>{
	      	 	console.log('success');
	      	 }).catch(err=>{
	      	 	console.log('err')
	      	 })
	      }
	    },
	}
</script>

<style>
  .tableContainer{
	position:relative;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>