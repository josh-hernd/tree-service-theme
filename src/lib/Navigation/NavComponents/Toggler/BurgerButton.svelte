<script lang="ts">
	export let open: boolean;

	export let duration: number;
	export let burgerColor: string;
	export let menuColor: string;
</script>

<button
	class:open
	on:click={() => (open = !open)}
	style="--default-color:{open ? menuColor : burgerColor}; transition: color {duration}s ease-in-out; color: {open ? menuColor : burgerColor};"
>
	<svg width="32" height="32">
		<line
			id="top"
			x1="0"
			y1="9"
			x2="32"
			y2="9"
			style="transition: transform {duration}s ease-in-out, opacity {duration}s ease-in-out;"
		/>
		<line
			id="mid"
			x1="0"
			y1="18.5"
			x2="32"
			y2="18.5"
			style="transition: transform {duration}s ease-in-out, opacity {duration}s ease-in-out;"
		/>
		<line
			id="bot"
			x1="0"
			y1="28"
			x2="32"
			y2="28"
			style="transition: transform {duration}s ease-in-out, opacity {duration}s ease-in-out;"
		/>
	</svg>
</button>

<style lang="sass">
button
    --default-color: var(--palette-orange-600)
    position: relative
    padding: 5px
    z-index: 10
    background-color: var(--default-color)
    background-repeat: no-repeat
    border: none
    border-radius: 3px
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3)
    cursor: pointer
    overflow: hidden
    outline: none

svg line 
    --currentColor: var(--palette-pasteWhite-600)
    stroke: var(--currentColor)
    stroke-width: 3

// /* rotate the top line */
.open #top 
    transform: translate(10px, 0px) rotate(45deg)


/* hide the middle */
.open #mid 
    opacity: 0


/* rotate the bottom line */
.open #bot 
    transform: translate(-15px, 8px) rotate(-45deg)

</style>