import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-950 px-4 md:px-16 lg:px-28 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h5 className="text-lg font-bold mb-4 text-white">Contact </h5>

          <div>
            <p className=" text-white">Address: Avcılar/İstanbul</p>
            <p className=" text-white">Phone: 02126359568 </p>
            <p className=" text-white">Hours: 10.00-18.00, Mon-Sat</p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">About </h4>
          <ul>
            <li>
              <Link to="/about" className="hover:underline text-gray-300">
                {" "}
                About us{" "}
              </Link>{" "}
            </li>
            <li>
              <Link to="/team" className="hover:underline text-gray-300">
                Team
              </Link>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
          <ul className="flex space-x-4">
            <li>
              {" "}
              <FaFacebook className="text-blue-500" />{" "}
              <a href="" className="hover:underline text-gray-300">
                {" "}
                Facebook{" "}
              </a>
            </li>
            <li>
              {" "}
              <FaTwitter className="text-sky-500" />{" "}
              <a href="" className="hover:underline text-gray-300">
                {" "}
                Twitter{" "}
              </a>
            </li>
            <li>
              {" "}
              <FaInstagram className="text-orange-500" />{" "}
              <a href="" className="hover:underline text-gray-300">
                {" "}
                Instagram{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 p-6 text-gray-300 text-center mt-6">
        <p>@2025 E-Commerce With Begüm. All Rights Reserved</p>
      </div>
    </footer>
  );
}
