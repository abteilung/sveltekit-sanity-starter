<script lang="ts">
	import { cn } from '$lib/utils';

	let btnClasses: string = 'btn';
	export let color: string = 'btn-info';
	export let size: string = '';
	let additionalClasses: string = '';
	export { additionalClasses as class };
</script>

<button on:click class={cn(btnClasses, color, size, additionalClasses)}>
	<slot />
</button>
