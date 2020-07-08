<template>
  <div class="specialty-card relative" :class="radio == label ? 'active' : ''">
    <label :for="label" class="cursor-pointer">
      <h3 class="mb-1 text-lg font-semibold">Medicina interna</h3>
      <div class="text-sm">
        O especialista desta area avalia o doente adulto no seu todo, relacionando a complexidade do corpo humano e
        interagindo com os vários problemas que o podem afetar.
      </div>
      <input
        :id="label"
        :name="name"
        :value="label"
        v-model="radio"
        class="absolute right-0 top-0 mt-2 mr-2"
        type="radio"
      />
    </label>
  </div>
</template>
<script>
import radioButtonMixin from "@/mixins/RadioButton";

export default {
  mixins: [radioButtonMixin],
};
</script>
