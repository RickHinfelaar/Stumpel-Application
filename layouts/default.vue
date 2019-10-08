<template>
  <div>
    <VmHeader></VmHeader>
    <main>
      <nuxt/>
      <VmCheckoutModal></VmCheckoutModal>
    </main>
  </div>
</template>

<script>
import VmHeader from '@/components/header/Header';
import VmCheckoutModal from '@/components/modal/Checkout';

export default {
  components: {
    VmHeader,
    VmCheckoutModal
  }
}
</script>
