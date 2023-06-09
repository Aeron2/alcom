import { alcom_logo } from "./images";
export default function AboutUs() {
  return (

    <>
      <div className="bg-blue-200 border-4 flex-col border-purple-500 h-[1500px] py-28">


        <div className="heading text-6xl text-center font-bold">
          About us
        </div>


        <div className="container relative flex   h-fit w-3/4 justify-end  border-4 border-green-500 mt-16 left-96 ">

          <article className="relative w-96 h-[20rem] right-52 top-20">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quia qui amet esse.
            Impedit quod vitae laborum architecto debitis, sapiente eligendi repellat a repellendus
            quisquam quos unde, odit laboriosam aperiam ipsa corrupti Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Earum officia culpa nihil rerum ipsam modi nisi tempore illum voluptatem? Enim s
            ed quia voluptates! Corporis temporibus nesciunt unde minima aspernatur et.
          </article>

          <div className="relative h-fit border-4 border-gray-800 right-9">
            <img src={alcom_logo} className="h-[28rem] w-[35 rem] " alt="" />
          </div>
        </div>
      </div>

    </>
  )
}
