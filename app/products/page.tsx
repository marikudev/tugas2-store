import Products from "@/src/component/Products";

export default function PageProducts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <p className="mb-4">Explore our range of products below.</p>
        <Products />
    </div>
  );
}