<script>
import demon from '@/assets/demon.jpg'
export default {
  name: 'BloodMeridian',
  props:{
    mainImg: {
      type: String,
      required:false,
      default: demon,
    },
  },
}
</script>

<template>
  <main>
    <div class="main">
      <div class="col-span-12" style="margin-left: 2rem; margin-right: 2rem;">
        <div class="justify-around flex-wrap content-container" style="">
        <div class="flex-col" style="height: 20rem; width: 100%; border: 1px solid blue; display: block; margin-top:auto; margin-bottom: auto;">
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
        <div class="flex-col" style="height: 20rem; width: 100%; border: 1px solid red; display: block;">
        <div class="flex-row">
            <img
            :src="mainImg"
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
    </div>
  </main>
</template>
<style lang="scss">
.content-text {
  margin-bottom: auto;
  margin-top:auto;
}

.content-container {
  display:flex;
  flex-direction:row;
  gap:5rem;
}

@media screen and (max-width: 650px) {
  .content-container {
  display:flex;
  flex-direction:column;
  gap:5rem;
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
</style>