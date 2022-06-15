<script>
import { nextTick } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: 'App',
  mounted() {
    // console.log('width:', width, 'type:' type);
    console.log(useBreakpoints());
  },
  methods: {
    routeAtomicCss(){
      this.$router.push('atomic-css');
    },
  },
  data() {
    return {
      hi: true,
    }
  },
}
</script>

<template>
  <RouterView style="width: 100%;"/>
</template>

<style lang="scss">
@import './stylesheets/index.css';
@import url('https://fonts.googleapis.com/css2?family=Akshar:wght@300&display=swap');

* {
  font-family: 'Akshar', 'Avenir', 'Arial', 'sans-serif' !important
}

body{
  margin:0 !important;
  overflow-x: hidden !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: slate-grey;
  background-color: transparent;
  overflow-x: hidden !important;
}

p {
  margin: 0;
  font-size: 25px;
}

@media screen and (max-width: 650px) {
  p {
    margin: 0;
    font-size: 20px;
  }
}
// sass
@for $i from 1 through 12 {
    .grid-col-#{$i} {
      display:grid;
      grid-template-columns: repeat($i, minmax(0, 1fr));
    }
  }
  
@for $i from 1 through 12 {
    .col-span-#{$i} {
        grid-column: span $i / span $i;
    }
}

@for $i from 1 through 50 {
  .gap-#{$i} {
      gap: $i rem;
  }
}

// columns
@for $i from 1 through 12 {
    .grid-col-#{$i} {
      display:grid;
      grid-template-columns: repeat($i, minmax(0, 1fr));
    }
  }
  
@for $i from 1 through 12 {
    .col-span-#{$i} {
        grid-column: span $i / span $i;
    }
}

@for $i from 1 through 50 {
  .gap-#{$i} {
      gap: $i rem;
  }
}
//color
$colors: (
  primary: rgba(33, 36, 143, 1),
  secondary: rgb(24, 121, 93),
  tertiary:rgb(174, 156, 21),
  support: rgb(198, 49, 74),
);

@each $name,
$color in $colors {
  .bg-#{$name} {
    background-color: $color;
  }
}

.content {
  margin-left: 15vw;
  padding-left: 6vw;
  margin-bottom: 5vh;
  padding-right: auto;
  overflow: hidden;
}

@media screen and (max-width: 650px) {
  .content{
    padding-left: 5vw;
    padding-right: auto;
    margin-left: auto;
    margin-right: auto;
  }
}

.hide-scroll{
  overflow-x: hidden !important;
}

.text-white {
  color: white;
}

.display-block {
  display: block;
}

.display-none {
  display: none;
}

.brand-background {
  background: radial-gradient(circle, rgba(33,36,143,1) 0%, rgba(49,140,115,1) 100%);
}

.reverse-brand-background {
  background: radial-gradient(circle, rgba(237,221,71,1) 0%, rgba(230,81,71,1) 100%);
}
// nav
.sidenav {
  height: 100%;
  width: 15vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.nav-button {
  font-size: 30px;
  background: transparent;
  border: none;
  color: #fff;
  padding-top: 1vh;
  padding-bottom: 0.5vh;
  margin-left: 2vw;
  display: block;
  font-weight: 500;
}

.nav-button-secondary {
  font-size: 25px;
  background: transparent;
  border: none;
  color: #fff;
  padding-top: 1vh;
  padding-bottom: 0.5vh;
  margin-left: 2vw;
  display: block;
}

.nav-text {
  font-size: 25px;
  background: transparent;
  border: none;
  color: #fff;
  padding-top: 1vh;
  padding-bottom: 0.5vh;
  margin-left: 0vw;
  display: block;
  text-align:center;
}

.nav-button:hover{
  color: #99CCFF;
  cursor: pointer;
}
.nav-icon{
  display: none;
}
// medium
@media screen and (max-width: 1000px) {
  .nav-button {
  font-size: 20px;
  background: transparent;
  border: none;
  color: #fff;
  padding-top: 1vh;
  padding-bottom: 0.5vh;
  margin-left: 2vw;
  display: block;
  font-weight: 500;
}
}
// small
@media screen and (max-width: 650px) {
  .sidenav {
    width: 100vw;
    height: auto;
    position: fixed;
    z-index: 1;
    top: 0;
  }

  .nav-icon {
    display: block;
  }
}

.collapse-bar{
  background: radial-gradient(circle, rgba(33,36,143,1) 0%, rgba(49,140,115,1) 100%);
}
.collapse-bar:hover{
  cursor:pointer;
  background: radial-gradient(circle, rgba(237,221,71,1) 0%, rgba(230,81,71,1) 100%);
  transition: all .5s ease;
}
// transitions
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.rise-enter-active {
  transition: all .5s ease;
}
.rise-leave-active {
  transition: all .5s ease;
}
.rise-enter-from, .rise-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
