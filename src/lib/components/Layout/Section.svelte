<script lang="ts">
	import { cn } from '$lib/utils';

	let sectionClasses: string = 'py-6 lg:py-12';
	let additionalClass: string = '';

	export let bgColor: string = '';
	export { additionalClass as class };
</script>

<section class={cn(sectionClasses, bgColor, additionalClass)}>
	<slot />
</section>
