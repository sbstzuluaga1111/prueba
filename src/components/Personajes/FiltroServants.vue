<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="6" md="4">
        <v-select
          v-model="selectedRarity"
          :items="rarities"
          label="Selecciona Rareza"
          item-text="text"
          item-value="value"
          return-object
        />
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-select
          v-model="selectedClass"
          :items="classes"
          label="Selecciona Clase"
          item-text="text"
          item-value="value"
          return-object
        />
      </v-col>
    </v-row>

    <CardsServants :servants="filteredServants" :loading="loading" />


    <v-row v-if="loading">
      <v-col class="d-flex justify-center">
        <v-progress-circular indeterminate color="primary" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardsServants from "@/components/Personajes/CardsServants.vue";

export default {
  name: "FiltroServants",

  components: {
    CardsServants,
  },

  props: {
    servants: Array,
    loading: Boolean,
  },
  data() {
    return {
      selectedRarity: null,
      selectedClass: null,
      rarities: [
        { text: "Rareza 1", value: 1 },
        { text: "Rareza 2", value: 2 },
        { text: "Rareza 3", value: 3 },
        { text: "Rareza 4", value: 4 },
        { text: "Rareza 5", value: 5 },
      ],
      classes: [
        { text: "Saber", value: "Saber" },
        { text: "Archer", value: "Archer" },
        { text: "Lancer", value: "Lancer" },
        { text: "Rider", value: "Rider" },
        { text: "Assassin", value: "Assassin" },
        { text: "Caster", value: "Caster" },
        { text: "Berserker", value: "Berserker" },
        { text: "Alter Ego", value: "Alter Ego" },
        { text: "Ruler", value: "Ruler" },
      ],
    };
  },
  computed: {
    filteredServants() {
      if (!this.servants) {
        return [];
      }
      return this.servants.filter((servant) => {
        const matchesRarity = this.selectedRarity ? servant.rarity === this.selectedRarity.value : true;
        const matchesClass = this.selectedClass ? servant.className.toLowerCase() === this.selectedClass.value.toLowerCase() : true;
        return matchesRarity && matchesClass;
      });
    },
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

<style scoped>
.v-card {
  margin-bottom: 16px;
}
</style>
