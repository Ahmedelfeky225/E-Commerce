

import ProductCategories from "../components/ProductCategories";


import Slider from "../components/Slider"
const HomePage = () => {


  return (
    <div className="">
    <Slider/>
    <div className='container mx-auto  max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl  my-4'>
        <video src="Video/2024-11-13-08-33-19-06734e2dfeae13.mp4"  muted loop autoPlay className='w-full h-auto'></video>
        <ProductCategories/>
    </div>
  </div>
  )
};

export default HomePage;
