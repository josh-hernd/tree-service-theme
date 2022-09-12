<script lang="ts">
	import LeadTitles from '$lib/Text/LeadTitles.svelte';
	import type { ThreeColSection } from '$lib/types/ComponentTypes';

	export let threeColSection: ThreeColSection;
</script>

<div class="threeSections">
	<LeadTitles
		titleFill={{
			lead: `${threeColSection.lead}`,
			title: `${threeColSection.title}`
		}}
		titleStyle={{ color: 'inherit' }}
	/>
	<div class="threeCol">
		{#each threeColSection.list as item, i}
			<div class="col idx-{i + 1}">
				<h2>{item}</h2>
			</div>
		{/each}
	</div>
</div>

<style lang="sass">
@use '../../abstracts/BreakPoints' as *

.threeSections
    padding: 100px 65px 60px
    @include dynamicpoint( $max: 850px)
        padding: 100px 45px 40px

.threeCol
    width: 100%
    padding: 50px 0px
    display: flex
    flex-wrap: wrap
    @include dynamicpoint( $max: 850px)
        flex-wrap: nowrap
        flex-direction: column

.col
    width: 100%
    flex: 0 0 calc( (100% - 150px) / 3 )
    order: 0
    margin: auto 25px 0px
    padding: 100px 25px
    border-radius: 3px
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2)
    @include dynamicpoint( $max: 850px)
        margin: 19px auto
    h2
        color: var(--palette-orange-600)

.idx-2
    padding-top: 150px
    @include dynamicpoint( $max: 850px)
        padding: 100px 25px
</style>
