<template>
  <label :for="label" class="time-badge" :class="radioButton == label ? 'active' : ''">
    <input hidden :id="label" type="radio" :value="label" :name="name" v-model="radioButton" />
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  props: ["name", "label", "value"],
  computed: {
    radioButton: {
      get: function() {
        return this.value;
      },
      set: function() {
        this.$emit("change", this.label);
      },
    },
  },
};
</script>
