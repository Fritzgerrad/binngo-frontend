import Image from "next/image";
import Link from "next/link";
// import darkLogo from '../assets/logoDark.jpeg'
 
const Header = () => {
    const MyLink = (props) =>{
        return(
            <div className="mx-3 hover:underline">
                <Link href={props.href}>{props.text}</Link>

            </div>
        )
    }


    return (  
        <>
            <div className="flex justify-center m-5">
                <div className="m-5 header w-4/5 rounded-full fixed">
                    <div className="w-full mx-5">
                        <Image src='/assets/logoDark.jpeg' alt="logo" className="float-left m-5" width={100} height={50}/>
                    </div>
                    <div>
                        <ul className=" flex justify-between float-right p-5">
                            <MyLink href="#home" text="Home"/>
                            <MyLink href="#aboutUs" text="About Us"/>
                            <MyLink href="#howItWorks" text="How it Works"/>
                            <MyLink href="#contactUs" text="Contact Us"/>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className="h-24">

            </div>

        </>
    );
}
 
export default Header;
