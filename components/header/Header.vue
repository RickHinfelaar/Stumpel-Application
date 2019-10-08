<template>
  <div>
    <nav class="navbar">
      <!-- LOGO -->
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <h1 class="title"></h1>
        </nuxt-link>
      </div>

      <!-- SEARCH -->
      <div class="search">
        <VmSearch></VmSearch>
      </div>

      <!-- WINKELWAGEN -->
      <div class="navbar-end">
        <div class="navbar-item shopping-cart" @click="showCheckoutModal">
          <span class="icon">
            <i class="fa fa-shopping-cart fa-2x"></i>
          </span>
          <span id="cart-number" :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{ numProductsAdded }}</span>
        </div>
      </div>
    </nav>

    <!-- ZORGT VOOR PRODUCTS NAAR BENEDEN -->
    <div class="margin-nav">
    </div>

  </div>
</template>

<script>
  import VmSearch from '../search/Search';
  export default {
    name: 'VmHeader',
    data () {
      return {
        isCheckoutActive: false,
      }
    },
    components: {
      VmSearch,
    },
    computed: {
      numProductsAdded () {
        return this.$store.getters.productsAdded.length;
      }
    },
    methods: {
      showCheckoutModal () {
        this.$store.commit('showCheckoutModal', true);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    background-color: white;
    z-index: 100;
    width: 100%;
    opacity: 0.98;
    padding-bottom: 4px;
    box-shadow: 4px 4px 6px #383838;
    display: flex;
    align-items: stretch;
  }

  .title {
    background: url('../../static/stumpel-logo.png') no-repeat;
    background-position: 100% 100%;
    background-size: 240px;
    width: 240px;
    height: 80px;
  }

  .search {
    margin-top: 10px;
    width: 100%;
  }

  .shopping-cart {
    padding-right: 24px;
    top: 20px;
  }

  .margin-nav {
    padding-bottom: 100px;
  }
</style>
