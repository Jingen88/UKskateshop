import React from "react";
import ProductGrid from "./ProductGrid/index";
import { SlideIn } from "@/components/SlideIn";
// Mock data for demonstration
const mockProducts = [
	{
		id: "1",
		name: "Classic Maple Deck",
		price: 5999,
		image: { url: "/pink-drop-complete.png", alt: "Classic Maple Deck" },
		customizer_link: "/customize/1",
	},
	{
		id: "2",
		name: "Street Cruiser",
		price: 6499,
		image: { url: "/yellow-black-complete.png", alt: "Street Cruiser" },
		customizer_link: "/customize/2",
	},
	{
		id: "3",
		name: "Pro Series",
		price: 7999,
		image: { url: "/thank-you-complete.png", alt: "Pro Series" },
		customizer_link: "/customize/3",
	},
	{
		id: "4",
		name: "Mini Ramp",
		price: 4999,
		image: { url: "/onimask-complete.png", alt: "Mini Ramp" },
		customizer_link: "/customize/4",
	},
];

// Simulate async fetch
async function fetchProducts() {
	// Replace with your real API call if needed
	// const res = await fetch("/api/products");
	// return await res.json();
	return mockProducts;
}

export default async function Boards() {
	const products = await fetchProducts();

	return (
		<div className="flex bg-texture flex-col items-center w-full min-h-screen bg-orange-50 p-5">
			<SlideIn delay={0.2}>

			<h1 className="flex flex-wrap text-5xl font-bold ultra-bold tracking-wide px-5 line-clamp-1 mt-5">
				{" "}
				Latest Boards
			</h1>
			</SlideIn>
			<SlideIn  delay={0.4}>
			<p className="flex space-x-8 text-xl text-zinc-800 special-elite-bold mt-3 mb-5">
				Newest boards in our collection.
			</p>
			</SlideIn>

			<ProductGrid products={products} />
		</div>
	);
}