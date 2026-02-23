import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { currency, products, orders } = useContext(ShopContext);

  return (
    <div className="min-h-[70vh] border-t pt-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="text-2xl mb-8">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {orders.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <p className="text-gray-500 text-lg">
            You haven't placed any orders yet.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {orders.map((order) =>
            Object.entries(order.items).map(([productId, sizes]) =>
              Object.entries(sizes).map(([size, quantity]) => {
                const productData = products.find(
                  (product) => product._id === productId,
                );

                if (!productData) return null;

                return (
                  <div
                    key={`${order.id}-${productId}-${size}`}
                    className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                  >
                    {/* Left */}
                    <div className="flex flex-1 items-start gap-6">
                      <img
                        src={productData.image[0]}
                        alt={productData.name}
                        className="w-20 rounded-md"
                      />

                      <div>
                        <p className="font-medium text-lg">
                          {productData.name}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-700">
                          <p>
                            {currency}
                            {productData.price.toLocaleString()}
                          </p>
                          <p>Quantity: {quantity}</p>
                          <p>Size: {size}</p>
                        </div>

                        <p className="mt-2 text-sm text-gray-500">
                          Date: {order.date}
                        </p>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center justify-between flex-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <p className="text-sm md:text-base">{order.status}</p>
                      </div>

                      <button className="border px-4 py-2 text-sm font-medium rounded-md hover:bg-black hover:text-white transition">
                        Track Order
                      </button>
                    </div>
                  </div>
                );
              }),
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
