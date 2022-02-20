/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import HeaderLink from "../components/HeaderLink";

function Home() {
  return (
    <div>
      <header>
        <div className="relative w-36 h-10">
          <Image
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
