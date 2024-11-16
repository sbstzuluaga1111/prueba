<template>
  <v-container class="d-flex align-center justify-center justo" style="height: 100%; overflow-y: auto;">
    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <CategoriasComponet @categoria-seleccionada="manejarCategoriaSeleccionada" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CategoriasComponet from "@/components/Universo/Categorias.vue";

export default {
  name: "UniversoVista",
  components: {
    CategoriasComponet,
  },
};
</script>

<style scoped src="@/css/componentsCss/UniversoVista.css"></style>
