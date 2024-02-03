<script lang="ts">
	import { cn } from '$lib/utils';

	let statClasses: string = 'stats shadow-xl';
	let additionalClasses: string = '';
	export { additionalClasses as class };

	export interface Stat {
		title: string;
		value: string;
		desc: string;
	}

	export let stats: Stat[] = [
		{
			title: 'Total Page Views',
			value: '89,400',
			desc: '21% more than last month'
		},
		{
			title: 'Total  Views',
			value: '600',
			desc: '21% more than last month'
		},
		{
			title: 'Total Fidibus',
			value: '9,400',
			desc: '21% more than last month'
		}
	];
</script>

<div class={cn(statClasses, additionalClasses)}>
	{#each stats as stat}
		<div class="stat">
			<div class="stat-title">{stat.title}</div>
			<div class="stat-value">{stat.value}</div>
			<div class="stat-desc">{stat.desc}</div>
		</div>
	{/each}
</div>
