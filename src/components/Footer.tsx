import { Link } from "react-router-dom";
import { socialMedia } from "../../data";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  const d = new Date();

  return (
    <footer className="w-full pt-20 mb-[100px]" id="contact">
      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw] text-text-900">
          Are you ready to elevate <span className="text-text-800">your</span>{" "}
          digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-text-950">
          Get in touch with me today and let&apos;s talk about how I can assist
          you in reaching your objectives.
        </p>

        <a href="mailto:sarthakbehera10@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-text-950">
          Copyright © {d.getFullYear()} Sarthak
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <Link
              key={profile.id}
              to={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180  bg-bg-800 rounded-[6px] "
            >
              <img
                src={profile.img}
                alt={`${profile.id} `}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
