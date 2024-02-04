<script lang="ts">
	import { ThemeController } from '$lib/components';
</script>

<main class=" w-full grid place-items-center">
	<div class="container mx-auto px-5">
		<div class="navbar px-0 py-8 relative z-10">
			<div class="navbar-start lg:w-auto">
				<div class="dropdown">
					<label
						tabindex="0"
						class="btn bg-transparent hover:bg-transparent border-none lg:hidden pr-4 pl-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li><a class="hover:bg-purple-500">About</a></li>
						<li tabindex="0">
							<a class="justify-between hover:bg-purple-500">
								Resources
								<svg
									class="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
								</svg>
							</a>
							<ul class="p-2 bg-base-100">
								<li><a class="hover:bg-purple-500">Submenu 1</a></li>
								<li><a class="hover:bg-purple-500">Submenu 2</a></li>
							</ul>
						</li>
						<li><a class="hover:bg-purple-500">Blog</a></li>
						<li tabindex="0">
							<a class="justify-between hover:bg-purple-500">
								Plans & Pricing
								<svg
									class="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
								</svg>
							</a>
							<ul class="p-2 bg-base-100">
								<li><a class="hover:bg-purple-500">Submenu 1</a></li>
								<li><a class="hover:bg-purple-500">Submenu 2</a></li>
							</ul>
						</li>
					</ul>
				</div>
				<a class="font-bold text-2xl pb-1 pr-4 text-gray-900 cursor-pointer">omega</a>
			</div>
			<div class="navbar-center lg:w-1/2 hidden lg:flex text-gray-500 font-medium">
				<ul class="menu menu-horizontal px-1">
					<li><a class="hover:text-purple-500">About</a></li>
					<li tabindex="0">
						<a class="hover:text-purple-500">
							Resources
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
							>
								<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</a>
						<ul class="p-2 bg-white">
							<li><a class="hover:text-purple-500">Submenu 1</a></li>
							<li><a class="hover:text-purple-500">Submenu 2</a></li>
						</ul>
					</li>
					<li><a class="hover:text-purple-500">Blog</a></li>
					<li tabindex="0">
						<a class="hover:text-purple-500">
							Plans & Pricing
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
							>
								<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</a>
						<ul class="p-2 bg-white">
							<li><a class="hover:text-purple-500">Submenu 1</a></li>
							<li><a class="hover:text-purple-500">Submenu 2</a></li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="navbar-end">
				<a
					class="text-purple-500 hover:text-indigo-700 cursor-pointer py-3 px-4 capitalize tracking-wider font-semibold"
					>Login</a
				>
				<a
					class="btn bg-purple-500 hover:bg-indigo-700 border-none text-white py-3.5 px-4 h-auto min-h-min capitalize tracking-wider"
					>Request demo</a
				>

				<ThemeController />
			</div>
		</div>
		<header class="relative">
			<img
				src="https://cdn.pixabay.com/photo/2022/11/18/14/49/shapes-7600305_960_720.jpg"
				alt=""
				class="w-full h-full rounded-2xl absolute inset-0 object-cover"
			/>
		</header>
		<div class="hero py-8">
			<div class="hero-content text-center">
				<div class="max-w-xl">
					<span class="text-lg text-purple-500 font-medium block mb-3">Early access sign up</span>
					<h1 class="text-3xl md:text-5xl text-gray-900 font-bold">
						The modern beginner's guide to UI/UX design.
					</h1>
					<p class="py-6 px-5 md:px-16 text-xl">
						Sign up now for completely free access to omegas's modern guide to UI/UX design.
					</p>
					<div class="flex items-center justify-center gap-6 mt-2 flex-wrap">
						<input
							type="email"
							placeholder="email@example.com"
							class="input w-full max-w-xs bg-purple-100 placeholder-purple-500 font-medium"
						/>
						<button
							class="btn btn-primary border-none bg-purple-500 hover:bg-indigo-700 normal-case px-6 text-base tracking-wider"
							>Sign up</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
