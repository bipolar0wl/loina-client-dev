<template>
	<div>
		<!--    <NuxtRouteAnnouncer />-->
		<!--    <NuxtWelcome />-->
		<NuxtLayout>
			<NuxtPage/>
		</NuxtLayout>
	</div>
</template>

<script setup>
const { $api } = useNuxtApp()
const { data: modules } = await useAsyncData('modules', () => $api('/modules'))
</script>

<style lang="scss">
*{
	font-family: sans-serif;
}
</style>