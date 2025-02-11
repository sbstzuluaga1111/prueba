<template>
  <v-app id="inspire" class="d-flex flex-column" style="height: 100vh;">
    <v-app-bar app dense class="elevation-4 d-flex align-center" style="height: 75px;">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title ml-3>Pracita de vue</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer 
  v-model="drawer" 
  :temporary="isMobile" 
  hide-overlay
  :style="{
    ...drawerStyle,
    borderTopRightRadius: '2rem',
  }"
>


      <v-list>
        <v-list-item @click="goTo('/inicio')">
  <v-list-item-content>
    <v-list-item-title class="d-flex align-center">
      <v-list-item-icon>
        <svg-icon type="mdi" :path="path"></svg-icon>
      </v-list-item-icon>
      Inicio
    </v-list-item-title>
  </v-list-item-content>
</v-list-item>


<v-list-item @click="goTo('/universo')">
  <v-list-item-content>
    <v-list-item-title class="d-flex align-center">
      <v-list-item-icon>
        <svg-icon type="mdi" :path="mdiEarth"></svg-icon>
      </v-list-item-icon>
      Universo
    </v-list-item-title>
  </v-list-item-content>
</v-list-item>

<v-list-item @click="goTo('/personajes')">
  <v-list-item-content>
    <v-list-item-title class="d-flex align-center">
      <v-list-item-icon>
        <svg-icon type="mdi" :path="mdiAccount"></svg-icon>
      </v-list-item-icon>
      Personajes
    </v-list-item-title>
  </v-list-item-content>
</v-list-item>

        

  </v-list>
    </v-navigation-drawer>

    <!-- Main Content Area -->
    <v-main fill-height :style="mainContentStyle">
      <v-container fluid pa-0>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHome } from '@mdi/js';
import { mdiEarth } from '@mdi/js';
import { mdiAccount } from '@mdi/js';

export default {
  name: "NavGeneral",

  components: {
    SvgIcon
  },
  data() {
    return {
      drawer: false,
      path: 
      mdiHome,
      mdiEarth,
      mdiAccount,

    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    drawerStyle() {
      let topPosition = '80px';
      if (this.$vuetify.breakpoint.smAndDown) {
        topPosition = '70px';
      } else if (this.$vuetify.breakpoint.mdAndUp) {
        topPosition = '75px';
      }
      return {
        top: topPosition,
      };
    },
    mainContentStyle() {
      let height = 'calc(100vh - 80px)';
      if (this.isMobile) {
        return {
          paddingTop: '80px',
          height: height,
          
        };
      } else {
        return {
          transition: 'margin-left 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55), width 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
          marginLeft: this.drawer ? '256px' : '0',
          width: this.drawer ? 'calc(100% - 256px)' : '100%',
          height: height,
          
        };
      }
    },
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    goTo(route) {
      if (this.$router.currentRoute.path !== route) {
        this.$router.push(route);
      }
    },
  },
};
</script>

<style scoped src="../css/VistasCss/NavGeneral.css"></style>
