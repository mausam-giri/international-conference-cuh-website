import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';

import banner from "../assets/conbanner.jpg";
import { sponsors_img } from '../utils/GraphicContent';

export default function Home() {
  return (
    <div className="">
      <div className="bg-slate-300 pt-6">
        <div className="s-wrapper">
          <div className="p-2">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              autoPlay={true}
              swipeable
            >
              <div>
                <img src={banner} alt="" />
              </div>
              <div>
                <img src={banner} alt="" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="bg-white mt-6">
        <div className="s-wrapper grid grid-cols-1 md:gap-10 md:grid-cols-7">
          <div className="col-span-5 px-4 md:px-0">
            <span className="ml-1">AIIoT</span>
            <h1 className="text-3xl font-bold">Conference</h1>
            <hr />
            <div className="mt-4 text-justify ">
              <p>
                Artificial Intelligence of Things (AIoT) is the embedding of
                Artificial Intelligence (AI) to infrastructural components such
                as programs and chipsets which are connected through IoT
                networks. In such systems, the application program interface is
                used to ensure that hardware, software and platform components
                can operate and communicate with each other without the
                involvement of the end users. When operational IoT devices
                create and gather data, AI uses Big Data learning techniques to
                improve the efficiency and productivity of the system. AIoT
                finds extensive applications in Smart Homes, Smart Cities, Smart
                Grid, Retail Market, Social Media, Autonomous Vehicles,
                Autonomous Robots, Automation in Cyber Physical Systems,
                MetaVerse, Next-generation Communication Systems, Industry 4.0,
                Health Care and so on.
              </p>
              <br />
              <p>
                Every industry needs to leverage the smart solution to help and
                nurture better consumer engagement and satisfaction. The
                convergence of AI and IoT can redefine the way industries,
                businesses, and economies function.
              </p>
              <br />
              <p>
                Every industry needs to leverage the smart solution to help and
                nurture better consumer engagement and satisfaction. The
                convergence of AI and IoT can redefine the way industries,
                businesses, and economies function.
              </p>
              <hr />
              <p>
                <b>
                  The proceedings of the conference will be published in CCIS,
                  Springer (Scopus Indexed).
                </b>
              </p>
            </div>
          </div>

          <div className="col-span-2 p-4 md:px-0">
            <div className="flex flex-col gap-4 shadow-md rounded shadow-slate-400 p-2 px-3 pt-4 pb-6">
              <div>
                <h2 className="font-bold text-lg text-slate-700 mb-4">
                  Important Notice
                </h2>
                <div className="pl-2 flex flex-col gap-3">
                  <Link
                    to="https://fdp.nitttrchd.ac.in/icaiot2023/Prog_sch.php"
                    className="text-[14px] hover:text-slate-500"
                  >
                    Programme and Paper Presentaion Schedule
                  </Link>
                  <Link
                    to="https://fdp.nitttrchd.ac.in/icaiot2023/acceptedpaper.php"
                    className="text-[14px] hover:text-slate-500 "
                  >
                    List of TENTATIVELY ACCEPTED PAPERS
                  </Link>
                </div>
              </div>
              <hr />
              <div>
                <h2 className="font-bold text-lg text-slate-700 mb-4">
                  Sponsors
                </h2>
                <div className="pl-2 flex justify-around gap-3">
                  {
                    sponsors_img.map((img, index) => {
                      return (
                        <img 
                          key={index} 
                          src={img} 
                          className={'h-24 w-24'}
                          alt={img} />
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
