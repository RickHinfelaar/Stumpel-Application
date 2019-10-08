<template>
  <div>
    <VmProductsList></VmProductsList>
    <VmProductsListTop></VmProductsListTop>
    <VmProductsListThrillers></VmProductsListThrillers>
    <VmProductsListLiteratuur></VmProductsListLiteratuur>
  </div>
</template>

<script>
import VmProductsList from '@/components/products_list/ProductsListContainerSearch';
import VmProductsListTop from '@/components/products_list/ProductsListContainerTop';
import VmProductsListThrillers from '@/components/products_list/ProductsListContainerThrillers';
import VmProductsListLiteratuur from '@/components/products_list/ProductsListContainerLiteratuur';




export default {
  name: 'index',
  components: {
    VmProductsList,
    VmProductsListTop,
    VmProductsListThrillers,
    VmProductsListLiteratuur,
  },
};
</script>
