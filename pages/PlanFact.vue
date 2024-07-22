<template>
	<Panel>
		<div class="plan-fact__options">
			<InputGroup>
				<InputGroupAddon>Период</InputGroupAddon>
				<DatePicker
					v-model="dates"
					selectionMode="range"
					dateFormat="dd/mm/yy"
				/>
			</InputGroup>

			<InputGroup>
				<InputGroupAddon>Номенклатурная группа</InputGroupAddon>
				<MultiSelect
					v-model="selectedNomenclature"
					:options="nomenclature"
					optionLabel="name"
					filter
					placeholder="CVL"
					:maxSelectedLabels="3"
					class="w-full md:w-80"
				/>
			</InputGroup>

			<InputGroup>
				<InputGroupAddon>Филиалы</InputGroupAddon>
				<MultiSelect v-model="selectedBranches" :options="branches" optionLabel="name" filter
				             :maxSelectedLabels="3" class="w-full md:w-80"/>
			</InputGroup>

			<InputGroup>
				<InputGroupAddon>Свойства контрагентов</InputGroupAddon>
				<MultiSelect v-model="SelectedProperties" :options="properties" optionLabel="name" filter
				             :maxSelectedLabels="3" class="w-full md:w-80"/>
			</InputGroup>
			<Button
				label="Построить таблицу"
				icon="pi pi-refresh"
				severity="secondary"
				style="grid-area: 3 / 1 / 4 / 3;"
				@click="buildTable"
			/>
		</div>
		<DataTable
			:value="products"
			tableStyle="min-width: 50rem"
			size="small"
			rowGroupMode="rowspan"
			:groupRowsBy="['branch', 'nomenclature']"
		>
			<template #header>
				<div style="text-align: left">
					<Button icon="pi pi-external-link" label="Экспорт CSV" @click="exportCSV($event)"/>
				</div>
			</template>
			<!--			<Column field="branch" header="">-->
			<!--				<template #body="slotProps">-->
			<!--					<div class="flex items-center gap-2">-->
			<!--						<span>{{ slotProps.data.branch }}</span>-->
			<!--					</div>-->
			<!--				</template>-->
			<!--			</Column>-->
			<!--			<Column field="nomenclature" header="">-->
			<!--				<template #body="slotProps">-->
			<!--					<div class="flex items-center gap-2">-->
			<!--						<span>{{ slotProps.data.nomenclature }}</span>-->
			<!--					</div>-->
			<!--				</template>-->
			<!--			</Column>-->
			<Column field="branch" header="Филиал" sortable></Column>
			<Column field="nomenclature" header="НГ" sortable></Column>
			<Column field="day0" header="ноя.23"></Column>
			<Column field="day1" header="ноя.24"></Column>
			<Column field="day2" header="ноя.25"></Column>
		</DataTable>
	</Panel>
</template>

<script>
// Интерфейс План Факт
export default {
	name: "PlanFact",
	data() {
		return {
			dates: null,
			selectedCities: null,
			cities: [
				{name: 'New York', code: 'NY'},
				{name: 'Rome', code: 'RM'},
				{name: 'London', code: 'LDN'},
				{name: 'Istanbul', code: 'IST'},
				{name: 'Paris', code: 'PRS'}
			],
			nomenclature: [
				{name: 'CLV', id: '1'},
				{name: 'IND', id: '2'},
				{name: 'PVL', id: '3'},
				{name: 'GAZ', id: '4'},
			],
			selectedNomenclature: null,
			branches: [
				{name: 'Ростов', id: '1'},
				{name: 'Краснодар', id: '2'},
			],
			selectedBranches: null,
			properties: [],
			SelectedProperties: null,
			products: [
				{
					id: 1,
					nomenclature: "CLV",
					branch: "Краснодар",
					day0: 11,
					day1: 12,
					day2: 13,
				},
				{
					id: 2,
					nomenclature: "CLV",
					branch: "Краснодар",
					day0: 21,
					day1: 22,
					day2: 23,
				},
				{
					id: 3,
					nomenclature: "CLV",
					branch: "Ростов",
					day0: 31,
					day1: 32,
					day2: 33,
				},
				{
					id: 4,
					nomenclature: "GAZ",
					branch: "Ростов",
					day0: 41,
					day1: 42,
					day2: 43,
				},
				{
					id: 5,
					nomenclature: "GAZ",
					branch: "Ростов",
					day0: 51,
					day1: 52,
					day2: 53,
				},
			],
		};
	},
	methods: {
		buildTable() {
			console.log(this)
		},
		exportCSV() {
			this.$refs.dt.exportCSV();
		}
	},
}
definePageMeta({
	layout: 'header'
})
</script>

<style scoped>
.plan-fact__options {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 10px;
	justify-items: end;
}
</style>