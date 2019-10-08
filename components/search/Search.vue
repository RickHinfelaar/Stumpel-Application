<template>
	<p class="control">
		<input
			class="input-search"
			type="text"
			v-model="value"
			:placeholder="placeholder"
			@keyup="search(value)"
			onfocus="this.select();"
		>
	</p>
</template>

<script>
export default {
  name: 'search',
	data () {
		return {
			value: ''
		}
	},

	computed: {
		placeholder () {
				return 'Zoek naar boeken...';
		}
	},

	methods: {
		search (value) {
			if (value.length > 1) {
				this.$store.commit('setHasUserSearched', true);
				this.$store.commit('setProductTitleSearched', value);
			} else {
				this.$store.commit('setHasUserSearched', false);
				this.$store.commit('setProductTitleSearched', '');
			}
		}
	}
}
</script>

<style>
.input-search {
  font-size: 40px;
  height: 80px;
  text-align: center;

  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid blue;
  transition: ease-in 0.15s;


	width: 100%;
  user-select: all;
}

</style>
