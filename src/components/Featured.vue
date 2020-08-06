<template>

      <section>
        <p class="title is-4">John Smith</p>
        <div class="columns">
          <div class="column is-1">
          </div>
          <div class="column is-10 is-centered">
            <b-carousel-list v-model="test" :data="items" :items-to-show="2">
                <template slot="item" slot-scope="props">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-5by4">
                                <a @click="info(props.index)"><img :src="props.list.image"></a>
                            </figure>
                            <b-tag type="is-twitter" rounded style="position: absolute; top: 0;"><b>Days To</b></b-tag>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <div class="columns is-centered">
                                  <p class="title is-6">{{ props.list.title }} Event Name</p>
                                </div>
                                <div class="columns is-centered">
                                  <div class="column is-3">
                                    <b-button size="is-small" type="is-light"><i class="fas fa-map-marker"></i> Venue</b-button>
                                  </div>
                                  <div class="column is-3">
                                    <b-button size="is-small" type="is-light"><i class="fas fa-calendar"></i> Date</b-button>
                                  </div>
                                  <div class="column is-3">
                                    <b-button size="is-small" type="is-light"><i class="fas fa-clock"></i> Time</b-button>
                                  </div>
                                </div>
                                <div class="field is-grouped" >
                                    <!-- <p class="control" v-if="props.list.rating">
                                        <b-rate :value="props.list.rating" show-score disabled/>
                                    </p> -->
                                    <p class="control" style="margin-left: auto">
                                        <button class="button is-small is-success is-outlined"><b-icon size="is-small" icon="heart"/> Buy Ticket</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </b-carousel-list>
          </div>
        </div>
      </section>

</template>

<script>
export default {
    name: 'Featured',
    data() {
        return {
            test: 0,
            items: [
                {
                    title: 'Slide 1',
                    image: 'https://cdn.digitaldjtips.com/app/uploads/2011/09/09145749/Dubstep-party.jpg',
                    rating: 4.4
                },
                {
                    title: 'Slide 2',
                    image: 'https://4.imimg.com/data4/SA/XE/ANDROID-31839451/product-500x500.jpeg',
                    rating: 3.5
                },
                {
                    title: 'Slide 3',
                    image: 'https://static.wixstatic.com/media/1ea930411416403eac0389d2397c7441.jpg/v1/fill/w_640,h_600,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/1ea930411416403eac0389d2397c7441.webp',
                    rating: 5
                },
                {
                    title: 'Slide 4',
                    image: 'https://babajicaterers.com/wp-content/uploads/2016/11/3-640x409.jpg'
                },
                {
                    title: 'Slide 5',
                    image: 'https://static.wixstatic.com/media/1ea930411416403eac0389d2397c7441.jpg/v1/fill/w_640,h_600,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/1ea930411416403eac0389d2397c7441.webp',
                    rating: 5
                },
                {
                    title: 'Slide 6',
                    image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                    rating: 4
                },
                {
                    title: 'Slide 7',
                    image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                    rating: 2.7
                },
                {
                    title: 'Slide 8',
                    image: 'https://static.wixstatic.com/media/1ea930411416403eac0389d2397c7441.jpg/v1/fill/w_640,h_600,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/1ea930411416403eac0389d2397c7441.webp',
                    rating: 1.5
                }
            ]
        }
    },
    methods: {
        info(value) {
            this.test = value
        }
    }
}
</script>

<style lang="scss">
.bg-img {
      background-image: url(../assets/img/bg.jpg) ;
      background-position: center center;
      background-repeat:  no-repeat;
      background-attachment: fixed;
      background-size:  cover;
      background-color: hsl(0, 0%, 86%);

}
.img-responsive {
      display: block;
      max-width: 100%;
      height: auto;
   }
</style>
