import React from "react";

export default function Info() {
  return (
    <div className=" bg-white rounded-xl hel  flex-col max-w-6xl py-14">
      <div className="">
        <div className="text-[#95D1F3] font-heebo text-5xl uppercase">
          Alumni <span className="text-[#0154A5]">Committee</span>
        </div>
        <div className="text-[#0154A5] font-dancing text-end text-xl">
          Connecting Future to past...
        </div>
      </div>
      <div className="text-[#013263] px-32 mt-8 text-justify space-y-2">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
          inventore assumenda nisi debitis officia delectus laborum, maxime
          facere dolorum nostrum corrupti provident tenetur quis placeat
          cupiditate qui quia dicta. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Praesentium voluptatum dolorem molestias laborum!
          Labore est distinctio aliquam, temporibus optio nostrum voluptates
          reprehenderit reiciendis fugiat harum deserunt officiis dolorum sit
          perspiciatis.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
          inventore assumenda nisi debitis officia delectus laborum, maxime
          facere dolorum nostrum corrupti provident tenetur quis placeat
          cupiditate qui quia dicta. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Praesentium voluptatum dolorem molestias laborum!
          Labore est distinctio aliquam, temporibus optio nostrum voluptates
          reprehenderit reiciendis fugiat harum deserunt officiis dolorum sit
          perspiciatis.
        </div>
      </div>
      <div className="hel flex-col mt-12">
        <div className=" uppercase text-[#013263] ">
          Connect to the ever growing alumni community of USIC&T
        </div>
        <div className="bg-[#95D1F3] hover:bg-[#013263] text-xl px-6 hel rounded-full py-2 cursor-pointer mt-2">
          Connect Now
        </div>
      </div>
    </div>
  );
}
