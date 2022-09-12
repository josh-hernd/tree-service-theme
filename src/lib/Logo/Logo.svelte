<script lang="ts">
interface SetLogo {
    src: string
    desc: string
    size: string
}

export let setLogo: SetLogo;
</script>

<div class="logo" style="--logo-size:{setLogo.size};">
    <a href="/">
    <img src="{setLogo.src}" alt="{setLogo.desc}">
</a>
</div>

<style lang="sass">
.logo 
    --logo-size: 90px
    width: 100%
    max-width: var(--logo-size)
    img
        width: 100%
        display: block
</style>