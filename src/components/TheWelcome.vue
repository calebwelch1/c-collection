<script>
import { NCarousel } from 'naive-ui'
// images
import west from '@/assets/background/west.jpg'
import mask from '@/assets/background/mask.jpg'
import future from '@/assets/background/future.jpg'
import swan from '@/assets/background/swan.jpg'

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
    <div class="relative c-image">
      <img :src="west" class="c-image"/>
      <div class="absolute" style="top: 20%; left: 28%; font-size: 48px;">
      <h1 class="bebas white">Blood Meridian</h1>
      <p class="white"> An unrelenting and visceral journey through America's old west. </p>
      <button @click="routeBloodMeridian">BLOOD MERIDIAN</button>
      </div>
    </div>
    <div class="relative c-image">
      <img :src="future" class="c-image"/>
      <div class="absolute" style="top: 30%; left: 48%; font-size: 48px;">
      <h1 class="bebas white">Hey There :!!!</h1>
      </div>
    </div>
    <div class="relative c-image">
      <img :src="mask" class="c-image"/>
      <div class="absolute" style="top: 30%; left: 48%; font-size: 48px;">
      <h1 class="bebas white">Hey There :!!!</h1>
      </div>
    </div>
    <div class="relative c-image">
      <img :src="swan" class="c-image"/>
      <div class="absolute" style="top: 30%; left: 48%; font-size: 48px;">
      <h1 class="bebas white">Hey There :!!!</h1>
      </div>
    </div>
  </n-carousel>
</div>
</template>

<style lang="scss">
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
background: lightslategrey;
display: flex;
flex-direction: column;
}

</style>