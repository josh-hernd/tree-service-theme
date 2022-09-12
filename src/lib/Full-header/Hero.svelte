<script lang="ts">
	import { NavHeight } from '$lib/stores/writable';
	import Button from '$lib/SimpleButtons/button.svelte';
    import type { HeroType } from '$lib/types/ComponentTypes';

	export let heroConst: HeroType;
</script>

<div class="hero" style="--clientHeight:calc(100vh - {$NavHeight}px);">
	<div class="left">
		<p>{heroConst.subtitle}</p>
		<h1>{heroConst.heroTitle}<span class="accent">.</span></h1>
		<Button
			btnCtx={{
				cta: `${heroConst.ctaBtn.cta}`,
				action: `${heroConst.ctaBtn.action}`,
				alignment: 'left'
			}}
		/>
	</div>
	<div class="right">
		<img src={heroConst.imgConst.src} alt={heroConst.imgConst.alt} srcset="" />
	</div>
</div>

<style lang="sass">
@use '../../abstracts/BreakPoints' as *

.hero
    width: 100%
    height: var(--clientHeight)
    display: flex
    justify-content: center
    align-items: center
    padding: 0px 65px
    background: linear-gradient(-90deg, var(--palette-lightGreen-400) 40%, var(--palette-pasteWhite-600) 40%)
    @include dynamicpoint($max: 850px)
        padding: 0px 45px
        flex-direction: column
        justify-content: space-evenly
        background: linear-gradient(0deg, var(--palette-lightGreen-400) 30%, var(--palette-pasteWhite-600) 30%)

h1
    margin: 19px 0px

p
    padding-left:  15px
    border-left: 4px solid var(--palette-orange-600)

.right
    width: 90%
    margin-left: auto
    @include dynamicpoint($max: 850px)
        width: 100%
    img
        width: 100%
        display: block
        box-shadow: 0px 0px 20px 0px var(--palette-bodyBlack-200)
</style>
