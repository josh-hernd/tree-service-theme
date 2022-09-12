<script lang="ts">
export let ImageFocus = {
    src: '',
    desc: ''
}
</script>
<div class="focusBox">
    <div class="focused">
        <img src="{ImageFocus.src}" alt="{ImageFocus.desc}">
    </div>
    <h2>{ImageFocus.desc}</h2>
</div>

<style lang="sass">
@use '../../abstracts/BreakPoints' as *

h2
    font-size: 18px
    color: var(--palette-pasteWhite-600)
.focusBox
    width: 100%
    position: relative
    margin: auto
    display: flex
    flex-direction: column
    align-items: center
.focused
    width: 60%
    margin: auto auto 25px
    @include dynamicpoint($max: 850px)
        width: 100%
    img
        width: 100%
        display: block
</style>