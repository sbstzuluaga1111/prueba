<template>
   
  <v-container><v-app-bar class="d-flex justify-center nav">
    <div class="d-flex justify-center">
      <h3>{{ titulo }}</h3>
    </div></v-app-bar>

    <FiltroServants
      :titulo="titulo"
      :servants="servants"
      :loading="loading"
    />
  </v-container>
</template>

<script src="../scripts/Personajes"></script>
<style src="../css/HelloWorld.css"></style>
