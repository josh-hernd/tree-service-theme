<script lang="ts">
	import type { LeadTitle } from '$lib/types/ComponentTypes';

	
	export let titleFill: LeadTitle;
	export let titleStyle = {
		color: ''
	};

</script>

<div class="textWrap">
	<h2 class="insert">// {titleFill.lead}</h2>
	<h2 style="color: {titleStyle.color == 'none' ? 'inherit' : titleStyle.color };">{@html titleFill.title}<span class="accent">.</span></h2>
	{#if titleFill.body}
		<div class="bodyText">
			{#if titleFill.body?.tabbed}
				<p class="tabbed">{titleFill.body?.tabbed}</p>
			{/if}
			{#if titleFill.body?.normal}
				<p>{titleFill.body?.normal}</p>
			{/if}
			
		</div>
	{/if}
</div>

<style lang="sass">
@use '../../abstracts/BreakPoints' as *

h2
	margin: 12px 0px

p
	text-align: justify
	margin-bottom: 5px

p.tabbed
	padding-left:  15px
	border-left: 4px solid var(--palette-orange-600)
	
.textWrap
	width: 90%
	@include dynamicpoint($max: 850px)
		width: 100%

.bodyText
	margin: 22px 0px 30px

</style>
