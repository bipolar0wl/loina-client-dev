<template>
	<DataTable
		v-model:selection="selectedProduct"
		:value="products" dataKey="id"
		:rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
		tableStyle="min-width: 50rem"
		size="small"
	>
		<Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
		<Column field="image" header="Изображение">
			<template #body="slotProps">
				<Image
					v-if="slotProps.data.image"
					:src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
					width="150"
					preview
				/>

			</template>
		</Column>
		<Column field="article" header="Артикул">
			<template #body="slotProps">
				<a :href="'card/'+slotProps.data.id">
					{{ slotProps.data.article }}
				</a>
			</template>
		</Column>
		<Column field="name" header="Наименование">
			<template #body="slotProps">
				<a :href="'card/'+slotProps.data.id">
					{{ slotProps.data.name }}
				</a>
			</template>
			<!--			<router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>-->
			<!--				<a-->
			<!--					v-ripple-->
			<!--					:href="href"-->
			<!--					v-bind="props.action"-->
			<!--					@click="navigate"-->
			<!--					:class="{'active': item.route.toLowerCase() == currentRoute.path.toLowerCase()}"-->
			<!--					{{ slotProps.data.name }}-->
			<!--				</a>-->
			<!--			</router-link>-->
		</Column>
	</DataTable>
</template>

<script lang="ts">
export default {
	name: "catalogTable",
	data() {
		return {
			// products: [
			// 	{
			// 		id: '1000',
			// 		article: 'f230fh0g3',
			// 		name: 'Bamboo Watch',
			// 		description: 'Product Description',
			// 		image: 'bamboo-watch.jpg',
			// 	},
			// ],
			selectedProduct: null,
			metaKey: true
		};
	},
	props: {
		products: {
			type: Array,
			required: true
		}
	},
}
</script>

<style scoped>

</style>