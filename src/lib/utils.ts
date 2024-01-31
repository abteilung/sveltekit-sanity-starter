// Combine ClassNames
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	console.log('Mööörging', inputs);
	return twMerge(clsx(inputs));
}

//Generate the Youtube, Vimeo, or Loom embed URL based on an URL from the user
export function generateVideoEmbed(url: string) {
	if (url.includes('youtube.com')) {
		return `https://www.youtube.com/embed/${url.split('v=')[1]}`;
	}
	// Handle youtu.be links
	else if (url.includes('youtu.be')) {
		return `https://www.youtube.com/embed/${url.split('be/')[1]}`;
	} else if (url.includes('vimeo.com')) {
		return `https://player.vimeo.com/video/${url.split('vimeo.com/')[1]}`;
	} else if (url.includes('loom.com')) {
		return `https://www.loom.com/embed/${url.split('loom.com/share/')[1]}`;
	} else {
		return url;
	}
}

// Chunk Array
export function chunk(array, size) {
	const chunkedArr = [];
	let copied = [...array];
	const numOfChild = Math.ceil(copied.length / size);
	for (let i = 0; i < numOfChild; i++) {
		chunkedArr.push(copied.splice(0, size));
	}
	return chunkedArr;
}

// Format Swiss Numbers
export function formatSwissNumber(number) {
	// Use Intl.NumberFormat with the 'de-CH' locale (Swiss German) for Swiss formatting
	return new Intl.NumberFormat('de-CH').format(number);
}

// Format Swiss Prices
export function formatSwissPrice(price) {
	// Check if the price has decimals
	const hasDecimals = price % 1 !== 0;

	// Format the price accordingly
	if (hasDecimals) {
		return `CHF ${price.toFixed(2)}`;
	} else {
		return `CHF ${Math.floor(price)}.–`;
	}
}

// Function to convert Isodates to human readable dates
export function formatDate(date) {
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	return new Date(date).toLocaleDateString('de-DE', options);
}

// Truncate String
// Export function to truncate a string
export function truncateString(str: string, num: number) {
	if (str.length <= num) {
		return str;
	}
	return str.split(/\s+/).slice(0, num).join(' ') + '...';
}

// Debounce
export function debounce(fn, delay) {
	let timeout;
	return function (...args) {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
}

// Throttle
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type throttleFunction = (args: any) => void;

export const throttle = (delay: number, fn: throttleFunction): throttleFunction => {
	let inDebounce = null;
	return (args) => {
		clearTimeout(inDebounce);
		inDebounce = setTimeout(() => fn(args), delay);
	};
};

export function searchItems(query, items) {
	const lowercasedQuery = query.toLowerCase();
	return items.filter((item) => {
		return (
			item.title.toLowerCase().includes(lowercasedQuery) ||
			item.sku.toLowerCase().includes(lowercasedQuery)
		);
	});
}

// Get Base URL with Port
export function getBaseUrl(headers) {
	const protocol = headers['x-forwarded-proto'] || 'http';
	const host = headers['host'];
	return `${protocol}://${host}`;
}
