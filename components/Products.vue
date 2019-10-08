<template>
  <div>
    <div class="image">
        <img class="book-image" v-bind:src="product.image" alt="Product image" draggable="false">
    </div>

    <div class="description">
        <p class="title">{{ product.title }}</p>
        <p class="auteur">{{ product.auteur }}</p>
        <p><span class="price">&euro; {{ product.price }}</span></p>
    </div>

    <div class="buttons">
      <button class="button add-button" v-if="!product.isAddedToCart" @click="addToCart(product.id)">{{ addToCartLabel }}</button>
      <button class="button is-text" v-if="product.isAddedToCart" @click="removeFromCart(product.id, false)">{{ removeFromCartLabel }}</button>
    </div>

     <div class="select is-rounded is-small">
       <select @change="onSelectQuantity(product.id)" v-model="selected">
         <option v-for="quantity in quantityArray" :value="quantity">{{ quantity }}</option>
       </select>
    </div>

    <nuxt-link
      class="details"
      :to="{
        name: 'product_detail-id',
        params: {
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
          rating: product.ratings,
          reviews: product.reviews,
          isAddedBtn: product.isAddedBtn
        }
      }"
    >
  </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'products',
  props: ['product'],
  data () {
    return {
      addToCartLabel: 'In winkelwagen',
      removeFromCartLabel: 'Uit winkelwagen',
      selected: 1,
      quantityArray: []
    }
  },

  mounted () {
    for (let i = 1; i <= 5; i++) {
      this.quantityArray.push(i);
    }
    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity;
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
    }
  }
}
</script>

<style lang="scss" scoped>
 .details {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
 }

 .image {
   img {
     height: 330px;
     width: 220px;
     overflow: hidden;
     align-items: center;
   }
 }

  .description {
    text-align: center;
    overflow-wrap: break-word;

  }

  .title {
    font-size: 24px;
    padding-top: 8px;
    height: 40px;
    overflow-wrap: break-word;
  }

  .auteur {
    font-size: 18px;
    margin-top: -20px;
  }

   .button,
   .select {
     z-index: 11;
   }

   .button {
     top: 16px;
     margin-left: 10px;
   }

   .select {
     position: absolute;
     right: 12px;
     bottom: 12px;
   }

   .add-button {
     background-color: #F8991C;
     color: white;
   }
</style>
