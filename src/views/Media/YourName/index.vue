<script>
import demon from '@/assets/demon.jpg'
import cover from './assets/yourNameCover.jpg'
import stars from './assets/your_name_stars.jpg'
import trailer from './assets/YourName-Trailer.mp4'
import Footer from '@/components/Footer.vue'
import { NCarousel } from 'naive-ui'

export default {
  name: 'YourName',
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
      stars,
      trailer,
      shareLink: 'calebwelch1.github.io/c-collection/your-name',
      amazonLink: 'https://www.amazon.com/gp/video/detail/B078SNJK8G/ref=atv_dp_share_cu_r',
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
            <p style="font-size: 18px; color: #cdcdcb; margin-bottom: 1rem;"> Film Info </p>
            <p style="font-size: 16px; color: #8e8e8e;"> Japanese </p>
            <p style="font-size: 16px; color: #8e8e8e;"> Romance/Fantasy </p>
            <p style="font-size: 16px; color: #8e8e8e;"> Released 2016 </p>
            <p style="font-size: 16px; color: #8e8e8e;"> 107 minutes </p>
          </div>
          <div id="contain-text" style="padding-left: 4rem; padding-right: 4rem;">
            <p class="author gold"> Makoto Shinkai </p>
            <h1 class="media-title"> Your Name </h1>
              <p class="content-text" style="display:block">
              --- <strong>Your Name</strong> is one of those movies that hits you right in the gut and pulls at your heartstrings long after
              you've finished watching it. With titanic titles like <a target="_blank" href="https://en.wikipedia.org/wiki/Spirited_Away"> Spirited Away </a>,
              <a target="_blank" href="https://en.wikipedia.org/wiki/Perfect_Blue"> Perfect Blue </a>, and
              <a target="_blank" href="https://en.wikipedia.org/wiki/Ghost_in_the_Shell_(1995_film)"> Ghost in the Shell </a> in the japanese film animation industry
              why did I choose to add <strong>Your Name</strong>? For the simple reason that it makes me tear up. Every. Single. Time. It begins as a cliche slice of life/coming
              of age story about a highschool boy in Tokyo who wakes up one morning and has swapped bodies with a school girl from the countryside.  It quickly folows up
              as a cosmic journey through time and space, and one that asks us who we are and how our relationships shape our identity. Where H.P Lovecraft's stories use 
              the great expanse of the cosmos and forces beyond our comprehension to make us feel small and afraid, Shinkai's <strong>Your Name</strong> asks us,
              "Even if we're small in the face of the Universe. Can love, courage, and our relationships with others still make our lives meaningful?" Seriously I 
              started watching the movie twice, got bored and turned it off before finally powering through on the third try and I am so glad that I did. With a stellar
              soundtrack from Radwimps that can stand completely on its own, Shinkai's moving story, and beautiful animation it is no wonder <strong>Your Name</strong>
              slots in as the 4th highest grossing movie of all time in Japan and absolutely deserves a viewing (or three).
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
          <img :src="stars" class="c-image"/>
          <img :src="cover" class="c-image"/>
        </n-carousel>
      </div>
      <div class="col-span-12" style="margin-left: 2rem; margin-right: 2rem; height: auto; width: 100;">
        <div class="justify-around flex-wrap content-container" style="padding-top: 6rem;">
          <div class="sub-content flex-col" style="height: 98vh; width: 100%; display: block; margin-top:auto; margin-bottom: auto;">
            <h1 class=""> Creator </h1>
            <div style="border-bottom: 2px solid black; width: 80%; margin-bottom: 3rem;"/>
            <p class="content-text" style="display:block;">
            <strong>Director</strong> ................................. Makoto Shinkai<br>
            </p>
            <h1 class=""> Cast </h1>
            <div style="border-bottom: 2px solid black; width: 80%; margin-bottom: 3rem;"/>
            <p class="content-text" style="display:block;">
            <strong>Taki Tachibana (voice)</strong> ................................. Ryunosuke Kamiki<br>
            <strong>Mitsuha Miyamizu (voice)</strong> ................................. Mone Kamishiraishi<br>
            </p>
            <h1 class=""> Credits </h1>
            <div style="border-bottom: 2px solid black; width: 80%; margin-bottom: 3rem;"/>
            <p class="content-text" style="display:block;">
            <strong>Writer</strong> ................................. Makoto Shinkai<br>
            <strong>Writer English Script</strong> ................................. Clark Cheng<br>
            </p>
          </div>
          <div class="sub-content flex-col" style="height: 98vh; width: 100%; display: block; margin-top:auto; margin-bottom: auto; min-width: 0rem;">
            <h1 style="margin-bottom: 3rem;"> Related Media </h1>
            <div class="flex-wrap related-media-flex" style=";">
              <div class="related-media mx-auto flex-col justify-start">
              <a target="_blank" href="https://imdb.com/title/tt0119698/?fc=1;ft=21;fm=1">
              <img src="@/assets/covers/mononoke.jpg" style="height: 15rem; width: 9rem; background-color: black;" />
              </a>
              <p>Princess Mononoke</p>
              <p class="creator-text">Hayao Miyazaki</p>
              </div>
              <div class="related-media mx-auto flex-col justify-start">
              <a target="_blank" href="https://www.imdb.com/title/tt1677561/?ref_=fn_al_tt_2">
              <img src="@/assets/covers/colorful.jpg" style="height: 15rem; width: 9rem; background-color: black;" />
              </a>
              <p>Colorful</p>
              <p class="creator-text">Creator</p>
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