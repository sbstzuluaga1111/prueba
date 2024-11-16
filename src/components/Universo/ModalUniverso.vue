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
          <div v-else-if="error">Error: {{ error }}</div>
          <div v-else>
            <!-- Renderizar datos de la API -->
            <p v-for="(dato, index) in datos" :key="index">{{ dato }}</p>
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
  
        // Solo cargamos los datos si la categoría seleccionada es "Equipamiento"
        if (this.categoriaSeleccionada === 'Equipamiento') {
          const apiUrl = this.getApiUrlForCategory(this.categoriaSeleccionada);
          try {
            const response = await axios.get(apiUrl); // Usamos axios para hacer la solicitud
            this.datos = response.data; // Suponemos que la respuesta es un array
          } catch (err) {
            this.error = 'Hubo un problema al cargar los datos';
          } finally {
            this.loading = false;
          }
        } else {
          this.datos = [];  // En otras categorías, aseguramos que no se mantengan datos cargados de equipamiento
          this.loading = false;
        }
      },
      getApiUrlForCategory(categoria) {
        const apiUrls = {
          'Equipamiento': 'https://api.atlasacademy.io/export/NA/nice_equip.json',
          'Lugares': 'https://api.atlasacademy.io/export/NA/nice_war.json',
          'Eventos': 'https://api.atlasacademy.io/export/NA/nice_event.json',
          'Command': 'https://api.atlasacademy.io/export/NA/nice_command_code.json',
          'Items': 'https://api.atlasacademy.io/export/NA/nice_item.json',
          'Material': 'https://api.atlasacademy.io/export/NA/nice_item.json',
          'Missions': 'https://api.atlasacademy.io/export/NA/nice_master_mission.json',
          'Illustrator': 'https://api.atlasacademy.io/export/NA/nice_illustrator.json',
          'Voice Actor': 'https://api.atlasacademy.io/export/NA/nice_cv.json',
          'BGM': 'https://api.atlasacademy.io/export/NA/nice_bgm.json',
          'Asset': 'https://api.atlasacademy.io/export/NA/asset_storage.json',
          'Mystic': 'https://api.atlasacademy.io/export/NA/nice_mystic_code.json',
        };
        return apiUrls[categoria] || '';
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
  