<template>
    <v-dialog v-model="dialogoLocal" fullscreen>
      <v-card class="modal-card">
        <!-- Header del modal -->
        <v-card-title class="d-flex justify-space-between align-center pa-4">
          <span class="text-h6 font-weight-bold">Información de Singularidad</span>
          <v-btn icon @click="closeModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
  
        <!-- Contenido del modal -->
        <v-card-text class="d-flex flex-column align-center pa-4">
          <!-- Cargando datos -->
          <div v-if="loading" class="loading-overlay d-flex flex-column align-center justify-center">
            <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
            <p class="mt-4 text-subtitle-1 font-weight-medium">Cargando datos...</p>
          </div>
  
          <!-- Error al cargar datos -->
          <div v-else-if="error" class="text-center">
            <p class="text-error font-weight-medium">Error: {{ error }}</p>
            <v-btn @click="fetchData" color="primary" class="mt-4">Intentar nuevamente</v-btn>
          </div>
  
          <!-- Datos cargados -->
          <div v-else class="w-100">
            <v-row dense class="pa-1">
              <v-col
                v-for="(dato, index) in paginatedData"
                :key="index"
                cols="12"
                md="6"
                lg="3"
                class="mb-4"
              >
                <v-card class="pa-1" elevation="2" max-width="400">
                  <!-- Imagen del banner -->
                  <v-img
                    :src="dato.banner || 'https://via.placeholder.com/300x150'"
                    height="100"
                    cover
                    class="rounded position-relative"
                  ></v-img>
                  <div class="banner-text-overlay d-flex align-center justify-center">
                    <span class="font-weight-bold text-white text-center">
                      {{ dato.name || 'Sin nombre' }}
                    </span>
                  </div>
                  <v-card-subtitle class="text-caption grey--text text-center mt-2">
                    {{ dato.age || 'Era desconocida' }}
                  </v-card-subtitle>
                  <v-card-actions class="justify-end">
                    <v-btn color="orange lighten-2" text small @click="toggleShow(index)">
                      Ver más
                    </v-btn>
                  </v-card-actions>
  
                  <!-- Sección expandible -->
                  <v-expand-transition>
                    <div v-show="show[index]" class="mt-2">
                      <v-divider></v-divider>
                      <v-card class="pa-0 mt-2" elevation="0">
                        <!-- Mapa como fondo -->
                        <v-img
                          :src="dato.maps?.[0]?.mapImage || 'https://via.placeholder.com/300x150'"
                          height="250"
                          cover
                          class="rounded position-relative"
                        >
                          <div class="map-text-overlay d-flex align-center justify-center">
                            <p class="font-weight-bold text-white text-center">
                              {{ dato.longName || 'Descripción no disponible' }}
                            </p>
                          </div>
                        </v-img>
                        <v-card-text class="mt-2">
                          <p><strong>Audio:</strong></p>
                          <audio :src="dato.bgm.audioAsset" controls></audio>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>
            </v-row>
  
            <!-- Paginación -->
            <v-pagination
              v-model="currentPage"
              :length="totalPages"
              :total-visible="5"
              circle
              class="mt-1"
            ></v-pagination>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ModalEquipamiento',
    props: {
      dialogo: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        dialogoLocal: this.dialogo,
        datos: [],
        loading: false,
        error: null,
        show: [], // Para controlar qué elementos están abiertos
        currentPage: 1,
        itemsPerPage: 12, // Mostrar menos elementos por página
      };
    },
    computed: {
      // Datos paginados para mostrar según la página actual
      paginatedData() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.datos.slice(start, end);
      },
      // Número total de páginas
      totalPages() {
        return Math.ceil(this.datos.length / this.itemsPerPage);
      },
    },
    watch: {
      dialogo(newVal) {
        this.dialogoLocal = newVal;
      },
      dialogoLocal(newVal) {
        if (newVal && this.datos.length === 0) {
          this.fetchData();
        }
      },
    },
    methods: {
      closeModal() {
        this.dialogoLocal = false;
        this.$emit('update:dialogo', false);
      },
      async fetchData() {
        this.loading = true;
        this.error = null;
        const apiUrl = 'https://api.atlasacademy.io/export/NA/nice_war.json';
        try {
          const response = await axios.get(apiUrl);
          if (response && Array.isArray(response.data)) {
            this.datos = response.data;
            this.show = new Array(this.datos.length).fill(false);
          } else {
            this.error = 'La respuesta de la API no contiene datos válidos.';
          }
        } catch (err) {
          this.error = `Hubo un problema al cargar los datos: ${err.message}`;
        } finally {
          this.loading = false;
        }
      },
      toggleShow(index) {
        // Cierra todos los detalles abiertos y luego abre el seleccionado
        this.show = this.show.map((item, i) => i === index ? !item : false);
      },
      logDato(dato) {
        console.log(dato); // Método para depuración
      },
    },
  };
  </script>
  
  <style scoped>
  /* Fondo translúcido para texto del banner */
  .banner-text-overlay {
    width: 100%;
    color: white;
    background-color: rgba(0, 0, 0, 0.6); /* Fondo negro semitransparente */
    padding: 8px;
    border-radius: 0 0 8px 8px; /* Esquinas inferiores redondeadas */
  }
  
  /* Fondo translúcido para texto del mapa */
  .map-text-overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    color: white;
    background-color: rgba(0, 0, 0, 0.4); /* Fondo negro semitransparente */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
  }
  </style>
  