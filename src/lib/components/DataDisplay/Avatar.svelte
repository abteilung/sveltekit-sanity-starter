<script lang="ts">
	import { cn } from '$lib/utils';
	import { Image } from '$lib/components';

	let avatarClasses: string = 'avatar';
	export let alt: string;
	export let status: string = 'online';
</script>

<div class={cn(avatarClasses, status)}>
	<div class="w-24 rounded-full">
		<Image {alt} {image} width={120} />
	</div>
</div>
