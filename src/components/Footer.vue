<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'Footer',
  data() {
    return {
      hi: true,
    };
  },
  methods: {
    routeBloodMeridian(){
      this.$router.push('blood-meridian');
    },
  },
}
</script>
<template>
      <div class="col-span-12" style="margin-left: 0rem; margin-right: 0rem; background-color:#252525; color: #fff; height: auto; width: auto;">
        <div class="justify-around flex-wrap content-container flex-row" style="height: 100%;">
          <div class="sub-content flex-col justify-between" style="height: auto; width: 100%; display: block; margin-top:auto; margin-bottom: auto; padding-left: 4rem;">
            <h1 style="font-size: 42px; font-weight: 700;"> C-Collection </h1>
            <div class="flex-col" style=" margin-top: 50vh;">
            <p>Sign up for C-Collection Newsletter</p>
            <p style="font-style:italic; font-size: 16px; margin-top: 1rem;">Get info about new releases, or my online <br> publication C-C </p>
              <div class="flex-row" style="margin-top: 1rem;">
              <input class="email-input" type="email" name="email" placeholder="E-mail Address" />
              <button class="email-button"> Sign Up </button>
              </div>
            <p> Follow Me </p>
            <div class="flex-row">
              <a href="https://www.linkedin.com/in/caleb-welch-502851121/" target="_blank" class="h-3 w-3"
              style="border-radius: 9999px; margin: 1rem; margin-left: 0rem;">
                <img class="h-2 w-2 filter-white" src="@/assets/icons/linkedin.svg" style="margin-top:0.4rem; margin: 1rem;" alt="images made by https://www.flaticon.com"/>
              </a>
              <a href="https://github.com/calebwelch1" target="_blank" class="h-3 w-3"
              style="border-radius: 9999px; margin: 1rem;">
                <img class="h-2 w-2 filter-white" src="@/assets/icons/github.png" style="margin-top:0.4rem; margin: 1rem;" alt="images made by https://www.flaticon.com"/>
              </a>
            </div>
            </div>
        </div>
        <div class="sub-content flex-col" style="height: auto; width: 75%; display: block; margin-top:auto; margin-bottom: auto; padding-left: 4rem;">
          <h1> Links </h1>
         <div style="border-bottom: 2px solid #fff; width: 80%; margin-bottom: 3rem;"/>
          <router-link to="/home" class="content-text" style="display:block; white-space: nowrap; font-size: 20px; margin-top: 1rem;">
          <strong>Home</strong>
          </router-link>
          <router-link to="/" class="content-text" style="display:block; white-space: nowrap; font-size: 20px; margin-top: 1rem;">
          <strong>About</strong>
          </router-link>
          <router-link to="/contact" class="content-text" style="display:block; white-space: nowrap; font-size: 20px; margin-top: 1rem;">
          <strong>Contact</strong>
          </router-link>
        </div>
      </div>
      </div>
</template>

<style scoped>
.h-2 {
  height: 2rem;
}

.w-2 {
  width: 2rem;
}

.filter-white{
  filter: invert(100%) sepia(4%) saturate(7482%) hue-rotate(233deg) brightness(113%) contrast(95%);
}
.email-input {
  border: 2px solid #4a4a4a;
  color: #fff;
  background: #252525;
  margin: 0 0 8px;
  font-size: 13.5px;
  font-weight: 400;
  line-height: 1.45;
  height: 3rem;
  width: 10rem;
}

.email-button {
  color: #fff;
  border: 2px solid #4a4a4a;
  background: #4a4a4a;
  text-align: center;
  cursor: pointer;
  transition: all;
  font-size: 14px;
  line-height: 1.15;
  letter-spacing: .4px;
  margin-left: 1rem;
  height: 3.4rem;
  width: 6rem;
}

.email-button:active {
  background: lightslategrey;
}
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
