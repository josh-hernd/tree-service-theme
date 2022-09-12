<script lang="ts">
	import type { ScrollableSection } from '$lib/types/ComponentTypes';
	import LeadTitles from '$lib/Text/LeadTitles.svelte';
	import Blurb from './Blurb.svelte';

	export let ScrollSection: ScrollableSection;
</script>

<div class="scrollWrap">
	<LeadTitles
		titleFill={{ lead: `${ScrollSection.lead}`, title: `${ScrollSection.title}`, body: undefined }}
        titleStyle={{color: 'none'}}
	/>
</div>
<div class="midMarging">
	<Blurb blurbs={ScrollSection.blurbs} />
</div>

<style lang="sass">
@use '../../../abstracts/BreakPoints' as *

.scrollWrap
    padding: 40px 65px
    @include dynamicpoint($max: 850px)
        padding: 0px 45px

.midMarging
    position: relative
    margin-bottom: -15%
    z-index: 2
</style>
