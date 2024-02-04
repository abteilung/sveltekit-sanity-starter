<!-- Build with JS https://www.embla-carousel.com/ -->
<script lang="ts">
	import { cn } from '$lib/utils';
	import { Image, Button } from '$lib/components';
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';

	export let isAutoPlay = false;
	export let lightBoxEnable = false;
	export let arrowMode = true;
	export let dotMode = true;
	export let galleryMode = false;

	$: isLightBoxShow = false;
	$: selectedIndex = 0;

	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType } from 'embla-carousel';
	import Autoplay from 'embla-carousel-autoplay';

	const autoplayOptions = {
		delay: 5000,
		playOnInit: isAutoPlay,
		stopOnInteraction: false,
		stopOnMouseEnter: true
	};

	let emblaApi: EmblaCarouselType | null = null; // Initialisieren Sie emblaApi mit null
	let options = { loop: false };
	let plugins = [Autoplay(autoplayOptions)];

	function onInit(event) {
		emblaApi = event.detail;
		emblaApi.on('select', onSettle);
		console.log(emblaApi.slideNodes());
	}

	const onSettle = () => {
		selectedIndex = emblaApi.selectedScrollSnap();
	};

	const scrollPrev = () => {
		emblaApi.scrollPrev();
	};

	const scrollNext = () => {
		emblaApi.scrollNext();
	};

	const scrollTo = (index) => {
		selectedIndex = index;
		emblaApi.scrollTo(index);
	};

	const thumbnailsClick = (event) => {
		selectedIndex = event.detail.index;
		emblaApi.scrollTo(selectedIndex);
	};

	const onThumbnailSelect = (index: number) => () => {
		if (!$thumbnails?.clickAllowed()) return;
		$gallery?.scrollTo(index);
		$thumbnails?.scrollTo(index);
	};

	const toggleLightBox = (event) => {
		isLightBoxShow = !isLightBoxShow;
	};

	interface Slide {
		src: string;
		alt: string;
	}

	// Function vor prev and next buttons

	export let slides: Slide[] = [
		{
			src: 'https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',
			alt: 'Burger'
		},
		{
			src: 'https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg',
			alt: 'Burger'
		},
		{
			src: 'https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg',
			alt: 'Burger'
		},
		{
			src: 'https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg',
			alt: 'Burger'
		},
		{
			src: 'https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg',
			alt: 'Burger'
		},
		{
			src: 'https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg',
			alt: 'Burger'
		},
		{
			src: 'https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg',
			alt: 'Burger'
		}
	];
	const gallery = writable<EmblaCarouselType>();
	const thumbnails = writable<EmblaCarouselType>();

	$: selected = $gallery?.selectedScrollSnap() ?? 0;
	const onGallerySelect = () => {
		selected = $gallery?.selectedScrollSnap() ?? 0;
		$thumbnails?.scrollTo(selectedIndex);
	};
</script>

<div
	class={cn('embla rounded-box', dotMode ? 'relative pb-12' : '')}
	use:emblaCarouselSvelte={{ options, plugins }}
	on:emblaInit={onInit}
>
	<div class="embla__container">
		{#each slides as slide (slide.src)}
			<div class="embla__slide">
				<img src={slide.src} alt={slide.alt} />
			</div>
		{/each}
	</div>
	{#if arrowMode}
		<Button class="absolute top-1/2 -translate-y-1/2 left-0 rounded-full" on:click={scrollPrev}
			>←</Button
		>
		<Button class="absolute top-1/2 -translate-y-1/2 right-0 rounded-full" on:click={scrollNext}
			>→</Button
		>
	{/if}
	{#if dotMode && !galleryMode}
		<!-- flex gap-6 absolute bottom-3 justify-center w-full -->
		<div class="embla__dots">
			{#each slides as slide, index (slide.src)}
				<button
					on:click={() => {
						scrollTo(index);
					}}
					class={'embla__dot'.concat(selectedIndex == index ? ' embla__dot--selected' : '')}
				>
					<span></span>
				</button>
			{/each}
		</div>
	{/if}
</div>

{#if galleryMode}
	<div
		class="overflow-hidden mt-[10px] relative z-50"
		use:emblaCarouselSvelte={{
			store: thumbnails
		}}
	>
		<div class="grid grid-flow-col auto-cols-[89px] grid-rows-[70px] gap-x-[10px]">
			{#each slides as slide, index (slide.src)}
				<button
					class="group relative rounded-[.25rem] overflow-hidden"
					disabled={selected === index}
					on:click={onThumbnailSelect(index)}
				>
					<img class="w-full h-full object-cover" src={slide.src} alt="" />

					{#if selected === index}
						<div
							class="absolute top-0 left-0 w-full h-full bg-black opacity-60"
							transition:fade={{ duration: 250 }}
						/>
					{/if}
				</button>
			{/each}
		</div>
	</div>
{/if}

<style lang="postcss">
	.embla {
		@apply overflow-hidden;
	}

	.embla__container {
		@apply flex;
	}

	.embla__slide {
		flex: 0 0 50%;
		min-width: 0;
	}

	.embla__dots {
		@apply w-full gap-x-2 justify-center bottom-0 absolute flex;
		span {
			@apply w-8 h-1 block bg-primary/40 my-4;
		}
	}

	.embla__dot:hover span,
	.embla__dot--selected span {
		@apply bg-primary;
	}
</style>
