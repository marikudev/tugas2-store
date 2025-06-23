//import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Welcome to Our Store</h1>
      <p className="mb-4">Explore our range of products below.</p>
      <Link href="/products" className="text-blue-600 hover:underline">
        Go to Products
      </Link>
    </div>
  )
}
