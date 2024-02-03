<script lang="ts">
	import { cn } from '$lib/utils';
	import Button from '$lib/components/Actions/Button.svelte';

	import { Image } from '$lib/components';
	import { truncateString } from '$lib/utils';

	interface Item {
		title: string;
		date: string;
		short: string;
		description: string;
		image: string;
		icon: string;
		href: string;
		readMore: string;
	}

	export let item: Item = {
		title: '',
		date: '',
		short: '',
		description: '',
		image: '',
		icon: '',
		href: '',
		readMore: 'Read more…'
	};

	let additionalClasses: string = '';
	export { additionalClasses as class };

	export let { title, date, short, description, image, icon, href, readMore } = item;

	$: descriptionText = short ? truncateString(short, 12) : 'No description available';
	$: cardClasses = 'card bg-base-100 shadow-xl group';

	// Check if Post ist new (less than 10 days old)
	let dateObject: { date: string } = { date }; // Example date object
	let currentDate: Date = new Date();
	let itemDate: Date = new Date(dateObject.date);

	let timeDifference: number = currentDate.getTime() - itemDate.getTime();
	let dayDifference: number = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days

	let isWithinTenDays: boolean = dayDifference <= 10;
</script>

<svelte:element this={href ? 'a' : 'div'} {href} class={cn(cardClasses, additionalClasses)}>
	{#if image}
		<figure>
			<!-- This updates the image for sure -->
			{#key image}
				<Image
					alt={title}
					{image}
					width={720}
					class="w-full scale-100 duration-500 group-hover:scale-[1.02] group-active:scale-105"
				/>
			{/key}
		</figure>
	{/if}
	<div class="card-body">
		<h2 class="card-title">
			{title}
			{#if isWithinTenDays}
				<div class="badge badge-secondary">NEW</div>
			{/if}
		</h2>
		{#if description || descriptionText || short}
			<p>
				{description || descriptionText || short}
			</p>
		{/if}

		<div class="card-actions justify-end">
			<Button color="btn-primary">
				{readMore}
			</Button>
		</div>
	</div>
</svelte:element>
