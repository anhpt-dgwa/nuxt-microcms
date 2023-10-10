<template>
  <div class="cart-wrapper">
    <div class="products">
      <div v-for="item in $store.state.cart" :key="item.id" class="product-box">
        <div>
          <img :src="item.image" alt="" />
        </div>
        <div class="product-parts">
          <div>
            <h4>{{ item.title }}</h4>
            <h5>QTY: {{ item.quantity }}</h5>
            <h5>SUBTOTAL: {{ item.price }} €</h5>
          </div>
          <button class="remove-btn" @click="removeItem(item)">
            <IconBase icon-name="remove-item" strokeColor="#000000">
              <IconTrash />
            </IconBase>
          </button>
        </div>
      </div>
    </div>
    <ValidationObserver
      v-slot="{ invalid }"
      tag="div"
      v-if="$store.state.cart.length != 0"
      class="payment"
    >
      <div class="data-form">
        <h2>MY DATA</h2>
        <InputField
          class="input-field"
          type="text"
          label="First Name"
          autocomplete="on"
          veeValidateRules="required|alpha_spaces"
          v-model="buyer.firstName"
        />
        <InputField
          class="input-field"
          type="text"
          label="Last Name"
          autocomplete="on"
          veeValidateRules="required|alpha_spaces"
          v-model="buyer.lastName"
        />
        <InputField
          class="input-field"
          type="email"
          label="Email"
          autocomplete="on"
          veeValidateRules="required|email"
          v-model="buyer.email"
        />
        <InputField
          class="input-field"
          type="text"
          label="Address"
          autocomplete="on"
          veeValidateRules="required|alpha_spaces"
          v-model="buyer.address"
        />
        <InputField
          class="input-field"
          type="text"
          label="Country"
          autocomplete="on"
          veeValidateRules="required|alpha_spaces"
          v-model="buyer.country"
        />
        <div class="payment-section">
          <h2>PAYMENT AND SHIPPING</h2>
          <div class="payment-method">
            <h4>Payment System</h4>
            <div class="payment-options">
              <input class="ratio" type="radio" id="credit" name="payment" />
              <label for="credit">Credit Card</label>
            </div>
            <div class="payment-options">
              <input class="ratio" type="radio" id="bizum" name="payment" />
              <label for="bizum">Bizum</label>
            </div>
          </div>
          <div class="comments">
            <h4>Comments about the order</h4>
            <textarea
              id=""
              placeholder="Include a comment about the order, transport, schedules or others"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="basket">
        <h2>MY BASKET ({{ $store.getters.getCartTotalProducts }})</h2>
        <div class="total">TOTAL : {{ $store.getters.getTotal }} €</div>
        <div class="promotional-code">
          <h4>Promotional Code</h4>
          <input
            type="text"
            placeholder="Do you have a promo code?"
            v-model="code"
          />
          <button type="submit" @click="checkCoupon(code)">Apply</button>
        </div>
        <div v-if="value" class="final-price-wrap">
          <div>{{ couponMessage }}</div>
          <div class="final-price">{{ $store.getters.getFinalPrice }} €</div>
        </div>
        <div v-else class="error">{{ couponMessage }}</div>
        <Nuxt-link to="/confirmation">
          <button :disabled="invalid" @click="emptyCart" class="confirm">
            Confirm Purchase
          </button>
        </Nuxt-link>
      </div>
    </ValidationObserver>
    <div v-else class="cart-empty">
      <h1>Your Cart is Empty</h1>
      <nuxt-link to="/">
        <button>Continue Shopping</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import IconBase from "~/components/IconBase.vue";
import IconTrash from "~/components/icons/IconTrash.vue";
import { ValidationObserver } from "vee-validate";

export default {
  name: "Cart",
  components: {
    IconBase,
    IconTrash,
    ValidationObserver,
  },
  data() {
    return {
      value: false,
      code: "",
      couponMessage: "",
      coupon: this.$store.state.coupon,
      buyer: {
        //if currentuser is defined ? then the value is "currentuser.firstname" else by default will be empty string
        firstName: this.$store.state.currentUser?.firstName ?? "",
        lastName: this.$store.state.currentUser?.lastName ?? "",
        email: this.$store.state.currentUser?.email ?? "",
        address: "",
        country: "",
      },
    };
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    removeItem(item) {
      this.$store.commit("removeItem", item);
      if (this.isLoggedIn) {
        this.$store.dispatch("updateDatabaseCart");
      }
    },
    emptyCart() {
      this.$store.commit("emptyCart");
      if (this.isLoggedIn) {
        this.$store.dispatch("updateDatabaseCart");
      }
    },
    checkCoupon(input) {
      if (this.coupon.code === input) {
        this.couponMessage =
          "Great! " + this.coupon.discount + "% has been applied.";
        this.value = true;
        this.code = "";
      } else {
        this.couponMessage = "Sorry, that coupon does not exist.";
        this.value = false;
        this.code = "";
      }
    },
  },
};
</script>