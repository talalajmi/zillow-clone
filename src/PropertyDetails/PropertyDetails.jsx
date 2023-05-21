import { useEffect, useState } from "react";
import styles from "./PropertyDetails.module.css";
import { Zap } from "react-feather";

const tabs = ["Overview", "Utility", "Facts and Features"];

const PropertyDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [utilityCost, setUtilityCost] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  const year = new Date().getFullYear();
  const sqft = 1554;
  const beds = 3;
  const zipCode = 3556;

  const GetEstimatedAmount = async () => {
    const baseURL =
      "https://utility-demo-server.herokuapp.com/zappling/api/utility-estimate";
    const qp = {
      sqft: sqft,
      beds: beds,
      zipcode: zipCode,
      yearBuilt: year,
    };

    const url = new URL(baseURL);
    url.search = new URLSearchParams(qp).toString();

    fetch(url)
      .then((response) => response.json())
      .then((data) => setUtilityCost(data["predictions"][0]))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    GetEstimatedAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const OverviewTabContent = () => {
    return (
      <div id="Overview">
        <div className="flex flex-col gap-3 border-b w-full pb-6">
          <div className="flex gap-2">
            <svg
              viewBox="0 0 32 32"
              width={24}
              height={24}
              aria-hidden="true"
              focusable="false"
              className="fill-primary"
            >
              <g stroke="none">
                <path d="M24 2H8a2 2 0 00-2 2v24a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zm-9 26v-5h2v5zm9 0h-5v-6.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V28H8V4h16z"></path>
                <rect x="11" y="13" width="4" height="4" rx=".5"></rect>
                <rect x="17" y="13" width="4" height="4" rx=".5"></rect>
                <rect x="11" y="7" width="4" height="4" rx=".5"></rect>
                <rect x="17" y="7" width="4" height="4" rx=".5"></rect>
              </g>
            </svg>
            <p>Farm, single family residence</p>
          </div>
          <div className="flex gap-2">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              width={24}
              height={24}
              focusable="false"
              className="fill-primary"
            >
              <title>Year Built</title>
              <g stroke="none">
                <rect x="8" y="16" width="4" height="4" rx=".5"></rect>
                <rect x="20" y="16" width="4" height="4" rx=".5"></rect>
                <rect x="14" y="16" width="4" height="4" rx=".5"></rect>
                <rect x="8" y="22" width="4" height="4" rx=".5"></rect>
                <rect x="20" y="22" width="4" height="4" rx=".5"></rect>
                <rect x="14" y="22" width="4" height="4" rx=".5"></rect>
                <path d="M25 5h-1V3a1 1 0 00-2 0v2H10V3a1 1 0 00-2 0v2H7a3 3 0 00-3 3v19a3 3 0 003 3h18a3 3 0 003-3V8a3 3 0 00-3-3zM7 7h1v2a1 1 0 002 0V7h12v2a1 1 0 002 0V7h1a1 1 0 011 1v4H6V8a1 1 0 011-1zm18 21H7a1 1 0 01-1-1V14h20v13a1 1 0 01-1 1z"></path>
              </g>
            </svg>
            <p>Built in 1999</p>
          </div>
          <div className="flex gap-2">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              width={24}
              height={24}
              className="fill-primary"
            >
              <title>Heating</title>
              <g stroke="none">
                <path d="M21 18.11V7a5 5 0 00-10 0v11.11a7 7 0 1010 0zM16 28a5 5 0 01-3.57-8.5l.57-.58V7a3 3 0 016 0v11.92l.57.58A5 5 0 0116 28z"></path>
                <path d="M17 20.18V8a1 1 0 00-2 0v12.18a3 3 0 102 0z"></path>
              </g>
            </svg>
            <p>Central, propane, wood stove</p>
          </div>
          <div className="flex gap-2">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              width={24}
              height={24}
              className="fill-primary"
            >
              <title>Cooling</title>
              <path
                stroke="none"
                d="M28.49 17.71a1 1 0 00-1.23-.71l-5.06 1.34L18 16l4.2-2.34L27.26 15h.26a1 1 0 001-.71 1 1 0 00-.71-1.18l-3.13-.81 3.1-1.73a.94.94 0 00.37-1.31 1 1 0 00-1.37-.35l-3.1 1.72.84-3a1 1 0 00-.71-1.18 1 1 0 00-1.22.68L21.2 12 17 14.33V9.66l3.7-3.57a.94.94 0 000-1.36 1 1 0 00-1.41 0L17 6.93V3a1 1 0 00-2 0v4l-2.29-2.2a1 1 0 00-1.41 0 .94.94 0 000 1.36l3.7 3.5v4.67L10.8 12 9.44 7.12a1 1 0 00-1.22-.68 1 1 0 00-.71 1.18l.84 3-3.1-1.71a1 1 0 00-1.37.35.94.94 0 00.37 1.31l3.1 1.73-3.13.81a1 1 0 00-.71 1.18 1 1 0 001 .71h.26l5.03-1.34L14 16l-4.2 2.34L4.74 17a1 1 0 00-1.23.68 1 1 0 00.71 1.18l3.13.81-3.1 1.73a.94.94 0 00-.37 1.31 1 1 0 001.37.35l3.1-1.72-.84 3a1 1 0 00.71 1.18.78.78 0 00.26 0 1 1 0 001-.72L10.8 20l4.2-2.33v4.67l-3.7 3.57a.94.94 0 000 1.36 1 1 0 001.41 0l2.29-2.2v4a1 1 0 002 0v-4l2.29 2.2a1 1 0 00.71.29 1 1 0 00.7-.29.94.94 0 000-1.36L17 22.34v-4.67L21.2 20l1.36 4.87a1 1 0 001 .72.78.78 0 00.26 0 1 1 0 00.71-1.18l-.84-3 3.1 1.72a1 1 0 001.37-.35.94.94 0 00-.37-1.31l-3.1-1.73 3.13-.81a1 1 0 00.67-1.22z"
              ></path>
            </svg>
            <p>Central air, ceiling fan(s), electric</p>
          </div>
          <div className="flex gap-2">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              width={24}
              height={24}
              className="fill-primary"
            >
              <title>Parking</title>
              <g stroke="none">
                <path d="M28,4V28H4V4H28m0-2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2Z"></path>
                <path d="M17.56,8H11V24h4V19h2.52A5.13,5.13,0,0,0,23,13.53,5.18,5.18,0,0,0,17.56,8Zm-1,8H15V11h1.94a2.29,2.29,0,0,1,2.5,2.5C19.44,15.32,18.32,16,16.51,16Z"></path>
              </g>
            </svg>
            <p>2 Carport spaces</p>
          </div>
          <div className="flex gap-2">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              width={24}
              height={24}
              className="fill-primary"
            >
              <title>Lot</title>
              <path
                stroke="none"
                d="M30.9 26.4l-5.6-8a1 1 0 00-.8-.4H13v-2a4.7 4.7 0 004-4.5 4.3 4.3 0 00-1.6-3.3 4 4 0 10-6.8 0A4.3 4.3 0 007 11.5a4.7 4.7 0 004 4.4V18H7.5a1 1 0 00-.8.4l-5.6 8a1 1 0 00.8 1.6h28.2a1 1 0 00.8-1.6zM9 11.5a2.3 2.3 0 011-1.8 2 2 0 00.3-2.6A2 2 0 0110 6a2 2 0 014 0 2 2 0 01-.3 1 2 2 0 00.4 2.7 2.3 2.3 0 01.9 1.8 2.6 2.6 0 01-2 2.4V11a1 1 0 00-2 0v2.9a2.6 2.6 0 01-2-2.4zM3.8 26L8 20h3v2a1 1 0 002 0v-2h11l4.2 6z"
              ></path>
            </svg>
            <p>22 Acres</p>
          </div>
          <div className="flex gap-2">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              width={24}
              height={24}
              className="fill-primary"
            >
              <title>Price/sqft</title>
              <g stroke="none">
                <path d="M29 21H11V3a1.003 1.003 0 00-1-1H3a1.003 1.003 0 00-1 1v26a1.003 1.003 0 001 1h26a1.003 1.003 0 001-1v-7a1.003 1.003 0 00-1-1zm-1 7H4V4h5v2H8a1 1 0 000 2h1v3H8a1 1 0 000 2h1v3H8a1 1 0 000 2h1v5h5v1a1 1 0 002 0v-1h3v1a1 1 0 002 0v-1h3v1a1 1 0 002 0v-1h2z"></path>
                <path d="M20.038 14.587a2.882 2.882 0 01-1.947-.831 1.347 1.347 0 00-.926-.419.802.802 0 00-.865.825 1.578 1.578 0 00.595 1.141 4.027 4.027 0 002.19.883v.885a.929.929 0 001.858 0v-.913a2.949 2.949 0 002.757-2.875c0-1.385-.838-2.23-2.54-2.562l-1.278-.263c-.858-.17-1.25-.494-1.25-1 0-.568.506-1.02 1.303-1.02a2.31 2.31 0 011.737.763 1.414 1.414 0 00.98.419.751.751 0 00.777-.757 1.622 1.622 0 00-.58-1.136 3.7 3.7 0 00-1.907-.856v-.943a.929.929 0 00-1.857 0v.927a2.834 2.834 0 00-2.67 2.772c0 1.378.824 2.257 2.46 2.595l1.27.277c.974.21 1.359.507 1.359 1.014 0 .649-.514 1.074-1.466 1.074z"></path>
              </g>
            </svg>
            <p>$1,287 price/sqft</p>
          </div>
          <div className="flex gap-2">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              width={24}
              height={24}
              className="fill-primary"
            >
              <title>Buyers Agency Fee</title>
              <g stroke="none">
                <path d="M7.51 24.49a12 12 0 1117 0 12 12 0 01-17 0M6.1 25.9a14 14 0 100-19.8 14 14 0 000 19.8z"></path>
                <path d="M20.75 18.57c0-1.75-1.1-2.74-3.67-3.32l-1.65-.36c-1.41-.36-2-.91-2-1.79s.86-1.57 2.11-1.7a3.2 3.2 0 013 1.47 1.09 1.09 0 001 .64c.56 0 .91-.29.91-.74a1.52 1.52 0 00-.08-.49c-.41-1.29-1.78-2.18-3.62-2.39V9.5a1 1 0 00-2 0v.44c-2.08.35-3.39 1.62-3.39 3.4s1.13 2.78 3.55 3.32l1.61.36c1.61.39 2.21.89 2.21 1.83s-.83 1.68-2.22 1.76a3.45 3.45 0 01-3.26-1.49 1 1 0 00-1-.65c-.6 0-1 .32-1 .85a1.38 1.38 0 00.1.49 3.92 3.92 0 003.35 2.27v.43a1 1 0 002 0v-.38c2.03-.2 4.05-1.22 4.05-3.56z"></path>
              </g>
            </svg>
            <p>3% buyers agency fee</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 mt-3">
            <h4 className="font-semibold text-2xl">Overview</h4>
            <div className="flex flex-col gap-1">
              <div
                className={`${
                  showFullText
                    ? "overflow-visible h-fit"
                    : "max-h-36 overflow-hidden"
                }`}
              >
                <p className="flex text-justify items-center">
                  Rare picturesque 22 developed acres in sought after location 7
                  minutes south of 380 in Princeton. Melt into the tranquility
                  of the country, with conveniences of the city close by.
                  Property boasts multiple barns with electric, plus covered RV,
                  vehicle and boat parking. 3 bed, 1.5 bath home, all sit on the
                  front 2 acres with road frontage on Co Rd 444. Plenty of
                  privacy behind remote controlled wrought iron gate at the
                  entrance. Use the spacious barns for your hobbies, equipment
                  and outdoor toys. Enjoy stunning sunsets overlooking gorgeous
                  fenced rolling pastures. Relax at the fully stocked approx
                  half acre pond or watch your livestock roam the pasture and
                  graze. Home has tasteful features designed by an architect to
                  impress, solid wood beams in the soaring ceilings, open floor
                  plan, country kitchen with gorgeous granite counters, wood and
                  glass front cabinets, and truly unique wood burning stove.
                  Plantation shutters throughout, solar panels, and too many
                  wonderful features to list!
                </p>
              </div>
              <button
                className="text-start text-primary "
                onClick={() => setShowFullText(!showFullText)}
              >
                {showFullText ? "Show Less" : "Show More"}
              </button>
              <div className="flex my-5">
                <p className="py-2 pr-4 border-r w-full text-start">
                  <span className="font-semibold">2 days</span> on Zillow
                </p>
                <p className="py-2 px-4 border-r w-full text-center">
                  <span className="font-semibold">207</span> views
                </p>
                <p className="py-2 px-4 w-full text-center">
                  <span className="font-semibold">9</span> saves
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <p>Listed by:</p>
                  <p>Anna Harris 0677598 972-381-2758</p>
                  <p>Local Realty Agency</p>
                  <p>William Harris 0676477</p>
                  <p>Local Realty Agency</p>
                </div>
                <p>Source: NTREIS, MLS#: 20320667</p>
                <div className="flex flex-col">
                  <p>Zillow last checked: 11 hours ago</p>
                  <p>Listing updated: May 18, 2023 at 11:10pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.main}>
      <div className="relative flex-[2]">
        <div className="absolute md:hidden bg-gradient-to-b from-black/70 md:bg-none top-0 p-4 z-10 flex justify-between items-center w-full">
          <div>
            <svg
              viewBox="0 0 32 32"
              width={24}
              height={24}
              className="fill-white rotate-90"
              aria-hidden="true"
              focusable="false"
            >
              <path
                stroke="none"
                d="M29.41 8.59a2 2 0 00-2.83 0L16 19.17 5.41 8.59a2 2 0 00-2.83 2.83l12 12a2 2 0 002.82 0l12-12a2 2 0 00.01-2.83z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-row gap-5">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              width={24}
              height={24}
              className="fill-white"
            >
              <path
                stroke="none"
                d="M27.66 6.19a7.85 7.85 0 00-11 .13L16 7l-.65-.66a7.85 7.85 0 00-11-.13 8.23 8.23 0 00.09 11.59l.42.42L15.29 28.7a1 1 0 001.42 0l10.44-10.5.42-.42a8.23 8.23 0 00.09-11.59zm-1.42 10.06l-.52.52L16 26.55l-9.72-9.78-.52-.52A6.15 6.15 0 014 13.19a5.91 5.91 0 011.62-5.43 5.81 5.81 0 014.67-1.71 6 6 0 013.78 1.87l.5.5 1.08 1.08a.5.5 0 00.7 0l1.08-1.08.5-.5a6 6 0 013.78-1.87 5.81 5.81 0 014.67 1.71A5.91 5.91 0 0128 13.19a6.15 6.15 0 01-1.76 3.06z"
              ></path>
            </svg>
            <svg viewBox="0 0 23 18" width={24} height={24} focusable="false">
              <g className="fill-white" fillRule="evenodd">
                <g transform="translate(0)" fillRule="nonzero">
                  <path d="m22.504 7.0047l-9.4663-6.7849c-0.2188-0.18177-0.53451-0.22356-0.79965-0.10586-0.26514 0.11771-0.42736 0.37168-0.41087 0.64327v3.4148c-2.9503 0.066134-5.77 1.1388-7.9168 3.0118-2.3605 2.2392-3.4984 5.3966-3.3895 9.5391 0.0061638 0.30779 0.2342 0.57373 0.55684 0.64938h0.18158c0.2629 2.775e-4 0.50471-0.13305 0.62947-0.34708 0.89579-1.5115 4.2005-6.2922 9.8174-6.2922h0.12105v3.2245l0.060526 0.44785 0.33895 0.15675c0.25053 0.11823 0.55234 0.092065 0.77474-0.067177l9.2242-6.6169 0.27842-0.25751v-0.61579zm-9.43 6.0571v-2.7431c4.845e-4 -0.35828-0.30312-0.65386-0.69-0.67177-5.3505-0.31349-8.8853 3.2021-10.604 5.4749 0.023449-2.6474 1.1158-5.1911 3.0626-7.132 2.0065-1.7327 4.6512-2.6935 7.3963-2.6871h0.14526c0.19332-1.3199e-4 0.37937-0.068163 0.52053-0.19033l0.21789-0.24632v-3.2021l7.9532 5.6989-8.0016 5.6989z"></path>
                </g>
              </g>
            </svg>
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              width={24}
              height={24}
              focusable="false"
              className="fill-white"
            >
              <path
                stroke="none"
                d="M16 2a14 14 0 1014 14A14 14 0 0016 2zM6.85 23.74A12 12 0 0123.74 6.85L6.85 23.74zM16 28a11.89 11.89 0 01-7.74-2.85L25.15 8.26A12 12 0 0116 28z"
              ></path>
            </svg>
            <svg
              width={24}
              height={24}
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="fill-white"
            >
              <g stroke="none">
                <path d="M16,14a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"></path>
                <path d="M6,14a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"></path>
                <path d="M26,14a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"></path>
              </g>
            </svg>
          </div>
        </div>
        <img
          src="https://photos.zillowstatic.com/fp/43d82cc72829b785f6c0ccbdb0b09f61-cc_ft_1536.webp"
          alt="property-image"
          className="h-60 object-cover w-full"
        />
      </div>

      <div className={styles.detailsContainer}>
        <div className="hidden lg:block border-b w-full">
          <div className="flex justify-between items-center p-4">
            <img
              src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
              alt="zillow-logo"
              className="w-[110px] h-[23px]"
            />
            <div className="flex gap-3">
              <div className="flex gap-1 items-center">
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  focusable="false"
                  width={20}
                  height={20}
                  className="fill-primary"
                >
                  <path
                    stroke="none"
                    d="M27.66 6.19a7.85 7.85 0 00-11 .13L16 7l-.65-.66a7.85 7.85 0 00-11-.13 8.23 8.23 0 00.09 11.59l.42.42L15.29 28.7a1 1 0 001.42 0l10.44-10.5.42-.42a8.23 8.23 0 00.09-11.59zm-1.42 10.06l-.52.52L16 26.55l-9.72-9.78-.52-.52A6.15 6.15 0 014 13.19a5.91 5.91 0 011.62-5.43 5.81 5.81 0 014.67-1.71 6 6 0 013.78 1.87l.5.5 1.08 1.08a.5.5 0 00.7 0l1.08-1.08.5-.5a6 6 0 013.78-1.87 5.81 5.81 0 014.67 1.71A5.91 5.91 0 0128 13.19a6.15 6.15 0 01-1.76 3.06z"
                  ></path>
                </svg>
                <p className="text-primary">Save</p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  viewBox="0 0 23 18"
                  width={20}
                  height={20}
                  focusable="false"
                  className="fill-primary"
                >
                  <g className="fill-primary" fillRule="evenodd">
                    <g transform="translate(0)" fillRule="nonzero">
                      <path d="m22.504 7.0047l-9.4663-6.7849c-0.2188-0.18177-0.53451-0.22356-0.79965-0.10586-0.26514 0.11771-0.42736 0.37168-0.41087 0.64327v3.4148c-2.9503 0.066134-5.77 1.1388-7.9168 3.0118-2.3605 2.2392-3.4984 5.3966-3.3895 9.5391 0.0061638 0.30779 0.2342 0.57373 0.55684 0.64938h0.18158c0.2629 2.775e-4 0.50471-0.13305 0.62947-0.34708 0.89579-1.5115 4.2005-6.2922 9.8174-6.2922h0.12105v3.2245l0.060526 0.44785 0.33895 0.15675c0.25053 0.11823 0.55234 0.092065 0.77474-0.067177l9.2242-6.6169 0.27842-0.25751v-0.61579zm-9.43 6.0571v-2.7431c4.845e-4 -0.35828-0.30312-0.65386-0.69-0.67177-5.3505-0.31349-8.8853 3.2021-10.604 5.4749 0.023449-2.6474 1.1158-5.1911 3.0626-7.132 2.0065-1.7327 4.6512-2.6935 7.3963-2.6871h0.14526c0.19332-1.3199e-4 0.37937-0.068163 0.52053-0.19033l0.21789-0.24632v-3.2021l7.9532 5.6989-8.0016 5.6989z"></path>
                    </g>
                  </g>
                </svg>
                <p className="flex gap-1 items-center text-primary">Share</p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  width={20}
                  height={20}
                  focusable="false"
                  className="fill-primary"
                >
                  <path
                    stroke="none"
                    d="M16 2a14 14 0 1014 14A14 14 0 0016 2zM6.85 23.74A12 12 0 0123.74 6.85L6.85 23.74zM16 28a11.89 11.89 0 01-7.74-2.85L25.15 8.26A12 12 0 0116 28z"
                  ></path>
                </svg>
                <p className="flex gap-1 items-center text-primary">Hide</p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  width={20}
                  height={20}
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="fill-primary"
                >
                  <g stroke="none">
                    <path d="M16,14a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"></path>
                    <path d="M6,14a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"></path>
                    <path d="M26,14a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"></path>
                  </g>
                </svg>
                <p className="flex gap-1 items-center text-primary">More</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <p className="font-bold text-2xl">$2,000,000</p>
            <div className="border-r px-2">
              <span className="font-bold">3</span>
              bd
            </div>
            <div className="border-r px-2">
              <span className="font-bold">3</span>
              ba
            </div>
            <div>
              <span className="font-bold">1,554</span>
              sqft
            </div>
          </div>
          <p>3556 County Road 444, Princeton, TX 75407</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border-r pr-3">
              <div className="bg-[#ff5a50] w-3 h-3 rounded-full" />
              <p className="font-semibold">For Sale</p>
            </div>
            <p>Zestimate®: $1,919,999</p>
          </div>
          <div className="flex items-center gap-3">
            <p>Est. payment: $14,134/mo</p>
            <div className="flex items-center gap-2 font-semibold text-primary">
              <div className="bg-primary rounded-full w-fit h-fit py-0.5 px-2 text-white text-sm">
                $
              </div>
              Get pre-qualified
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center items-start gap-3 w-full h-full">
            <button className="bg-primary rounded-lg w-full text-white py-2 px-4 flex-col flex-[2] items-center">
              <p className="font-semibold">Request a Tour</p>
              <span>as early as today at 11:00 am</span>
            </button>
            <button className="border border-primary w-full rounded-lg text-primary py-5 px-4 flex-1">
              Contact Agent
            </button>
          </div>
          <div className="md:border-t border-b flex justify-center items-center gap-3 w-full ">
            {tabs.map((tab, i) => (
              <p
                key={i}
                className={`font-light ${
                  activeTab === i && "border-b-primary text-primary border-b-2"
                } p-2 transition-all hover:border-primary hover:text-primary cursor-pointer whitespace-nowrap flex-none`}
                onClick={() => {
                  setActiveTab(i);
                  document
                    .getElementById(tab)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {tab}
              </p>
            ))}
          </div>
          <OverviewTabContent />
          <div id="Utility" className="mb-5 w-full">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <p className="font-semibold text-2xl">Utility Cost Analysis</p>
                <p className="font-semibold text-2xl">
                  $ {utilityCost.toFixed(2)}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <li>Electricity: $</li>
                <li>Water: $</li>
                <li>Gas: $</li>
                <li>Sewage: $</li>
                <li>Carbon Footprint: $</li>
                <div className="flex gap-2 items-center">
                  <Zap color="grey" size={18} />
                  <p className="text-gray-500 text-sm">
                    Powered by Fourier Flow
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 ">
                <div className="flex flex-col w-full">
                  <label className="font-semibold">No. of Rooms</label>
                  <input
                    className="border rounded-md p-2 w-full"
                    disabled
                    value={beds}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-semibold">Sqft</label>
                  <input
                    className="border rounded-md p-2 w-full"
                    disabled
                    value={sqft}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 mt-3 dm:mt-0">
              <div className="flex flex-col w-full">
                <label className="font-semibold">Zip Code</label>
                <input
                  className="border rounded-md p-2 w-full"
                  disabled
                  value={zipCode}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="font-semibold">Year</label>
                <input
                  className="border rounded-md p-2 w-full"
                  disabled
                  value={year}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
