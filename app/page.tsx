import People from "./Bookings/page";
export default function Home() {

  return (
    <>
      <div className="mb-5 w-full h-[500px]">
          <img src="./Live.gif" alt="Live" />
          <div className="inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300">
            <p className="text-danger text-3xl font-extrabold">LIVE</p>
          </div>
      </div>
      <People/>
    </>
  );
}
