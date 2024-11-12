<template>
  <v-container>
    <div class="d-flex justify-center espacio">
      <h1>{{ titulo }}</h1> <!-- Aquí mostramos el título -->
    </div>
    
    <div v-if="loading" class="loading-container d-flex justify-center align-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>

    <v-row v-else>
      <v-col
        v-for="servant in servants"
        :key="servant.id"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="servant-card">
          <v-img
            :src="getFaceUrl(servant)"
            alt="Servant Face"
            height="600px"
            class="servant-image"
          ></v-img>
          <v-card-title>{{ servant.name }}</v-card-title>
          <v-card-subtitle>Clase: {{ servant.className }}</v-card-subtitle>
          <v-card-text>
            <p>Rareza: {{ servant.rarity }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="../scripts/HelloWorld.js"></script>
<style src="../css/HelloWorld.css"></style>
