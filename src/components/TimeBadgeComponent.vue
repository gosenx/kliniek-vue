<template>
  <label :for="label" class="time-badge" :class="radio == label ? 'active' : ''">
    <input hidden :id="label" type="radio" :value="label" :name="name" v-model="radio" />
    <span>{{ label }}</span>
  </label>
</template>

<script>
import radioButtonMixin from "@/mixins/RadioButton";

export default {
  mixins: [radioButtonMixin],
};
</script>
