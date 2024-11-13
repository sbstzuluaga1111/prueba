<!-- HelloWorld.vue -->
<template>
   
  <v-container><v-app-bar class="d-flex justify-center nav">
    <div class="d-flex justify-center">
      <h1>{{ titulo }}</h1>
    </div></v-app-bar>

    <FiltroServants
      :titulo="titulo"
      :servants="servants"
      :loading="loading"
    />
  </v-container>
</template>

<script src="../scripts/HelloWorld.js"></script>
<style src="../css/HelloWorld.css"></style>
