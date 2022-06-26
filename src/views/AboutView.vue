<script>
import skull from '@/assets/background/skull-watercolor.jpg'
import Footer from '@/components/Footer.vue'
import { NCarousel } from 'naive-ui'

export default {
  name: 'About',
  props:{
    mainImg: {
      type: String,
      required:false,
      default: skull,
    },
  },
  components: {
      Footer,
  },
  data() {
    return {
      shareLink: 'calebwelch1.github.io/c-collection/',
      amazonLink: 'calebwelch1.github.io',
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
            <p style="font-size: 18px; color: #cdcdcb; margin-bottom: 1rem;"> Site Info </p>
            <p style="font-size: 16px; color: #8e8e8e;"> American </p>
            <p style="font-size: 16px; color: #8e8e8e;"> Published June 2022 </p>
          </div>
          <div id="contain-text" style="padding-left: 4rem; padding-right: 4rem;">
            <p class="author gold"> Caleb </p>
            <h1 class="media-title"> C-Collection </h1>
              <p class="content-text" style="display:block">
              --- C-Collection is a project I challenged myself to make in just under a week of development time. I seek to 
              simultaneously flex my front-end development skills by mimicking the <a target="_blank" href="https://www.criterion.com/"> Criterion Collection </a> website and
              create a collection of media that has shaped my tastes and perspectives on culture and art. I aim to continue to
              make quality of life updates to this site as well as add additional posts for as long as I see fit.
              </p>
          </div>
          <div class="col-span-1" />
          </div>
        </div>
        <div class="flex-col right" style="height: auto; width: 100%; display: block margin-top: auto; margin-bottom: auto; padding-top: 4rem; padding-bottom: 2rem;">
              <img
              :src="mainImg"
              style="display:block; margin-top:2rem; margin-bottom: 2rem;"
              class="art mx-auto"
              />
          <div class="info-box flex-col mx-auto">
          <p class="mx-auto"> Visit Me </p>
          <a :href="amazonLink" target="_blank"><button class="view-button">My Website</button></a>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  </main>
</template>
<style lang="scss">
a {
  color: black !important;
}

a:visited {
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