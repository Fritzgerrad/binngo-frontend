import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from 'next/head'; 
 import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  const DetailList =(props)=>{
    return(
      <>
      <div
        className="my-2 text-xl font-light mx-2 lg:w-1/4 w-4/5 flex justify-center">
        <div className="rounded-md border-2 p-4">
        <h1
        className="text-2xl font-bold mx-1 text-center">
        {props.title}
        </h1>
        <div className="flex justify-center m-2">
          <Image 
            src={`/assets/${props.imgName}.jpeg`}
            className=""
            alt={props.name}
            height={10}
            width={120}
            />
        </div>
        
        {props.details}
        </div>
        
      </div>
      </>
    )
  }



const MyCarousel = () => {
  const details = [
    {
      title: 'Equip',
      details: 'We provide tailored trash bins for all units within our service area, ensuring you have just what you need for efficient waste management.',
      imgName: 'equip',
    },
    {
      title: 'Dispose',
      details: 'Simply dispose of your trash into the provided bins at your convenience—no fuss, no muss.',
      imgName: 'dispose1',
    },
    {
      title: 'Collect',
      details: 'Our dedicated team collects the trash from your doorstep on scheduled days, ensuring timely and effective removal.',
      imgName: 'collect',
    },
    {
      title: 'Clean',
      details: 'After collection, we ensure your area is neat and tidy, leaving no trace behind but cleanliness.',
      imgName: 'clean',
    },
  ];

  const sliderSettings = {
    dots: true,
    className:"",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...sliderSettings}
    className="w-full my-4"
    >
      {details.map((detail, index) => (
        <div key={index}
        className="flex justify-center pl-7 sm:pl-20"
        style={{display:"flex"}}
        >
          <DetailList title={detail.title} details={detail.details} imgName={detail.imgName} />
        </div>
      ))}

    </Slider>
  );
};


  return (
    <>      
      <Head>
        <title>BinNGo</title>
        <link rel="icon" href="/assets/logoBin.jpeg" />
      </Head>
    <div className="p-4 sm:px-6" id="#top">

      <Header />
      <div className="h-24 bg-white"></div>
      <div className=" flex justify-center my-4 ">
        <div className="block">
          <div className="flex items-center">
            <div className="hidden lg:block w-full">
              <Image
                  src="/assets/binGreen.png"
                  alt="logo"
                  className="h-full"
                  width={400}
                  height={10}
                />
            </div>
            <div className="block sm:px-5 items-center ">
            
              <h1 className="mt-3 text-3xl lg:text-4xl sm:text-3xl tracking-tighter font-bold">
                Effortless Trash Disposal, Right at Your Doorstep!
                </h1>
              <h4 className="text-base sm:text-lg font-medium mb-4 text-right sm:w-2/5 w-4/5">
                ...Your Ally to Better Living
              </h4>
              <p className="font-light text-xl">
                At BinNGo, we believe that managing household waste <span id="howItWorks"></span>should be simple, clean, and environmentally friendly. We handle the mess so you don&apos;t have to. Founded by a team passionate about sustainability and convenience, our mission is to make trash collection seamless and hassle-free. We&apos;re not just a service; we&apos;re your ally to a cleaner, greener home. Let us take care of the waste, so you can focus on what truly matters in your life.
              </p>
            </div>
          </div>
        </div>
       
      </div>
      <div className="flex justify-start " >
        <div className=" w-full">
          <h4 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
            How BinNGo Works 
          </h4>
            <ul className="hidden lg:flex px-3" >
              <DetailList
                title="Equip"
                details="We provide tailored trash bins for all units within our service area."
                imgName="equip"
              />
              
              <DetailList
                title="Dispose"
                 details="Simply dispose of your trash into the provided bins at your convenience—no fuss, no muss."
                imgName="dispose"
              />
              <DetailList
                title="Collect"
                 details="Our team collects the trash from your doorstep on scheduled days, ensuring effective removal."
                imgName="collect"
              />
              <DetailList
                title="Clean"
                 details="After collection, we ensure your area is neat and tidy, leaving no trace behind but cleanliness."
                 imgName="clean"
              />
              
            </ul>
            <div className="lg:hidden w-full">
              <MyCarousel />
            </div>

        </div>
  
      </div>
      <div className="w-full " id="contactUs">
      <h1 className="mt-3 text-3xl lg:text-5xl sm:text-3xl tracking-tighter font-bold text-center">
          Contact Us          
      </h1>
      <p className="font-light text-lg">
      Ready to simplify your trash disposal? Have questions or need more details? Contact us today! Just click below and you&apos;ll be directed to email our management team. We&apos;re here to help you with your waste management needs.
      <a 
      className="text-lg text-red-900 mr-3 underline"
      href="mailto:chinedunwosu54@gmail.com?subject=Enquiry%20about%20BinNGo%20"> Click here to send a mail</a>
      </p>
      </div>
      
    </div>
    <Footer />
    </>
  )}