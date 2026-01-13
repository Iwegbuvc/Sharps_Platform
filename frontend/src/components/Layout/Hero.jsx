import Image1 from "../../assets/bags.jpg";
import Image2 from "../../assets/jackets.jpg";
import Image3 from "../../assets/jeans.jpg";
import Image4 from "../../assets/suits.jpg";
import Image5 from "../../assets/tshirts.jpg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Up to 50% off on all Men's Wear",
    description: "Discover premium styles crafted for confidence and comfort.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description: "Elevate your wardrobe with timeless fashion essentials.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description: "Limited-time deals you don’t want to miss.",
  },
  {
    id: 4,
    img: Image4,
    title: "Luxury Suits Collection",
    description: "Sharp looks tailored for every occasion.",
  },
  {
    id: 5,
    img: Image5,
    title: "Everyday Tees, Big Comfort",
    description: "Simple. Stylish. Essential.",
  },
];

const Hero = () => {
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

  return (
    /* FULL WIDTH + FULL HEIGHT BACKGROUND */
    <section className="h-full w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 flex items-center">
      {/* CENTERED CONTENT – NO STRETCH */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center min-h-[83vh]">
                {/* TEXT */}
                <div className="flex flex-col gap-5 text-center sm:text-left order-2 sm:order-1 px-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                    {data.title}
                  </h1>

                  <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto sm:mx-0 text-center sm:text-left">
                    {data.description}
                  </p>

                  <div>
                    <button className="bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                      Shop Now
                    </button>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center order-1 sm:order-2">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="
                      mx-auto
                      w-[260px] h-[260px]
                      sm:w-[420px] sm:h-[420px]
                      object-cover
                      rounded-xl
                      drop-shadow-xl
                      transition-transform duration-500
                      hover:scale-105
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
