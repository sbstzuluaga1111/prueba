<template>
  <v-layout class="justo " style="padding-top: 80px; height: calc(100vh - 80px); overflow-y: auto;">
    <v-app-bar class="d-flex justify-center nav" 
             style="position: fixed; top: 20px; left: 50%; transform: translateX(-50%); width: 50%; z-index: 10;">
             <v-typography :class="tituloClass">
      {{ titulo }}
    </v-typography>
  </v-app-bar>

  
      <FiltroServants
        :titulo="titulo"
        :servants="servants"
        :loading="loading"
      />
 
  </v-layout>
</template>

<script>
import Axios from 'axios';
import FiltroServants from '@/components/Personajes/FiltroServants.vue';

export default {
  name: "PersonajesVista",
  components: {
    FiltroServants,
  },
  data() {
    return {
      titulo: "Fate/Grand Order (Personajes)",
      servants: [],
      loading: true,
    };
  },
  created() {
    Axios.get("https://api.atlasacademy.io/export/NA/nice_servant.json")
      .then((response) => {
        this.servants = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.loading = false;
      });
  },
  methods: {
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

<style src="@/css/componentsCss/PersonajesVista.css"></style>
