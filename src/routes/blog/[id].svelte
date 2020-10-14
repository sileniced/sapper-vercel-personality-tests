<script context="module">
	export async function preload({ params: { id: postId } }) {
		return { postId }
	}
</script>

<script>
	import { Doc } from "sveltefire";
	export let postId;
</script>

<Doc path={`blog/${postId}`} let:data={post}>
	<h1 slot="loading">⌛</h1>
	<h1>{post.title}</h1>

	<div>
		{post.content}
	</div>
</Doc>
