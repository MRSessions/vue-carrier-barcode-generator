<template>
  <NumberToGenerate :number-of-upcs="numberOfUpcs" @update-number-of-upcs="blah" />
  <UpcGenerator barcode-format="CODE128" :barcode-values="barCodes" />
</template>

<script lang="ts" setup>
import NumberToGenerate from "@/components/NumberToGenerate.vue";
import UpcGenerator from "@/components/UpcGenerator.vue";
import { ref, watch } from "vue";
import { useBarcode } from '@/composables/barcode'

const { setNumOfBarcodes } = useBarcode()

const numberOfUpcs = ref(1);
const barCodes = ref(setNumOfBarcodes(numberOfUpcs.value, "1Z21AR"))

watch(numberOfUpcs, (newX) => {
  barCodes.value = setNumOfBarcodes(newX, "1Z21AR")
});

function blah(number: string){
  numberOfUpcs.value = parseInt(number)
  console.log(number)
}
</script>
