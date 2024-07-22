<template>
	<Panel>
		<div class="catalog">
			<CatalogMenu/>
			<CatalogTable :products="products"/>
		</div>
	</Panel>
</template>

<script>
// Интерфейс каталога
import CatalogMenu from '/components/catalog/menu.vue'
import CatalogTable from '/components/catalog/table.vue'

export default {
	name: "Catalog",
	components: {
		CatalogMenu,
		CatalogTable,
	},
	data() {
		return {
			products: [
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
				{
					"id": "841c2e1f-c20e-4e5e-8f06-9354a5e5d41d",
					"name": "Giga Light MV 0530 LL   1L",
					"article": "72098607",
					"brand": null,
					"full_name": "Масло моторное синтетическое ADDINOL Giga Light MV 0530 LL 1л",
					"type": null,
					"unit": null,
					"weight": null,
					"packing": null,
					"property": null,
					"photo_ref": null,
					"photo_file": null,
					"description": null
				},
				{
					"id": "416a2667-58a4-11ed-ab47-000c29594b87",
					"name": "Getriebeoel GH 90 LS 205L",
					"article": "743105540000",
					"brand": null,
					"full_name": "Масло трансмиссионное ADDINOL Getriebeoel GH 90 LS 205л",
					"type": null,
					"unit": null,
					"weight": null,
					"packing": null,
					"property": null,
					"photo_ref": null,
					"photo_file": null,
					"description": null
				},
				{
					"id": "565ab3d8-dd93-11eb-8bec-001e67686f8d",
					"name": "Giga Light MV 030 205L",
					"article": "720969540000",
					"brand": null,
					"full_name": "Масло моторное синтетическое ADDINOL Giga Light MV 030 205л",
					"type": null,
					"unit": null,
					"weight": null,
					"packing": null,
					"property": null,
					"photo_ref": null,
					"photo_file": null,
					"description": null
				},
				{
					"id": "c5466e40-6105-11e9-a3bc-001e67686f8d",
					"name": "Additemp BG 1 18Kg",
					"article": "71705992",
					"brand": null,
					"full_name": "Смазка пластичная ADDINOL Additemp BG 1 18кг",
					"type": null,
					"unit": null,
					"weight": null,
					"packing": null,
					"property": null,
					"photo_ref": null,
					"photo_file": null,
					"description": null
				},
				{
					"id": "d80a8df9-ca3f-11e9-b309-001e67686f8d",
					"name": "ATF XN3  20L",
					"article": "744103630000",
					"brand": null,
					"full_name": "Масло трансмиссионное ADDINOL ATF XN 3 20л",
					"type": null,
					"unit": null,
					"weight": null,
					"packing": null,
					"property": null,
					"photo_ref": null,
					"photo_file": null,
					"description": null
				},
				{
					"id": "6e04b4bf-8289-11ea-965c-001e67686f8d",
					"name": "ECO Gear 460S 205L",
					"article": "741084540000",
					"brand": null,
					"full_name": "Масло трансмиссионное ADDINOL ECO Gear 460S 205L",
					"type": null,
					"unit": null,
					"weight": null,
					"packing": null,
					"property": null,
					"photo_ref": null,
					"photo_file": null,
					"description": null
				},
				{
					"id": "7d3381ce-e562-43d1-9360-6228de7b9d4f",
					"name": "Schmieroel CL  32  20L",
					"article": "74102063SO00",
					"brand": null,
					"full_name": "Масло трансмиссионное ADDINOL Schmieroel CL 32 20л",
					"type": null,
					"unit": null,
					"weight": null,
					"packing": null,
					"property": null,
					"photo_ref": null,
					"photo_file": null,
					"description": null
				},
				{
					"id": "68b5989c-f63e-11e9-9580-001e67686f8d",
					"name": "Premium 0530 DX1   1L",
					"article": "72105507",
					"brand": null,
					"full_name": "Масло моторное синтетическое ADDINOL Premium 0530 DX1 1л",
					"type": null,
					"unit": null,
					"weight": null,
					"packing": null,
					"property": null,
					"photo_ref": null,
					"photo_file": null,
					"description": null
				},
				{
					"id": "6d192715-487f-11ec-9b1b-001e67686f8d",
					"name": "Mehrbereichsfett LM 2 EP BLAU  5Kg",
					"article": "71705876",
					"brand": null,
					"full_name": "Смазка пластичная ADDINOL Mehrbereichsfett LM 2 EP BLAU 5кг",
					"type": null,
					"unit": null,
					"weight": null,
					"packing": null,
					"property": null,
					"photo_ref": null,
					"photo_file": null,
					"description": null
				}
			]
		}
	},
	async beforeMount() {
		// this.products = await $fetch('/api/products')
	},
}
definePageMeta({
	layout: 'header'
})
</script>

<style scoped>
.catalog {
	display: flex;
}
</style>