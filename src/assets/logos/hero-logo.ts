import { getImage } from 'astro:assets';
import logo from './scd_logo_2.webp';

// Shared by the hero <img> and its <head> preload, so both always request the same file.
export const heroLogo = await getImage({ src: logo, widths: [480, 640, 800, 1320], quality: 70 });

export const heroLogoSizes =
	'(min-width: 1728px) min(47.5vw, 1500px), (min-width: 1024px) calc(25.57vw + 200px), (min-width: 393px) min(calc(43.9vw + 191.5px), calc(100vw - 64px)), min(92.6vw, 364px)';
