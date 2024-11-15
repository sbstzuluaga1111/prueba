<template>
  <v-container fluid class="pa-0">
    <v-img
      src="@/assets/Inicio.jpg"
      cover
      height="100vh"
      alt="Imagen de inicio"
    >
      <v-container
        fill-height
        fluid
        class="d-flex align-center justify-center "
        style="position: relative; z-index: 10;"
      >
        <v-row justify="center">
          <v-container class="d-flex justify-center">
            <v-col class="text-center" cols="12" md="auto">
              <v-hover v-slot:default="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  class="square-container"
                  :style="{
                    transform: isHovering ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease-in-out',
                    zIndex: 11
                  }"
                  tile
                  outlined
                >
                  <v-card-text class="d-flex align-center justify-center no-rotate">
                    <v-img
                      src="@/assets/logo-fgo.png"
                      cover
                      class="logo-outside"
                      alt="Logo"
                    />
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-container>
        </v-row>
      </v-container>
    </v-img>
  </v-container>
</template>

<script>
export default {
  name: 'HomeVista',
}
</script>

<style scoped>
.text-shadow-2 {
  text-shadow: 2px 2px 8px rgba(2, 2, 2, 0.089);
}

.overlay {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.square-container {
  background-color: transparent;
  border: 5px solid #42a5f5;
  padding: 5vw;
  width: 30vw;
  height: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg)!important;
  position: relative;
  margin: auto;
  max-width: 250px;
  max-height: 250px;
  box-shadow: 
    0 0 10px #ffffff, 
    0 0 20px #42a5f5, 
    0 0 30px #000000, 
    0 0 400px #42a5f5;
  transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.square-container:hover {
  box-shadow: 
    0 0 5px #42a5f5, 
    0 0 15px #ffffff, 
    0 0 25px #42a5f5, 
    0 0 500px #000000;
  transform: rotate(0deg)!important;
}

.no-rotate {
  transform: rotate(-45deg);
  transition: transform 0.5s ease-in-out;
}

.no-rotate:hover {
  transform: rotate(0deg);
}

.logo-outside {
  position: absolute;
  top: 0%;
  left: 0%;
  transform: scale(6);
  object-fit: contain;
  max-width: 150%;
  max-height: 350%;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .logo-outside {
    transform: scale(5);
  }
}

@media (min-width: 820px) and (max-width: 1180px) {
  .logo-outside {
    transform: scale(3);
  }
}

@media (max-width: 768px) {
  .logo-outside {
    transform: scale(3);
  }
}

@media (max-width: 480px) {
  .logo-outside {
    transform: scale(3);
  }
}

.text-shadow-2 {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}
</style>
