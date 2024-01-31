<script lang="ts">
	import { cn } from '$lib/utils';
	import { Image } from '$lib/components';
	import { truncateString } from '$lib/utils';

	interface Item {
		title: string;
		date: string;
		short: string;
		description: string;
		image: string;
		hasFilter: boolean;
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
		hasFilter: false,
		icon: '',
		href: '',
		readMore: 'Read more…'
	};

	export let {
		title,
		date,
		short,
		description,
		image,
		hasFilter,
		icon,
		href,
		readMore = 'Read more…'
	} = item;

	$: descriptionText = short ? truncateString(short, 12) : 'No description available';
	$: cardClasses = cn('group relative space-y-6');

	// Check if Post ist new (less than 10 days old)
	let dateObject: { date: string } = { date }; // Example date object
	let currentDate: Date = new Date();
	let itemDate: Date = new Date(dateObject.date);

	let timeDifference: number = currentDate.getTime() - itemDate.getTime();
	let dayDifference: number = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days

	let isWithinTenDays: boolean = dayDifference <= 10;
</script>

<svelte:element this={href ? 'a' : 'div'} {href} class={cardClasses}>
	{#if image}
		<div class="overflow-hidden">
			{#if isWithinTenDays}
				<div
					class="absolute -right-7 -top-7 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-xl"
				>
					<div>New</div>
				</div>
			{/if}
			<!-- This updates the image for sure -->
			{#key image}
				<Image
					alt={title}
					hasFilter={true}
					{image}
					width={720}
					class="w-full scale-100 duration-150 group-hover:scale-105 group-active:scale-105"
				/>
			{/key}
		</div>
	{/if}
	<h3>{title}</h3>
	{#if description || descriptionText || short}
		<div class="text-black/50">
			<p>{description || descriptionText || short}</p>
		</div>
	{/if}
	<div class="flex items-center">
		<p class="mb-0 self-end text-sm group-hover:text-accent">{readMore}</p>
	</div>
</svelte:element>
