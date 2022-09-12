<script lang="ts">
import type { SimpleSection } from "$lib/types/ComponentTypes";
import Button from "$lib/SimpleButtons/button.svelte";

export let simpleSection: SimpleSection;
</script>


<div class="simpleSection" style="--back-Image: url('{simpleSection.backImgSrc}');">
    <div class="content">
        <div class="substitle">
            <h2>{simpleSection.title}</h2>
            <p>{simpleSection.body}</p>
        </div>
        <Button btnCtx={{cta: `${simpleSection.button.cta}`, action: `${simpleSection.button.action}`, alignment: 'center'}}/>
    </div>
</div>

<style lang="sass">
@use '../../abstracts/BreakPoints' as *
h2, p
    color: #fff

.simpleSection
    --back-Image: url('/favicon.png')
    position: relative
    display: flex
    flex-direction: column
    align-items: center
    padding: 250px 65px
    background: rgba(0, 0, 0, 1)
    &::before
        content: ''
        width: 100%
        height: 100%
        position: absolute
        inset: 0
        display: block
        background-image: var(--back-Image)
        background-size: cover
        background-position: center
        background-repeat: no-repeat
        opacity: 0.5
    @include dynamicpoint( $max: 850px)
        padding: 150px 45px

.content
    position: relative
    text-align: center

.substitle
    margin-bottom: 30px
</style>