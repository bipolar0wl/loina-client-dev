<template>
	<div class="card">
		<div class="card__body">
			<div class="flex">
				<label for="name">Название товара</label>
				<InputText id="name" v-model="product.name"/>
			</div>
			<div class="flex">
				<label for="short-description">Краткое описание</label>
				<Textarea id="short-description" v-model="product.full_name" rows="5" cols="30"/>
			</div>
			<div class="flex">
				<label for="full-description">Полное описание</label>
				<Editor id="full-description" v-model="product.description" editorStyle="height: 240px"/>
			</div>
		</div>
		<div class="card__menu">
			<CatalogMenu :select-on="true"/>
			<Image
				src="./assets/no_image.webp"
				preview
			/>
		</div>
	</div>
</template>

<script>
import Editor from 'primevue/editor';
import CatalogMenu from '/components/catalog/menu.vue';
import { useRoute } from 'vue-router';

definePageMeta({
	layout: 'header'
})
export default {
	name: "card",
	components: {
		Editor,
		CatalogMenu,
	},
	data() {
		return {
			product: {},
		}
	},
	async beforeMount(){
		const route = useRoute();
		this.product = await $fetch(`http://127.0.0.1:8001/api/products/${route.params.id}`)
		// this.products = await $fetch('/api/products')
	},
}
</script>

<style scoped lang="scss">
.card {
	display: flex;
	justify-content: space-between;
	align-items: start;

	.card__body {
		grid-area: body;
		display: grid;
		gap: 10px;
		padding: 10px;
	}

	.card__menu {
		grid-area: menu;
		display: flex;
		gap: 10px;
		padding: 10px;
		flex-direction: column;
		align-items: center;
	}
}

.flex {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
</style>