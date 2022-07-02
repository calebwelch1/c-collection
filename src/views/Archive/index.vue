<script>
import Footer from '@/components/Footer.vue'
import archiveArr from './archive.js'

export default {
  name: 'Archive',
  components: {
      Footer,
  },
  data() {
    return {
      shareLink: 'calebwelch1.github.io/c-collection/',
      amazonLink: 'calebwelch1.github.io',
      archiveArr,
    };
  },
  methods: {
    routeMedia(route){
      this.$router.push(route);

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
      <div class="col-span-12 flex-col my-auto justify-between" style="height: 100vh; width: 100%; background: #fff; margin-top: 5rem;">
        <div v-for="media in archiveArr" :key="media" class="mx-auto relative" :style="`width: 50vw; height: 8rem; background: url(${media.src}); margin-bottom: 4rem;`">
            <div @click="routeMedia(media.route)" class="absolute title-appear" :style="`width: 50vw; height: 8rem; cursor:pointer; background:black;`">
                <p style="color: white; font-size: 4rem; text-align: center;"> {{media.title}} </p>
            </div>
            <p class="absolute" style="bottom: -30%; left: 47%;">{{media.title}}</p>
        </div>
      </div>
      <Footer />
    </div>
  </main>
</template>
<style lang="scss">

.title-appear {
    opacity: 0%;
}

.title-appear:hover{
  opacity: 90%;
  transition: 0.4s;
}

.relative {
    position: relative;
}

.absolute {
    position: absolute;
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
</style>