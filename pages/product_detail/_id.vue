<template>
  <div class="section">
    <div class="card is-clearfix columns">
      <div class="back-button">
        <nuxt-link to="/">
         <i class="fa fa-times fa-3x"></i>
       </nuxt-link>
     </div>
        <figure class="card-image is-480x480 column is-one-thirds">
          <img class="book-image" v-bind:src="product.image">
        </figure>
        <div class="card-content column is-two-thirds">
          <div class="card-content__title">
            <h2 class="title is-4">{{ product.title }}
            </h2>
          </div>
          <div class="card-content__text">
            <p>
                {{ product.description }}
            </p>
            <p>
                {{ product.descriptionSecond }}
            </p>
          </div>
          <div class="card-content__price is-pulled-left">
            <span class="title is-3"><strong>{{ product.price }}&euro;</strong></span>
          </div>
          <div class="card-content__btn is-pulled-right">
            <button class="button add-button" v-if="!isAddedBtn" @click="addToCart(product.id)">{{ addToCartLabel }}</button>
            <button class="button is-text" v-if="isAddedBtn" @click="removeFromCart(product.id)">{{ removeFromCartLabel }}</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product_detail-id',

  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },

  data () {
    return {
      addToCartLabel: 'Voeg toe aan winkelwagen',
      removeFromCartLabel: 'Verwijder uit winkelwagen',
      product: {},
      selected: 1,
      quantityArray: []
    };
  },

  mounted () {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
    this.selected = this.product.quantity;

    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }
  },

  computed: {
    isAddedBtn () {
      return this.product.isAddedBtn;
    }
  },

  methods: {
    addToCart (id) {
      let data = {
        id: id,
        status: true
      }
      this.$store.commit('addToCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    removeFromCart (id) {
      let data = {
        id: id,
        status: false
      }
      this.$store.commit('removeFromCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    onSelectQuantity (id) {
      let data = {
        id: id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
    },
    saveToFavorite (id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit('addToFavourite', id);
      } else {
        this.$store.commit('showLoginModal', true);
      }
    },
    removeFromFavourite (id) {
      this.$store.commit('removeFromFavourite', id);
    }
  }
};
</script>

<style lang="scss" scoped>
.fa-times {
  color: #1A3D73;
  position: absolute;
  top: -1px;
  right: 4px;
  z-index: 100;
}
  .section {
    padding-right: 0;
    padding-top: 24px;
  }
  .card-content {
    padding: 15px 10px 15px 10px;

    &__text {
      margin: 15px 0;
    }
    &__reviews {
      display: inline-block;
      width: 100%;
      margin-bottom: 10px;
    }
  }

  .card-image {
    text-align: center;
    img {
      height: 400px;
    }
  }

  .add-button {
    background-color: #F8991C;
    color: white;
  }

  .button {
    margin-bottom: 10px;
  }
</style>
