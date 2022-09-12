<script lang="ts">
	import Button from '$lib/SimpleButtons/button.svelte';
	import LeadTitles from '$lib/Text/LeadTitles.svelte';
	import type { TwoCol } from '$lib/types/ComponentTypes';

	export let TwoColInsert: TwoCol;
</script>

<div class="twoCol">
	<div class="left">
		<div class="overLapping">
			<img
				class="backImg"
				src={TwoColInsert.overlapImg.backImg.src}
				alt={TwoColInsert.overlapImg.backImg.alt}
			/>
			<img
				class="overLap"
				src={TwoColInsert.overlapImg.overlap.src}
				alt={TwoColInsert.overlapImg.overlap.alt}
			/>
			<img
				class="underLap"
				src={TwoColInsert.overlapImg.underLap.src}
				alt={TwoColInsert.overlapImg.underLap.alt}
			/>
		</div>
	</div>
	<div class="right">
		<LeadTitles
			titleFill={{
				lead: `${TwoColInsert.lead}`,
				title: `${TwoColInsert.title}`,
				body: { tabbed: `${TwoColInsert.body?.tabbed}`, normal: `${TwoColInsert.body?.normal}` }
			}}
			titleStyle={{ color: 'inherit' }}
		/>
		{#if TwoColInsert.ctaBtn}
			<Button
				btnCtx={{
					cta: `${TwoColInsert.ctaBtn.cta}`,
					action: `${TwoColInsert.ctaBtn.action}`,
					alignment: 'left'
				}}
			/>
		{/if}
	</div>
</div>

<style lang="sass">
@use '../../abstracts/BreakPoints' as *

.twoCol
    width: 100%
    padding: 100px 65px
    display: flex
    @include dynamicpoint($max: 850px)
        flex-direction: column-reverse
        padding: 100px 45px

.left, .right
    width: calc( 100% - 50px )
    @include dynamicpoint($max: 850px)
        width: 100%

.left
    margin-right: 25px
    @include dynamicpoint($max: 850px)
        margin: 25px 0px

.right
    margin-left: 25px
    @include dynamicpoint($max: 850px)
        margin: 25px 0px

.overLapping
    position: relative
    img
        display: block

.backImg
    width: 100%
    max-width: 500px
    position: absolute
    inset: 40% auto 60%
    margin: auto
    z-index: -1
    @include dynamicpoint($max: 850px)
        max-width: 400px
        inset: 40% 0% 60% auto
.overLap
    width: 100%
    position: relative
    max-width: 290px
    outline: 15px solid var(--palette-pasteWhite-600)
    margin-left: auto
    margin-right: 15px
    box-shadow: 0px 0px 30px 10px var(--palette-bodyBlack-200)
    z-index: 2
    @include dynamicpoint($max: 850px)
        max-width: 190px

.underLap
    width: 100%
    max-width: 340px
    margin: -30% auto 0% 15%
    box-shadow: 0px 0px 20px 0px var(--palette-bodyBlack-200)
    @include dynamicpoint($max: 850px)
        max-width: 240px
        margin: -30% 15% 0% auto

</style>
