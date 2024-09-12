import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

const section = [
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
];

const items = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "",
  },
];

const Footer = () => {
  {
    return;
    <div className="w-full mt-w4 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {section.map((section, index) => {
          return (
            (
              <div key={index} className="font-bold uppercase pt-2">
                <h6>{section.title}</h6>
                <ul>
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="py-1 text-gray-500 hover:text-white cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ),
            (
              <div className="col-span-2 pt-8 md:pt-2">
                <p className="font-bold uppercase">
                  Subscribe to our newsletter
                </p>
                <p className="py-4">
                  The latest updates, articles and resources, sent to your inbox
                  weekly.
                </p>
                <form className="flex flex-col sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full p-2 mr-4 rounded-md mb-4 "
                  />
                  <button className="p-2 mb-4">Subscribe</button>
                </form>
              </div>
            )
          );
        })}
      </div>
    </div>;
  }
};

export default Footer;
