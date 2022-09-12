<script lang="ts">
	import { page } from '$app/stores';
    import BurgerButton from './Toggler/BurgerButton.svelte';
    import { slide } from 'svelte/transition';
    import { quintInOut } from 'svelte/easing';
    
	export let navLinks: Array<{
        href: string, 
        title: string
    }>

	let navOpen = false;

    let burgerProps = {
        duration: .25,
        burgerColor: "var(--palette-orange-600)",
        menuColor: "var(--palette-darkGreen-600)"
    }
</script>

<div class="mobileNav">
    <BurgerButton {...burgerProps} bind:open={navOpen}/>
	{#if navOpen}
		<div class="theLinks" transition:slide={{ duration: 250, easing: quintInOut}}>
			<ul>
				{#each navLinks as { href, title }}
					<li data-sveltekit-prefetch>
						<a {href} class:active={$page.url.pathname === href}>{title}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style lang="sass">
.mobileNav
    position: fixed
    inset: auto 10px 10px auto 

.theLinks
    position: absolute
    inset: auto 49px 49px auto
    padding: 15px
    background: var(--palette-darkGreen-600)
    border-radius: 3px
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3)

ul
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    li 
        margin-bottom: 10px
        a
            font-family: 'Work Sans', sans-serif
            font-weight: 700
            font-size: 18px
            color: var(--palette-pasteWhite-600)
            position: relative
            &:hover
                &::before
                    content: ""
                    width: 100%
                    height: 2px
                    position: absolute
                    inset: auto 0 -5px 0
                    background: var(--palette-pasteWhite-600)

a.active
    &::before
        content: ""
        width: 100%
        height: 2px
        position: absolute
        inset: auto 0 -5px 0
        background: var(--palette-orange-600)
</style>
