<script lang="ts">
	import type { BlurbsArray } from '$lib/types/ComponentTypes';

	export let blurbs: BlurbsArray;
</script>

<div class="blurbScroll">
	{#each blurbs as { title, img }}
		<div class="blurb">
			<div class="icon">
				<img src={img.src} alt={img.alt} />
			</div>
			<h2>{title}</h2>
		</div>
	{/each}
</div>

<style lang="sass">
h2
    font-size: 18px

.blurbScroll
    width: 100%
    margin: auto
    display: inline-flex
    flex-direction: row
    padding: 25px 15px
    overflow-x: scroll
    scroll-snap-type: x mandatory

.blurb
    max-width: 300px
    max-height: 335px
    padding: 100px 80px
    margin: auto 12.5px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    border-radius: 3px
    flex: 1 0 100%
    order: 0
    background: var(--palette-pasteWhite-600)
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2)
    scroll-snap-align: center

.icon
    width: max-content
    img
        max-width: 80px
        margin-bottom: 10px
</style>
