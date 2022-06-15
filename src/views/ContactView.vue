<script>
export default {
  name: 'ContactView',
}
</script>

<template>
  <main>
    <div class="container hide-scroll">
    <BlogHeader title="Contact" description="Contact Me!" :img="Bridge"/>
    <div class="content">
            <div style="color:black;margin-top:10rem;margin-bottom:5rem;"> Email me: caleb.welch33@gmail.com </div>
            <a href="https://www.linkedin.com/in/caleb-welch-502851121/" target="_blank" class="h-3 w-3"
            style="border-radius: 9999px; margin: 1rem;">
              <img src="@/assets/icons/linkedin.svg" style="margin-top:0.4rem; margin: 1rem; height: 2rem; width: 2rem;"/>
            </a>
    </div>
  </div>
  </main>
</template>
<style lang="scss">
.content {
  margin-left: 15vw;
  padding-left: 6vw;
  margin-bottom: 5vh;
  padding-right: auto;
  overflow: hidden;
}
</style>