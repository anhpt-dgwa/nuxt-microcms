<template>
  <div class="input-form">
    <div class="value-button decrease" id="decrease" @click="decreaseQuantity">-</div>
    <input type="number" id="number" v-model.number="quantity" />
    <div class="value-button increase" id="increase" @click="quantity++">+</div>
  </div>
</template>

<script>
export default {
  name: "QuantityInput",
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
  watch: {
    quantity: function (newVal, oldVal) {
      if (newVal > 0) {
        this.$emit("onchange", newVal);
      } else {
        this.quantity = "";
        this.$emit("onchange", 0);
      }
    },
  },
};
</script>