"use client";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import MarketCards from "../../components/MarketCards";
import { user, sideUser } from "./data.js";
import SideBar from "../../components/SideBar";

export default function Page(param) {
  const [showSideBar, setShowSideBar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showDiscussion, setShowDiscussion] = useState(true);
  const [showMarket, setShowMarket] = useState(true);
  
  const handleSidebarToggle = () => {
    setShowSideBar(prevState => !prevState);
  };

  const handleTabClick = (e) => {
    const id = e.target.id;
    if (id === "discussion") {
      setShowDiscussion(true);
      setShowMarket(false);
    } else {
      setShowDiscussion(false);
      setShowMarket(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setShowMarket(true);
        setShowDiscussion(true);
        setIsMobile(false);
      } else {
        setShowMarket(false);
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={`flex flex-row gap-5 h-[100vh] w-[100vw] ${isMobile ? "" : "p-2 pl-0 pt-0"}`}>
        {/* SideBar */}
        
        {showSideBar && (
          <div className={`text-xl ${isMobile ? "w-[70%]" : "sidebarAnimate"} text-white h-[100vh] ${isMobile ? "absolute" : "relative"} bg-[#1b5d86] z-[100]`} key="sidebar">
           <SideBar />
          </div>
        )}
        {showDiscussion && (
          <div className={`${showSideBar ? `${isMobile ? "w-[100%]" : "discussiona"}` : `${isMobile ? "w-[100%]" : "w-[73%] "}`} ease-in overflow-hidden flex flex-col gap-8`} key="discussion">
            {!isMobile && <h1 className="bg-gray-200 h-[auto] p-2 text-red-500 font-semibold text-5xl w-[80%]">Discussion Forum</h1>}
            {isMobile && (
              <div className={`flex text-3xl ${showDiscussion ? "bg-purple-500" : "bg-purple-900"} w-[100vw] flex-row h-[15%] text-white font-2xl relative`} key="tab-buttons">
                <p className={`absolute h-[2px] w-[50vw] bg-red-500 bottom-0 ${showDiscussion ? "" : "hidden"}`}></p>
                <div id="discussion" onClick={handleTabClick} className="cursor-pointer w-[50%] flex justify-center items-center h-[100%]">Discussion Forum</div>
                <div id="market" onClick={handleTabClick} className="cursor-pointer flex justify-center items-center w-[50%] h-[100%] bg-purple-700">Market Stories</div>
              </div>
            )}
            <div className={`${isMobile ? "overflow-scroll w-[100vw] flex items-center flex-col pt-1 mt-[15%]" : ""} h-[80vh]`} key="discussion-content">
              {user.map((data, index) => (
                <Card key={index} title={data.title} description={data.description} views={data.views} sector={data.sector} likes={data.likes} comments={data.comments} />
              ))}
            </div>
          </div>
        )}
        {showMarket && (
          <div className={`h-[100vh] overflow-scroll ${showSideBar ? `${isMobile ? "w-[100%]" : "w-[30%]"}` : `${isMobile ? "w-[100%]" : "w-[30%]"}`} ease-in overflow-hidden flex flex-col`} key="market">
            {!isMobile && <h1 className="bg-gray-200 p-2 text-red-500 font-semibold text-5xl w-[80%]">Market Stories</h1>}
            {isMobile && (
              <div className={`text-3xl ${showMarket ? "bg-purple-900" : "bg-purple-500"} flex w-[100vw] flex-row h-[15%] text-white font-2xl relative`} key="tab-buttons">
                <p className={`${showMarket ? "" : "hidden"} left-[50%] absolute h-[2px] w-[50vw] bg-red-500 bottom-0`}></p>
                <div id="discussion" onClick={handleTabClick} className="cursor-pointer w-[50%] flex justify-center items-center h-[100%]">Discussion Forum</div>
                <div id="market" onClick={handleTabClick} className="cursor-pointer flex justify-center items-center w-[50%] h-[100%] bg-purple-700">Market Stories</div>
              </div>
            )}
            <div className={`${isMobile ? "w-[100vw] overflow-scroll flex items-center flex-col pt-1 mt-[15%]" : ""} h-[80vh]`} key="market-content">
              {sideUser.map((data, index) => (
                <div className="w-[60%] flex justify-center mt-8" key={`market-card-${index}`}>
                  <MarketCards img={data.img} title={data.title} description={data.description} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <button
        className={`absolute text-white text-2xl font-semibold sideBorder ${
          showSideBar ? `${isMobile ? "left-[70%]" : "arrowanimator"}` : "left-0"
        }  w-[20px] top-[50%] h-[60px]  bg-[#1b5d86] `}
        onClick={handleSidebarToggle}
      >
        {showSideBar ? <p>&lt;</p> : <p>&gt;</p>}
      </button>
    </>
  );
}
