<!-- Build with JS https://www.embla-carousel.com/ -->
<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';

	let emblaApi;
	let options = { loop: false };
	let plugins = [Autoplay()];

	function onInit(event) {
		emblaApi = event.detail;
		console.log(emblaApi.slideNodes()); // Access API
	}
</script>

<div
	class="carousel rounded-box embla"
	use:emblaCarouselSvelte={{ options, plugins }}
	on:emblaInit={onInit}
>
	<div class="embla__container">
		<div class="carousel-item embla__slide">
			<img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
		</div>
		<div class="carousel-item embla__slide">
			<img
				src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item embla__slide">
			<img
				src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item embla__slide">
			<img
				src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item embla__slide">
			<img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
		</div>
		<div class="carousel-item embla__slide">
			<img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
		</div>
		<div class="carousel-item embla__slide">
			<img
				src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
				alt="Burger"
			/>
		</div>
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
