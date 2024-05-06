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

  const ConcernList =(props) =>{
    return(
      <div className="sm:m p-2 flex justify-center sm:w-4/5 w-full ml-10">
        <div className="w-full">
          <h3 className="text-3xl text-center">{props.person}</h3>
          <h3 className="text-center mb-2 font-light">{props.location}</h3>
          <div className="border-3 border-opacity-50 border-red-900 rounded-b-full rounded-t-3xl p-3 darkBlue text-white w-full h-80 p-5">
          <div className="flex justify-center">
          <Image 
            src={`/assets/${props.imgName}.jpeg`}
            height={20}
            className="w-36 rounded-full"
            width={120}
            alt={props.imgName}
          />
          </div>
          <div className="w-full pt-2 text-center text-sm"><p className="font-extralight">{props.concern}</p></div>
        </div>
        </div>
      </div>
    )
  }


  const DetailList =(props)=>{
    return(
      <>
      <div
        // className="my-2 text-lg font-light mx-2 lg:w-1/4 w-full flex justify-center">
        className="my-2 text-lg font-light mx-2 flex justify-center w-full sm:w-1/2 md:w-1/3 md:ml-20 lg:ml-8 lg:w-1/5 p-4 justify-self-center">
        <div className="rounded-md border-2 p-4">
        <h1
        className="text-2xl font-bold mx-1 text-center">
        {props.title}
        </h1>
        <div className="flex justify-center m-2">
          <Image 
            src={`/assets/${props.imgName}.jpeg`}
            className=""
            alt={props.imgName}
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



const HowItWorksCarousel = () => {
  const details = [
    {
      title: 'Equip',
      details: 'We provide tailored trash bins for all units within our service area, ensuring you have just what you need for efficient waste management.',
      imgName: 'equip',
    },
    {
      title: 'Dispose',
      details: 'Simply dispose of your trash into the provided bins at your convenience—no fuss, no muss.',
      imgName: 'dispose',
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
               


  const CustomerConcernCarausel = ()=>{
  const details = [
    {
      person:"Jason",
      // location:"Louisiana, USA",
      imgName:"person1",
      concern:"Walking to the dumpster after dark feels risky and inconvenient, especially when I'm back late from work."
    },
    {
      person:"Becky" ,
      location:"Oklahoma, USA",
      imgName:"person2",
      concern:"The dumpster is too far from my unit, and it's exhausting to carry heavy trash bags that distance after a long day."
    
    },
    {
      person:"Chris", 
      // location:"Indiana, USA",
      imgName:"person3",
      concern:"Walking to the dumpster late at night makes me uncomfortable. It's poorly lit and quite isolated, which doesn't feel safe"  
    },
  ];


  return (
    <Slider {...sliderSettings}
    className="w-full my-4"
    >
      {details.map((detail, index) => (
        <div key={index}
        className="flex justify-center pl-7 sm:pl-20"
        style={{display:"flex"}}
        >
          <ConcernList person={detail.person} concern={detail.concern} imgName={detail.imgName} location={detail.location}/>
        </div>
      ))}

    </Slider>
  );

  }

  return (
    <>      
      <Head>
        <title>BinNGo</title>
        <link rel="icon" href="/assets/logoBin.png" />
      </Head>
    <div className="p-4 sm:px-6" id="#top">

      <Header />
      <div className="flex justify-center">
      <div className="sm:w-5/6 w-full">
      <div className="h-24 bg-white"></div>
      <div className=" flex justify-center my-4 ">
        <div className="block">
          <div className="flex items-center">
            <div className="hidden lg:block">
              <Image
                  src="/assets/binGreen.png"
                  alt="logo"
                  className="h-full"
                  width={400}
                  height={10}
                />
            </div>
            <div className="block sm:px-5 items-center lg:w-3/5">
            
              <h1 className="mt-3 text-3xl lg:text-4xl sm:text-3xl tracking-tighter font-bold slide-in">
              Binngo: Doorstep to Dumpster Solution
              <br className="sm:hidden"/>
              <span className="text-base sm:text-lg ml-5 font-medium tracking-tight text-red-400 mb-4 text-right sm:w-3/5 w-4/5">
                ...Bin your trash, then Go relax.
              </span>
              </h1>
              <p className="font-light text-lg mt-2">
                We believe that managing household waste <span id="howItWorks"></span>should be simple, clean, and environmentally friendly. We handle the mess so you don&apos;t have to. Founded by a team passionate about sustainability and convenience, our mission is to make trash collection seamless and hassle-free. We&apos;re not just a service; we&apos;re your ally to a cleaner, greener home. Let us take care of the waste, so you can focus on what truly matters in your life.
              </p>
            </div>
          </div>
        </div>
       
      </div>
      <div className="flex justify-start" >
        <div className=" w-full">
          <h4 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            How it Works 
          </h4>
            {/* <ul className="hidden lg:flex px-3" > */}
            <ul className="flex justify px-3" >            
            <div className="block md:flex  flex-wrap">

              <DetailList
                title="Equip"
                details="We provide tailored trash bins for all units within our service area."
                imgName="equip"
              />
              <DetailList
                title="Dispose"
                 details="Simply dispose of your trash into the provided bins at your convenience"
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
                          </div>

            </ul>
            {/* <div className="lg:hidden w-full">
              <HowItWorksCarousel />
            </div> */}

        </div>
  
      </div>
      <div>
        <h4 className="text-3xl sm:text-4xl font-bold mb-4 mt-8 text-center">
          Customer Concerns
        </h4>
        <div className="flex justify center">
          <div className="block lg:flex w-4/5 md:ml-16">
              <ConcernList
                person="Jason"
                // location="Louisiana, USA"
                imgName="person1"
                concern="I find it really tough to take out the trash during bad weather, especially since the dumpster is so far away."
              />
              <ConcernList
                person="Becky"
                // location="Oklahoma, USA"
                imgName="person2"
                concern="The dumpster is way too far from my place, and after a long day, hauling those heavy trash bags all that way just wears me out."
              />
              <ConcernList
                person="Chris"
                // location="Indiana, USA"
                imgName="person3"
                concern="Walking to the dumpster late at night makes me uncomfortable. It&apos;s poorly lit and quite isolated, which doesn&apos;t feel safe"
              />
          </div>
        </div>
        {/* <div className="lg:hidden">
          <CustomerConcernCarausel />
        </div> */}
      </div>
      <div className="w-full " id="contactUs">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 mt-8 text-center">
          Contact Us          
      </h1>
      
      <p className="font-light text-lg">
        Ready to simplify your trash disposal? Have questions or need more details? Contact us today! Just click below and you&apos;ll be directed to email our management team. We&apos;re here to help you with your waste management needs. 
      <a 
      className="text-lg text-red-900 mx-2 underline"
      href="mailto:support@thebinngo.com?subject=Enquiry%20about%20BinNGo%20">Click here</a>to send a mail.
      </p>
      </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  )}