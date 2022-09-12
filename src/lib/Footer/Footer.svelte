<script lang="ts">
	import type { FooterTypes } from '$lib/types/ComponentTypes';

	export let footerEl: FooterTypes;
</script>

<footer>
	<div class="fiveCol">
		<div class="col">
			{#if footerEl.additionals.noActions}
				<div class="logo">
					<img src={footerEl.additionals.noActions.logo} alt="" />
				</div>
				<p>{footerEl.additionals.noActions.desc}</p>
			{/if}
		</div>
		{#if footerEl.additionals.actions}
			{#each footerEl.additionals.actions as action}
				<div class="col">
					<h2>{action.title}</h2>
					{#if action.href}
                    <iconify-icon icon="{action.icon}" style="color: var(--palette-orange-600);"></iconify-icon>
						<a href={action.href} target={action.target ? "_blank" : ""}>{action.label}</a>
					{:else}
                    <iconify-icon icon="{action.icon}" style="color: var(--palette-orange-600);"></iconify-icon>
						<span>{action.label}</span>
					{/if}
				</div>
			{/each}
		{/if}
	</div>
	<div class="copyrights">
		<p>{footerEl.additionals.copyrights}</p>
	</div>
</footer>

<style lang="sass">
@use '../../abstracts/BreakPoints' as *

h2
    font-size: 25px
    color: var(--palette-darkGreen-500)
    margin-bottom: 12px

a, span
    word-break: break-all
    color: var(--palette-orange-600)
    text-decoration: none

footer
    padding: 100px 65px 0px
    background: var(--palette-pasteWhite-500)
    @include dynamicpoint( $max: 850px)
        padding: 100px 45px 0px

.fiveCol
    width: 100%
    display: flex
    justify-content: space-around
    padding-bottom: 20px 
    @include dynamicpoint( $max: 850px)
        flex-direction: column

.col
    --gutter: 20px
    flex: 0 0 calc((100% / 5) - (var(--gutter) * 2))
    margin: auto var(--gutter)
    @include dynamicpoint( $max: 850px)
        width: 85%
        margin: 25px 0px

.logo
    width: 80px
    display: block
    margin-bottom: 12px

.copyrights
    padding: 20px 0px
    border-top: 1px solid var(--palette-bodyBlack-100)
</style>
