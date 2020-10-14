<script>
	import { FirebaseApp } from "sveltefire";
	import { fire } from "../config/firebase";
	import Nav from '../templates/Nav.svelte';

	export let segment;
</script>

<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" rel="stylesheet">
	<style global>
		:root {
			--background-body: #0f0e17;
			--text-main: #a7a9be;
			--text-bright: #fffffe;
			--text-muted: #242629;
			--links: #ff8906;
			--focus: #242629;
			--border: black;
			--code: #f25f4c;
			--animation-duration: #242629;
			--button-hover: #ff8906;
			--form-placeholder: #f25f4c;
			--form-text: #fffffe;
		}

		@media (prefers-color-scheme: light) {
			:root {
				--background-body: #eff0f3;
				--text-main: #2a2a2a;
				--text-bright: #0d0d0d;
				--text-muted: #fffffe;
				--links: #ff8e3c;
				--focus: #242629;
				--border: #0d0d0d;
				--code: #d9376e;
				--animation-duration: #242629;
				--button-hover: #ff8e3c;
				--form-placeholder: #d9376e;
				--form-text: #0d0d0d;
			}
		}
	</style>
</svelte:head>

<FirebaseApp firebase={fire}>
	<Nav {segment}/>

	<main>
		<slot></slot>
	</main>
</FirebaseApp>
