import React from "react";
import { SkateboardProduct } from "./SkateboardProduct";
import type { Product } from "./SkateboardProduct";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => (
  <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
    {products.map((product) => (
      <SkateboardProduct key={product.id} product={product} />
    ))}
  </div>
);

export default ProductGrid;
