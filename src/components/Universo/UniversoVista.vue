<template>
  <v-container class="justo">
    <v-row class="d-flex justify-center">
      <v-col cols="10" sm="10" md="12" lg="12">
        <CategoriasComponent @categoria-seleccionada="manejarCategoriaSeleccionada" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CategoriasComponent from "@/components/Universo/Categorias.vue";

export default {
  name: "UniversoVista",
  components: {
    CategoriasComponent,
  },
  data() {
    return {
      categoriaSeleccionada: "",
    };
  },
  methods: {
    manejarCategoriaSeleccionada(categoria) {
      this.categoriaSeleccionada = categoria;
      console.log("Categoría seleccionada:", categoria);
    },
  },
};
</script>

<style scoped src="@/css/componentsCss/UniversoVista.css"></style>
