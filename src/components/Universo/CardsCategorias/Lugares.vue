<template>
    <v-col cols="12" sm="6" lg="4" @click="mostrarModal('Lugares')">
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
          class="align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="250px"
          cover
        >
          <v-card-title class="text-white">Lugares</v-card-title>
        </v-img>
      </v-card>
    </v-col>
  </template>
  
  <script>
  export default {
    name: 'LugaresCard',
    methods: {
      mostrarModal(categoria) {
        this.$emit('abrir-modal', categoria);
      }
    }
  };
  </script>
  