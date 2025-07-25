import { BookHeart, Heart } from "lucide-react";
import React from "react";
import WishlistCard from "../Cards/WishlistCard";

const Wishlist = () => {
  const wishlist: any[] = [{}];
  return (
    <div className="space-y-5 lg:space-y-10">
      <div className="space-y-0.5">
        <h2 className="text-lg text-templateBrown lg:text-xl uppercase tracking-wide font-medium flex items-center gap-2">
          <Heart size={20} /> Wishlist
        </h2>
        <p className="text-xs font-light">Manage your personal information</p>
      </div>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-6">
          {wishlist.map((item, index) => (
            <React.Fragment key={index}>
              <WishlistCard />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2 items-center justify-center py-10">
          <BookHeart size={100} strokeWidth={0.3} color="#4f3424" />
          <p>Your Wishlist is Empty</p>
          <p className="text-sm font-light">
            Add items you like to your wishlist
          </p>
          <button className="px-6 py-3 border border-templateBrown mt-2 text-sm">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
