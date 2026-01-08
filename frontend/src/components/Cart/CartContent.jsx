import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
  const cartProducts = [
    {
      id: 1,
      name: "T-Shirt",
      price: 29.99,
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      name: "Jeans",
      price: 25.99,
      quantity: 1,
      image: "https://picsum.photos/200?random=2",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b mb-4"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-26 h-26 object-cover rounded-md"
          />
          <div className="ml-4">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-gray-500">Qty: {product.quantity}</p>
            <div className="flex items-center mt-2">
              <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l font-medium">
                -
              </button>
              <span className="bg-gray-100 px-3 py-1">{product.quantity}</span>
              <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r">
                +
              </button>
            </div>
          </div>
          <div>
            <p>${(product.price * product.quantity).toFixed(2)}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 text-red-600 mt-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
