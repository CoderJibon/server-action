import { createForm, getAllData } from "@/actions/DevsForm.js";
import Button from "@/components/Button/Button.jsx";
import Image from "next/image.js";

export default async function Home() {
  const devs = await getAllData();

  return (
    <>
      <div className="min-h-screen grid grid-cols-2 gap-10 mt-20 ">
        <div className=" p-8">
          <h1>User List</h1>
          --------------------
          <div className=" grid grid-cols-3 mt-8">
            {devs &&
              devs.map((data) => (
                <div
                  key={data._id}
                  className="text-center  flex flex-col justify-center items-center "
                >
                  <Image
                    className="rounded-full mb-2"
                    src={data.photo}
                    width={150}
                    height={150}
                    alt="photo"
                  ></Image>
                  <h5>{data.name}</h5>
                  <p>{data.email}</p>
                  <Button dataId={data?._id?.toString()}></Button>
                </div>
              ))}
          </div>
        </div>
        <div>
          <form className="" encType="multipart/form-data " action={createForm}>
            <div className="shadow-xl p-6">
              <div className="flex flex-col mb-2">
                <label htmlFor="">Name</label>
                <input
                  className="border focus:outline-none"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="">Email</label>
                <input
                  className="border focus:outline-none"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="">Cell</label>
                <input
                  className="border focus:outline-none"
                  type="cell"
                  name="cell"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="">location</label>
                <input
                  className="border focus:outline-none"
                  type="text"
                  name="location"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="">Phone</label>
                <input
                  className="border focus:outline-none"
                  name="photo"
                  type="file"
                />
              </div>
              <button className="bg-slate-900 text-white w-full px-2 py-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
