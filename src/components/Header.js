import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const MyLink = (props) => {
    return (
      <li className="mx-3 hover:underline w-max m-2 font-medium">
        <Link onClick={toggleMenu} href={props.href}>{props.text}</Link>
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
            className="burger-icon sm:hidden float-right my-5 sm:m-5"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
    
          >
            <span className="text-4xl text-white"
            >&#9776; </span>{/* Burger Icon */}
          </button>
          <nav className={`sm:flex float-right  hidden`}>
            <ul className="sm:flex md:justify-between  p-3">
              <h1 
                onClick={()=>{router.reload();}}
                className="mt-2 font-bold hover:underline"
              >
                Home </h1>
              <MyLink href="#home" text="About Us" />
              <MyLink href="#howItWorks" text="How it Works" />
              <MyLink href="#contactUs" text="Contact Us" />
            </ul>
          </nav>


        </div>
        

      </div>
      <div className="flex justify-center ridge ml-14 sm:ml-40">
        <div className={`${showMenu ? 'block' : 'hidden'}`}>
          <div className="float-right">
          <div className=" sm:hidden">
            <nav>
            <div className="h-24 sm:h-0 bg-white"></div>
              <ul className="header float-right px-10">
                <MyLink href="#home" text="Home" />
                <MyLink href="#home" text="About Us" />
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
