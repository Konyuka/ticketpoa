<template>
      <section>
          <div class="container">
            <div class="columns is-centered paddy">
              <div class="column is-10 text is-centered">
                <b-field label="Search For: Tracks, Artists & Albums | Artwork & Paintings | Events & Tickets | Travel Packs | Books &amp; Authors">
                    <b-autocomplete
                        v-model="name"
                        :data="filteredDataArray"
                        placeholder="e.g. Scar Mkadinali"
                        icon="search"
                        clearable
                        @select="option => selected = option">
                        <template slot="empty">No results found</template>
                    </b-autocomplete>
                </b-field>
              </div>
            </div>
          </div>
      </section>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {
                data: [
                    'Angular',
                    'Angular 2',
                    'Aurelia',
                    'Backbone',
                    'Ember',
                    'jQuery',
                    'Meteor',
                    'Node.js',
                    'Polymer',
                    'React',
                    'RxJS',
                    'Vue.js'
                ],
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>

<style lang="scss">
.text {
  color: #fff;
  // font-family: 'Roboto Condensed';
  font-family: JosefinSans-Italic-VariableFont_wght;
  font-size: 8px;
  letter-spacing: 1px;
  line-height: 32px;
  position: inherit;
  top: -48px;
}

.paddy{
  padding: 10px
}
</style>
