<script lang="ts">
import { AboutExcerpt, AboutPost } from "$content/AboutPost.json";
import CurrentPost from "$lib/PostHeader/CurrentPost.svelte";

import TwoSection from "$lib/Sections/TwoSection.svelte";

</script>

<CurrentPost currentPost={AboutExcerpt} />

<TwoSection TwoColInsert={AboutPost}/>