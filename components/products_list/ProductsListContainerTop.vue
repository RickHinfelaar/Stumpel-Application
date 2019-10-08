<template>
  <div class="container">
    <div v-if="products.length > 0">
      <h1 class="genre-title">Top Boeken</h1>
    <div class="card" v-for="product in products" :key="product.id">
      <VmProducts :product="product"></VmProducts>
    </div>
    </div>


  </div>
</template>

<script>
import VmProducts from '../Products';

export default {
  name: 'productsList',
  components: { VmProducts },

  data () {
    return {
      id: '',
    };
  },

  computed: {
    products () {
      if (this.$store.state.userInfo.hasSearched) {
        return "";
      } else {
        return this.$store.state.products;
      }
    }
  }
}
</script>

<style>
  .genre-title {
    font-size: 32px;
    padding: 8px;
    margin-bottom: -8px;
  }
</style>

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
