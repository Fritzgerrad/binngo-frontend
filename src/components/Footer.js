import Link from "next/link";
import { FaInstagram,FaTwitter,FaFacebookF,FaLinkedinIn } from "react-icons/fa";
const Footer = () => {

    const SocialMedia =(props)=>{
        return(
            <a
                className="text-2xl text-white"
                href={`https://www.${props.link}.com`}
                target="_blank">
                {props.logo}
            </a>
        )
    }

    return ( 
        <>
            <div className=" block bg-gray-500">
                <div className=" flex justify-between">
                    <div className="block w-10/12 md:w-2/5 p-3 lg:w-1/5">
                        <h2 className="text-white mb-3 font-bold text-xl">Follow Us</h2>
                        <div className="flex justify-between ">
                            <SocialMedia 
                                logo={<FaTwitter />} 
                                link="twitter"
                            />
                            <SocialMedia 
                                logo={<FaInstagram />} 
                                link="instagram"
                            />
                            <SocialMedia 
                                logo={<FaFacebookF />} 
                                link="facebook"
                            />
                            <SocialMedia 
                                logo={<FaLinkedinIn />} 
                                link="linkedin"
                            />
                        </div>
                    </div>
                </div>
                <div className="block md:flex md:justify-between m-2 ml-0">
                    <div className="md:flex block">
                        <Link href="#top" className="text-white uppercase text-xs hover:text-red-600 m-2">Privacy Policy</Link>
                        <Link href="#top" className="text-white uppercase text-xs hover:text-red-600 m-2">Term of Use</Link>
                        <Link href="#top" className="text-white uppercase text-xs hover:text-red-600 m-2">Sitemap</Link>
                        <Link href="#top" className="text-white uppercase text-xs hover:text-red-600 m-2">Accessibility</Link>
                    </div>
                    <div className="md:float-right flex text-xs">
                        <Link href="#top" className="text-xs text-red-900 mr-3 hover:underline">Back to Top</Link>
                        <p className="text-white">&#169; 2024 FRZ Group</p>
                    </div>
                </div>
            </div>

        </>
     );
}
 
export default Footer;