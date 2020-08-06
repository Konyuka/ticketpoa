<template>
  <div class="columns is-centered">
    <div class="column is-10">
      <div class="notification backg">
            <div class="buttons is-centered">
                <router-link :to="{ name: 'music' }"><b-button class="text animation-target" type="is-success" inverted outlined><i class="fas fa-music text-icon"></i> Music &amp; Artists <rect class="shape" height="60" width="120" /> </b-button></router-link>
                <b-button class="text animation-target" type="is-success" inverted outlined><i class="fas fa-ticket-alt text-icon"></i> Events &amp; Tickets</b-button>
                <b-button class="text animation-target" type="is-success" inverted outlined><i class="fas fa-palette text-icon"></i> Arts &amp; Paintings</b-button>
                <b-button class="text animation-target" type="is-success" inverted outlined><i class="fas fa-book-open text-icon"></i> Books &amp; Authors</b-button>
                <b-button class="text animation-target" type="is-success" inverted outlined><i class="fas fa-plane text-icon"></i> Travel Packages</b-button>
            </div>
            <!-- <div class="svg-wrapper">
              <svg height="60" width="120" xmlns="http://www.w3.org/2000/svg">
                <rect class="shape" height="60" width="120" />
              </svg>
               <div class="text">HOVER</div>
            </div> -->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Links',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@font-face { font-family: Yellowtail-Regular; src: url('../assets/fonts/Yellowtail-Regular.ttf'); }
@font-face { font-family: JosefinSans-Italic-VariableFont_wght; src: url('../assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf'); }
@font-face { font-family: JosefinSans-VariableFont_wght; src: url('../assets/fonts/JosefinSans-VariableFont_wght.ttf'); }


.animation-target:hover {
  animation: animation 750ms linear both;
}

@keyframes animation {
  0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  3.2% { transform: matrix3d(1.345, 0.383, 0, 0, 0.252, 1.345, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  4.5% { transform: matrix3d(1.485, 0.5, 0, 0, 0.326, 1.485, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  6.41% { transform: matrix3d(1.673, 0.603, 0, 0, 0.393, 1.673, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  9.01% { transform: matrix3d(1.88, 0.616, 0, 0, 0.403, 1.88, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  12.71% { transform: matrix3d(2.064, 0.467, 0, 0, 0.308, 2.064, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  13.51% { transform: matrix3d(2.087, 0.424, 0, 0, 0.28, 2.087, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  17.92% { transform: matrix3d(2.139, 0.197, 0, 0, 0.131, 2.139, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  18.92% { transform: matrix3d(2.137, 0.155, 0, 0, 0.103, 2.137, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  25.23% { transform: matrix3d(2.075, -0.003, 0, 0, -0.002, 2.075, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  29.03% { transform: matrix3d(2.032, -0.03, 0, 0, -0.02, 2.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  31.43% { transform: matrix3d(2.012, -0.033, 0, 0, -0.022, 2.012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  34.63% { transform: matrix3d(1.994, -0.029, 0, 0, -0.019, 1.994, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  40.14% { transform: matrix3d(1.985, -0.015, 0, 0, -0.01, 1.985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  56.46% { transform: matrix3d(2, 0.002, 0, 0, 0.001, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  62.36% { transform: matrix3d(2.002, 0.001, 0, 0, 0.001, 2.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  81.48% { transform: matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  84.68% { transform: matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { transform: matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
}


.notification {
    background-color: whitesmoke;
    border-radius: 4px;
    padding: 1.25rem 0.5rem 1.25rem 0.5rem !important;
    position: relative;
}


.text-icon {
    color: #6eff00 !important;
}

.text {
  color: #fff;
  // font-family: 'Roboto Condensed';
  font-family: JosefinSans-Italic-VariableFont_wght;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 32px;
  position: inherit;
  top: -48px;
}

@keyframes draw {
  0% {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 8px;
  }
  100% {
    stroke-dasharray: 760;
    stroke-dashoffset: 0;
    stroke-width: 2px;
  }
}

.svg-wrapper:hover .shape {
  -webkit-animation: 0.5s draw linear forwards;
  animation: 0.5s draw linear forwards;
}


.backg{
  background-color: #376148;
}
</style>
