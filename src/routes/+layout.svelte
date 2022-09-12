<script lang="ts">
	import { navContent } from '$content/NavigationFill.json';
	import { ContactPost } from '$content/ContactPost.json';
	import { FooterContent } from '$content/FooterPost.json';

	import '../app.sass';
	import Nav from '$lib/Navigation/Nav.svelte';
	import { NavHeight } from '$lib/stores/writable';
	import Footer from '$lib/Footer/Footer.svelte';
	import ContactSection from '$lib/Sections/ContactSection.svelte';
</script>

<Nav navElements={navContent} />

<main style="--adjust-to-nav: calc({$NavHeight}px - 1px);">
	<slot />
</main>

<ContactSection ContactContext={ContactPost} />

<Footer footerEl={FooterContent} />

<style lang="sass">
main
	margin-top: var(--adjust-to-nav)
</style>
