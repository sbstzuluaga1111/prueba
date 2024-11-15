<template>
  <v-row v-if="!loading">
    <v-col
      v-for="servant in filteredServants"
      :key="servant.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-card class="servant-card">
        <v-img
          :src="getFaceUrl(servant)"
          alt="Servant Image"
          height="200"
        ></v-img>
        <v-card-title>{{ servant.name }}</v-card-title>
        <v-card-subtitle>Clase: {{ servant.className }}</v-card-subtitle>
        <v-card-text class="d-flex justify-space-between align-center">
        <p>Rareza: {{ servant.rarity }}</p>
        <v-btn class="blue lighten-2">Detalles</v-btn>
</v-card-text>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'CardsServants',
    props: {
      servants: Array,
      loading: Boolean,
    },
    data() {
      return {
        dialog: false,
        selectedServant: null,
      };
    },
    computed: {
      filteredServants() {
        return this.servants;
      },
    },
    methods: {
      openModal(servant) {
        this.selectedServant = servant;
        this.dialog = true;
      },
      getFaceUrl(servant) {
        return (
          servant.extraAssets?.charaGraph?.ascension[4] ||
          servant.extraAssets?.charaGraph?.ascension[3] ||
          servant.extraAssets?.charaGraph?.ascension[2] ||
          servant.extraAssets?.charaGraph?.ascension[1]
        );
      },
    },
  };
  
</script>

<style scoped>
.v-card {
  margin-bottom: 16px;
}
</style>
