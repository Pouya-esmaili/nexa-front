"use client";

export const countries = [
  { code: "+93",  flag: "🇦🇫", name: "Afghanistan" },
  { code: "+355", flag: "🇦🇱", name: "Albania" },
  { code: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "+376", flag: "🇦🇩", name: "Andorra" },
  { code: "+244", flag: "🇦🇴", name: "Angola" },
  { code: "+54",  flag: "🇦🇷", name: "Argentina" },
  { code: "+374", flag: "🇦🇲", name: "Armenia" },
  { code: "+61",  flag: "🇦🇺", name: "Australia" },
  { code: "+43",  flag: "🇦🇹", name: "Austria" },
  { code: "+994", flag: "🇦🇿", name: "Azerbaijan" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+375", flag: "🇧🇾", name: "Belarus" },
  { code: "+32",  flag: "🇧🇪", name: "Belgium" },
  { code: "+501", flag: "🇧🇿", name: "Belize" },
  { code: "+229", flag: "🇧🇯", name: "Benin" },
  { code: "+975", flag: "🇧🇹", name: "Bhutan" },
  { code: "+591", flag: "🇧🇴", name: "Bolivia" },
  { code: "+387", flag: "🇧🇦", name: "Bosnia" },
  { code: "+55",  flag: "🇧🇷", name: "Brazil" },
  { code: "+673", flag: "🇧🇳", name: "Brunei" },
  { code: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "+226", flag: "🇧🇫", name: "Burkina Faso" },
  { code: "+257", flag: "🇧🇮", name: "Burundi" },
  { code: "+855", flag: "🇰🇭", name: "Cambodia" },
  { code: "+237", flag: "🇨🇲", name: "Cameroon" },
  { code: "+1",   flag: "🇨🇦", name: "Canada" },
  { code: "+238", flag: "🇨🇻", name: "Cape Verde" },
  { code: "+236", flag: "🇨🇫", name: "Central African Rep." },
  { code: "+235", flag: "🇹🇩", name: "Chad" },
  { code: "+56",  flag: "🇨🇱", name: "Chile" },
  { code: "+86",  flag: "🇨🇳", name: "China" },
  { code: "+57",  flag: "🇨🇴", name: "Colombia" },
  { code: "+269", flag: "🇰🇲", name: "Comoros" },
  { code: "+242", flag: "🇨🇬", name: "Congo" },
  { code: "+506", flag: "🇨🇷", name: "Costa Rica" },
  { code: "+385", flag: "🇭🇷", name: "Croatia" },
  { code: "+53",  flag: "🇨🇺", name: "Cuba" },
  { code: "+357", flag: "🇨🇾", name: "Cyprus" },
  { code: "+420", flag: "🇨🇿", name: "Czech Republic" },
  { code: "+45",  flag: "🇩🇰", name: "Denmark" },
  { code: "+253", flag: "🇩🇯", name: "Djibouti" },
  { code: "+1",   flag: "🇩🇴", name: "Dominican Republic" },
  { code: "+593", flag: "🇪🇨", name: "Ecuador" },
  { code: "+20",  flag: "🇪🇬", name: "Egypt" },
  { code: "+503", flag: "🇸🇻", name: "El Salvador" },
  { code: "+291", flag: "🇪🇷", name: "Eritrea" },
  { code: "+372", flag: "🇪🇪", name: "Estonia" },
  { code: "+251", flag: "🇪🇹", name: "Ethiopia" },
  { code: "+679", flag: "🇫🇯", name: "Fiji" },
  { code: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "+33",  flag: "🇫🇷", name: "France" },
  { code: "+241", flag: "🇬🇦", name: "Gabon" },
  { code: "+220", flag: "🇬🇲", name: "Gambia" },
  { code: "+995", flag: "🇬🇪", name: "Georgia" },
  { code: "+49",  flag: "🇩🇪", name: "Germany" },
  { code: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "+30",  flag: "🇬🇷", name: "Greece" },
  { code: "+502", flag: "🇬🇹", name: "Guatemala" },
  { code: "+224", flag: "🇬🇳", name: "Guinea" },
  { code: "+592", flag: "🇬🇾", name: "Guyana" },
  { code: "+509", flag: "🇭🇹", name: "Haiti" },
  { code: "+504", flag: "🇭🇳", name: "Honduras" },
  { code: "+36",  flag: "🇭🇺", name: "Hungary" },
  { code: "+354", flag: "🇮🇸", name: "Iceland" },
  { code: "+91",  flag: "🇮🇳", name: "India" },
  { code: "+62",  flag: "🇮🇩", name: "Indonesia" },
  { code: "+98",  flag: "🇮🇷", name: "Iran" },
  { code: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+39",  flag: "🇮🇹", name: "Italy" },
  { code: "+225", flag: "🇨🇮", name: "Ivory Coast" },
  { code: "+1",   flag: "🇯🇲", name: "Jamaica" },
  { code: "+81",  flag: "🇯🇵", name: "Japan" },
  { code: "+962", flag: "🇯🇴", name: "Jordan" },
  { code: "+7",   flag: "🇰🇿", name: "Kazakhstan" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+383", flag: "🇽🇰", name: "Kosovo" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+996", flag: "🇰🇬", name: "Kyrgyzstan" },
  { code: "+856", flag: "🇱🇦", name: "Laos" },
  { code: "+371", flag: "🇱🇻", name: "Latvia" },
  { code: "+961", flag: "🇱🇧", name: "Lebanon" },
  { code: "+266", flag: "🇱🇸", name: "Lesotho" },
  { code: "+231", flag: "🇱🇷", name: "Liberia" },
  { code: "+218", flag: "🇱🇾", name: "Libya" },
  { code: "+423", flag: "🇱🇮", name: "Liechtenstein" },
  { code: "+370", flag: "🇱🇹", name: "Lithuania" },
  { code: "+352", flag: "🇱🇺", name: "Luxembourg" },
  { code: "+261", flag: "🇲🇬", name: "Madagascar" },
  { code: "+265", flag: "🇲🇼", name: "Malawi" },
  { code: "+60",  flag: "🇲🇾", name: "Malaysia" },
  { code: "+960", flag: "🇲🇻", name: "Maldives" },
  { code: "+223", flag: "🇲🇱", name: "Mali" },
  { code: "+356", flag: "🇲🇹", name: "Malta" },
  { code: "+222", flag: "🇲🇷", name: "Mauritania" },
  { code: "+230", flag: "🇲🇺", name: "Mauritius" },
  { code: "+52",  flag: "🇲🇽", name: "Mexico" },
  { code: "+373", flag: "🇲🇩", name: "Moldova" },
  { code: "+976", flag: "🇲🇳", name: "Mongolia" },
  { code: "+382", flag: "🇲🇪", name: "Montenegro" },
  { code: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "+258", flag: "🇲🇿", name: "Mozambique" },
  { code: "+95",  flag: "🇲🇲", name: "Myanmar" },
  { code: "+264", flag: "🇳🇦", name: "Namibia" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+31",  flag: "🇳🇱", name: "Netherlands" },
  { code: "+64",  flag: "🇳🇿", name: "New Zealand" },
  { code: "+505", flag: "🇳🇮", name: "Nicaragua" },
  { code: "+227", flag: "🇳🇪", name: "Niger" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+47",  flag: "🇳🇴", name: "Norway" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+92",  flag: "🇵🇰", name: "Pakistan" },
  { code: "+507", flag: "🇵🇦", name: "Panama" },
  { code: "+675", flag: "🇵🇬", name: "Papua New Guinea" },
  { code: "+595", flag: "🇵🇾", name: "Paraguay" },
  { code: "+51",  flag: "🇵🇪", name: "Peru" },
  { code: "+63",  flag: "🇵🇭", name: "Philippines" },
  { code: "+48",  flag: "🇵🇱", name: "Poland" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+40",  flag: "🇷🇴", name: "Romania" },
  { code: "+7",   flag: "🇷🇺", name: "Russia" },
  { code: "+250", flag: "🇷🇼", name: "Rwanda" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+221", flag: "🇸🇳", name: "Senegal" },
  { code: "+381", flag: "🇷🇸", name: "Serbia" },
  { code: "+232", flag: "🇸🇱", name: "Sierra Leone" },
  { code: "+65",  flag: "🇸🇬", name: "Singapore" },
  { code: "+421", flag: "🇸🇰", name: "Slovakia" },
  { code: "+386", flag: "🇸🇮", name: "Slovenia" },
  { code: "+252", flag: "🇸🇴", name: "Somalia" },
  { code: "+27",  flag: "🇿🇦", name: "South Africa" },
  { code: "+82",  flag: "🇰🇷", name: "South Korea" },
  { code: "+211", flag: "🇸🇸", name: "South Sudan" },
  { code: "+34",  flag: "🇪🇸", name: "Spain" },
  { code: "+94",  flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+249", flag: "🇸🇩", name: "Sudan" },
  { code: "+597", flag: "🇸🇷", name: "Suriname" },
  { code: "+46",  flag: "🇸🇪", name: "Sweden" },
  { code: "+41",  flag: "🇨🇭", name: "Switzerland" },
  { code: "+963", flag: "🇸🇾", name: "Syria" },
  { code: "+886", flag: "🇹🇼", name: "Taiwan" },
  { code: "+992", flag: "🇹🇯", name: "Tajikistan" },
  { code: "+255", flag: "🇹🇿", name: "Tanzania" },
  { code: "+66",  flag: "🇹🇭", name: "Thailand" },
  { code: "+228", flag: "🇹🇬", name: "Togo" },
  { code: "+216", flag: "🇹🇳", name: "Tunisia" },
  { code: "+90",  flag: "🇹🇷", name: "Türkiye" },
  { code: "+993", flag: "🇹🇲", name: "Turkmenistan" },
  { code: "+256", flag: "🇺🇬", name: "Uganda" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+44",  flag: "🇬🇧", name: "United Kingdom" },
  { code: "+1",   flag: "🇺🇸", name: "United States" },
  { code: "+598", flag: "🇺🇾", name: "Uruguay" },
  { code: "+998", flag: "🇺🇿", name: "Uzbekistan" },
  { code: "+58",  flag: "🇻🇪", name: "Venezuela" },
  { code: "+84",  flag: "🇻🇳", name: "Vietnam" },
  { code: "+967", flag: "🇾🇪", name: "Yemen" },
  { code: "+260", flag: "🇿🇲", name: "Zambia" },
  { code: "+263", flag: "🇿🇼", name: "Zimbabwe" },
];

interface PhoneFieldProps {
  defaultCountryCode?: string;
  /** bg color of the wrapper div — matches form background */
  bg?: string;
  name?: string;
}

import { useLang } from "@/components/global/LanguageProvider";

export default function PhoneField({ defaultCountryCode = "+1", bg = "#F7F6F9", name }: PhoneFieldProps) {
  const { t } = useLang();
  return (
    <div
      className="h-11 flex items-center border border-gray-200 rounded-[10px] overflow-hidden focus-within:border-[#8F27FF] transition-colors"
      style={{ background: bg }}
    >
      <select
        defaultValue={defaultCountryCode}
        className="h-full pl-2 pr-1 text-[13px] font-semibold bg-[#F4F4F4] border-r border-gray-200 outline-none cursor-pointer flex-shrink-0"
        style={{ maxWidth: "110px" }}
      >
        {countries.map((c) => (
          <option key={c.name} value={c.code}>
            {c.flag} {c.code}
          </option>
        ))}
      </select>
      <input
        name={name}
        type="tel"
        required
        placeholder={t("Phone number", "شماره تماس")}
        className="flex-1 h-full px-3 text-[14px] outline-none bg-transparent font-medium min-w-0"
      />
    </div>
  );
}
