<template>
	<Panel>
		<Toolbar class="mb-6">
			<template #start>
				<Button label="Добавить" icon="pi pi-plus" severity="success" class="mr-2" @click="openNew"/>
				<Button label="Удалить" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected"
				        :disabled="!selectedUsers || !selectedUsers.length"/>
			</template>

			<template #end>
				<!--				<FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import"-->
				<!--				            class="mr-2" auto/>-->
				<!--				<Button label="Экспорт" icon="pi pi-upload" severity="help" @click="exportCSV($event)"/>-->
			</template>
		</Toolbar>
		<DataTable
			:value="users"
			tableStyle="min-width: 50rem"
			size="small"
			rowGroupMode="rowspan"
			:groupRowsBy="'role'"
			filterDisplay="row"
			v-model:filters="filters"
			:globalFilterFields="['name', 'role']"
			v-model:selection="selectedUsers"
			v-model:editingRows="editingRows"
			@row-edit-save="onRowEditSave"
			editMode="row"
		>
			<template #header>
				<div class="flex justify-end">
					<h4 class="m-0">Список пользователей</h4>
					<IconField>
						<InputIcon>
							<i class="pi pi-search"/>
						</InputIcon>
						<InputText v-model="filters['global'].value" placeholder="Поиск"/>
					</IconField>
				</div>
			</template>
			<template #empty> Пользователи не найдены</template>
			<template #loading> Поиск</template>
			<Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
			<Column field="name" header="Пользователь" sortable>
				<template #editor="{ data, field }">
					<InputText v-model="data[field]"/>
				</template>
				<template #body="{ data }">
					{{ data.name }}
				</template>
				<template #filter="{ filterModel, filterCallback }">
					<InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Поиск по имени"/>
				</template>
			</Column>
			<Column field="role" header="Роль" sortable>
				<template #editor="{ data, field }">
					<Select v-model="data[field]" :options="roles"
					        placeholder="Выбрать роль">
						<template #option="slotProps">
							{{ slotProps.option }}
						</template>
					</Select>
				</template>
				<template #body="{ data }">
					{{ data.role }}
				</template>
				<template #filter="{ filterModel, filterCallback }">
					<Select v-model="filterModel.value" @change="filterCallback()" :options="roles" placeholder="Выбор роли"
					        style="min-width: 12rem" :showClear="true">
					</Select>
				</template>
			</Column>
			<Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>

			<!--			<Column :exportable="false" style="min-width: 12rem">-->
			<!--				<template #body="slotProps">-->
			<!--					<Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editUser(slotProps.data)" />-->
			<!--					<Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteUser(slotProps.data)"/>-->
			<!--				</template>-->
			<!--			</Column>-->
		</DataTable>

		<Dialog v-model:visible="userDialog" :style="{ width: '450px' }" header="Пользователь" :modal="true">
			<div class="flex flex-col gap-6 p-fluid">
				<div>
					<label for="name" class="block font-bold mb-3">Имя пользователя</label>
					<InputText id="name" v-model.trim="user.name" required="true" autofocus
					           :invalid="submitted && !user.name"/>
					<small v-if="submitted && !user.name" class="text-red-500">Поле не может быть пустым</small>
				</div>
				<div>
					<label for="inventoryStatus" class="block font-bold mb-3">Роль</label>
					<Select id="inventoryStatus" v-model="user.role" :options="roles"
					        placeholder="Выбрать роль">
					</Select>
				</div>

			</div>

			<template #footer>
				<Button label="Отменить" icon="pi pi-times" text @click="hideDialog"/>
				<Button label="Сохранить" icon="pi pi-check" @click="saveUser"/>
			</template>
		</Dialog>

		<Dialog v-model:visible="deleteUserDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
			<div class="flex items-center gap-4">
				<i class="pi pi-exclamation-triangle !text-3xl"/>
				<span v-if="user"
				>Are you sure you want to delete <b>{{ user.name }}</b
				>?</span
				>
			</div>
			<template #footer>
				<Button label="No" icon="pi pi-times" text @click="deleteUserDialog = false"/>
				<Button label="Yes" icon="pi pi-check" @click="deleteUser"/>
			</template>
		</Dialog>

		<Dialog v-model:visible="deleteUsersDialog" :style="{ width: '450px' }" header="Подвердите" :modal="true">
			<div class="flex items-center gap-4">
				<i class="pi pi-exclamation-triangle !text-3xl"/>
				<span v-if="user"> Вы уверены, что хотите удалить выбранных пользователей?</span>
			</div>
			<template #footer>
				<Button label="Нет" icon="pi pi-times" text @click="deleteUsersDialog = false"/>
				<Button label="Да" icon="pi pi-check" text @click="deleteSelectedUsers"/>
			</template>
		</Dialog>
	</Panel>
</template>

<script>
import {FilterMatchMode} from '@primevue/core/api';
// Интерфейс управления пользователями
export default {
	name: "UserManagement",
	data() {
		return {
			editingRows: [],
			filters: {
				global: {value: null, matchMode: FilterMatchMode.CONTAINS},
				name: {value: null, matchMode: FilterMatchMode.CONTAINS},
				role: {value: null, matchMode: FilterMatchMode.EQUALS},
			},
			roles: [
				"superadmin", "admin", "editor", "viewer",
			],
			users: [
    {
        "id": "934f4788-8cf1-11eb-9088-001e67686f8d",
        "name": "Усольцев П.А. РТ по 020822",
        "email": "КАЗАНЬ",
        "role": "viewer",
        "hashed_password": null
    },
    {
        "id": "fd4e6439-acc9-11de-9b9a-001517b51b24",
        "name": "Administrator",
        "email": "САНКТ-ПЕТЕРБУРГ",
        "role": null,
        "hashed_password": "superadmin"
    },
    {
        "id": "4853e34e-a45b-11de-9b9a-001517b51b24",
        "name": "Елисеев С.Б.",
        "email": "АЛ",
        "role": "viewer",
        "hashed_password": null
    },
    {
        "id": "9758c4a8-05c6-11ec-8bec-001e67686f8d",
        "name": "Яковлев А.А.",
        "email": "АСПб",
        "role": "viewer",
        "hashed_password": null
    },
    {
        "id": "6a830259-ce0f-11e4-a164-001e67686f8d",
        "name": "Трощенков Д.Ю.",
        "email": null,
        "role": "viewer",
        "hashed_password": null
    },
    {
        "id": "28d46577-0132-11ed-ab47-000c29594b87",
        "name": "Тимченко А.А.",
        "email": null,
        "role": "viewer",
        "hashed_password": null
    },
    {
        "id": "6488f226-6aa5-11e6-bbc1-001e67686f8d",
        "name": "Анучин С.Е.",
        "email": null,
        "role": "viewer",
        "hashed_password": null
    },
    {
        "id": "efd0b0f9-a2d5-11de-9b9a-001517b51b24",
        "name": "Федорова И.Ю.",
        "email": null,
        "role": "viewer",
        "hashed_password": null
    },
    {
        "id": "28f4b2b4-a615-11e0-add7-001517b51b24",
        "name": "Осипенков И.А. АЛ до 26.09.22",
        "email": null,
        "role": "viewer",
        "hashed_password": null
    },
    {
        "id": "cd0a65f8-9f49-11e6-b1a8-001e67686f8d",
        "name": "Яковлева Н.А.",
        "email": null,
        "role": "viewer",
        "hashed_password": null
    }
],
			user: {},
			selectedUsers: null,
			submitted: false,
			userDialog: false,
			deleteUserDialog: false,
			deleteUsersDialog: false,
		}
	},
	// props: {
	// 	users: {
	// 		type: Array,
	// 		required: true
	// 	}
	// },
	async beforeMount(){
		//this.users = await $fetch('/api/users')
	},
	methods: {
		onRowEditSave(event) {
			let {newData, index} = event;

			this.users[index] = newData;
		},
		openNew() {
			this.user = {};
			this.submitted = false;
			this.userDialog = true;
		},
		hideDialog() {
			this.userDialog = false;
			this.submitted = false;
		},
		saveUser() {
			this.submitted = true;

			if (this.user?.name?.trim()) {
				if (this.user.id) {
					this.user.inventoryStatus = this.user.inventoryStatus.value ? this.user.inventoryStatus.value : this.user.inventoryStatus;
					this.users[this.findIndexById(this.user.id)] = this.user;
					this.$toast.add({severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000});
				} else {
					this.user.id = this.createId();
					this.user.code = this.createId();
					this.user.image = 'user-placeholder.svg';
					this.user.inventoryStatus = this.user.inventoryStatus ? this.user.inventoryStatus.value : 'INSTOCK';
					this.users.push(this.user);
					this.$toast.add({severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000});
				}

				this.userDialog = false;
				this.user = {};
			}
		},
		editUser(user) {
			this.user = {...user};
			this.userDialog = true;
		},
		confirmDeleteUser(user) {
			this.user = user;
			this.deleteUserDialog = true;
		},
		deleteUser() {
			this.users = this.users.filter(val => val.id !== this.user.id);
			this.deleteUserDialog = false;
			this.user = {};
			this.$toast.add({severity: 'success', summary: 'Successful', detail: 'Пользователь удален', life: 3000});
		},
		findIndexById(id) {
			let index = -1;
			for (let i = 0; i < this.users.length; i++) {
				if (this.users[i].id === id) {
					index = i;
					break;
				}
			}

			return index;
		},
		createId() {
			let id = '';
			var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			for (var i = 0; i < 5; i++) {
				id += chars.charAt(Math.floor(Math.random() * chars.length));
			}
			return id;
		},
		exportCSV() {
			this.$refs.dt.exportCSV();
		},
		confirmDeleteSelected() {
			this.deleteUsersDialog = true;
		},
		deleteSelectedUsers() {
			this.users = this.users.filter(val => !this.selectedUsers.includes(val));
			this.deleteUsersDialog = false;
			this.selectedUsers = null;
			this.$toast.add({severity: 'success', summary: 'Successful', detail: 'Пользователи удалены', life: 3000});
		},
	}
}
definePageMeta({
	layout: 'header'
})
</script>

<style scoped>

</style>