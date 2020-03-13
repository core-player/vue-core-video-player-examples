<template>
  <div class="movie-recommended" @click="changeMovie">
    <div class="cover">
      <img :src="item.cover2" alt="cover" />
      
      <div class="date">{{item.date}}</div>
    </div>
    <div class="detail">
      <div class="title">{{item.title}}</div>
      <div class="author">{{item.author}}</div>
      <div class="duration">Time: {{item.duration}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  name: 'Recommended',
  methods: {
    changeMovie () {
      if (location.search) {
        location.href = location.href.replace(/\?vid=([a-z]+)/, '?vid=' + this.item.id)
      } else {
        location.href = location.href + '?vid=' + this.item.id
      }
    }
  },
}
</script>

<style>
  .movie-recommended {
    float: left;
    cursor: pointer;
    position: relative;
    width: 30%;
    margin-right: 3%;
    margin-top: 20px;
  }
  .movie-recommended .cover {
    position: relative;
    overflow: hidden;
    background: #000;
  }
  .movie-recommended:hover .cover img {
    opacity: .7;
    transform: scale(1.25, 1.25);

  }
  .movie-recommended .cover img {
    width: 100%;
    transition: transform ease .25s;
  }
  .movie-recommended .cover .duration {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 3px 6px;
    line-height: 1.2em;
    background-color: rgba(0,0,0, .65);
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
  }
  .movie-recommended .cover .date {
    position: absolute;
    right: 5px;
    top: 5px;
    display: inline-block;
    padding: 3px 6px;
    line-height: 1em;
    background-color: #31C2F2;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
  }
  .movie-recommended .detail {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    font-size: 12px;
    color: rgba(255,255,255, .85);
  }
  .movie-recommended .detail div{
    position: relative;
  }
  .movie-recommended .detail::before{
    content: '';
    display: block;
    position: absolute;
    top: -15px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-image: linear-gradient(to top, rgba(0,0,0, .95), rgba(0,0,0, 0));
  }
  
  .movie-recommended .detail .title {
    color: #fff;
    font-size: 16px;
  }
  .movie-recommended .detail .author{
    font-size: 13px;
    line-height: 1.5em;
  }
  
  .movie-recommended .detail .data.hot {
    background-color: #ff6060;
  }

</style>

