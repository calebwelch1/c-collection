<script>
import { NCarousel } from 'naive-ui'
// images
import west from '@/assets/background/west.jpg'
import mask from '@/assets/background/mask.jpg'
import future from '@/assets/background/future.jpg'
import swan from '@/assets/background/swan.jpg'
import swanVid from '@/assets/video/black_swan_trim.mp4'

export default {
  name: 'TheWelcome',
    components: {
      NCarousel,
    },
  props: {
    includeButton: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      west,
      mask,
      future,
      swan,
      swanVid,
    };
  },
  methods: {
    routeBloodMeridian(){
      this.$router.push('blood-meridian');
    },
  },
}
</script>

<template>
<div class="main">
<!--<h1 class="text-white title">
C-Collection
</h1>
-->
  <n-carousel
  direction="vertical"
  dot-placement="left"
  mousewheel
  style="width: 100%; height: 100%"
  >
    <div class="relative home-background-video-container">
      <video :src="swanVid"
      autoplay="true" loop="true" preload="auto" muted="true" width="auto" height="auto" class="home-background-video"/>
    </div>
    <div class="relative c-image">
      <img :src="west" class="c-image"/>
      <div class="absolute flex-col title-position" style="font-size: 48px;">
      <h1 class="bebas white font-size-48 mx-auto" style="margin-bottom: 0rem;">Blood Meridian</h1>
      <p class="white font-size-20"> An unrelenting and visceral journey through America's old west. </p>
      <button class="title-button" @click="routeBloodMeridian">BLOOD MERIDIAN</button>
      </div>
    </div>
    <div class="relative c-image">
      <img :src="future" class="c-image"/>
    </div>
    <div class="relative c-image">
      <img :src="mask" class="c-image"/>
    </div>
  </n-carousel>
</div>
</template>

<style lang="scss">
.is-home-background-video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.is-home-background-video-container video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.title-button {
  display: block;
    width: 14rem;
    color: #252525;
    font-size: 20px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    line-height: 1.25;
    letter-spacing: .6px;
    text-align: center;
    padding: 22px 10px;
    background: #fff;
    transition: all .5s cubic-bezier(.23,1,.32,1);
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;

    &:hover {
      background: #252525;
      color: #fff;
    }
}
.title-position {
  top: 30%;
  left: 40%;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.font-size-48 {
  font-size: 48px !important;
}

.font-size-20 {
  font-size: 20px !important;
}
.white {
  color: white;
}
.c-image {
  object-fit: cover;
  width:100%;
  height: 100%;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.title {
  font-size: 70px;
  font-weight: 400;
  margin-top: 25vh;
  margin-bottom: 2vh;
  text-align: center;
}
.support-text {
  font-size: 25px;
  font-weight: 200;
  margin-top: 5vh;
  margin-bottom: 2vh;
  text-align: center;
  margin-left: 4rem;
  margin-right: 4rem;
}

.start-button {
  font-size: 25px;
  font-weight: 200;
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-left: auto;
  margin-right: auto;
  width: 10rem;
}

.main{
display: grid;
grid-template-columns: repeat(12, minmax(0, 1fr));
height: 100vh;
width:100vw;
margin:0;
justify-items: center;
display: flex;
flex-direction: column;
}

</style>