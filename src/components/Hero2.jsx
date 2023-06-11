import Info from "./Info";
import { ggsipu_hero } from "./images";
export default function Hero2() {
  return (
    <div className="h-[145vh] w-screen ">
      <div className="h-full w-full  hel px-8 mt-20 relative ">
        <img
          src={ggsipu_hero}
          alt=""
          className=" w-full h-full rounded-sm clip-path "
        />
        {/* fixed comp */}
        <div className="absolute text-white top-80 ">
          <div className="hel flex-col">
            <div className="text-xl hel text-center space-x-6 font-dancing">
              <div className="border-t-2 border-blue-300 w-24" />
              <div className="text-5xl txt-shd-lg ">A New Day At USIC&T</div>
              <div className="border-t-2 border-blue-300 w-24" />
            </div>
            <div className="hel text-center text-8xl font-bold mt-12 txt-shd-xl font-heebo">
              MEETING THE MOMENT,
              <br />
              TOGETHER
            </div>
            <div className="border-l-2 border-blue-300 h-48  " />
          </div>
          <div className="-mt-12">
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}

