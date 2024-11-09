<template>
  <v-container>
  <h1 class="d-flex justify-center">Hola mundo</h1>
<div class="d-flex justify-center">
  <svg-icon type="mdi" :path="path"></svg-icon>
</div>


<div>
    <div class="text-center mb-4">
      <v-btn
        color="primary"
        @click="alert = !alert"
      >
        Toggle
      </v-btn>
    </div>
    <v-alert
      :value="alert"
      color="pink"
      dark
      border="top"
      icon="mdi-home"
      transition="scale-transition"
    >
      Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.

      Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
    </v-alert>
  </div>
  </v-container>
</template>

<script> 
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccount } from '@mdi/js';

export default {

    name: 'HelloWorld',

components: {
    SvgIcon
},

data() {
    return {
          path: mdiAccount,
          alert: true,
    }
}
}
</script>
