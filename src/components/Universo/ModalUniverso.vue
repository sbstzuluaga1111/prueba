<template>
  <v-dialog v-model="dialogoLocal" fullscreen>
    <v-card class="modal-card">
      <v-card-title class="d-flex justify-space-between align-center">
        <span>Datos de {{ categoriaSeleccionada }}</span>
        <v-btn icon @click="closeModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div v-if="loading">Cargando datos...</div>
        <div v-else-if="error">
          <div>Error: {{ error }}</div>
          <v-btn @click="fetchData" color="primary">Intentar nuevamente</v-btn>
        </div>
        <div v-else>
          <!-- Renderizar datos de la API -->
          <div v-for="(dato, index) in datos" :key="index">
            <!-- Aquí puedes personalizar el renderizado según la estructura de los datos -->
            <p>{{ dato.name || dato.title || 'Sin nombre' }}</p>  <!-- Ejemplo de personalización -->
          </div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios'; // Importamos axios

export default {
  name: 'ModalUniverso',
  props: {
    dialogo: {
      type: Boolean,
      required: true
    },
    categoriaSeleccionada: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dialogoLocal: this.dialogo,
      datos: [],
      loading: false,
      error: null
    };
  },
  watch: {
    dialogo(newValue) {
      this.dialogoLocal = newValue;
    },
    dialogoLocal(newValue) {
      this.$emit('update:dialogo', newValue);
      if (newValue) {
        this.fetchData(); // Llamamos al método de API cuando se abre el modal
      }
    }
  },
  methods: {
    closeModal() {
      this.dialogoLocal = false;
    },
    async fetchData() {
      this.loading = true;
      this.error = null;

      // Cargar los datos solo si la categoría seleccionada es válida
      const apiUrl = this.getApiUrlForCategory(this.categoriaSeleccionada);
      if (apiUrl) {
        try {
          const response = await axios.get(apiUrl); // Usamos axios para hacer la solicitud
          this.datos = response.data; // Suponemos que la respuesta es un array
        } catch (err) {
          this.error = 'Hubo un problema al cargar los datos';
        } finally {
          this.loading = false;
        }
      } else {
        this.datos = [];  // Si no hay URL de API, no cargamos nada
        this.loading = false;
      }
    },
    getApiUrlForCategory(categoria) {
      const apiUrls = {

        
        
      
        
        
        
        'Mystic': 'https://api.atlasacademy.io/export/NA/nice_mystic_code.json',
      };
      return apiUrls[categoria] || '';  // Si no hay categoría o no es válida, retorna un string vacío
    }
  }
};
</script>

<style scoped>
.modal-card {
  max-height: 90vh;
  overflow-y: auto;
}
</style>
