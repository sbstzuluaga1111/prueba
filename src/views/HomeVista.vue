<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Pracita de vue</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer 
      v-model="drawer" 
      class="custom-drawer" 
      :temporary="isMobile" 
      :style="drawerStyle"
      hide-overlay
    >
      <v-list>
        <v-list-item @click="goTo('/home')">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item @click="goTo('/universo')">
          <v-list-item-title>Universo</v-list-item-title>
        </v-list-item>

        <v-list-item @click="goTo('/personajes')">
          <v-list-item-title>Personajes</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main :style="mainContentStyle">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    drawerStyle() {
      let topPosition = '64px';
      if (this.$vuetify.breakpoint.smAndDown) {
        topPosition = '55px';
      } else if (this.$vuetify.breakpoint.mdAndUp) {
        topPosition = '60px';
      }
      return {
        top: topPosition,
      };
    },
    mainContentStyle() {
      if (this.isMobile) {
        return {
          paddingTop: '64px',
        };
      } else {
       
        return {
          transition: 'margin-left 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55), width 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
          marginLeft: this.drawer ? '256px' : '0',
          width: this.drawer ? 'calc(100% - 256px)' : '100%',
        };
      }
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    goTo(route) {
      if (this.$router.currentRoute.path !== route) {
        this.$router.push(route);
      }
    }
  }
};
</script>

<style scoped>
main.v-main {
  padding: 0 !important;
}

.main-content {
  transition: margin-left 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55), width 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Transición personalizada */
  margin-left: 0; /* Sin margen al principio */
  padding-top: 0px; /* Ajusta según la altura de la barra de navegación */
  height: 100vh; /* Esto asegura que el contenido ocupe toda la altura */
}

/* Estilo para la barra de navegación fija */
.v-app-bar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20; /* Asegura que quede encima del contenido */
}

/* Sidebar que ocupa toda la altura */
.custom-drawer {
  height: calc(100vh - 64px); /* Esto hace que el sidebar ocupe todo el espacio restante debajo de la barra de navegación */
  width: 256px;  /* Ajusta este valor al tamaño del drawer */
  position: fixed; /* Sidebar fijo debajo de la barra de navegación */
  z-index: 15; /* Coloca el sidebar encima del contenido */
  transform-origin: left center; /* Define el punto de origen de la animación (izquierda) */
  transform: scaleX(0); /* Comienza con el sidebar invisible (colapsado) */
  transition: width 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55), transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Transición personalizada para width y scaleX */
}

.custom-drawer.v-navigation-drawer--temporary.v-navigation-drawer--open {
  transform: scaleX(1); /* Cuando está abierto, se escala a su tamaño normal */
}
</style>
