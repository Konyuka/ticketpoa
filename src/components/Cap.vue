<template>


</template>

<script>
export default {
  name: 'Cap',
  data(){
    return {
      title: "Hello",
  isShow: {
    'Star': false,
    'Diehard': false,
    'Predator': false,
  },
    }
  },

}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.notification {
     background-image:url(../assets/img/darkbg.jpg);
     background-size: cover;
    // background-color: #092312;
}


$body-color: #818181;
$border: #DDDDDD;
$yellow: #FFB715;
$white: #ffffff;
$purple: #800080;
$nav-bg: #F5F7FA;
$white: #ffffff;
$background-image-linear-blue: linear-gradient(to bottom, #016BA8, #569BCA, #9FC5E8);
$orange: #FFB715;
$blue:#016BA8;
$muted:#707070;
$border: #DDDDDD;
$purple: linear-gradient(180deg, rgba(226,48,219,1) 7%, rgba(193,53,163,1) 41%, rgba(119,21,128,1) 94%);

body{
  background: $purple;
  height: 100vh;
}

.seperator {
        margin-top: 25px;
        border-top: 1px solid $nav-bg;
        padding-top: 25px;
    }

.blueBar {
    background: $nav-bg;
    color: $muted;
    padding: 15px 20px;
    margin-top: 15px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
    border-radius: 50px;
    &:hover {
      opacity: 0.8;
        cursor: pointer;
        transition: all 1s;
        h5 {
            color: $white;
        }
    }

    h2 {
        text-transform: uppercase;
        margin: 0;
        color: $muted;
        font-size: 16px;
    }
    .fa-bars {
        transform: rotate(90deg);
    }
}

.red {
    .fa-chevron-down,
    .fa-plus {
        animation: rotate-in 0.5s forwards;
    }
    @keyframes rotate-in {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(45deg);
        }
    }
}

.slide-enter-active {
    -moz-transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}

.slide-leave-active {
    -moz-transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
    max-height: 100px;
    overflow: hidden;
}

.slide-enter,
.slide-leave-to {
    overflow: hidden;
    max-height: 0;
}

.content{
  margin-top: 20px;
  background: none;
  color: $white;
}

.internalPadding {
    padding: 0 25px;
}

button{
  background: #nag-bg;
  color: $muted;
  border: none;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding:5px 15px;
  box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.35);
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  transition: all 1s;
  &:hover{
    background: $yellow;
    box-shadow: none;
    cursor: pointer;
  }&:focus{
    outline: none;
  }
}

.tab-container{
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}

 h1 {
        text-transform: uppercase;
        margin: 0;
        color: $nav-bg;
        font-size: 48px;
        letter-spacing: 25px;
        margin-bottom: 1rem;
        font-weight: light;

    }


</style>
