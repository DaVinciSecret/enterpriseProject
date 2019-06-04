<template>
  <div id="app">
    <el-container style="min-height:600px;border: 1px solid #eee;">
      <el-aside :width="menuWidth+'px'" style="background-color: rgb(238, 241, 246)">
        <leftTreeMenu :isCollapse="isCollapse"></LeftTreeMenu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <containerHeader @slideChange="slideChange"></containerHeader>
        </el-header>
        
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  
  import leftTreeMenu from '@/components/leftTreeMenu/leftTreeMenu.vue'
  import containerHeader from '@/components/containerHeader/containerHeader.vue'

  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        isCollapse: true,
        menuWidth:"65"
      }
    },
    methods:{
        turnCheck:function(){
          this.isCollapse = !this.isCollapse;
          
          console.log(this.isCollapse);
        },
        slideChange:function(data){
          console.log('Vue:'+ data);
          this.isCollapse = data;
          if(data)
            this.menuWidth = 65
          else
            this.menuWidth = 200
        }

    },
    components:{
      leftTreeMenu,
      containerHeader
    }
  };
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
} 
  .el-aside {
    color: #333;
  }
</style>
