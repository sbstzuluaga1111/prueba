<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="6" md="4">
        <v-select
          v-model="selectedRarity"
          :items="rarities"
          label="Selecciona Rareza"
          item-text="text"
          item-value="value"
          return-object
        />
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-select
          v-model="selectedClass"
          :items="classes"
          label="Selecciona Clase"
          item-text="text"
          item-value="value"
          return-object
        />
      </v-col>
    </v-row>

    <CardsServants :servants="filteredServants" :loading="loading" />


    <v-row v-if="loading">
      <v-col class="d-flex justify-center">
        <v-progress-circular indeterminate color="primary" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="../scripts/FiltroServants.js"></script>

<style scoped>
.v-card {
  margin-bottom: 16px;
}
</style>
