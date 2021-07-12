<template>
  <div id="allShows">
    <el-carousel height="250px" id="carousel">
      <el-carousel-item v-for="show in shows" :key="show">
        <el-image :src="'data:image/png;base64,'+show.image"></el-image>
      </el-carousel-item>
    </el-carousel>
    <el-divider></el-divider>

  </div>

</template>

<script>
import axios from 'axios'
export default
{
  data()
  {
    return{
      shows:[],
      hasShow:false
    }
  },
  created:function()
  {
    this.getAllShows()
  },
  methods:
  {
    async getAllShows()
    {
      const url = '/GeneralShows'
      await axios.get(url).then(
        (response) =>
        {
          if(response.status === 200)
          {
            this.shows = response.data.value
          }
        }
      ).catch(
        (err) =>
        {
          console.log(err)
        }
      )
      if(this.shows.length !== 0)
      {
        this.hasShow = true
      }
    }
  },
}
</script>

<style>
#carousel{
  margin: 20px 0 20px 0;
}

#allShows{
  padding: 0 30px 0 30px;
}
</style>