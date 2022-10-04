<script lang="ts">
	import { PostOnPage, ServiceExcerpt, CredentialPost, ServicePost } from '$content/ServicesPost.json';
	import Head from '$lib/Header/head.svelte';
	import CurrentPost from '$lib/PostHeader/CurrentPost.svelte';
	import ScrollSection from '$lib/Sections/BlurbSection/ScrollSection.svelte';
import ThreeSection from '$lib/Sections/ThreeSection.svelte';
</script>

<Head onPage={PostOnPage}/>

<CurrentPost currentPost={ServiceExcerpt} />

<ThreeSection threeColSection={CredentialPost}/>

<ScrollSection ScrollSection={ServicePost}/>

<div class="spacer"></div>

<style lang="sass">
@use '../../abstracts/BreakPoints' as *

.spacer
    width: 100%
    height: 250px
    margin-top: -15%
    position: relative
    padding: 20% 65px 10%
    background: var(--palette-darkGreen-600)
    @include dynamicpoint($max: 850px)
        margin-top: -25%
        padding: 20% 45px 10%
        height: 200px
    &::before
        content: ''
        width: 100%
        height: 100%
        display: block
        position: absolute
        pointer-events: none
        inset: 0
        opacity: 0.05
        background-image: url(/jpg/v02-lines-37.jpeg)
        background-repeat: no-repeat
        background-position: 50% 0%
        background-size: cover
</style>