<template>
	<DataTable :value="products" tableStyle="min-width: 50rem">
		<Column field="code" header="Code"></Column>
		<Column field="name" header="Name"></Column>
		<Column field="category" header="Category"></Column>
		<Column field="quantity" header="Quantity"></Column>
	</DataTable>
</template>

<script setup>
// Интерфейс контент менеджера
import { useHead } from '@vueuse/head'
let products = null;
useHead({
	titleTemplate: 'Контент менеджер',
	meta: {
		title: 'Контент менеджер',
	}
})
// useHead({
// 	title: 'Контент менеджер'
// });
// export default {
// 	name: "ContentManager",
// 	head() {
// 		return {
// 			title: 'Контент менеджер'
// 		}
// 	},
// 	meta: {
// 		title: 'Контент менеджер'
// 	},
// }
definePageMeta({
	layout: 'header'
})
</script>

<style scoped>

</style>