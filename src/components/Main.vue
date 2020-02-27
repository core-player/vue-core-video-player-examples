<template>
  <b-container class="bv-example-row main">
    <b-row>
      <b-col cols="8">
        <div id="vue-core-video-player-box" class="example-player">
          <vue-core-video-player src="https://media.vued.vanthink.cn/sparkle_your_name_am720p.mp4"></vue-core-video-player>
        </div>
        <div class="movie-detail">
          <h1 class="title">{{currentMovie.title}}</h1>
          <div class="date">{{currentMovie.author}} - {{currentMovie.date}}</div>
          <div class="desc">{{currentMovie.desc}} </div>
          <div class="btn-wrap">
            <b-button variant="outline-primary">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 511.999 511.999" fill="#ff6060"><path d="M443.86 196.919L141.46 10.514C119.582-2.955 93.131-3.515 70.702 9.016c-22.429 12.529-35.819 35.35-35.819 61.041v371.112c0 38.846 31.3 70.619 69.77 70.829l.313.001c12.022-.001 24.55-3.769 36.251-10.909 9.413-5.743 12.388-18.029 6.645-27.441-5.743-9.414-18.031-12.388-27.441-6.645-5.473 3.338-10.818 5.065-15.553 5.064-14.515-.079-30.056-12.513-30.056-30.898V70.058c0-11.021 5.744-20.808 15.364-26.183 9.621-5.375 20.966-5.135 30.339.636l302.401 186.405c9.089 5.596 14.29 14.927 14.268 25.601-.022 10.673-5.261 19.983-14.4 25.56L204.147 415.945c-9.404 5.758-12.36 18.049-6.602 27.452 5.757 9.404 18.048 12.36 27.452 6.602l218.611-133.852c20.931-12.769 33.457-35.029 33.507-59.55.05-24.518-12.386-46.83-33.255-59.678z"/></svg>
              View Detail
            </b-button>
          </div>
        </div>
        <div class="recommend-list">
          <RecommendedItem v-for="movie in recommendList" :key="movie.cover" :item="movie"></RecommendedItem>
        </div>
        <div class="thanks">
          ❤ Video Source via Makoto Shinkai and Stephen Chow's Movies
        </div>
      </b-col>
      <b-col cols="4" class="play-list">
        <h2>Play List</h2>
        <MovieItem v-for="movie in movieList" :key="movie.cover" :item="movie"></MovieItem>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import MovieItem from './MovieItem.vue'
import RecommendedItem from './Recommended.vue'
import DATA from '../assets/data'

export default {
  name: 'Main',
  components: {
    MovieItem,
    RecommendedItem
  },

  data() {
    return {
      title: '',
      movieList: DATA,
      recommendList: [DATA[2], DATA[4], DATA[1], DATA[0]],
      currentMovie: DATA[0]
    }
  }
}
</script>

<style>
  .example-player {
    position: relative;
    height: 360px;
    background-color: #000;
  }
  .movie-detail{
    padding-top: 20px;
    color: rgba(0,0,0, .65);
  }
  .movie-detail h1{
    font-size: 20px;
    color: #000;
  }
  .movie-detail .date {
    font-size: 14px;
  }
  .movie-detail .desc {
    font-size: 13px;
    padding: 10px 20px 10px 0;
  }
  .movie-detail .btn-wrap {
    padding-right: 20px;
    text-align: right;
  }
  .play-list h2 {
    font-size: 18px;
    color: rgba(0,0,0, .85);
    padding-bottom: 10px;
  }
  .recommend-list {
    margin-top: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-top: 1px solid #ddd;
  }
  .thanks {
    padding: 20px 0 40px;
    color: rgba(0, 0, 0, .25);
    font-size: 13px;
    text-align: center;
  }
  .recommend-list:after{
    content: '';
    display: block;
    clear: both;
  }
</style>

