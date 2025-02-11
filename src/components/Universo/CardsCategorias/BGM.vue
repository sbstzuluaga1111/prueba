<template>
    <v-col class="container noselect" cols="12" sm="6" lg="4" @click="mostrarModal('BGM')">




      <div class="canvas">
      <div class="tracker tr-1"></div>
      <div class="tracker tr-2"></div>
      <div class="tracker tr-3"></div>
      <div class="tracker tr-4"></div>
      <div class="tracker tr-5"></div>
      <div class="tracker tr-6"></div>
      <div class="tracker tr-7"></div>
      <div class="tracker tr-8"></div>
      <div class="tracker tr-9"></div>
      <div class="tracker tr-10"></div>
      <div class="tracker tr-11"></div>
      <div class="tracker tr-12"></div>
      <div class="tracker tr-13"></div>
      <div class="tracker tr-14"></div>
      <div class="tracker tr-15"></div>
      <div class="tracker tr-16"></div>
      <div class="tracker tr-17"></div>
      <div class="tracker tr-18"></div>
      <div class="tracker tr-19"></div>
      <div class="tracker tr-20"></div>
      <div class="tracker tr-21"></div>
      <div class="tracker tr-22"></div>
      <div class="tracker tr-23"></div>
      <div class="tracker tr-24"></div>
      <div class="tracker tr-25"></div>
   
    

         <v-card id="card">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
          class="align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="250px"
          cover
        >
          <v-card-title class="text-white">BGM</v-card-title>
        </v-img>
      </v-card>


    </div>







  
    </v-col>
  </template>
  
  <script>
  export default {
    name: 'BGMCard',
    methods: {
      mostrarModal(categoria) {
        this.$emit('abrir-modal', categoria); // Emitimos el evento para abrir el modal
      }
    }
  };
  </script>
  
  <style scoped>

  .text-white{
    color: white;
  }

  /*works janky on mobile :<*/
  .container {
    position: relative;
    height: 250px;
    margin: 0;
  }



  #card {
    margin: 1%;
    
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }



  .tracker:hover ~ #card .title {
    opacity: 1;
  }



  .tracker {
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
   
  }

  .tracker:hover {
    cursor: pointer;
    
  }

  .tracker:hover ~ #card #prompt {
    opacity: 0;
  }

  .tracker:hover ~ #card {
    transition: 300ms;
    filter: brightness(1.1);
  }

  .container:hover #card::before {
    transition: 200ms;
    content: '';
    opacity: 80%;
    
  }

  .canvas {
    perspective: 1800px;
    inset: 0;
    z-index: 200;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas: "tr-1 tr-2 tr-3 tr-4 tr-5"
      "tr-6 tr-7 tr-8 tr-9 tr-10"
      "tr-11 tr-12 tr-13 tr-14 tr-15"
      "tr-16 tr-17 tr-18 tr-19 tr-20"
      "tr-21 tr-22 tr-23 tr-24 tr-25";
  }



  .tr-1 {
    grid-area: tr-1;
  }

  .tr-2 {
    grid-area: tr-2;
  }

  .tr-3 {
    grid-area: tr-3;
  }

  .tr-4 {
    grid-area: tr-4;
  }

  .tr-5 {
    grid-area: tr-5;
  }

  .tr-6 {
    grid-area: tr-6;
  }

  .tr-7 {
    grid-area: tr-7;
  }

  .tr-8 {
    grid-area: tr-8;
  }

  .tr-9 {
    grid-area: tr-9;
  }

  .tr-10 {
    grid-area: tr-10;
  }

  .tr-11 {
    grid-area: tr-11;
  }

  .tr-12 {
    grid-area: tr-12;
  }

  .tr-13 {
    grid-area: tr-13;
  }

  .tr-14 {
    grid-area: tr-14;
  }

  .tr-15 {
    grid-area: tr-15;
  }

  .tr-16 {
    grid-area: tr-16;
  }

  .tr-17 {
    grid-area: tr-17;
  }

  .tr-18 {
    grid-area: tr-18;
  }

  .tr-19 {
    grid-area: tr-19;
  }

  .tr-20 {
    grid-area: tr-20;
  }

  .tr-21 {
    grid-area: tr-21;
  }

  .tr-22 {
    grid-area: tr-22;
  }

  .tr-23 {
    grid-area: tr-23;
  }

  .tr-24 {
    grid-area: tr-24;
  }

  .tr-25 {
    grid-area: tr-25;
  }

  .tr-1:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
    padding-right: 2%;
    height: 250px;
    padding-bottom: 5%;
    background-color: rgb(80, 124, 182);
  }

  .tr-2:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
    height: 250px;
    padding-right: 2%;
    padding-bottom: 5%;
    background-color: rgb(80, 124, 182);
  }

  .tr-3:hover ~ #card {
    transition: 125ms ease-in-out;
    height: 250px;
    padding-bottom: 5%;
    transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
  }

  .tr-4:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
    padding-left: 2%;
    padding-bottom: 5%;
    background-color: rgb(80, 124, 182);
  }

  .tr-5:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
    padding-left: 2%;
    padding-bottom: 5%;
    background-color: rgb(80, 124, 182);
  }








  .tr-6:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
    padding-right: 2%;
    padding-bottom: 4%;
    background-color: rgb(80, 124, 182);
  }

  .tr-7:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
    padding-right: 2%;
    padding-bottom: 4%;
    background-color: rgb(80, 124, 182);
  }

  .tr-8:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    padding-bottom: 4%;
    transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
  }

  .tr-9:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
    padding-left: 2%;
    padding-bottom: 4%;
    background-color: rgb(80, 124, 182);
  }

  .tr-10:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
    padding-left: 2%;
    padding-bottom: 4%;
    background-color: rgb(80, 124, 182);
  }










  .tr-11:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
    padding-right: 2%;
    background-color: rgb(80, 124, 182);
  }

  .tr-12:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
    padding-right: 2%;
  }

  .tr-13:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);

  }
  .tr-14:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
    padding-left: 2%;
  }

  .tr-15:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
    padding-left: 2%;
  }






  .tr-16:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
    padding-top: 4%;
    padding-right: 2%;
  }

  .tr-17:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
    padding-top: 4%;
    padding-right: 2%;
  }

  .tr-18:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
    padding-top: 4%;
    padding-left: 2%;
  }

  .tr-19:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
    padding-top: 4%;
    padding-left: 2%;
  }







  .tr-20:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
    padding-top: 5%;
    padding-left: 2%;
  }

  .tr-21:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
    padding-top: 5%;
    padding-right: 2%;
  }

  .tr-22:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
    padding-top: 5%;
    padding-right: 2%;
  }

  .tr-23:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
    padding-top: 5%;
    padding-left: 2%;
  }

  .tr-24:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
    padding-top: 5%;
    padding-left: 2%;
  }

  .tr-25:hover ~ #card {
    height: 250px;
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
    background-color: rgb(80, 124, 182);
    padding-left: 2%;
    padding-top: 5%;
  }

  .noselect {
    -webkit-touch-callout: none;
     /* iOS Safari */
    -webkit-user-select: none;
     /* Safari */
     /* Konqueror HTML */
    -moz-user-select: none;
     /* Old versions of Firefox */
    -ms-user-select: none;
     /* Internet Explorer/Edge */
    user-select: none;

  }
</style>
