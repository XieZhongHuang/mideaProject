<template>
    <el-row class="tac">
      <el-menu default-active="2" class="el-menu-vertical-demo" @select="handSelect" @open="handleOpen" @close="handleClose" theme="dark">
        <el-submenu index="1">
          <template slot="title"><span :class="triangle"></span>iService Portal</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">Home</el-menu-item>
            <el-menu-item index="1-2">Settings</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-3">
            <template slot="title">
              <span :class="triangle"></span>
              1.Service Request
            </template>
            <el-submenu index="1-3-1">
              <template slot="title">
                <span :class="triangle"></span>
                Create Service Request
              </template>
              <el-menu-item index="1-3-1-1">Search cust & IB</el-menu-item>
              <el-menu-item index="1-3-1-2">Create Cust</el-menu-item>
              <el-menu-item index="1-3-1-3">Create IB</el-menu-item>
              <el-menu-item index="1-3-1-4">Create SR</el-menu-item>
              <el-menu-item index="1-3-1-5">Edit Customer/IB/SR</el-menu-item>
              <el-menu-item index="1-3-1-6">Processing current SR</el-menu-item>
            </el-submenu>
            <el-menu-item index="1-3-2">Service Request List</el-menu-item>
          </el-submenu>
          <el-submenu index="1-4">
            <template slot="title">
              <span :class="triangle"></span>
              Inventory
            </template>
            <el-submenu index="1-4-1">
              <template slot="title">
                <span :class="triangle"></span>
                Parts onhand inquiry&transaction history
              </template>
              <el-menu-item index="1-4-1-1">purchase order&receiving</el-menu-item>
              <el-menu-item index="1-4-1-2">Subinventory transfer&transact history</el-menu-item>
            </el-submenu>
            <el-menu-item index="1-4-2">Parts transaction history</el-menu-item>
            <el-menu-item index="1-4-3">Parts reciving/allocating</el-menu-item>
          </el-submenu>
          <el-submenu index="1-5">
            <template slot="title">
              <span :class="triangle"></span>
              Claim
            </template>
            <el-menu-item index="1-5-1">Create claim</el-menu-item>
            <el-menu-item index="1-5-2">Claim list</el-menu-item>
          </el-submenu>
          <el-submenu index="1-6">
            <template slot="title">
              <span :class="triangle"></span>
              Reports
            </template>
            <el-menu-item index="1-6-1">Customer List</el-menu-item>
            <el-menu-item index="1-6-2">Install base list</el-menu-item>
            <el-menu-item index="1-6-3">BOM list</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-row>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 600px;
  }
  .el-row{
    text-align: left;
  }
  .right {
    display:inline-block;
    width: 0;
    height: 0;
    margin-right:10px;
    border-top: 6px solid transparent;
    border-left: 6px solid black;
    border-bottom: 6px solid transparent;
  }
  .down {
    display:inline-block;
    width: 0;
    height: 0;
    margin-right:10px;
    border-left: 6px solid transparent;
    border-top: 6px solid black;
    border-right: 6px solid transparent;
  }
  .el-icon-arrow-down:before{
    opacity: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        triangle:'right',
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(666);
        console.log(this.$children);

      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handSelect(){
        console.log(666);
      },
      change(e){
        console.log(e.target);
        console.log(666);
      }
    }
  }
</script>