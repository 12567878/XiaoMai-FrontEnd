<template>
    <div>
        <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>评论管理</el-breadcrumb-item>
      <el-breadcrumb-item>评论列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
         <el-row>
        <el-col :span="6">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table  border stripe >
          <!-- :data="orderList" -->
          <el-table-column type="index" label="#"></el-table-column>
         <el-table-column label="评论编号" ></el-table-column>
         <!-- prop="order_number" -->
         <el-table-column label="评论内容" ></el-table-column>
         <!-- prop="order_price" -->
        <el-table-column label="评论状态"></el-table-column>
        <el-table-column label="评论时间" ></el-table-column>
        <!-- prop="create_time" -->
        <el-table-column label="操作">
        </el-table-column>
      </el-table>
       <el-pagination
         background
         layout="total, sizes, prev, pager, next, jumper"
         :page-sizes="[2, 5, 10, 15]"
         :total="1000">
      </el-pagination>
     </el-card>

    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>

</style>
