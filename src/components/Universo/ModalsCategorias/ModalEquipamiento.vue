<template>
  <v-dialog v-model="dialogoLocal" fullscreen>
    <v-card class="modal-card">
      <v-card-title class="d-flex justify-space-between align-center">
        <span>Datos de Equipamiento</span>
        <v-btn icon @click="closeModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="d-flex justify-center align-center">
        <!-- Cargando datos -->
        <div v-if="loading" class="loading-overlay">
          <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
          <p>Cargando datos...</p>
        </div>

        <div v-else-if="error">
          <div>Error: {{ error }}</div>
          <v-btn @click="fetchData" color="primary">Intentar nuevamente</v-btn>
        </div>

        <div v-else>
          <v-row dense class="pa-2">
  <v-col
    v-for="(dato, index) in paginatedData"
    :key="index"
    cols="12" sm="6" md="4" lg="2"
    
    @click="logDato(dato)"
  >
    <v-card class="pa-2" max-width="100%">
      <v-img
        height="150px"
        :src="getMainImage(dato)"
        cover
      ></v-img>
      <v-card-title>{{ dato.name || 'Sin nombre' }}</v-card-title>
      <v-card-subtitle>Rareza: {{ dato.rarity || 'Desconocida' }}</v-card-subtitle>
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          text
          @click="toggleShow(index)"
        >
          Ver más
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show[index]">
          <v-divider></v-divider>
          <v-card-text>
            <p><strong>Coste:</strong> {{ dato.cost || 'N/A' }}</p>
            <p><strong>HP Base:</strong> {{ dato.hpBase || 'N/A' }}</p>
            <p><strong>ATK Base:</strong> {{ dato.atkBase || 'N/A' }}</p>
            <p><strong>Tipo de Equipamiento:</strong> {{ dato.type || 'N/A' }}</p>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</v-row>

          <v-pagination
            v-model="currentPage"
            :length="totalPages"
            :total-visible="7"
            circle
          ></v-pagination>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
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
      show: [],
      currentPage: 1,
      itemsPerPage: 24,
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
      const apiUrl = 'https://api.atlasacademy.io/export/NA/nice_equip.json';
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
    // Método para obtener la imagen principal
    getMainImage(dato) {
      // Accedemos a las imágenes del equipamiento y devolvemos la primera
      if (dato.extraAssets?.charaGraph?.equip && Object.keys(dato.extraAssets.charaGraph.equip).length > 0) {
        const equipImages = Object.values(dato.extraAssets.charaGraph.equip);
        return equipImages[0];  // Devolvemos la primera imagen de la lista
      }
      // Si no hay imágenes, mostramos una imagen predeterminada
      return 'https://via.placeholder.com/200?text=Imagen+no+disponible';
    },
    toggleShow(index) {
      this.$set(this.show, index, !this.show[index]);
    },
    logDato(dato) {
      console.log(dato); // Método para hacer el console.log de manera controlada
    },
  },
};
</script>

<style scoped>
.equip-img {
  width: 100%;
  height: auto;
  margin-top: 10px;
}

.loading-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
