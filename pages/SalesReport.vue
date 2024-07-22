<template>
	<Panel>
		<div class="plan-fact__options">
			<InputGroup>
				<InputGroupAddon>Период</InputGroupAddon>
				<DatePicker
					v-model="dates"
					dateFormat="dd/mm/yy"
					selectionMode="range"
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
			<ColumnGroup type="header">
				<Row>
					<Column header="Контрагент"/>
					<Column header="Номенклатура. Номенклатурная группа" :colspan="2"/>
				</Row>
				<Row>
					<Column header="Февраль 2024" :rowspan="2"/>
					<Column header="Итог" :rowspan="2"/>
					<Column header="Сумма"/>
					<Column header="Количество"/>
				</Row>
				<Row>
					<Column header="Февраль 2024" :rowspan="2"/>
					<Column header="Итог" :rowspan="2"/>
					<Column header="Сумма"/>
					<Column header="Количество"/>
				</Row>
			</ColumnGroup>
			<Column field="nomenclature" header="Номенклатура" sortable></Column>
			<Column field="opt0" header="Волгоград АЛ"></Column>
			<Column field="opt1" header="Волгоград ИО"></Column>
		</DataTable>
	</Panel>
</template>

<script>
// Интерфейс отчета по продажам
export default {
	name: "SalesReport",
	data() {
		return {
			dates: null,
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