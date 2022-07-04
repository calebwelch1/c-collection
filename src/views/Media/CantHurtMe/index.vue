<script>
import demon from '@/assets/demon.jpg'
import cover from '@/assets/covers/cant-hurt-me-cover.jpg'
import trailer from './assets/goggins_inspo.mp4'
import gogginsBeforeAfter from './assets/goggins-before-after.jpg'
import Footer from '@/components/Footer.vue'
import { NCarousel } from 'naive-ui'

export default {
  name: 'CantHurtMe',
  props:{
    mainImg: {
      type: String,
      required:false,
      default: demon,
    },
  },
  components: {
      NCarousel,
      Footer,
  },
  data() {
    return {
      cover,
      gogginsBeforeAfter,
      trailer,
      shareLink: 'calebwelch1.github.io/c-collection/cant-hurt-me',
      amazonLink: 'https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512287',
    };
  },
  methods: {
    copyText() {
    navigator.clipboard.writeText(this.shareLink);
    },
  },
}
</script>

<template>
  <main>
    <div class="main">
      <div class="col-span-12" style="height: 6rem; width: 100%; background: #252525; margin-top: 0rem;">
      <p style="visibility: hidden;"> invisible </p>
      </div>
      <div id="top" class="col-span-12 my-auto flex-col" style="display:block;">
        <div class="grid-12" style="">
        <div class="flex-col left" style="height: auto; width: 100%; display: block; margin-top:auto; margin-bottom: auto; padding-left: 2rem; padding-right: 2rem; padding-top: 0rem;">
          <div class="grid-12" style="padding-left: 2rem; padding-right: 2rem;">
          <div id="contain-share">
            <p> Share </p>
            <img @click="copyText" class="h-2 w-2" src="@/assets/icons/link.png" style="margin-top:0.4rem; margin: 1rem; cursor: pointer;" alt="images made by https://www.flaticon.com - Creaticca Creative Agency"/>
            <p style="font-size: 18px; color: #cdcdcb; margin-bottom: 1rem;"> Book Info </p>
            <p style="font-size: 16px; color: #8e8e8e;"> American </p>
            <p style="font-size: 16px; color: #8e8e8e;"> Motivational Selt-Help </p>
            <p style="font-size: 16px; color: #8e8e8e;"> Published 2018 </p>
            <p style="font-size: 16px; color: #8e8e8e;"> 366 Pages </p>
          </div>
          <div id="contain-text" style="padding-left: 4rem; padding-right: 4rem;">
            <p class="author gold"> David Goggins </p>
            <h1 class="media-title"> Can't Hurt Me </h1>
              <p class="content-text" style="display:block">
              --- There is no shortage of things we can't choose in life. Our biology, our parents, our place of birth, even our aptitudes to excel or lag behind
              others are largely decided long before we are even conscious of them. As children we are often traumatized by the things we can't control, people
              can treat us horribly, environment can deprive us, experiences can scar, and these traumas follow and haunt us into adulthood.
              <strong>Can't Hurt Me</strong> is the story of a man who used his trauma to become one of the most inspirational figures in America. David Goggins' story
              is incredible and it
              reminds us that despite the fact we have no choice in many things, we always have the choice to leverage our past to become a better version of ourself.
              Instead of wallowing in victomhood we can use the experiences that burden us as fuel to overcome and become someone who can inspire and help uplift others
              who are mired in their own less than ideal circumstances. This book helped me through one of the toughest times in my life and now I still return to this
              work to remind myself of what I'm capable of. Despite seemingly insurmountable odds, the human will can prevail.
              </p>
          </div>
          <div class="col-span-1" />
          </div>
        </div>
        <div class="flex-col right" style="height: auto; width: 100%; display: block margin-top: auto; margin-bottom: auto; padding-top: 4rem; padding-bottom: 2rem;">
              <img
              :src="cover"
              style="display:block; margin-top:2rem; margin-bottom: 2rem;"
              class="art mx-auto"
              />
          <div class="info-box flex-col mx-auto">
          <p class="mx-auto"> Viewing Options </p>
          <a :href="amazonLink" target="_blank"><button class="view-button">Amazon</button></a>
          </div>
        </div>
        </div>
      </div>
      <div id="scene-carousel" class="col-span-12 flex-col my-auto" style="margin-left: 0rem; height: 100vh;">
        <n-carousel
        direction="horizontal"
        dot-placement="bottom"
        effect="slide"
        mousewheel
        style="width: 80%; height: 85%; display: block; margin:auto;"
        show-arrow
        >
          <video :src="trailer" class="c-image" controls preload="auto" type="video/mp4"/>
          <img :src="gogginsBeforeAfter" class="c-image"/>
        </n-carousel>
      </div>
      <div class="col-span-12" style="margin-left: 2rem; margin-right: 2rem; height: auto; width: 100;">
        <div class="justify-around flex-wrap content-container" style="padding-top: 6rem;">
          <div class="sub-content flex-col" style="height: 98vh; width: 100%; display: block; margin-top:auto; margin-bottom: auto;">
            <h1 class=""> Creator </h1>
            <div style="border-bottom: 2px solid black; width: 80%; margin-bottom: 3rem;"/>
            <p class="content-text" style="display:block;">
              <strong>Writer</strong> ................................. David Goggins<br>
            </p>
          </div>
          <div class="sub-content flex-col" style="height: 98vh; width: 100%; display: block; margin-top:auto; margin-bottom: auto; min-width: 0rem;">
            <h1 style="margin-bottom: 3rem;"> Related Media </h1>
            <div class="flex-wrap related-media-flex" style=";">
              <div class="related-media mx-auto flex-col justify-start">
              <a target="_blank" href="https://youtu.be/5tSTk1083VY">
              <img src="./assets/jre1080.jpg" style="height: 12rem; width: 15rem; background-color: black;" />
              </a>
              <p>Joe Rogan Experience Appearance</p>
              <p class="creator-text">Feb 19, 2018</p>
              </div>
              <div class="related-media mx-auto flex-col justify-start">
              <a target="_blank" href="https://youtu.be/BvWB7B8tXK8">
              <img src="./assets/jre1212.jpg" style="height: 12rem; width: 15rem; background-color: black;" />
              </a>
              <p>Joe Rogan Experience Appearance</p>
              <p class="creator-text">Dec 5, 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </main>
</template>
<style lang="scss" scoped>
.content-text a {
  color: black !important;
}

.content-text a:visited {
  color: black !important;
}


.main{
display: grid;
grid-template-columns: repeat(12, minmax(0, 1fr));
height: auto;
width:100vw;
margin:0;
justify-items: center;
display: flex;
flex-direction: column;
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}
.grid-12 {
  display: grid;
grid-template-columns: repeat(12, minmax(0, 1fr));
}
.gold {
  color: #b4841e;
}

.grey {
  color:#252525;
}

.pl-12{
  padding-left: 12rem;
}
#scene-carousel {
  width: 100%;
  background-color:#252525;
  height: 90vh;
}

.media-title {
  font-size: 48px;
  margin-top: 1rem;
}

.author {
  font-size: 20px;
  font-weight: 700;
}
.left {
  // background-color:#f6f6f6;
  grid-column: span 7/span 7;
  width: 25rem;
}

.right {
  background-color:#d7d7d7;
  width: 25rem;
  grid-column: span 5/span 5;

}

.content-text {
  margin-bottom: auto;
  margin-top:auto;
}

.related-media {
  color:black;
  display: block;
  font-size: 12px;
}

.related-media:hover {
    color: #b4841e;
    cursor: pointer;
    display: block;
}

.content-container {
  display:flex;
  flex-direction:row;
}

.creator-text {
  font-style: italic;
  color: #8e8e8e;
}

.sub-content {
  padding-left: 12rem;
}

#contain-share {
    grid-column: span 2/span 2;
}

#contain-text {
    grid-column: span 9/span 9;

}

.related-media-flex {
  display:flex;
  flex-direction:row;
}
@media screen and (max-width: 650px) {
  .content-container {
  display:flex;
  flex-direction:column;
  gap:5rem;
  }

  .sub-content {
    padding-left: 0rem;
  }

  #contain-share {
    grid-column: span 12/span 12;
}

#contain-text {
    grid-column: span 11/span 11;

}

.left {
  // background-color:#f6f6f6;
  grid-column: span 12/span 12;
  width: 25rem;
}

.right {
  background-color:#d7d7d7;
  width: 25rem;
  grid-column: span 12/span 12;

}

.related-media-flex {
  display:flex;
  flex-direction:column;
}
}

.view-button {
  display: block;
    width: 14rem;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    line-height: 1.25;
    letter-spacing: .6px;
    text-align: center;
    padding: 22px 10px;
    background: #b4841e;
    transition: all .5s cubic-bezier(.23,1,.32,1);
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;

    &:hover {
      background: #252525;
      color: #fff;
    }
}

.art {
  height: 35rem;
  width: 26rem;
  margin-left: auto;
  margin-right: auto;
}
.media-art {
  height: 20rem;
  width: 10rem;
}
.content {
  margin-left: 15vw;
  padding-left: 6vw;
  margin-bottom: 5vh;
  padding-right: auto;
  overflow: hidden;
}

.c-image {
  object-fit: cover;
  width:100%;
  height: 95%;
}

.h-2 {
  height: 2rem;
}

.w-2 {
  width: 2rem;
}
</style>