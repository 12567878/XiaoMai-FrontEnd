<template>
  <el-card shadow="hover">
    <div id="body">
      <span id="photo">
        <a :href="href">
          <el-image :src="'data:image/png;base64,'+image"  fit="fill" >
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
             </div>
          </el-image>
        </a>

    </span>
      <span>
        <a :href="href"  id="title">{{name}}</a>
        <div style="line-height: 1.9;">
            <div class="text" style="color: #909399;margin-bottom: 50px"><!--改图片高度这个也要改-->
              <div style="text-align: left">
                <i class="el-icon-star-off icon"></i>平均评分:{{avgRate}}
              </div>
              <div class="text">
                <i class="el-icon-collection-tag icon"></i>标签:
                <span v-for="label in labels" :key="label">{{' '+label+' '}}</span>
              </div>
            </div>
        </div>
      </span>
    </div>

  </el-card>
</template>

<script>
export default {
  name: "searchItem",
  props:{
    showId: Number,
    name: String,
    image: String,
    labels:Array,
    avgRate: Number,
  },
  computed:{
    href:function () {
      return "/ParticularShow/"+this.showId //得改
    }
  }
}
</script>

<style scoped>
#photo{
  height: 168px;
  width: 126px;
  margin-right: 12px;
  float: left;
  margin-bottom: 20px;
}

#title{
  display: block;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: black;
  margin-bottom: 12px;
  text-align: left;
}

#price{
  color: #F56C6C;
  font-size: 18px;
  font-weight: bold;
  margin-right: 30px;
  float: left;
}

.text{
  font-size: 15px;
  line-height: 1.9;
  text-align: left;
}

#body{

}

.icon{
  color: #3096ff;
}
</style>