import React from 'react'
import { FaBell } from "react-icons/fa6";

export default function SideBar() {
  return (
    <>
    <div className="h-[10%] flex justify-center flex-row items-center" style={{ borderBottom: "solid white 1px" }}>
              <p className="w-[75%]">Hello user</p>
              <p><FaBell /></p>
            </div>
            <div className="h-[90%] flex flex-col w-[100%]">
              <div className="h-[10%] pl-5 flex flex-row items-center gap-2">
                <p className="flex items-center flex-row">Discussion</p>
                <p className="text-xl">
                  <select className="bg-[#1b5d86]"></select>
                </p>
              </div>
              <div className="h-[10%] pl-5" key="market">Market Stories</div>
              <div className="h-[10%] pl-5" key="sentiment">Sentiment</div>
              <div className="h-[10%] pl-5" key="mar">Market</div>
              <div className="h-[10%] pl-5" key="watch">WatchLists</div>
              <div className="h-[10%] pl-5" key="event">Events</div>
              <div className="h-[10%] pl-5" key="news">News/Interview</div>
            </div>
    </>
  )
}
