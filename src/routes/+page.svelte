<script lang="ts">
	import Hero from '$lib/Full-header/Hero.svelte';
	import {
		AboutInsert,
		HeroConst,
		ServiceList,
		PostGallery,
		simpleSection
	} from '$content/HomePost.json';
	import TwoSection from '$lib/Sections/TwoSection.svelte';
	import ScrollSection from '$lib/Sections/BlurbSection/ScrollSection.svelte';
	import FullGallery from '$lib/Sections/GallerySection/FullGallery.svelte';
	import SimpleSection from '$lib/Sections/SimpleSection.svelte';
</script>

<Hero heroConst={HeroConst} />

<TwoSection TwoColInsert={AboutInsert} />

<ScrollSection ScrollSection={ServiceList} />

<FullGallery GallerySection={PostGallery} />

<SimpleSection {simpleSection} />
