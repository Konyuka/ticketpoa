<template>
  <b-notification :closable="false">
      <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
  </b-notification>
</template>

<script>


export default {
  name: 'Pop',
  data() {
      return {
          isLoading: true,
          isFullPage: true
      }
  },
  methods: {
      openLoading() {
          this.isLoading = true
          setTimeout(() => {
              this.isLoading = false
          }, 10 * 1)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
