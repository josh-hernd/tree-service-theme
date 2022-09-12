<script lang="ts">
	import { NavHeight } from '$lib/stores/writable';
	import ImageBox from '$lib/LightBox/ImageBox.svelte';
	import { slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	export let gridObj: Array<{ src: string; desc: string }>;

	let focused = {
		open: false,
		srcs: '',
		meta: '',
		id: 0
	};

	function Focus(open: boolean, src: string, desc: string, idx: number) {
		focused.open = !open;
		focused.srcs = src;
		focused.meta = desc;
		focused.id = idx;
	}
</script>

<div class="grid">
	{#each gridObj as { src, desc }, i}
		<div
			class="imgWrap"
			on:click={() => {
				Focus(focused.open, src, desc, i + 1);
			}}
		>
			<img {src} alt={desc} />
		</div>
	{/each}
	{#if focused.open}
		<div
			class="lightbox"
			style="max-height: calc((100% + 1px) - {$NavHeight}px) ;"
			transition:slide={{ duration: 250, easing: quintInOut }}
		>

				<div
					class="toggleBox"
					on:click={() => {
						focused.open = !focused.open;
					}}
				>
					<img src="/svg/icons/close-icon.svg" alt="Close Icon" />
				</div>
				<ImageBox ImageFocus={{ src: focused.srcs, desc: focused.meta }} />

		</div>
	{/if}
</div>

<style lang="sass">
@use '../../../abstracts/BreakPoints' as *
@use '../../../abstracts/Keyframes/Onhovers' as *

.grid
    width: 100%
    position: relative
    margin: 50px 0px
    display: flex
    flex-wrap: wrap

.imgWrap
    width: 100%
    position: relative
    margin: 10px
    flex: 1 0 calc( 33% - 20px )
    order: 0
    flex-grow: 0
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2)
    &::after
        content: ''
        width: 100%
        height: 0%
        position: absolute
        inset: 0
        background: rgba(13, 13, 13, 0.6)
        background-image: url('/svg/icons/expand-icon.svg')
        background-size: 50px
        background-repeat: no-repeat
        background-position: center
        transition: height 0.25s ease-in-out
        cursor: pointer
        @include dynamicpoint($max: 850px)
            background-size: 25px
        
    &:hover
        &::after
            height: 100%
    @include dynamicpoint( $max: 850px )
        flex: 1 0 calc( 50% - 20px )
    img
        width: 100%
        display: block

.lightbox
    width: 100%
    height: 100%
    padding: 10px 45px
    position: fixed
    inset: auto 0 0
    display: flex
    align-items: center
    background: rgba(13, 13, 13, 0.9)
    z-index: 5
    
.toggleBox
    width: 50px
    position: absolute
    inset: 30px 30px auto auto
    cursor: pointer
    z-index: 1
    -webkit-transform-origin: 50% 50%
        -ms-transform-origin: 50% 50%
            transform-origin: 50% 50%
    -webkit-animation: spin 1s ease-in-out
            animation: spin 1s ease-in-out
    -webkit-animation-play-state: paused
            animation-play-state: paused
    &:hover
        -webkit-animation-play-state: running
        animation-play-state: running
</style>
