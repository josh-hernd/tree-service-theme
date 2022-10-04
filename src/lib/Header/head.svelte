<script lang="ts">
	import type { OnPage } from '$lib/types/ComponentTypes';
    import { page } from '$app/stores';
	
    export let onPage: OnPage;
    let ogUrl = $page.url.host + $page.url.pathname
</script>

<svelte:head>
	<title>{onPage.title}</title>
	<meta name="description" content={onPage.desc} />
	<meta name="keywords" content={onPage.keywords} />
	<meta property="og:type" content={onPage.title} />
	<meta property="og:title" content={onPage.title} />
	<meta property="og:description" content={onPage.desc} />
	<meta property="og:url" content={ogUrl} />
	<meta property="og:image" content={onPage.og_image} />
	<meta name="twitter:description" content={onPage.desc} />
</svelte:head>
