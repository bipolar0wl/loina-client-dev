<template>
	<Panel>
		<div class="plan-fact__options">
			<InputGroup>
				<InputGroupAddon>На дату</InputGroupAddon>
				<DatePicker
					v-model="date"
					dateFormat="dd/mm/yy"
				/>
			</InputGroup>
			<Button
				label="Сформировать"
				icon="pi pi-refresh"
				severity="secondary"
			/>
		</div>
		<DataTable
			:value="products"
			tableStyle="min-width: 50rem"
			size="small"
		>
			<Column field="nomenclature" header="Номенклатура" sortable></Column>
			<Column field="opt0" header="Волгоград АЛ"></Column>
			<Column field="opt1" header="Волгоград ИО"></Column>
		</DataTable>
	</Panel>
</template>

<script>
// Интерфейс отчета по остаткам
export default {
	name: "BalanceReport",
	data() {
		return {
			date: null,
			products: null,
		}
	}
}
definePageMeta({
	layout: 'header'
})
</script>

<style scoped>

</style>