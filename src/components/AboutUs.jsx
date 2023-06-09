import { alcom_logo } from "./images";
export default function AboutUs() {
  return (

    <>
      <div className=" flex flex-col bg-[#f1f3f6] border-4 border-purple-500 h-[1500px] py-28 items-center ">

        {/* heading text */}
        <div className="heading text-6xl text-center font-bold">    {/* column flex item1 */}
          About us
        </div>

        <div className="container relative flex  h-[35%] w-1/2 justify-end  border-4  mt-16  left-[19rem] ">   {/* column flex item2 */}

          {/* description */}
          <article className="relative w-72 h-[20rem]  bg-slate-400 rounded-lg right-24 top-16">   {/* row flex item1 */}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quia qui amet esse.
            Impedit quod vitae laborum architecto debitis, sapiente eligendi repellat a repellendus
            quisquam quos unde, odit laboriosam aperiam ipsa corrupti Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Earum officia culpa nihil rerum ipsam modi nisi tempore illum voluptatem? Enim s
            ed quia voluptates! Corporis temporibus
          </article>

          {/* image */}

          <div className="relative h-fit border-4   top-14">   {/* row flex item2 */}
            <img src={alcom_logo} className="h-[20rem] w-[20 rem] " alt="" />
          </div>
        </div>


        <div className="container relative flex  h-[35%] w-1/2 bg-[#f1f3f6]  justify-center border-4  mt-16 -left-[20%] ">   {/* column flex item3 */}

          {/* description */}
          <article className="relative w-72 h-[20rem] bg-slate-400 rounded-lg  top-12 -left-12">   {/* row flex item1 */}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quia qui amet esse.
            Impedit quod vitae laborum architecto debitis, sapiente eligendi repellat a repellendus
            quisquam quos unde, odit laboriosam aperiam ipsa corrupti Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Earum officia culpa nihil rerum ipsam modi nisi tempore illum voluptatem? Enim s
            ed quia voluptates! Corporis temporibus nesciunt unde minima aspernatur et.
          </article>

          {/* image */}

          <div className="relative h-fit border-4  -right-16 top-12">   {/* row flex item2 */}
            <img src={alcom_logo} className="h-[20rem] w-[20 rem] " alt="" />
          </div>
        </div>
      </div>

    </>
  )
}
