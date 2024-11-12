<template>
  <v-container>
    <div class="d-flex justify-center">
      <h1>Fate</h1>
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
        lg="4"
      >
        <v-card class="servant-card">
          <v-img
            :src="getFaceUrl(servant)"
            alt="Servant Face"
            height="300px"
            contain
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

<script>
export default {
  data() {
    return {
      servants: [],
      loading: true,
    };
  },
  created() {
    fetch("https://api.atlasacademy.io/export/NA/nice_servant.json")
      .then((response) => response.json())
      .then((data) => {
        this.servants = data;
        this.loading = false;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.loading = false;
      });
  },
  methods: {
    getFaceUrl(servant) {
      return servant.extraAssets?.charaGraph?.ascension[4] || servant.extraAssets?.charaGraph?.ascension[3] || servant.extraAssets?.charaGraph?.ascension[2] || servant.extraAssets?.charaGraph?.ascension[1];
    },
  },
};
</script>

<style scoped>
.v-container {
  padding: 10px;
}

.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0);
}

.servant-card {
  max-width: 400px;
  
}

.servant-image {
  width: 400px;
  height: 400px;
  object-fit: cover;
}
</style>
