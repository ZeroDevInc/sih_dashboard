import { VECHICLES } from "@/types/Vechicles";
import { PEOPLES } from "@/types/peoples";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import { BsPlusSquare } from "react-icons/bs";

const PeopleData: PEOPLES[] = [];

const VechicleData: VECHICLES[] = [
  {
    _id: "osjfosfjr",
    vehicle_number: "string",
    vehicle_type: 1,
    start_time: "string",
    end_time: "string",
    slot_number: 1,
  },
  {
    _id: "osjfosfjr",
    vehicle_number: "string",
    vehicle_type: 1,
    start_time: "string",
    end_time: "string",
    slot_number: 1,
  },
  {
    _id: "osjfosfjr",
    vehicle_number: "string",
    vehicle_type: 1,
    start_time: "string",
    end_time: "string",
    slot_number: 1,
  },
  {
    _id: "osjfosfjr",
    vehicle_number: "string",
    vehicle_type: 1,
    start_time: "string",
    end_time: "string",
    slot_number: 1,
  },
];

const data = [
    {
        Person_name: "Shreyansh",
        vechicle_no: "HR0101",
        slot_book_no: 2,
        Booking_Time:"12:11",
        end_Time: "13.11",
        amount_paid: 123,
    },
    {
        Person_name: "Shreyansh",
        vechicle_no: "HR0101",
        slot_book_no: 2,
        Booking_Time:"12:11",
        end_Time: "13.11",
        amount_paid: 123,
    },
    {
        Person_name: "Shreyansh",
        vechicle_no: "HR0101",
        slot_book_no: 2,
        Booking_Time:"12:11",
        end_Time: "13.11",
        amount_paid: 123,
    },
    {
        Person_name: "Shreyansh",
        vechicle_no: "HR0101",
        slot_book_no: 2,
        Booking_Time:"12:11",
        end_Time: "13.11",
        amount_paid: 123,
    }
];

const People = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Parking Name
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

          <div className="flex flex-col">
            <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
              <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Person_name
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Vechicle ID
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Slot No. Booked
                </h5>
              </div>
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Booking Time
                </h5>
              </div>
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  End time
                </h5>
              </div>
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Amount Paid
                </h5>
              </div>
            </div>

            {data.map((parkingDetail, key) => (
                <div
                    className={`grid grid-cols-3 sm:grid-cols-6 ${
                    key === data.length - 1
                        ? ""
                        : "border-b border-stroke dark:border-strokedark"
                    }`}
                    key={key}
                >
                    <div className="flex items-center gap-3 p-2.5 xl:p-5">
                        <p className="hidden text-black dark:text-white sm:block">
                            {parkingDetail.Person_name}
                        </p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="text-black dark:text-white">{parkingDetail.vechicle_no}</p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="text-black dark:text-white">{parkingDetail.slot_book_no}</p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-meta-3">{parkingDetail.Booking_Time}</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <p className="text-black dark:text-white">{parkingDetail.end_Time}</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="text-black dark:text-white">{parkingDetail.amount_paid}</p>
                    </div>
                </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
