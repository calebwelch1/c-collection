<script>
import { NCarousel } from 'naive-ui'
// images
import west from '@/assets/background/west.jpg'
import mask from '@/assets/background/mask.jpg'
import future from '@/assets/background/future.jpg'
import swan from '@/assets/background/swan.jpg'
import swanVid from '@/assets/video/black_swan_cut.mp4'
import yourVid from '@/assets/video/your_name_trim.mp4'
import gogginsVid from '@/assets/video/goggins_trim.mp4'
import rockwellVid from '@/assets/video/rockwell_trim.mp4'

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
      yourVid,
      gogginsVid,
      rockwellVid,
    };
  },
  methods: {
    routeBloodMeridian(){
      this.$router.push('blood-meridian');
    },
    routeYourName(){
      this.$router.push('your-name');
    },
    routeBlackSwan(){
      this.$router.push('black-swan');
    },
    routeCantHurtMe(){
      this.$router.push('cant-hurt-me');
    },
    routeRockwell(){
      this.$router.push('rockwell');
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
    <div class="relative" style="height: 100%; width: 100%;">
      <video :src="yourVid" class="c-image"
      autoplay="true" loop="true" preload muted="true" type="video/mp4" poster="@/assets/covers/your_name_stars.jpg"/>
      <div class="absolute flex-col title-position">
        <h1 class="bebas white mx-auto title-text" style="margin-bottom: 0rem;">Your Name</h1>
        <p class="white mx-auto description-text">Directed by Makoto Shinkai</p>
        <button class="title-button" @click="routeYourName">Your Name</button>
      </div>
    </div>
    <div class="relative" style="height: 100%; width: 100%;">
      <video :src="gogginsVid" class="c-image"
      autoplay="true" loop="true" preload muted="true" type="video/mp4" poster="@/assets/poster/goggins-poster.jpg"/>
      <div class="absolute flex-col title-position">
        <h1 class="bebas white mx-auto title-text" style="margin-bottom: 0rem;">Can't Hurt Me</h1>
        <p class="white mx-auto description-text">Written by David Goggins</p>
        <button class="title-button" @click="routeCantHurtMe">Can't Hurt Me</button>
      </div>
    </div>
    <div class="relative" style="height: 100%; width: 100%;">
      <img :src="west" class="c-image"/>
      <div class="absolute flex-col still-title-position">
      <h1 class="bebas white mx-auto title-text" style="margin-bottom: 0rem;">Blood Meridian</h1>
      <p class="white mx-auto description-text"> Written by Cormac McCarthy </p>
      <button class="title-button" @click="routeBloodMeridian">BLOOD MERIDIAN</button>
      </div>
    </div>
    <div class="relative" style="height: 100%; width: 100%;">
      <video :src="swanVid" class="c-image"
      autoplay="true" loop="true" preload muted="true" type="video/mp4" poster="@/assets/poster/swan-poster.jpg"/>
      <div class="absolute flex-col title-position">
        <h1 class="bebas white mx-auto title-text" style="margin-bottom: 0rem;">Black Swan</h1>
        <p class="white mx-auto description-text">Directed by Darren Aronofsky</p>
        <button class="title-button" @click="routeBlackSwan">Black Swan</button>
      </div>
    </div>
        <div class="relative" style="height: 100%; width: 100%;">
      <video :src="rockwellVid" class="c-image"
      autoplay="true" loop="true" preload muted="true" type="video/mp4" poster="@/assets/poster/golden_rule.jpg"/>
      <div class="absolute flex-col title-position-long">
        <h1 class="bebas white mx-auto title-text" style="margin-bottom: 0rem; text-align:center;">My Adventure's <br>as an Illustrator</h1>
        <p class="white mx-auto description-text">Norman Rockwell</p>
        <button class="title-button" @click="routeRockwell">My Adventure's as an Illustrator</button>
      </div>
    </div>
    <!--<div class="relative c-image">
      <img :src="future" class="c-image"/>
    </div> -->
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
  top: 25%;
  left: 42%;
}

.title-position-long {
  top: 15%;
  left: 38%;
}

.title-text {
  font-size: 5rem;
}

.description-text {
  font-size: 2rem;
}

.still-title-position {
  top: 25%;
  left: 39%;
}

@media screen and (max-width: 650px) {
  .title-position {
  top: 30%;
  left: 25%;
}

.title-position-long {
  top: 15%;
  left: 10%;
}

.still-title-position {
  top: 30%;
  left: 22%;
}

.title-text {
  font-size: 3.5rem;
}

.description-text {
  font-size: 1.5rem;
}
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