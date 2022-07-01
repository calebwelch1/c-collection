<script>
import gradientVid from '@/assets/video/gradient_anim.mp4'
export default {
  name: 'Opener',
  data() {
    return {
      gradientVid,
    };
  },
  methods: {
    enter(){
      this.$router.push('home');
    },
  },
}
</script>

<template>
    <div class="main">
        <div class="relative" style="height: 100%; width: 100%;">
            <video :src="gradientVid" class="c-image"
            autoplay="true" loop="true" preload="auto" muted="true" type="video/mp4"/>
                <div class="absolute flex-col title-position" style="font-size: 48px;">
                    <h1 class="bebas white font-size-48 mx-auto" style="margin-bottom: 0rem;">Caleb-Collection</h1>
                    <p class="white font-size-20 mx-auto"></p>
                    <button class="title-button" @click="enter">Enter</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
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

.title-position {
  top: 30%;
  left: 44%;
}

@media screen and (max-width: 650px) {
  .title-position {
  top: 30%;
  left: 25%;
}
}

.font-size-48 {
  font-size: 48px !important;
}

.white {
  color: white;
}
.c-image {
  object-fit: cover;
  width:100%;
  height: 100%;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
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
</style>
