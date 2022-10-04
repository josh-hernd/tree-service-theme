<script lang="ts">
	import { AboutExcerpt, AboutPost, PostOnPage } from '$content/AboutPost.json';
	import Head from '$lib/Header/head.svelte';
	import CurrentPost from '$lib/PostHeader/CurrentPost.svelte';
	import TwoSection from '$lib/Sections/TwoSection.svelte';
</script>

<Head onPage={PostOnPage} />

<CurrentPost currentPost={AboutExcerpt} />

<TwoSection TwoColInsert={AboutPost} />
