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
            autoplay="true" loop="true" preload="auto" muted="true" type="video/mp4" poster="@/assets/poster/gradient-poster.jpg"/>
                <div class="absolute flex-col title-position my-auto" style="font-size: 48px;">
                    <h1 class="bebas white font-size-48 mx-auto" style="margin-bottom: 0rem;">The Caleb-Collection</h1>
                    <p class="white font-size-30 mx-auto bebas">What is The Caleb Collection?</p>
                    <p class="white font-size-30 bebas c-text" style="max-width: 60vw;">The Caleb Collection is a selection of Films, Novels, and Art that have been
                    important to me in my development as an individual. It is based off of the 
                    <a target="_blank" href="https://www.criterion.com/" class="white bebas mx-auto font-size-30"> Criterion Collection </a>
                    website and has brought me a great deal of joy to create and maintain. I hope you enjoy this website as much as I do.
                    </p>
                    <button class="title-button" @click="enter">Enter</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.c-text {
     text-align: center;
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
overflow-x: hidden;
overflow-y: hidden;
}

.title-position {
  top: 30%;
  left: 21%;
}

@media screen and (max-width: 650px) {
  .title-position {
  top: 30%;
  left: 15%;
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
overflow-x: hidden;
overflow-y: auto;
}

.c-text {
     text-align: left;
}
}

.font-size-48 {
  font-size: 48px !important;
}

.font-size-30 {
  font-size: 30px !important;
}

.white {
  color: white;
}
.c-image {
  object-fit: cover;
  width:200%;
  height: 200%;
  margin-left:-2vw;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}


.my-auto {
  margin-top: auto;
  margin-bottom: auto;
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
