<script lang="ts">
	import { cn } from '$lib/utils';
	import { urlForImage } from '$lib/sanity';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let portableText: any;
	let additionalClass: string = '';
	export { additionalClass as class };
	export let showBgColor: boolean = true;
	export let showLqip: boolean = true;

	export let fitImage: boolean = false;
	export let isGallery: boolean = false;
	export let alt: string = 'Image';
	export let width: number = 200; // Default width if not provided
	export let height: number = undefined; // Default height if not provided

	const defaultSrc: string =
		'https://cdn.sanity.io/images/c0ukxgwn/production/8c8030736bcea6553aef12ae70b852a73c872d03-5305x3537.jpg?rect=295,0,4716,3537&w=1640&h=1230&fit=crop&auto=format';

	export let image: string = portableText?.value ?? '';
	export let aspectRatio: number;
	let isLoaded: boolean = false;
	let src: string = '';
	let largeSrc: string = '';
	let calculatedHeight: number;

	onMount(() => {
		initializeImage();
	});

	function initializeImage(): void {
		const sourceWidth: number = width;
		let sourceHeight: number = height;

		if (!sourceHeight) {
			if (aspectRatio) {
				sourceHeight = Math.floor(sourceWidth / aspectRatio);
			} else {
				sourceHeight = Math.floor(width / (16 / 9)); // Fallback to default aspect ratio
			}
		}

		calculatedHeight = sourceHeight;
		src = calculateImageUrl(image, sourceWidth, calculatedHeight);
		largeSrc = calculateLargeImageUrl(image, sourceWidth, calculatedHeight);

		isLoaded = true;
	}

	$: {
		if (portableText?.value) {
			image = portableText.value;
		}
		if (width && height) {
			calculatedHeight = height;
			src = calculateImageUrl(image, width, calculatedHeight);
			largeSrc = calculateImageUrl(image, width, calculatedHeight, true);
		}
	}

	function calculateImageUrl(
		image: string,
		width: number,
		height?: number,
		isLarge: boolean = false
	): string {
		if (!image) return defaultSrc;
		const builder: any = urlForImage(
			image,
			Math.floor(width),
			// Das hier croppt die Bilder. Bei Logos ist das schlecht.
			height !== undefined ? Math.floor(height) : undefined
		);
		return typeof builder.url === 'function' ? builder.url() : builder.toString();
	}

	function calculateLargeImageUrl(image: string, width: number, height: number): string {
		if (!image) return defaultSrc;
		const builder = urlForImage(image, Math.floor(width), Math.floor(height));
		return typeof builder.url === 'function' ? builder.url() : builder.toString();
	}

	function handleClick(event: Event): void {
		if (isGallery) {
			event.preventDefault();
		}
	}

	function imageAttributes(): { [key: string]: string | null } {
		return {
			'data-pswp-width': isGallery ? width.toString() : null,
			'data-pswp-height': isGallery ? (height ? height.toString() : null) : null,
			target: isGallery ? '_blank' : null,
			rel: isGallery ? 'noreferrer' : null,
			href: isGallery ? largeSrc : null
		};
	}

	$: imageStyle = `flex: ${
		fitImage ? aspectRatio : image?.customRatio
	} 1 0%; background-size: cover; background-image: url(${
		showLqip ? image?.asset?.metadata?.lqip : ''
	}); background-color: ${showBgColor ? image?.asset?.metadata?.bgColor : ''};`;
</script>

{#if src && isLoaded}
	<div
		class={cn('image w-full overflow-hidden', additionalClass)}
		transition:fade={{ duration: 200 }}
		style={imageStyle}
	>
		{#if image || defaultSrc}
			<svelte:element this={isGallery ? 'a' : 'span'} on:click={handleClick} {...imageAttributes()}>
				<img {src} {alt} {width} height={height ? height : calculatedHeight} loading="lazy" />
			</svelte:element>
		{:else}
			<p>No Source set</p>
		{/if}
	</div>
{/if}
