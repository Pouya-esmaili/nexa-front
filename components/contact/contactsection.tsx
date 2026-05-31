// app/components/ContactSection.tsx

import Image from "next/image";

const contactItems = [
  {
    title: "Email Address",
    icon: "/images/contact/sms.svg",
    content: ["info@nexavc.com"],
  },
  {
    title: "Phone Number",
    icon: "/images/contact/call-calling.svg",
    content: ["+98 (21) 2691 - 7416", "+1 (604) 351 - 5951"],
  },
  {
    title: "Office Location",
    icon: "/images/contact/location-tick.svg",
    content: [
      "No. 27, Neom Building (Next to the Tandis Complex), Tajrish Square, Tehran, Iran",
      "906-935 Marine Dr, West Vancouver, British Columbia, Canada",
    ],
  },
];

export default function ContactSection() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-5 w-full">
            {contactItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border-[0.5px] border-[#8F27FF] bg-white p-5 shadow-[0px_4px_10px_rgba(143,39,255,0.08)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#8F27FF] shadow-[0px_4px_12px_rgba(143,39,255,0.35)]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={22}
                      height={22}
                    />
                  </div>

                  <div>
                    <h3 className="mb-2 text-md text-[#8F27FF]">
                      {item.title}
                    </h3>

                    <div className="space-y-1">
                      {item.content.map((text) => (
                        <p
                          key={text}
                          className="text-md leading-6 text-[#474747]"
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Form */}
          <div className="rounded-4xl border-[0.5px] border-[#929292] bg-[#F7F6F9] md:p-8 p-6 lg:p-8">
            <h2 className="md:text-4xl text-2xl font-bold">
              Send a Message
            </h2>

            <p className="mt-2 text-sm text-[#474747]">
              Most inquiries receive a response within 24 hours.
            </p>

            <form className="mt-10">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-md text-[#222]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="h-12 w-full rounded-xl bg-white px-4 text-md outline-none shadow-[0px_3px_8px_rgba(0,0,0,0.08)] transition-all focus:border-[#8F27FF]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-md text-[#222]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Email"
                    className="h-12 w-full rounded-xl bg-white px-4 text-md outline-none shadow-[0px_3px_8px_rgba(0,0,0,0.08)] transition-all focus:border-[#8F27FF]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-md text-[#222]">
                  Service Type
                </label>

                <select className="h-12 w-full rounded-xl bg-white text-[#929292] px-4 text-md outline-none shadow-[0px_3px_8px_rgba(0,0,0,0.08)] focus:border-[#8F27FF]">
                  <option>Startup</option>
                  <option>Web Design</option>
                  <option>UI/UX Design</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-md text-[#222]">
                  Your Message
                </label>

                <textarea
                  rows={7}
                  placeholder=""
                  className="w-full resize-none rounded-xl bg-white p-4 text-sm outline-none shadow-[0px_3px_8px_rgba(0,0,0,0.08)] transition-all focus:border-[#8F27FF]"
                />
              </div>

              <button
                type="submit"
                className="mt-8 h-14 w-full rounded-full bg-[#8F27FF] text-md text-white transition-all hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}