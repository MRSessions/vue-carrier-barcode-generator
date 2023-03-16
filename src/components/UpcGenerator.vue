<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex text-center fill-height">
      <!-- <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
            <v-barcode format="CODE128" :width=2 value="9361289728017075240070" />
          <v-barcode :format="barcodeFormat" :width=2 value="9361289728999999999999" />
        </v-col>
      </v-row> -->
      <v-expansion-panels variant="accordion" v-model="panel">
      <v-expansion-panel
        v-for="barcodeValue, key in barcodeValues"
        :key="key"
      >
    <v-expansion-panel-title expand-icon="mdi-menu-down">
          {{ barcodeValue }}
        </v-expansion-panel-title>
        <v-expansion-panel-text expand-icon="mdi-menu-down">
          <v-barcode :format="barcodeFormat" :width=2 :value="barcodeValue" />
        </v-expansion-panel-text>
    </v-expansion-panel>
    </v-expansion-panels>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { VBarcode, vBarcodeProps } from "vbarcode";
import { ref } from "vue";

const panel = ref([0])

defineProps({
  barcodeFormat: {
    type: vBarcodeProps.format.type,
    required: true
  },
  barcodeValues: {
    type: Array<string>,
    required: true
  }
})
</script>
