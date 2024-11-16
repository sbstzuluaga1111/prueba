<template>
    <div class="categorias">
      <h2>Categorías:</h2>
  
      <v-row>

        <EquipamientoCard @abrir-modal="mostrarModal" />
        <LugaresCard @abrir-modal="mostrarModal" />
        <EventosCard @abrir-modal="mostrarModal" />
        <CommandCard @abrir-modal="mostrarModal" />
        <MaterialCard @abrir-modal="mostrarModal" />
        <MysticCard @abrir-modal="mostrarModal" />
        <ItemsCard @abrir-modal="mostrarModal" />
        <MissionsCard @abrir-modal="mostrarModal" />
        <IllustratorCard @abrir-modal="mostrarModal" />
        <VoiceCard @abrir-modal="mostrarModal" />
        <BGMCard @abrir-modal="mostrarModal" />
       <AssetCard @abrir-modal="mostrarModal" />


      </v-row>
  
    <ModalUniverso
      :dialogo="dialogo"
      :categoriaSeleccionada="categoriaSeleccionada"
      :loading="loading"
      :error="error"
      :datos="datos"
      @update:dialogo="dialogo = $event"
    />
  </div>
</template>

<script>
import ModalUniverso from './ModalUniverso.vue';
import EquipamientoCard from './CardsCategorias/Equipamiento.vue';
import LugaresCard from './CardsCategorias/Lugares.vue';
import EventosCard from './CardsCategorias/Eventos.vue';
import CommandCard from './CardsCategorias/Command.vue';
import MaterialCard from './CardsCategorias/Material.vue';
import MysticCard from './CardsCategorias/Mystic.vue';
import ItemsCard from './CardsCategorias/Items.vue';
import MissionsCard from './CardsCategorias/Missions.vue';
import IllustratorCard from './CardsCategorias/Illustrator.vue';
import VoiceCard from './CardsCategorias/VoiceActor.vue';
import BGMCard from './CardsCategorias/BGM.vue';
import AssetCard from './CardsCategorias/Assets.vue';

export default {
  name: 'CategoriasComponent',
  components: {
    ModalUniverso,
    EquipamientoCard,
    LugaresCard,
    EventosCard,
    CommandCard,
    MaterialCard,
    MysticCard,
    ItemsCard,
    MissionsCard,
    IllustratorCard,
    VoiceCard,
    BGMCard,
    AssetCard,
  },
  data: () => ({
    dialogo: false,
    datos: [],
    loading: false,
    error: null,
    categoriaSeleccionada: "",
  }),
  methods: {
    mostrarModal(categoria) {
      this.categoriaSeleccionada = categoria;
      this.dialogo = true;
      this.cargarDatos();
    },
    cargarDatos() {
      this.loading = true;
      this.error = null;

      setTimeout(() => {
        this.loading = false;
        this.datos = ["Dato 1", "Dato 2", "Dato 3"];
      }, 2000);
    },
  }
};
</script>

  
  <style scoped>
  
  </style>
  