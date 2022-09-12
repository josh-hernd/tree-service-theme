<script lang="ts">
	import Media from '$lib/MediaQuery/Media.svelte';
	import Desktop from './NavComponents/Desktop.svelte';
	import Mobile from './NavComponents/Mobile.svelte';
	import Logo from '$lib/Logo/Logo.svelte';
	import Button from '$lib/SimpleButtons/button.svelte';
	import { NavHeight } from '$lib/stores/writable';
	import type { NavElements } from '$lib/types/ComponentTypes';

	export let navElements: NavElements;
</script>

<nav bind:clientHeight={$NavHeight}>
	<Media query="(min-width: 960px)" let:matches>
		{#if matches}
			<Desktop {navElements} />
		{:else}
			<Logo
				setLogo={{
					src: `${navElements.logo.src}`,
					desc: `${navElements.logo.desc}`,
					size: `${navElements.logo.size}`
				}}
			/>
			<Button
				btnCtx={{
					cta: `${navElements.ctaButton.cta}`,
					action: `${navElements.ctaButton.action}`,
					alignment: 'centerRight'
				}}
			/>
			<Mobile navLinks={navElements.navLinks} />
		{/if}
	</Media>
</nav>

<style lang="sass">
nav
	width: 100%
	position: fixed
	inset: 0 auto auto
	padding: 15px 45px
	display: flex
	align-items: center
	background: var(--palette-darkGreen-600)
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3)
	z-index: 9

</style>
