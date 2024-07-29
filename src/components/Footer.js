import Link from "next/link";
import { FaInstagram,FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot,FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {

    const SocialMedia =(props)=>{
        return(
            <a
                className="text-2xl "
                href={props.link}

                target="_blank">
                {props.logo}
            </a>
        )
    }

    return ( 
        <div>
            <div className="header">
                <div className="flex flex-col md:flex-row">
                    <div className="block w-10/12 md:w-2/5 p-3 lg:w-1/5  text-sm mx-5">
                        <h2 className="mb-3 font-semibold text-2xl">Contact Us</h2>
                        <div className="flex flex-col justify-between text-white">
                            <div className="flex my-1">
                                <MdEmail className="text-xl mb-2 mr-2 text-blue-900" />
                                <p><a className="text-sm text-white mx-2 underline"
                                    href="mailto:support@thebinngo.com?subject=Enquiry%20about%20BinNGo%20">
                                        support@thebinngo.com
                                </a></p>
                            </div>
                            <div className="flex my-1">
                                <FaLocationDot className="text-xl mb-2 mr-3 text-red-900" />
                                <p className="text-xs">100 NE 5th Street, 1st Floor,<br /> Oklahoma City, 73104.</p>
                            </div>
                           <div className="flex my-1">
                                <FaPhone className="text-xl mb-2 mr-3 text-green-700" />
                                <p>+1 (405) 335 - 9665</p>
                           </div>
                        </div>
                    </div>
                    <div className="block w-10/12 md:w-2/5 p-3 lg:w-1/5 mx-5">
                        <h2 className="mb-3 font-semibold text-2xl">Follow Us</h2>
                        <div className="flex justify-between text-center w-1/2 my-2">   
                            <SocialMedia 
                                logo={<FaInstagram />} 
                                link="https://www.instagram.com/thebinngo/"
                            />
                            <SocialMedia 
                                logo={<FaFacebookF />} 
                                link="https://www.instagram.com/thebinngo/"
                            />
                            <SocialMedia 
                                logo={<FaLinkedinIn />} 
                                link="https://www.instagram.com/thebinngo/"
                            />
                        </div>
                    </div>
                </div>
                <div className="block md:flex md:justify-between m-2 ml-0 mx-5">
                    <div className="flex">
                        <div className="flex sm:flex-row flex-col ml-5">
                            <Link href="#top" className=" uppercase text-xs hover:text-red-600 m-2">Privacy Policy</Link>
                            <Link href="#top" className="uppercase text-xs hover:text-red-600 m-2">Term of Use</Link>
                        </div>
                        <div className="flex sm:flex-row flex-col">
                            <Link href="#top" className="uppercase text-xs hover:text-red-600 m-2">Sitemap</Link>
                            <Link href="#top" className="uppercase text-xs hover:text-red-600 m-2">Accessibility</Link>
                        </div>
                    </div>
                    <div className="md:float-right flex justify-center text-xs">
                        <Link href="#top" className="text-xs text-red-600 mr-3 hover:underline ml-2 mb-1">Back to Top</Link>
                        {/* <p className="text-white">&#169; 2024 FRZ Group</p> */}
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;
