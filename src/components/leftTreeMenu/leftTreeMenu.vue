<template>
  <el-menu :default-openeds="['1', '5']" :collapse="isCollapse" :collapse-transition="colTransition">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span slot="title">主页概览</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>
         <span slot="title"><router-link to="/productDetail">商品详情</router-link></span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" style="text-align:center;">商品管理</el-menu-item>
          <el-menu-item index="2-2" style="text-align:center;">评论管理</el-menu-item>
          <el-menu-item index="2-3" style="text-align:center;">商品分类</el-menu-item>
          <el-menu-item index="2-4" style="text-align:center;">人员分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-custom"></i>
        <span slot="title">MenuItem</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-s-grid"></i>
        <span slot="title">MenuItem</span>
      </el-menu-item>
   </el-menu>
</template>

<script>
	export default {
	  name: 'leftTreeMenu',
    data:function(){
      return {
        colTransition:false
      }
    },
    props:['isCollapse']
	}
</script>

<style>
a{
  text-decoration:none;
  color:black;
}
</style>