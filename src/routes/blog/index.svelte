<script>
	import { Collection } from "sveltefire";
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<Collection let:data={posts} path={'blog'}>
	<h1 slot="loading">⌛</h1>

	<h1>Recent posts</h1>
	<ul>
		{#each posts as post}
			<li>
				<a rel="prefetch" href="blog/{post.id}">
					{post.title}
				</a>
			</li>
		{/each}
	</ul>
</Collection>
