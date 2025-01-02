"use client";

import React from 'react'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer3";
import '../../index2/style.css'
import Home2BannerPackgeList from '@/components/banner/Home2BannerPackageList'
import ExclusiveDealsCarousel from '../../../components/package-list/ExclusiveDealsCarousel'
import PopularDestinations from '@/components/package-list/PopularDestinations';
import PackagesList from '@/components/package-list/PackageList';
import '../../../components/stylebook/Footer.css'
import Home2Banner from "../../../components/banner/Home2Banner";
import Header6 from "@/components/header/Header6";
import '../../../components/stylebook/Header.css'
import '../../../components/stylebook/Home.css'
import '../../../components/stylebook/home/Header.css'
import '../../../components/stylebook/home/Banner.css'
import Topbar from "@/components/topbar/Topbar";
import Breadcrumb from "@/components/common/Breadcrumb";
import DestinationSearch from "@/components/banner/DestinationSearch";
import TourCategoryDropdown from "@/components/banner/TourCategoryDropdown";
import QuantityCounter from "@/uitils/QuantityCounter";


const page = () => {
  return (
    <div className='package-list-custom'>
      <Topbar />
      <Header />
      <Breadcrumb pagename="Package Grid" pagetitle="Package Grid" />
 
              {/* <Home2Banner/> */}
        <Home2BannerPackgeList/>
        <div>
          <ExclusiveDealsCarousel/>
        </div>
        <PopularDestinations/>
        <PackagesList/>
        <hr/>
        <Footer/>
    </div>
  )
}

export default page