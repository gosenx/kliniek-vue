const radio = {
  props: ["name", "label", "value"],
  computed: {
    radio: {
      get: function() {
        return this.value;
      },
      set: function() {
        // Communicate the change to parent component so that selectedValue can be updated
        this.$emit("change", this.label);
      },
    },
  },
};

export default radio;
