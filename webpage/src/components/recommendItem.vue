<template>
  <router-link  to=""><!--不知道怎么加超链接-->
    <el-card shadow="hover">
      <el-image :src="'data:image/png;base64,'+image"  fit="fill" id="photo" >
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
      <div id="description">
        <div id="title">{{name}}</div>
        <div>
          <i class="el-icon-star-off icon"></i>平均评分:{{avgRate}}
        </div>
        <div class="text">
          <i class="el-icon-collection-tag icon"></i>标签:
          <span v-for="label in labels" :key="label">{{' '+label+' '}}</span>
        </div>
      </div>
    </el-card>
  </router-link>
  
</template>

<script>
export default {
  name: "recommendItem",
  props:{
    showId: Number,
    name: String,
    image: String,
    labels:Array,
    avgRate: Number,
  }
}
</script>

<style scoped>
#photo{
  display: block;
  height: 80px;
  width: 60px;
}

#description{
  color: #909399;
  line-height: 1.9;
  text-align: left;
  font-size: 15px;
}

.icon{
  color: #3096ff;
}

#title{
  display: block;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  color: black;
  margin-bottom: 12px;
  text-align: left;
}
</style>