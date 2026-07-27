import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaThreads,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white mt-16 border-t">

      <div className="max-w-[1280px] mx-auto px-5 py-12">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Useful Links */}

          <div>

            <h2 className="text-2xl font-semibold mb-6">
              Useful Links
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-gray-600">

              <a href="#">Blog</a>
              <a href="#">Partner</a>
              <a href="#">Recipes</a>

              <a href="#">Privacy</a>
              <a href="#">Franchise</a>
              <a href="#">Bistro</a>

              <a href="#">Terms</a>
              <a href="#">Seller</a>
              <a href="#">District</a>

              <a href="#">FAQs</a>
              <a href="#">Warehouse</a>
              <a href="#">Blinkit Ambulance</a>

              <a href="#">Security</a>
              <a href="#">Delivery</a>
              <a href="#">Feeding India</a>

              <a href="#">Contact</a>
              <a href="#">Resources</a>

            </div>

          </div>

          {/* Categories */}

          <div>

            <div className="flex items-center gap-4 mb-6">

              <h2 className="text-2xl font-semibold">
                Categories
              </h2>

              <button className="text-green-600 font-semibold">
                see all
              </button>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-gray-600">

              <a href="#">Vegetables & Fruits</a>
              <a href="#">Dairy, Bread & Eggs</a>
              <a href="#">Bakery & Biscuits</a>

              <a href="#">Atta, Rice & Dal</a>
              <a href="#">Oil, Ghee & Masala</a>
              <a href="#">Dry Fruits</a>

              <a href="#">Cold Drinks</a>
              <a href="#">Snacks</a>
              <a href="#">Tea & Coffee</a>

              <a href="#">Ice Cream</a>
              <a href="#">Chicken, Meat</a>
              <a href="#">Baby Care</a>

              <a href="#">Health & Pharma</a>
              <a href="#">Beauty</a>
              <a href="#">Pet Care</a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t">

        <div className="max-w-[1280px] mx-auto px-5 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-sm text-center">
            © Blink Commerce Private Limited, 2016-2026
          </p>

          <div className="flex items-center gap-4">

            <span className="font-semibold">
              Download App
            </span>

            <img
              className="h-10 cursor-pointer"
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            />

            <img
              className="h-10 cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            />

          </div>

          <div className="flex gap-4">

            <div className="w-11 h-11 rounded-full bg-black text-white flex justify-center items-center cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-11 h-11 rounded-full bg-black text-white flex justify-center items-center cursor-pointer">
              <FaXTwitter />
            </div>

            <div className="w-11 h-11 rounded-full bg-black text-white flex justify-center items-center cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-11 h-11 rounded-full bg-black text-white flex justify-center items-center cursor-pointer">
              <FaLinkedinIn />
            </div>

            <div className="w-11 h-11 rounded-full bg-black text-white flex justify-center items-center cursor-pointer">
              <FaThreads />
            </div>

          </div>

        </div>

      </div>

      <div className="max-w-[1280px] mx-auto px-5 pb-10">

        <p className="text-gray-500 text-sm leading-7">

          "Blinkit" is owned and managed by Blink Commerce Private Limited
          and is not related, linked or interconnected with GROFFR.COM
          in any manner.

        </p>

      </div>

    </footer>
  );
}