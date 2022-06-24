<script>
import demon from '@/assets/demon.jpg'
import red from './assets/red.jpg'
import cormac from './assets/cormac.jpeg'
import cover from './assets/cover.jpg'
import Footer from '@/components/Footer.vue'
import { NCarousel } from 'naive-ui'

export default {
  name: 'BloodMeridian',
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
      cormac,
      red,
      cover,
    };
  },
}
</script>

<template>
  <main>
    <div class="main">
      <div class="col-span-12" style="height: 20rem; width: 100%; background: #252525; margin-top: 0rem;">
      <p style="visibility: hidden; margin-top: 5rem;"> invisible </p>
      </div>
      <div class="col-span-12" style="">
        <div class="justify-around flex-wrap content-container" style="">
        <div class="flex-col left" style="height: 98vh; width: 100%; display: block; margin-top:auto; margin-bottom: auto;">
          <p class="content-text" style="display:block">
          Cantopop superstars Anita Mui and Leslie Cheung display the
          androgynous magnetism that made them icons as doomed lovers in
          this emblematic film of Hong Kong’s Second New Wave, directed
          by pioneering queer melodrama master Stanley Kwan. Rouge bridges
          past and present in its tragic romance between a humble courtesan
          and the wayward scion of a wealthy family, who embrace death by
          suicide pact amid the opulent teahouses of 1930s Hong Kong.
          Fifty years later, she returns to the city-state to find him,
          drawing a young contemporary couple (Alex Man and Emily Chu) into
          her quest to rekindle a passion that may be as illusory as time itself.
          With its lush mise-en-scène and transcendently melancholy mood, this
          sensuous ghost story is an exquisite, enduringly resonant elegy for
          both lost love and vanishing history.
          </p>
        </div>
        <div class="flex-col right" style="height: 98vh; width: 100%; display: block;">
        <div class="flex-row" style="margin:auto; margin-right: 0rem;">
            <img
            :src="mainImg"
            style="display:block; margin:auto;"
            class="art"
            />
        </div>
        <div class="info-box flex-row">
        <p> Viewing Options </p>
        <button>View Media </button>
        <button>View Media </button>
        </div>
        </div>
        </div>
      </div>
      <div id="scene-carousel" class="col-span-12 flex-col" style="margin-left: 0rem;">
        <n-carousel
        direction="horizontal"
        dot-placement="bottom"
        effect="slide"
        mousewheel
        style="width: 90%; height: 95%; display: block; margin-right: auto; margin-left: auto; margin-top: auto;"
        show-arrow
        >
      <img :src="red" class="c-image"/>
      <img :src="cormac" class="c-image"/>
      <img :src="cover" class="c-image"/>
        </n-carousel>
      </div>
      <div class="col-span-12" style="margin-left: 2rem; margin-right: 2rem;">
        <div class="justify-around flex-wrap content-container" style="margin-top: 10vh;">
          <div class="sub-content flex-col" style="height: 98vh; width: 100%; display: block; margin-top:auto; margin-bottom: auto;">
        <h1 class=""> Creator </h1>
         <div style="border-bottom: 2px solid black; width: 80%; margin-bottom: 3rem;"/>
          <p class="content-text" style="display:block; white-space: nowrap;">
          <strong>Author</strong> ................................. Cormac McCarthy
          </p>
        </div>
          <div class="sub-content flex-col" style="height: 98vh; width: 75%; display: block; margin-top:auto; margin-bottom: auto;">
          <h1> Related Media </h1>
            <div class="justify-around flex-wrap" style="display:flex;flexDirection:column;gap:5rem;">
              <div class="related-media mx-auto flex-col justify-start">
              <div style="height: 18rem; width: 12rem; background-color: black;" />
              <p>Title</p>
              <p class="creator-text">Creator</p>
              </div>
              <div class="related-media mx-auto flex-col justify-start">
              <div style="height: 18rem; width: 12rem; background-color: black;" />
              <p>Title</p>
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
<style lang="scss">
.pl-12{
  padding-left: 12rem;
}
#scene-carousel {
  width: 100%;
  background-color:#252525;
  height: 90vh;
}
.right {
  background-color:#d7d7d7;
  width: 25rem;
}

.left {
  // background-color:#f6f6f6;
  width: 25rem;
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
@media screen and (max-width: 650px) {
  .content-container {
  display:flex;
  flex-direction:column;
  gap:5rem;
  }

  .sub-content {
    padding-left: 0rem;
  }
}

.art {
  height: 35rem;
  width: 25rem;
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
</style>