<script lang="ts">
	import { cn } from '$lib/utils';

	let btnClasses: string = 'btn';
	export let color: string = 'btn-info';
	export let size: string = '';
</script>

<button class={cn(btnClasses, color, size)}>
	<slot />
</button>
