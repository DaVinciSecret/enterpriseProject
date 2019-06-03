<template>
    <div>
      <el-button @click="turnCheck" style="float:left;margin-top:10px;" size="small">=</el-button>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px;"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>消息中心</el-dropdown-item>
          <el-dropdown-item>权限管理</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </div>
</template>

<script>
  export default {
    name:'containerHeader',
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
       item,
       isCollapse:true
      }
    },
    methods:{
      turnCheck:function(){
            this.isCollapse = !this.isCollapse;
            this.$emit("slideChange",this.isCollapse);
            console.log(this.isCollapse);
          }
    },
    components:{
    }
  };
</script>

<style lang="scss">
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
