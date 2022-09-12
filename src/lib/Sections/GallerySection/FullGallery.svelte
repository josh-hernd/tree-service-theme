<script lang="ts">
	import type { FullGallerySection } from '$lib/types/ComponentTypes';
	import LeadTitles from '$lib/Text/LeadTitles.svelte';
	import Grid from './Grid.svelte';

	export let GallerySection: FullGallerySection;
</script>

<div class="addTop">
	<LeadTitles
		titleFill={{ lead: `${GallerySection.lead}`, title: `${GallerySection.title}` }}
		titleStyle={{ color: 'var(--palette-pasteWhite-600)' }}
	/>
	<Grid gridObj={GallerySection.gallery} />
</div>

<style lang="sass">
@use '../../../abstracts/BreakPoints' as *

.addTop
    position: relative
    padding: 20% 65px 10%
    background: var(--palette-darkGreen-600)
    @include dynamicpoint($max: 850px)
        padding: 20% 45px 10%
    &::before
        content: ''
        width: 100%
        height: 100%
        display: block
        position: absolute
        pointer-events: none
        inset: 0
        opacity: 0.05
        background-image: url(/jpg/v02-lines-37.jpeg)
        background-repeat: no-repeat
        background-position: 50% 0%
        background-size: cover
</style>
