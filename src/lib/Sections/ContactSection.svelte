<script lang="ts">
	import type { ContactContextType } from '$lib/types/ComponentTypes';
	import ContactForm from '$lib/Form/ContactForm.svelte';
	import LeadTitles from '$lib/Text/LeadTitles.svelte';

	export let ContactContext: ContactContextType;
</script>

<div class="contactSection" id="contact">
	<div class="twoCols">
		<div class="col">
			<LeadTitles
				titleFill={{
					lead: `${ContactContext.lead}`,
					title: `${ContactContext.title}`,
					body: { tabbed: `${ContactContext.desc}` }
				}}
			/>
			{#each ContactContext.blurbs as blurb}
				<div class="blurb">
					<div class="icon">
						<iconify-icon icon={blurb.icon} width="50" style="color: var(--palette-orange-600);" />
					</div>
					<div class="textEl">
						<h2>{blurb.title}</h2>
						<a href={blurb.href} target={blurb.target ? '_blank' : ''}>{blurb.label}</a>
					</div>
				</div>
			{/each}
		</div>
		<div class="col">
			<ContactForm fields={ContactContext.buildForm} />
		</div>
	</div>
</div>

<style lang="sass">
@use '../../abstracts/BreakPoints' as *

h2
    font-size: 25px
    color: var(--palette-darkGreen-500)
    margin-bottom: 12px

a
    word-break: break-all
    color: var(--palette-orange-600)
    text-decoration: none

.contactSection
    padding: 100px 65px
    @include dynamicpoint( $max: 850px)
        padding: 100px 45px

.twoCols
    display: flex
    @include dynamicpoint( $max: 850px)
        flex-direction: column

.col
    width: 50%
    @include dynamicpoint( $max: 850px)
        width: 100%
        margin-bottom: 30px
.blurb
    display: flex
    margin: 15px auto
.icon
    padding: 10px
    margin-right: 15px
    background: var(--palette-pasteWhite-600)
</style>
