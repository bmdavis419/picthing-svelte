<script>
	const { data } = $props();
</script>

<h2 class="text-2xl font-bold">basic sveltekit demo</h2>

{#await data.message}
	<p>Loading...</p>
{:then message}
	<p>
		Message from server: {message}
	</p>
{/await}
