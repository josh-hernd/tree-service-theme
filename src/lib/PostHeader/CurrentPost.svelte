<script lang="ts">
import type { CurrentPost } from "$lib/types/ComponentTypes";

export let currentPost: CurrentPost;
</script>

<div class="currentPost" style="--currentImage: url('{currentPost.backImage}');">
    <div class="content">
        <p>{currentPost.parent}</p>
<h1>{currentPost.title}</h1>
    </div>
</div>

<style lang="sass">
@use '../../abstracts/BreakPoints' as *
h1, p
    color: var(--palette-pasteWhite-600)

p
    padding-left:  15px
    border-left: 4px solid var(--palette-orange-600)

.currentPost
    --currentImage: url('/favicon.png')
    position: relative
    padding: 150px 65px
    background: rgba(0, 0, 0, 1)
    &::after
        content: ''
        width: 100%
        height: 100%
        position: absolute
        inset: 0
        display: block
        background-image: var(--currentImage)
        background-size: cover
        background-position: center
        background-repeat: no-repeat
        opacity: 0.5
    @include dynamicpoint( $max: 850px)
        padding: 100px 45px

.content
    position: relative
    z-index: 1
</style>