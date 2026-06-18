import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import API from "../../api/api";
import Loader from "../Common/Loader";

const Hero = () => {
  const [sliderProducts, setSliderProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await API.get("/products/getProducts");
        const products = Array.isArray(res.data.products)
          ? res.data.products
          : [];

        // Filter only featured products
        const featuredProducts = products.filter((product) => product.featured);

        // Map to slider format
        const sliderData = featuredProducts.map((product) => ({
          id: product._id,
          img: product.images?.[0]?.url || "", // Use first image from backend
          title: product.name,
          description: product.description,
        }));

        setSliderProducts(sliderData);
      } catch (err) {
        console.error("Failed to fetch featured products:", err);
        setSliderProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  // Show loading state
  if (loading) {
    return <Loader message="Loading featured products..." />;
  }

  // If no featured products, show message
  if (sliderProducts.length === 0) {
    return (
      <section className="w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No featured products available</p>
      </section>
    );
  }

  return (
    /* FULL WIDTH + FULL HEIGHT BACKGROUND */
    <section className="w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 flex items-center">
      {/* CENTERED CONTENT – NO STRETCH */}
      <div className="w-full h-full px-2.5 sm:px-4">
        <Slider {...settings}>
          {sliderProducts.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center h-full gap-2 sm:gap-4 pt-8">
                {/* TEXT */}
                <div className="flex flex-col gap-4 text-center sm:text-left order-2 sm:order-1 sm:pl-4 md:pl-6 sm:ml-6 md:ml-12">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                    {data.title}
                  </h1>

                  <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto sm:mx-0 text-center sm:text-left">
                    {data.description}
                  </p>

                  <div>
                    <Link
                      to="/products"
                      className="
    inline-block
    bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)]
    text-white
    px-6 py-3
    rounded-lg
    font-semibold
    shadow-lg
    hover:scale-105
    transition-transform
    duration-300
    cursor-pointer
  "
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center order-1 sm:order-2 items-center">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="
    w-[100vw] h-[100vw]
    sm:w-80 sm:h-80
    md:w-96 md:h-96
    object-cover
    rounded-xl
    drop-shadow-xl
    transition-transform duration-500
    hover:scale-105
    bg-gray-100
  "
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;

// FOR VIDEO BACKGROUND (REVERT TO THIS IF VIDEO IS ADDED BACK IN)
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="relative w-full min-h-[100svh] md:min-h-[83vh] overflow-hidden">
//       {/* Background video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//       >
//         <source src="/videos/14474471_2160_3840_30fps.mp4" type="video/mp4" />
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/45" />

//       {/* Foreground content */}
//       <div className="relative z-10 flex min-h-[100svh] md:min-h-[83vh] items-center px-4 sm:px-8 md:px-12 py-16">
//         <div className="max-w-2xl text-white">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
//             Discover Premium Products
//           </h1>
//           <p className="mt-4 text-sm sm:text-base text-white/90">
//             Explore featured collections and shop quality products in one place.
//           </p>
//           <Link
//             to="/products"
//             className="mt-6 inline-block bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
//           >
//             Shop Now
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
