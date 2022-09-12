<script lang="ts">
import { page } from "$app/stores";
import Logo from "$lib/Logo/Logo.svelte";
import Button from "$lib/SimpleButtons/button.svelte";
import type { NavElements } from "$lib/types/ComponentTypes";

export let navElements: NavElements;
</script>
<div class="navWrap">

    <Logo setLogo={{src: `${navElements.logo.src}`, desc: `${navElements.logo.desc}`, size: `${navElements.logo.size}`}}/>

    <div class="theLinks">
        <ul>
            {#each navElements.navLinks as {href, title} }
                <li data-sveltekit-prefetch><a href="{href}"  class:active={$page.url.pathname === href}>{title}</a></li>
            {/each}
            <li><Button btnCtx={{cta: `${navElements.ctaButton.cta}`, action: `${navElements.ctaButton.action}`, alignment: 'right'}}/></li>
        </ul>
    </div>
</div>

<style lang="sass">
.navWrap
    width: 100%
    display: flex
    justify-content: space-between
    align-items: center

ul
    display: flex
    align-items: center
    li a
        font-family: 'Work Sans', sans-serif
        font-weight: 700
        font-size: 18px
        color: var(--palette-pasteWhite-600)
        margin-right: 20px
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