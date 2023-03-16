<template>
  <v-row class="d-flex justify-center">
    <v-col cols="auto">
      <v-text-field
        label="Number to Generate"
        type="number"
        v-model="numOfBarcodes"
        @update:model-value="$emit('update-number-of-upcs', numOfBarcodes)"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  numberOfUpcs: {
    type: Number,
    required: true
  }
})

const numOfBarcodes = ref(props.numberOfUpcs)

</script>
