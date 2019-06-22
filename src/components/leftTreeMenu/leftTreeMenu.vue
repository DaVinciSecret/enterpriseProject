<template>
  <el-menu :default-openeds="['1', '5']" :collapse="isCollapse" :collapse-transition="colTransition">
      <el-menu-item style="font-size:18px;height:60px;border-bottom:1px solid #E4E7ED;">
        <strong>M</strong>
      </el-menu-item>
      <el-menu-item index="1">
        <i class="el-icon-s-home" data-name="home" @click="linkTo($event)"></i>
        <span><router-link to="/">主页概览</router-link></span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu" data-name="product" @click="linkTo($event)"></i>
         <span><router-link to="/product">商品操作</router-link></span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" style="text-align:center;">
            <router-link to="/product/productDetail">商品详情</router-link>
          </el-menu-item>
          <el-menu-item index="2-2" style="text-align:center;">
            <router-link to="/product/productManage">商品管理</router-link>
          </el-menu-item>
          <el-menu-item index="2-3" style="text-align:center;">
            <router-link to="/product/productType">商品分类</router-link>
          </el-menu-item>
          <el-menu-item index="2-4" style="text-align:center;">
            <router-link to="/product/personType">人员分类</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-setting" data-name="ss" @click="linkTo($event)"></i>
        <span>MenuItem</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-custom" data-name="account" @click="linkTo($event)"></i>
        <span><router-link to="/account">账户信息</router-link></span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-s-grid" data-name="other" @click="linkTo($event)"></i>
        <span><router-link to="/other">menuItem</router-link></span>
      </el-menu-item>
   </el-menu>
</template>

<script>
	export default {
	  name: 'leftTreeMenu',
    data:function(){
      return {
        name:"",
        colTransition:false
      }
    },
    methods:{
      linkTo:function(e){
        console.log(e.target.dataset.name);
        this.$router.push('/'+e.target.dataset.name);
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