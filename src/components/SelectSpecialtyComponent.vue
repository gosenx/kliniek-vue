<template>
  <div class="specialty-card relative" :class="radio == label ? 'active' : ''">
    <label :for="specialty.slug" class="cursor-pointer">
      <h3 class="mb-1 text-lg font-semibold">{{ specialty.name }}</h3>
      <div class="text-sm">{{ specialty.description }}</div>
      <input
        :id="specialty.slug"
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

  props: {
    specialty: {
      type: Object,
      default: () => {
        return {
          id: 1,
          name: "Medicina Interna",
          slug: "medicina-interna-",
          description: "O especialista desta area avalia o doente adulto no seu todo.",
        };
      },
    },
  },

  data() {
    return {
      label: this.specialty.id,
    };
  },
};
</script>
