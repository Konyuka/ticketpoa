<div class="columns">
    <div class="column is-8 internalPadding">
      <div class="blueBar" @click="isShow['Star'] = !isShow['Star']" :class="{'red': isShow['Star']}">
        <div class="d-flex">
          <h2><i class="fab fa-jedi-order"></i>&nbsp; &nbsp;Star Wars </h2>
          <div class="ml-auto">
            <i class="fas fa-plus ml-auto"></i>
          </div>
        </div>
      </div><!-- End BlueBar -->
    </div><!-- End col -->
</div><!-- End Row -->
  <transition name="slide">
    <div class="columns content internalPadding" v-if="isShow['Star']">
      <div class="column is-5">
      <h2><i class="fab fa-jedi-order"></i>&nbsp; &nbsp;Star Wars</h2>
      <p>Sample text</p>
      </div><!-- End Col -->
      <div class="column is-3 internalPadding" style="margin-top: 15px;">
        <div @click="isShow['Star'] = !isShow['Star']">
          <div class="d-flex">
          <button class="ml-auto">
            <slot>Hide</slot>
          </button>
        </div>
      </div>
      </div><!-- End Col -->
    </div><!-- End Row -->
  </transition>

    <div class="columns">
    <div class="column is-8 internalPadding">
      <div class="blueBar" @click="isShow['Predator'] = !isShow['Predator']" :class="{'red': isShow['Diehard']}">
        <div class="d-flex">
          <h2><i class="fab fa-reddit-alien"></i>&nbsp; &nbsp;The Predator </h2>
          <div class="ml-auto">
            <i class="fas fa-plus ml-auto"></i>
          </div>
        </div>
      </div><!-- End BlueBar -->
    </div><!-- End col -->
  </div><!-- End Row -->
  <transition name="slide">
    <div class="row content internalPadding" v-if="isShow['Predator']">
      <div class="col-12">
      <h2><i class="fab fa-reddit-alien"></i>&nbsp; &nbsp;The Predator</h2>
      <p>Test another</p>
      </div><!-- End Col -->
      <div class="col-md-12 internalPadding" style="margin-top: 15px;">
        <div @click="isShow['Predator'] = !isShow['Predator']">
          <div class="d-flex">
          <button class="ml-auto">
            <slot>Hide</slot>
          </button>
        </div>
      </div>
      </div><!-- End Col -->
    </div><!-- End Row -->
  </transition>


<div class="columns is-multiline">

  <div id="carouselExampleIndicator" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="column is-7 headline ">
          <h4> <span class="animation-target"> <i class="fas fa-ticket-alt"></i> Events</span>  </h4>
      </div>
      <div class="carousel-item active">
        <div class="d-flex w-100">
          <div class="column post is-6">
            <article class="columns is-multiline">
              <div class="column is-12 post-img">
                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image">
              </div>
              <div class="column is-12 featured-content ">
                <h3 class="heading post-category">14th August</h3>
                <h1 class="title post-title saturday-font">Masaku 7's</h1>
                <p class="post-excerpt desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                <br>
                <a href="#" class="button is-success">Read More</a>
              </div>
            </article>
          </div>
          <div class="column post is-6">
            <article class="columns is-multiline">
              <div class="column is-12 post-img">
                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image">
              </div>
              <div class="column is-12 featured-content ">
                <h3 class="heading post-category">15th November</h3>
                <h1 class="title post-title saturday-font">Nai Fest</h1>
                <p class="post-excerpt desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                <br>
                <a href="#" class="button is-success">Read More</a>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex w-100">
          <div class="column post is-6">
            <article class="columns is-multiline">
              <div class="column is-12 post-img">
                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image">
              </div>
              <div class="column is-12 featured-content ">
                <h3 class="heading post-category">7th Sepetember</h3>
                <h1 class="title post-title saturday-font">Jamdown KE</h1>
                <p class="post-excerpt desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                <br>
                <a href="#" class="button is-success">Read More</a>
              </div>
            </article>
          </div>
          <div class="column post is-6">
            <article class="columns is-multiline">
              <div class="column is-12 post-img">
                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image">
              </div>
              <div class="column is-12 featured-content ">
                <h3 class="heading post-category">22nd October</h3>
                <h1 class="title post-title saturday-font">Koroga Festival</h1>
                <p class="post-excerpt desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                <br>
                <a href="#" class="button is-success">Read More</a>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex w-100">
          <div class="column post is-6">
            <article class="columns is-multiline">
              <div class="column is-12 post-img">
                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image">
              </div>
              <div class="column is-12 featured-content ">
                <h3 class="heading post-category">4th August</h3>
                <h1 class="title post-title saturday-font">Thrift Social</h1>
                <p class="post-excerpt desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                <br>
                <a href="#" class="button is-success">Read More</a>
              </div>
            </article>
          </div>
          <div class="column post is-6">
            <article class="columns is-multiline">
              <div class="column is-12 post-img">
                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image">
              </div>
              <div class="column is-12 featured-content ">
                <h3 class="heading post-category">12th December</h3>
                <h1 class="title post-title saturday-font">Jameson Party</h1>
                <p class="post-excerpt desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                <br>
                <a href="#" class="button is-success">Read More</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev animation-target" href="#carouselExampleIndicator" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next animation-target" href="#carouselExampleIndicator" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <div id="carouselExampleIndicato" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="column is-7 headline ">
          <h4> <span class="animation-target"> <i class="fas fa-plane"></i> Travel Packages</span>  </h4>
      </div>
      <div class="carousel-item active">
        <div class="d-flex w-100">
          <div class="column post is-4">
            <article class="columns is-multiline">
              <div class="column is-12 post-img">
                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image">
              </div>
              <div class="column is-12 featured-content ">
                <h3 class="heading post-category">Category Name</h3>
                <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                <br>
                <a href="#" class="button is-primary">Read More</a>
              </div>
            </article>
          </div>
          <div class="column post is-4">
            <article class="columns is-multiline">
              <div class="column is-12 post-img">
                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image">
              </div>
              <div class="column is-12 featured-content ">
                <h3 class="heading post-category">Category Name</h3>
                <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                <br>
                <a href="#" class="button is-primary">Read More</a>
              </div>
            </article>
          </div>
          <div class="column post is-4">
            <article class="columns is-multiline">
              <div class="column is-12 post-img">
                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image">
              </div>
              <div class="column is-12 featured-content ">
                <h3 class="heading post-category">Category Name</h3>
                <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                <br>
                <a href="#" class="button is-primary">Read More</a>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex w-100">
          <div class="column post is-4">
            <article class="columns is-multiline">
              <div class="column is-12 post-img">
                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image">
              </div>
              <div class="column is-12 featured-content ">
                <h3 class="heading post-category">Category Name</h3>
                <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                <br>
                <a href="#" class="button is-primary">Read More</a>
              </div>
            </article>
          </div>
          <div class="column post is-4">
            <article class="columns is-multiline">
              <div class="column is-12 post-img">
                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image">
              </div>
              <div class="column is-12 featured-content ">
                <h3 class="heading post-category">Category Name</h3>
                <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                <br>
                <a href="#" class="button is-primary">Read More</a>
              </div>
            </article>
          </div>
          <div class="column post is-4">
            <article class="columns is-multiline">
              <div class="column is-12 post-img">
                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image">
              </div>
              <div class="column is-12 featured-content ">
                <h3 class="heading post-category">Category Name</h3>
                <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                <br>
                <a href="#" class="button is-primary">Read More</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev animation-target" href="#carouselExampleIndicato" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next animation-target" href="#carouselExampleIndicato" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

</div>

html, body {
  background: #333;
  height: 100%;
  overflow: hidden;
  text-align: center;
}

.svg-wrapper {
  height: 60px;
    margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 320px;
}

.shape {
  fill: transparent;
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  stroke: #19f6e8;
}

.text {
  color: #fff;
  font-family: 'Roboto Condensed';
  font-size: 22px;
  letter-spacing: 8px;
  line-height: 32px;
  position: relative;
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

<div class="svg-wrapper">
  <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
    <rect class="shape" height="60" width="320" />
  </svg>
   <div class="text">HOVER</div>
</div>

<div class="waveWrapper waveAnimation">
  <div class="waveWrapperInner bgTop">
    <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
  </div>
  <div class="waveWrapperInner bgMiddle">
    <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
  </div>
  <div class="waveWrapperInner bgBottom">
    <div class="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div>
  </div>
</div>
/* // Set your colors */
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

/* // Links */
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

green 349630
