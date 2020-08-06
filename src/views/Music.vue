<template>
  <div class="music bg-img">
    <Links/>
  </div>
</template>

<script>
import Links from '@/components/Links.vue';

export default {
name: 'Music',
components:{
  Links,
}


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
</style>
