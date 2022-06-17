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
    routeComponentView(){
      this.$router.push('components');
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
  <div :style="`backround:url(${west}); height: 100%; width: 100%;`">
  <img :src="west" />
  </div>
  <div :style="`backround:url(${swan})`" class="c-image">
  <button> hi </button>
  </div>
  <div :style="`backround:url(${future})`" class="c-image">
  </div>
  <div :style="`backround:url(${mask})`" class="c-image">
  </div>
  </n-carousel>
</div>
</template>

<style lang="scss">
.c-image {
  object-fit: cover;
  width:100%;
  height: 100%;
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