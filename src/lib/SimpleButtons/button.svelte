<script lang="ts">
	import type { AlignButton, ButtonContext } from '$lib/types/ComponentTypes';

	export let btnCtx: ButtonContext;

	function alignBtn(align: AlignButton) {
		if (align == 'left') {
			return 'auto auto 0px 0px';
		} else if (align == 'right') {
			return 'auto 0px 0px auto';
		} else if (align == 'centerRight') {
			return '0px 0px 0px auto';
		} else {
			return 'auto';
		}
	}
</script>

<div class="btn" style="--btn-alignment: {alignBtn(btnCtx.alignment)};">
	<a href={btnCtx.action}>
		<span>{btnCtx.cta}</span>
	</a>
</div>

<style lang="sass">
.btn
    --btn-alignment: auto
    width: max-content
    margin: var(--btn-alignment)
    background: var(--palette-orange-600)
    border-radius: 3px
    box-shadow: 0px 5px 20px 0px var(--palette-orange-600)
    transition: var(--global-animation)
    a
        font-family: 'Work Sans', sans-serif
        font-weight: 700
        font-size: 18px
        line-height: 160%
        text-decoration: none
        padding: 10px 30px
        display: block
        span
            color: var(--palette-pasteWhite-500)
            transition: var(--global-animation)
    &:hover
        background: var(--palette-orange-500)
        box-shadow: 0px 0px 20px 0px var(--palette-orange-500)
        transform: scale(1.1)
        span
            color: var(--palette-pasteWhite-600)
</style>
