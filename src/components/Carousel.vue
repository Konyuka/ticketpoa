<template>
    <div class="columns is-centered">
      <div class="column is-9">
        <b-carousel :indicator-inside="false">
            <b-carousel-item v-for="(item, i) in 6" :key="i">
                <span class="image">
                  <img :src="getImgUrl(i)">
                </span>
            </b-carousel-item>
            <template slot="indicators" slot-scope="props">
                <span class="al image">
                    <img :src="getImgUrl(props.i)" :title="props.i">
                </span>
            </template>
        </b-carousel>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    methods: {
      getImgUrl(value) {
          return `https://picsum.photos/id/43${value}/1230/500`
      }
    }
}
</script>

<style>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
</style>
