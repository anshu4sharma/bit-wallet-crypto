import React from "react";
// import FooterLogo from "../assets/footerlogo.png";
// import { socialLinks } from "../utils";
const Footer = () => {
  const footerData = [
    {
      title: "About Us",
      list: [
        {
          text: "About",
          link: "http://google.com",
        },
        {
          text: "Careers",
          link: "http://google.com",
        },
        {
          text: "Legal & privacy",
          link: "http://google.com",
        },
      ],
    },
    {
      title: "Services",
      list: [
        {
          text: "Aplications",
          link: "http://google.com",
        },
        {
          text: "Buy Crypto",
          link: "http://google.com",
        },
        {
          text: "Affilliate",
          link: "http://google.com",
        },
      ],
    },
    {
      title: "Services",
      list: [
        {
          text: "Aplications",
          link: "http://google.com",
        },
        {
          text: "Buy Crypto",
          link: "http://google.com",
        },
        {
          text: "Affilliate",
          link: "http://google.com",
        },
      ],
    },
    {
      title: "Services",
      list: [
        {
          text: "Aplications",
          link: "http://google.com",
        },
        {
          text: "Buy Crypto",
          link: "http://google.com",
        },
        {
          text: "Affilliate",
          link: "http://google.com",
        },
      ],
    },
  ];

  return (
    <footer className="border-t border-[#262626] py-10">
      {/* <div className="container">
        <div className="grid grid-cols-1 gap-10 md:gap-2 md:grid-cols-5">
          <div>
            <img src={FooterLogo} alt="" />
            <ul className="grid grid-flow-col gap-3 mt-6 items-center justify-start my-6">
              {socialLinks.map((val, i) => (
                <li key={i}>
                  <a href={val.link} className=" text-gray text-2xl">
                    {" "}
                    {val.icon}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-gray mt-4">2021 ccfdao. All rights reserved</p>
          </div>
          {footerData.map((val, i) => (
            <div key={i} className="">
              <div className="max-w-max md:mx-auto">
                <h6 className="text-xl font-semibold ">{val.title}</h6>
                <ul className="mt-6">
                  {val.list.map((link, i) => (
                    <li key={i} className="text-gray text-lg py-2">
                      <a href={link.link}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
