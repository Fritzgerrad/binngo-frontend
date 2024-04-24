import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const MyLink = (props) => {
    return (
      <li className="mx-3 hover:underline w-max m-2 font-bold">
        <Link href={props.href}>{props.text}</Link>
      </li>
    );
  };

  return (
    < div className="fixed flex justify-center">
    <div className="block">
      <div className=" mb-0">
        <div className="m-5 header w-4/5 rounded-full fixed px-5">
          <div className="w-full mx-5">
            <Image
              src="/assets/logoDark.jpeg"
              alt="logo"
              className="float-left m-5"
              width={100}
              height={50}
            />
          </div>
          <button
            className="burger-icon lg:hidden float-right my-5 sm:m-5"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
    
          >
            <span className="text-4xl text-white"
            >&#9776; </span>{/* Burger Icon */}
          </button>
          <nav className={`lg:flex float-right  hidden`}>
            <ul className="lg:flex lg:justify-between  p-3">
              <MyLink href="#home" text="Home" />
              <MyLink href="#aboutUs" text="About Us" />
              <MyLink href="#howItWorks" text="How it Works" />
              <MyLink href="#contactUs" text="Contact Us" />
            </ul>
          </nav>


        </div>
        

      </div>
      <div className="flex justify-center" style={{marginLeft:"100%"}}>
        <div className={`${showMenu ? 'block' : 'hidden'}`}>
          <div className="float-right">
          <div className=" lg:hidden">
            <nav>
            <div className="h-24 lg:h-0 bg-white"></div>
              <ul className="header float-right">
                <MyLink href="#home" text="Home" />
                <MyLink href="#aboutUs" text="About Us" />
                <MyLink href="#howItWorks" text="How it Works" />
                <MyLink href="#contactUs" text="Contact Us" />
              </ul>
            </nav>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className={`${showMenu ? 'h-0' : 'h-24'}`}></div>
      
      
    </div>
    </div>
  );
};

export default Header;
