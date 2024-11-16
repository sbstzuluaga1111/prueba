<template>
    <v-col cols="12" sm="6" lg="4" @click="mostrarModal('BGM')">
      <v-card>
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
  