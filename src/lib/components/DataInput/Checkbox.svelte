<script lang="ts">
	import { cn } from '$lib/utils';

	let additionalClasses: string = '';
	export { additionalClasses as class };

	let checkboxClasses: string = 'checkbox';
	export let size: string = '';
	export let label: string = '';
	export let checked: boolean = true;
</script>

{#if label}
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">{label}</span>
			<input type="checkbox" {checked} class={cn(checkboxClasses, size, additionalClasses)} />
		</label>
	</div>
{:else}
	<input type="checkbox" {checked} class={cn(checkboxClasses, size, additionalClasses)} />
{/if}
