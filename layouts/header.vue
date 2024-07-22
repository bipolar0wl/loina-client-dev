<template>
	<header>
		<div class="card">
			<Menubar :model="items">
				<template #item="{ item, props, hasSubmenu }">
					<router-link
							v-if="item.route"
							v-slot="{ href, navigate }"
							:to="item.route"
							custom
					>
						<a
								v-ripple
								:href="href"
								v-bind="props.action"
								@click="navigate"
								:class="{
									'active': item.route.toLowerCase() == currentRoute.path.toLowerCase(),
								  'disabled-link': item.active !== true
								}"
								disabled
						>
							<span :class="item.icon"/>
							<span class="ml-2">{{ item.label }}</span>
						</a>
					</router-link>
					<a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
						<span :class="item.icon"/>
						<span class="ml-2">{{ item.label }}</span>
						<span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2"/>
					</a>
				</template>
			</Menubar>
		</div>
	</header>
	<div>
		<slot/>
	</div>
</template>

<script lang="ts">
import {useRoute} from 'vue-router';

export default {
	name: "mainHeader",
	props: {
		pageTitle: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			currentRoute: useRoute(),
			items: [
				{
					label: 'Главная',
					icon: 'pi pi-home',
					route: '/',
					active: true
				},
				{
					label: 'Каталог',
					icon: 'pi pi-folder',
					route: '/Catalog',
					active: true
				},
				{
					label: 'Контент менеджер',
					icon: 'pi pi-folder-plus',
					route: '/ContentManager'
				},
				{
					label: 'План Факт',
					icon: 'pi pi-check-circle',
					route: '/PlanFact'
				},
				{
					label: 'Отчет по остаткам',
					icon: 'pi pi-receipt',
					route: '/BalanceReport'
				},
				{
					label: 'Отчет по продажам',
					icon: 'pi pi-wallet',
					route: '/SalesReport'
				},
				{
					label: 'Управление пользователями',
					icon: 'pi pi-user-edit',
					route: '/UserManagement',
					active: true
				},
				// {
				// 	label: 'Projects',
				// 	icon: 'pi pi-search',
				// 	items: [
				// 		{
				// 			label: 'Components',
				// 			icon: 'pi pi-bolt'
				// 		},
				// 		{
				// 			label: 'Blocks',
				// 			icon: 'pi pi-server'
				// 		},
				// 		{
				// 			label: 'UI Kit',
				// 			icon: 'pi pi-pencil'
				// 		},
				// 		{
				// 			label: 'Templates',
				// 			icon: 'pi pi-palette',
				// 			items: [
				// 				{
				// 					label: 'Apollo',
				// 					icon: 'pi pi-palette'
				// 				},
				// 				{
				// 					label: 'Ultima',
				// 					icon: 'pi pi-palette'
				// 				}
				// 			]
				// 		}
				// 	]
				// },
			]
		};
	},
};
</script>

<style scoped lang="scss">
.active {
	color: lawngreen;
	font-weight: bold;
}
.disabled-link {
	pointer-events: none; /* Prevents clicking */
	color: grey; /* Changes the color to indicate it's disabled */
	cursor: not-allowed; /* Changes the cursor to indicate it's not allowed */
}
</style>