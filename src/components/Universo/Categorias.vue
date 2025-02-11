<template>
  <div class="categorias">
    
 <h2>Categorías:</h2>
    <v-row class="tarjetas">

     

    
          
          
              <EquipamientoCard @abrir-modal="mostrarModalEquipamiento" />
              <LugaresCard @abrir-modal="mostrarModalLugares" />
              <EventosCard></EventosCard>
              <CommandCard></CommandCard>
              <ItemsCard></ItemsCard>
              <MaterialCard></MaterialCard>
              <MissionsCard></MissionsCard>
              <IllustratorCard></IllustratorCard>
              <MysticCard></MysticCard>
              <AssetsCard></AssetsCard>
              <VoiceActorCard></VoiceActorCard>
              <BGMCard></BGMCard>
              
              
      
    </v-row>

    <!-- Modal específico para Equipamiento -->
    <ModalEquipamiento
      :dialogo="dialogoEquipamiento"
      @update:dialogo="dialogoEquipamiento = $event"
    />

    <!-- Modal específico para Lugares -->
    <ModalLugares
      :dialogo="dialogoLugares"
      @update:dialogo="dialogoLugares = $event"
    />
  </div>
</template>

<script>
import ModalEquipamiento from './ModalsCategorias/ModalEquipamiento.vue';


import ModalLugares from './ModalsCategorias/ModalLugares.vue';


import EquipamientoCard from './CardsCategorias/Equipamiento.vue';
import LugaresCard from './CardsCategorias/Lugares.vue';
import EventosCard from './CardsCategorias/Eventos.vue';
import CommandCard from './CardsCategorias/Command.vue';
import ItemsCard from './CardsCategorias/Items.vue';
import MaterialCard from './CardsCategorias/Material.vue';
import MissionsCard from './CardsCategorias/Missions.vue';
import IllustratorCard from './CardsCategorias/Illustrator.vue';
import VoiceActorCard from './CardsCategorias/VoiceActor.vue';
import BGMCard from './CardsCategorias/BGM.vue';
import AssetsCard from './CardsCategorias/Assets.vue';
import MysticCard from './CardsCategorias/Mystic.vue';

export default {
  name: 'CategoriasComponent',
  components: {
    ModalEquipamiento,
    EquipamientoCard,
    LugaresCard,
    ModalLugares,
    EventosCard,
    CommandCard,
    ItemsCard,
    MaterialCard,
    MissionsCard,
    IllustratorCard,
    VoiceActorCard,
    BGMCard,
    AssetsCard,
    MysticCard,
  },
  data() {
    return {
      dialogoEquipamiento: false, // Control de apertura para el modal de Equipamiento
      dialogoLugares: false,      // Control de apertura para el modal de Lugares
    };
  },
  methods: {
    mostrarModalEquipamiento() {
      this.dialogoEquipamiento = true; // Abrir el modal de Equipamiento
    },
    mostrarModalLugares() {
      this.dialogoLugares = true; // Abrir el modal de Lugares
    },
  },
};
</script>

<style scoped>
.tarjetas {
  margin-top: 10px;
  border-radius: 1rem;
  
  display: flex;
  justify-content: center;
  height: 780px;
  
}

</style>
