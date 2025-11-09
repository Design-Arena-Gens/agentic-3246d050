import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "EcoRunner Classic",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop",
    description: "Sustainable running shoes made from organic cotton and natural rubber",
    category: "Running"
  },
  {
    id: 2,
    name: "Nature Stride",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop",
    description: "Premium walking shoes crafted from bamboo fiber and recycled materials",
    category: "Walking"
  },
  {
    id: 3,
    name: "Terra Casual",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop",
    description: "Everyday casual shoes with organic hemp canvas and cork sole",
    category: "Casual"
  },
  {
    id: 4,
    name: "Green Trail Pro",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop",
    description: "Trail running shoes with natural latex and organic cotton upper",
    category: "Trail"
  },
  {
    id: 5,
    name: "Organic Sport",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop",
    description: "Athletic shoes made from sustainable eucalyptus tree fiber",
    category: "Sport"
  },
  {
    id: 6,
    name: "Earth Sneaker",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&auto=format&fit=crop",
    description: "Classic sneakers with organic linen and biodegradable sole",
    category: "Sneakers"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h1 className="text-3xl font-bold text-green-800">EcoStep Organics</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#products" className="text-gray-700 hover:text-green-600 transition">Products</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition">About</a>
              <a href="#sustainability" className="text-gray-700 hover:text-green-600 transition">Sustainability</a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                Cart (0)
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Walk Naturally, Live Sustainably
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Premium organic shoes crafted from nature&apos;s finest materials.
              Every step you take supports a healthier planet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#products" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition shadow-lg">
                Shop Collection
              </a>
              <a href="#about" className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition shadow-lg border-2 border-green-600">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Organic Materials</h3>
              <p className="text-gray-600">Made from sustainable, certified organic materials</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Biodegradable</h3>
              <p className="text-gray-600">Returns to earth without harmful chemicals</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Carbon Neutral</h3>
              <p className="text-gray-600">Zero carbon footprint in production and shipping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Collection</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Every pair is handcrafted with care, using only the finest organic materials
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">${product.price}</span>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6">
            Founded in 2020, EcoStep Organics was born from a simple belief: footwear shouldn&apos;t cost the earth.
            We pioneered the use of 100% organic and biodegradable materials in premium shoe manufacturing.
          </p>
          <p className="text-lg text-gray-700">
            Every pair of shoes is crafted by skilled artisans using traditional techniques combined with
            innovative sustainable materials like organic cotton, natural rubber, bamboo fiber, and hemp canvas.
          </p>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Commitment</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌾</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Organic Materials</h3>
                  <p className="text-gray-600">Certified organic cotton, hemp, bamboo, and natural rubber</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💧</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Water Conservation</h3>
                  <p className="text-gray-600">90% less water usage compared to conventional shoe production</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Waste</h3>
                  <p className="text-gray-600">All production scraps are composted or recycled</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌳</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tree Planting</h3>
                  <p className="text-gray-600">One tree planted for every pair sold</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Trade</h3>
                  <p className="text-gray-600">Ethically made by fairly compensated artisans</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📦</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eco Packaging</h3>
                  <p className="text-gray-600">100% recycled and recyclable packaging materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl mb-8">
            Make a choice that&apos;s good for your feet and great for the planet
          </p>
          <a href="#products" className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition inline-block shadow-lg">
            Shop Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EcoStep Organics</h3>
              <p className="text-gray-400">Walking towards a sustainable future</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Running</a></li>
                <li><a href="#" className="hover:text-white transition">Casual</a></li>
                <li><a href="#" className="hover:text-white transition">Sport</a></li>
                <li><a href="#" className="hover:text-white transition">All Products</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#sustainability" className="hover:text-white transition">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EcoStep Organics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
