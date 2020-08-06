<template>
  <div class="home bg-img">
      <!-- <Header/> -->
      <Links/>
      <Search/>
      <Feature/>
      <Cap/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Search from '@/components/Search.vue';
import Links from '@/components/Links.vue';
import Landing from '@/components/Landing.vue';
import Feature from '@/components/Feature.vue';
import Featured from '@/components/Featured.vue';
import Loading from '@/components/Loading.vue';
import Pop from '@/components/Pop.vue';
import Cap from '@/components/Cap.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Links,
    Feature,
    Featured,
    Search,
    Landing,
    Loading,
    Pop,
    Cap,
  },
};

</script>

<style lang="scss">

.bg-img {
      background-image: url(../assets/img/bg.png) ;
      background-position: center center;
      background-repeat:  no-repeat;
      background-attachment: fixed;
      background-size:  cover;
      background-color: hsl(0, 0%, 86%);

}

/* // Import Bulma's core */
@import "~bulma/sass/utilities/_all";
/* // Set your colors */
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

/* // Setup $colors to use as bulma classes (e.g. 'is-twitter') */
$colors: (
  "white": ($white, $black),
  "black": ($black, $white),
  "light": ($light, $light-invert),
  "dark": ($dark, $dark-invert),
  "primary": ($primary, $primary-invert),
  "info": ($info, $info-invert),
  "success": ($success, $success-invert),
  "warning": ($warning, $warning-invert),
  "danger": ($danger, $danger-invert),
  "twitter": ($twitter, $twitter-invert)
);

/* // Links */
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
</style>
