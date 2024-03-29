import { BRAND } from "@/types/brand";
import { PARKING } from "@/types/parking";
import Link from "next/link";
import { BsPlusSquare } from "react-icons/bs";

async function getParkings(){
    const res = await fetch(process.env.URL + '/api/allparkings',
        {next: {revalidate: 300000}
    });
    const data = await res.json();
    return data.parkings;
}

export default async function Page() {
  
  const dummy_data: PARKING[] = [
    {
      id: "ps1",
      name: "Chaitanya Parking",
      total_slots: 100,
      empty_slots: 25,
      avg_pricing: 190,
    },
    {
      id: "ps2",
      name: "Shreyansh Parking",
      total_slots: 39,
      empty_slots: 10,
      avg_pricing: 180,
    },
    {
      id: "ps3",
      name: "Gopal Parking",
      total_slots: 40,
      empty_slots: 21,
      avg_pricing: 190,
    },
    {
      id: "ps4",
      name: "Hriday Parking",
      total_slots: 120,
      empty_slots: 25,
      avg_pricing: 170,
    },
    {
      id: "ps5",
      name: "Mansi Parking",
      total_slots: 42,
      empty_slots: 23,
      avg_pricing: 195,
    },
  ];

  const brandData: BRAND[] = [
    {
      logo: "/images/brand/brand-01.svg",
      name: "Google",
      visitors: 3.5,
      revenues: "5,768",
      sales: 590,
      conversion: 4.8,
    },
    {
      logo: "/images/brand/brand-02.svg",
      name: "Twitter",
      visitors: 2.2,
      revenues: "4,635",
      sales: 467,
      conversion: 4.3,
    },
    {
      logo: "/images/brand/brand-03.svg",
      name: "Github",
      visitors: 2.1,
      revenues: "4,290",
      sales: 420,
      conversion: 3.7,
    },
    {
      logo: "/images/brand/brand-04.svg",
      name: "Vimeo",
      visitors: 1.5,
      revenues: "3,580",
      sales: 389,
      conversion: 2.5,
    },
    {
      logo: "/images/brand/brand-05.svg",
      name: "Facebook",
      visitors: 3.5,
      revenues: "6,768",
      sales: 390,
      conversion: 4.2,
    },
  ];
  
  const parkingData = await getParkings();

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Parking
      </h4>

      <Link
        href="#"
        className="inline-flex items-center justify-center gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mb-5"
      >
        <span>
          <BsPlusSquare />
        </span>
        Add Parking
      </Link>

      <div className="flex flex-col overflow-x-auto">
        <div className="grid rounded-sm bg-gray-2 dark:bg-meta-4 grid-cols-5 ">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Parking ID
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Parking Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total Slots
            </h5>
          </div>
          <div className="p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Empty Slots
            </h5>
          </div>
          <div className="p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Avg Pricing
            </h5>
          </div>
        </div>

        {parkingData.map((parking, key) => (
          <div
            className={`grid grid-cols-5 ${
              key === parkingData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white sm:block">
                {parking.id}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white ">{parking.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {parking.total_slots}
              </p>
            </div>

            <div className="items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className=" text-meta-3">{parking.empty_slots}</p>
            </div>

            <div className="items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">₹{parking.avg_pricing}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
