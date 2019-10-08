<template>
  <div class="container">
        <div v-if="products.length > 0">
          <h1 class="genre-title">Gezocht naar</h1>
        </div>
    <div class="card" v-for="product in products" :key="product.id">
      <VmProducts :product="product"></VmProducts>
    </div>
  </div>
</template>

<script>
import VmProducts from '../Products';
import { getByTitle } from '@/assets/filters';

export default {
  name: 'productsList',
  components: { VmProducts },

  data () {
    return {
      id: '',
      noProductLabel: 'Geen boeken gevonden',
      productsFiltered: []
    };
  },

  computed: {
    products () {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return "";
      }
    }
  },

  methods: {
    getProductByTitle () {
      let listOfProducts = this.$store.state.products,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    }
  }
};
</script>

<style lang="scss" scoped>
  .container {
    min-width: 100%;
    overflow: auto;
    white-space: nowrap;
  }

  .card {
    display: inline-block;
    text-align: center;
    margin: 16px 8px;
    max-width: auto;
  }
</style>
