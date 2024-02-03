<script lang="ts">
	import { cn } from '$lib/utils';
	export let tip: string = 'hello';

	let tooltipClasses: string = 'tooltip';
	let additionalClasses: string = '';
	export { additionalClasses as class };
</script>

<div class={cn(tooltipClasses, additionalClasses)} data-tip={tip}>
	<a class="btn" role="button"><slot /></a>
</div>
