import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Get 20% Off Your First Order
      </p>
      <p className="text-gray-400 mt-3">
        Be the first to discover new arrivals, exclusive offers, and curated
        style updates — delivered straight to your inbox.
      </p>
      <div className="w-full sm:w-1/2 mx-auto mt-6">
        <form
          onSubmit={onSubmitHandler}
          className="flex items-center border border-gray-300 pl-4 rounded-sm"
        >
          <input
            className="w-full outline-none py-3 text-sm placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="bg-black text-white text-xs px-10 py-4 hover:bg-gray-800 transition-colors duration-300"
          >
            SUBSCRIBE
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-2 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default NewsletterBox;
