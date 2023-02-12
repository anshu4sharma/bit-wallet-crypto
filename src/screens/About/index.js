import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative container py-10">
      <Link to="/home" className="flex items-center ">
        <AiFillCaretLeft className="text-3xl text-primary" />
        <p className="ml-1 text-lg text font-bold"> Back</p>
      </Link>
      <h2 className="max-w-[300px] text mt-6 text-5xl font-extrabold  leading-[3.5rem]">
        About Us
      </h2>
      <div className="mt-10">
        <b className="text-lg mb-2 block">
          About Beyond Imagination Technologies
        </b>
        <p className=" text-white">
          Beyond Imagination Technologies (BIT) was founded as the first Indian
          start-up with the idea of nurturing the Blockchain/Web3 technology and
          building cost-effective, safe and secure solutions that fit the market
          needs and help address the major market problems in all possible
          classes and verticals of organisations, thereby creating a conducive
          environment for its fair growth and development in India.
          <br />
          <br />
          Within a short span, Beyond Imagination has grown in leaps and bounds.
          They have signed joint development programs with highly esteemed
          institutions in India within a few months of starting operations and
          are also increasingly engaging with large corporations, high-net-worth
          individuals, and big institutions. Enabling a cost-effective and easy
          transition for users from web 2.0 to web 3.0 has been one of the major
          reasons for their success. They have successfully bridged the gap
          between market need and the use of blockchain-aided solutions for
          sustainable business growth by providing tailored solutions to
          start-ups, enterprises, and governments and helping them solve pain
          points in their ecosystems .
          <br />
          <br />
          Currently, BIT has many pilots and production-ready applications such
          as Smart Contracting, Credential Management, and Digital Certificate
          Issuing Platform, to name a few, tailored for different sectors and
          government bodies.
        </p>
      </div>
    </div>
  );
};

export default About;
