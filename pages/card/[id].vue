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
import {useRoute} from 'vue-router';

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
			product:
					{
						"id": "30bd8488-895b-4acb-a729-99bd4f7479a1",
						"name": "Giga Light MV 0530 LL   5L",
						"article": "72098681",
						"brand": null,
						"full_name": "Масло моторное синтетическое ADDINOL Giga Light MV 0530 LL 5л",
						"type": null,
						"unit": null,
						"weight": null,
						"packing": null,
						"property": null,
						"photo_ref": null,
						"photo_file": null,
						"description": null
					},
		}
	},
	async beforeMount() {
		const route = useRoute();
		//this.product = await $fetch(`/api/products/${route.params.id}`)
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