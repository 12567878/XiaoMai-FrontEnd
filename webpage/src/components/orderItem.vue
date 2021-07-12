<template>
  <!--这个组件高度调整后会非常奇怪，下拉菜单会和上方内容重叠，所以请通过修改.body和图片大小调节此元素大小-->
  <el-card id="box-card" body-style="{ padding-bottom: '0px' }" shadow="hover"><!--我实在不知道怎么设置了,反正这个不行-->
    <div slot="header" class="clearfix">
      <span class="text" style="float: left">{{type}}<el-divider direction="vertical"></el-divider>订单号：{{id}}</span>
    </div>
    <div class="block body">
      <span>
        <el-image :src="photo_src" class="photo inline" fit="fill">
          <div slot="placeholder" class="image-slot">
           加载中<span class="dot">...</span>
         </div>
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </span>
      <span>
        <a :href="href" class="text block" id="item_title">{{name}}</a>
        <div style="line-height: 1.9;">
          <div class="text" style="color: #909399;">
            <div style="text-align: left">
              <i class="el-icon-time"></i>场次：{{time}}
            </div>
            <div class="text">
              <i class="el-icon-location-information"></i>地点：{{place}}
            </div>
          </div>
          <div style="float: right;text-align: right" >
            <div>
              {{status}}
              <el-divider direction="vertical" v-if="not_comment"></el-divider>
              <el-link @click="dialogVisible=true" type="primary" class="text" v-if="not_comment">去评价</el-link>
              <el-dialog
                  title="评价"
                  :visible.sync="dialogVisible"
                  width="30%"
                  :before-close="handleClose">
                  <div>评分:<el-rate
                      v-model="rating"
                      colors="colors"></el-rate>
                  </div>
                  <el-input
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容"
                      v-model="textarea">
                  </el-input>

                  <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="dialogVisible = false">提交</el-button>
              </span>
            </el-dialog>
            </div>
            <div>{{'×'+item_num+'  '+'￥'+price}}</div>
          </div>
        </div>
      </span>
    </div>
    <!--下面为详情-->
    <div>
      <el-collapse class="block">
        <el-collapse-item>
          <template slot="title" >
            <span style="float: right;font-size: 16px">订单详情</span>
          </template>
          <!--这里偷了懒，建议用表格-->
          <div class="text">订单时间:</div>
          <div class="text">观看人:</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </el-card>
</template>

<script>

export default {
  name: "orderItem",
  data(){
    return{
      dialogVisible: false,
      rating:0,
      textarea:''
    }
  },
  props:{//更改props请使用智能更改
    type:String,
    id:Number,
    name:String,
    photo_src:String,//图片超链接，base64的话请更改el-image的:src为其他值
    time:Date,
    place:String,
    price:Number,
    rate:Number,
    item_num:Number
  },
  computed:{
    not_comment:function () {
      return this.rate===null
    },
    href:function (){//商品信息的超链接
      return ""
    }
  },
  methods:{
    handleClose:function () {
      //提交评论，同时显示加载中
      //提交完成反馈
    }
  }
}

</script>

<style scoped>
#item_title{
  display: block;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: black;
  margin-bottom: 12px;
}

.body{/*更改图片大小请一并更改.body的行高*/
  height: 170px;
}

.text {
  font-size: 15px;
  text-align: left;
}

.block{
  display: block;
}

.inline{
  display: inline;

}

.clearfix{
  color: #909399;
  object-fit: fill;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

#box-card {

}
/*更改图片大小请一并更改.body的行高*/
.photo{
  float: left;
  display: inline;
  height: 148px;
  width: 111px;
  margin-right: 15px;
}

</style>