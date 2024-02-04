<script lang="ts">
	import { cn } from '$lib/utils';

	let { beforeImage, afterImage, aspectRatio } = $props();

	let diffClasses: string = 'diff';
	aspectRatio = aspectRatio || 'aspect-[16/9]';
</script>

<div class={cn(diffClasses, aspectRatio)}>
	<div class="diff-item-1">
		<img alt="daisy" src={beforeImage} />
	</div>
	<div class="diff-item-2">
		<img alt="daisy" src={afterImage} />
	</div>
	<div class="diff-resizer"></div>
</div>
