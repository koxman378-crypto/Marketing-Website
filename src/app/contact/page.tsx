"use client";
import { useState, useEffect, useRef } from "react";
import { FaSortDown } from "react-icons/fa";
import * as Flags from "country-flag-icons/react/3x2";
import HeaderNav from "../home/headernav";
import Footer from "../home/footer";

const countryNames: { [key: string]: string } = {
  AD: "Andorra",
  AE: "United Arab Emirates",
  AF: "Afghanistan",
  AG: "Antigua and Barbuda",
  AI: "Anguilla",
  AL: "Albania",
  AM: "Armenia",
  AO: "Angola",
  AQ: "Antarctica",
  AR: "Argentina",
  AS: "American Samoa",
  AT: "Austria",
  AU: "Australia",
  AW: "Aruba",
  AX: "Åland Islands",
  AZ: "Azerbaijan",
  BA: "Bosnia and Herzegovina",
  BB: "Barbados",
  BD: "Bangladesh",
  BE: "Belgium",
  BF: "Burkina Faso",
  BG: "Bulgaria",
  BH: "Bahrain",
  BI: "Burundi",
  BJ: "Benin",
  BL: "Saint Barthélemy",
  BM: "Bermuda",
  BN: "Brunei",
  BO: "Bolivia",
  BQ: "Caribbean Netherlands",
  BR: "Brazil",
  BS: "Bahamas",
  BT: "Bhutan",
  BV: "Bouvet Island",
  BW: "Botswana",
  BY: "Belarus",
  BZ: "Belize",
  CA: "Canada",
  CC: "Cocos Islands",
  CD: "Congo (DRC)",
  CF: "Central African Republic",
  CG: "Congo",
  CH: "Switzerland",
  CI: "Côte d'Ivoire",
  CK: "Cook Islands",
  CL: "Chile",
  CM: "Cameroon",
  CN: "China",
  CO: "Colombia",
  CR: "Costa Rica",
  CU: "Cuba",
  CV: "Cape Verde",
  CW: "Curaçao",
  CX: "Christmas Island",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DE: "Germany",
  DJ: "Djibouti",
  DK: "Denmark",
  DM: "Dominica",
  DO: "Dominican Republic",
  DZ: "Algeria",
  EC: "Ecuador",
  EE: "Estonia",
  EG: "Egypt",
  EH: "Western Sahara",
  ER: "Eritrea",
  ES: "Spain",
  ET: "Ethiopia",
  FI: "Finland",
  FJ: "Fiji",
  FK: "Falkland Islands",
  FM: "Micronesia",
  FO: "Faroe Islands",
  FR: "France",
  GA: "Gabon",
  GB: "United Kingdom",
  GD: "Grenada",
  GE: "Georgia",
  GF: "French Guiana",
  GG: "Guernsey",
  GH: "Ghana",
  GI: "Gibraltar",
  GL: "Greenland",
  GM: "Gambia",
  GN: "Guinea",
  GP: "Guadeloupe",
  GQ: "Equatorial Guinea",
  GR: "Greece",
  GS: "South Georgia",
  GT: "Guatemala",
  GU: "Guam",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HK: "Hong Kong",
  HM: "Heard Island",
  HN: "Honduras",
  HR: "Croatia",
  HT: "Haiti",
  HU: "Hungary",
  ID: "Indonesia",
  IE: "Ireland",
  IL: "Israel",
  IM: "Isle of Man",
  IN: "India",
  IO: "British Indian Ocean Territory",
  IQ: "Iraq",
  IR: "Iran",
  IS: "Iceland",
  IT: "Italy",
  JE: "Jersey",
  JM: "Jamaica",
  JO: "Jordan",
  JP: "Japan",
  KE: "Kenya",
  KG: "Kyrgyzstan",
  KH: "Cambodia",
  KI: "Kiribati",
  KM: "Comoros",
  KN: "Saint Kitts and Nevis",
  KP: "North Korea",
  KR: "South Korea",
  KW: "Kuwait",
  KY: "Cayman Islands",
  KZ: "Kazakhstan",
  LA: "Laos",
  LB: "Lebanon",
  LC: "Saint Lucia",
  LI: "Liechtenstein",
  LK: "Sri Lanka",
  LR: "Liberia",
  LS: "Lesotho",
  LT: "Lithuania",
  LU: "Luxembourg",
  LV: "Latvia",
  LY: "Libya",
  MA: "Morocco",
  MC: "Monaco",
  MD: "Moldova",
  ME: "Montenegro",
  MF: "Saint Martin",
  MG: "Madagascar",
  MH: "Marshall Islands",
  MK: "North Macedonia",
  ML: "Mali",
  MM: "Myanmar",
  MN: "Mongolia",
  MO: "Macao",
  MP: "Northern Mariana Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MS: "Montserrat",
  MT: "Malta",
  MU: "Mauritius",
  MV: "Maldives",
  MW: "Malawi",
  MX: "Mexico",
  MY: "Malaysia",
  MZ: "Mozambique",
  NA: "Namibia",
  NC: "New Caledonia",
  NE: "Niger",
  NF: "Norfolk Island",
  NG: "Nigeria",
  NI: "Nicaragua",
  NL: "Netherlands",
  NO: "Norway",
  NP: "Nepal",
  NR: "Nauru",
  NU: "Niue",
  NZ: "New Zealand",
  OM: "Oman",
  PA: "Panama",
  PE: "Peru",
  PF: "French Polynesia",
  PG: "Papua New Guinea",
  PH: "Philippines",
  PK: "Pakistan",
  PL: "Poland",
  PM: "Saint Pierre and Miquelon",
  PN: "Pitcairn",
  PR: "Puerto Rico",
  PS: "Palestine",
  PT: "Portugal",
  PW: "Palau",
  PY: "Paraguay",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Romania",
  RS: "Serbia",
  RU: "Russia",
  RW: "Rwanda",
  SA: "Saudi Arabia",
  SB: "Solomon Islands",
  SC: "Seychelles",
  SD: "Sudan",
  SE: "Sweden",
  SG: "Singapore",
  SH: "Saint Helena",
  SI: "Slovenia",
  SJ: "Svalbard and Jan Mayen",
  SK: "Slovakia",
  SL: "Sierra Leone",
  SM: "San Marino",
  SN: "Senegal",
  SO: "Somalia",
  SR: "Suriname",
  SS: "South Sudan",
  ST: "São Tomé and Príncipe",
  SV: "El Salvador",
  SX: "Sint Maarten",
  SY: "Syria",
  SZ: "Eswatini",
  TC: "Turks and Caicos Islands",
  TD: "Chad",
  TF: "French Southern Territories",
  TG: "Togo",
  TH: "Thailand",
  TJ: "Tajikistan",
  TK: "Tokelau",
  TL: "Timor-Leste",
  TM: "Turkmenistan",
  TN: "Tunisia",
  TO: "Tonga",
  TR: "Turkey",
  TT: "Trinidad and Tobago",
  TV: "Tuvalu",
  TW: "Taiwan",
  TZ: "Tanzania",
  UA: "Ukraine",
  UG: "Uganda",
  UM: "U.S. Outlying Islands",
  US: "United States",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VA: "Vatican City",
  VC: "Saint Vincent and the Grenadines",
  VE: "Venezuela",
  VG: "British Virgin Islands",
  VI: "U.S. Virgin Islands",
  VN: "Vietnam",
  VU: "Vanuatu",
  WF: "Wallis and Futuna",
  WS: "Samoa",
  XK: "Kosovo",
  YE: "Yemen",
  YT: "Mayotte",
  ZA: "South Africa",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

const countries = Object.keys(Flags)
  .filter((key) => countryNames[key])
  .map((code) => ({
    code,
    name: countryNames[code],
    flag: (Flags as any)[code] || null,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const Contact = () => {
  const [country, setCountry] = useState("");
  const [showCountry, setShowCountry] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowCountry(false);
      }
    };

    if (showCountry) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCountry]);

  const handleCountrySelect = (code: string) => {
    setCountry(code);
    setShowCountry(false);
  };
  return (
    <>
      <HeaderNav />
      <div className="container mx-auto mt-20 mb-20 px-5 lg:px-">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <div className="w-full lg:w-[30%] shrink-0">
            <div className="border-2 border-black/50 flex items-center justify-center h-[50px] w-full max-w-[200px] hover:border-blue-500 transition-all duration-300">
              <div className="text-center text-sm lg:text-base font-bold text-gray-700">
                Our Featured Client
              </div>
            </div>
          </div>
          <section className="w-full lg:w-[70%]">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[100px] font-bold text-gray-900 leading-tight max-[640px]:mt-5 sm:mt-4 md:mt-4 lg:-mt-4 xl:-mt-8 2xl:-mt-14">
              Let’s work together
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mt-6 max-w-3xl leading-relaxed">
              Crafted is an award winning Digital Marketing and Creative Design
              agency in New York City. We hold a passion for innovation,
              brilliant ideas and the execution that brings them all together in
              one beautiful experience.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-6">
              Reason for Contacting Us
            </h3>
            <form className="flex flex-col gap-6 mt-6">
              <div className="w-full">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-900"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-900"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-900"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-900"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="relative" ref={dropdownRef}>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowCountry(!showCountry)}
                        className="flex items-center justify-center w-15 h-[50px] border-2 border-gray-300 rounded-l-lg hover:border-blue-500 transition-colors bg-white shrink-0"
                      >
                        {country ? (
                          (() => {
                            const selectedCountry = countries.find(
                              (c) => c.code === country
                            );
                            const FlagIcon = selectedCountry?.flag;
                            return FlagIcon ? (
                              <div className="flex items-center justify-center gap-1">
                                <FlagIcon className="w-5 h-5 shrink-0" />
                                <FaSortDown className="w-4 h-4 text-gray-500 -mt-1" />
                              </div>
                            ) : (
                              <FaSortDown className="w-4 h-4 text-gray-500" />
                            );
                          })()
                        ) : (
                          <FaSortDown className="w-4 h-4 text-gray-500" />
                        )}
                      </button>
                      <div className="relative flex-1">
                        <input
                          type="tel"
                          placeholder="Phone"
                          className="w-full px-4 py-3 pr-10 border-2 border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-900"
                        />
                      </div>
                    </div>
                    {showCountry && (
                      <div className="absolute top-full left-0 right-0 mt-2 z-20 bg-white border-2 border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        <div className="py-2">
                          {countries.map((countryItem) => {
                            const FlagIcon = countryItem.flag;
                            return (
                              <button
                                key={countryItem.code}
                                type="button"
                                onClick={() =>
                                  handleCountrySelect(countryItem.code)
                                }
                                className="w-full px-4 py-2 flex items-center gap-3 hover:bg-blue-50 transition-colors text-left"
                              >
                                {FlagIcon ? (
                                  <FlagIcon className="w-5 h-5 shrink-0" />
                                ) : (
                                  <div className="w-5 h-5 shrink-0" />
                                )}
                                <span className="text-gray-900 font-medium">
                                  {countryItem.name}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <textarea
                placeholder="Message"
                className="w-full h-[150px] border border-gray-200 p-2 focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-900"
              />
              <h3 className="text-xl font-bold">Estimated Budget</h3>
              <input
                type="text"
                placeholder="Estimated Budget"
                className="w-full h-[70px] border border-gray-200 p-2 focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-900"
              />
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
