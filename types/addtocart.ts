import QuantityInput from "../components/QuantityInput.vue";
export default {
  name: "AddToCart",
  components: QuantityInput,
  props: {
    cartItem: Object,
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    addToCart() {
      if (this.quantity > 0) {
        this.$store.dispatch("addOrIncrease", {
          item: this.cartItem,
          quantity: this.quantity,
        });
        if (this.isLoggedIn) {
          this.$store.dispatch("updateDatabaseCart");
        }
      }
    },
    updateQuantity(quantity) {
      this.quantity = quantity;
    },
  },
  data() {
    return {
      quantity: 1,
    };
  },
};