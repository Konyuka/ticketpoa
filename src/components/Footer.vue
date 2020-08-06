<template>
  <footer class="footer bg-img">
    <div class="content has-text-centered">
      <hr>
      <div class="tile is-ancestor">
        <div class="tile is-parent is-12">
          <article class="tile is-child notification">
            <div class="content">
                <span class="sizy phonta"> <i class="fab fa-facebook"></i> </span>
                <span class="sizy phonta"> <i class="fab fa-instagram"></i> </span>
                <span class="sizy phonta"> <i class="fab fa-twitter"></i> </span>
                <span class="sizy phonta"> <i class="fab fa-youtube"></i> </span>
              <div class="content">
                <p class="title descy">Ticket Poa</p>
                <p class="subtitle desc">Follow us on our Social media platforms for exclusive notifications</p>

              </div>
            </div>
          </article>
        </div>
      </div>
      <hr>
      <p class="text">
      <strong>Developer</strong> michaelsaiba84@gmail.com
      </p>
    </div>
  </footer>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Footer',
  components: {
    Header,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@font-face { font-family: PinkSkinny; src: url('../assets/fonts/PinkSkinny.ttf'); }

@media only screen and (max-width: 767px), only screen and (max-device-width: 767px) {
  .desc{
    font-size: 18px !important;
  }
  .descy{
    font-size: 48px !important;
  }
  .phonta{
    font-size: 20px !important;
  }
  .content p:not(:last-child), .content dl:not(:last-child), .content ol:not(:last-child), .content ul:not(:last-child), .content blockquote:not(:last-child), .content pre:not(:last-child), .content table:not(:last-child) {
    margin-bottom: 20px;
}
}

.sizy{
  color: #ffffff !important;
  font-weight: 500 !important;
  font-size: 80px;
  padding: 15px;
}

.sizy:hover{

}

.desc{
  color: #ffffff !important;
  font-family: PinkSkinny !important;
  font-weight: 500 !important;
  font-size: 30px;
}

.descy{
  color: #ffffff !important;
  font-family: PinkSkinny !important;
  font-weight: 500 !important;
  font-size: 60px;
  letter-spacing: 2px !important;
}

.animation-target:hover {
  animation: animation 1000ms linear both;
}

/* Generated with Bounce.js. Edit at http://bouncejs.com#%7Bs%3A%5B%7BT%3A%22k%22%2Ce%3A%22B%22%2Cd%3A1000%2CD%3A0%2Cf%3A%7Bx%3A0%2Cy%3A0%7D%2Ct%3A%7Bx%3A5%2Cy%3A0%7D%2Cs%3A1%2Cb%3A4%7D%5D%7D */

@keyframes animation {
  0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  5.61% { transform: matrix3d(1, 0, 0, 0, 0.047, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  8.41% { transform: matrix3d(1, 0, 0, 0, 0.07, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  11.11% { transform: matrix3d(1, 0, 0, 0, 0.087, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  14.91% { transform: matrix3d(1, 0, 0, 0, 0.073, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  18.72% { transform: matrix3d(1, 0, 0, 0, 0.069, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  26.03% { transform: matrix3d(1, 0, 0, 0, 0.077, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  33.33% { transform: matrix3d(1, 0, 0, 0, 0.087, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  41.04% { transform: matrix3d(1, 0, 0, 0, 0.084, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  55.66% { transform: matrix3d(1, 0, 0, 0, 0.087, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  63.26% { transform: matrix3d(1, 0, 0, 0, 0.087, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  77.88% { transform: matrix3d(1, 0, 0, 0, 0.087, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  85.49% { transform: matrix3d(1, 0, 0, 0, 0.087, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { transform: matrix3d(1, 0, 0, 0, 0.087, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
}




.text {
  color: #000;
  // font-family: 'Roboto Condensed';
  font-family: JosefinSans-Italic-VariableFont_wght;
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 32px;
  position: inherit;
  top: -48px;
}

.tile {
    background-image:url(../assets/img/bgdark.png);
}

strong {
    color: #23b908;
    font-weight: 700;
}

.footer {
  background-size: cover;
    padding: 2rem 1.5rem 1rem !important;
}
a {
    color: #228B22;
    text-decoration: none;
    background-color: transparent;
}
</style>
