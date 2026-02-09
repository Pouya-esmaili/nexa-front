import Row from "../global/Row";

export default function ContactForm() {
  return (
    <Row className="w-full">
      <div className="w-full flex justify-center py-24">
        {/* کارت سفید */}
        <div
          className="w-full p-8 rounded-3xl bg-white"
          style={{
            boxShadow: "15px 15px 50px 0px #00000040",
          }}
        >
          {/* بک طوسی */}
          <div
            className="m-8 rounded-xl"
            style={{
              backgroundColor: "#EFEFEF",
            }}
          >
            <form className="p-10 flex flex-col">
              {/* ردیف اول */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 p-8">
                <div className="flex flex-col gap-3">
                  <label className="text-lg">
                    First Name <span style={{ color: "#EF1212" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="h-12 rounded-2xl px-4 bg-white outline-none"
                    style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-lg">
                    Last Name <span style={{ color: "#EF1212" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="h-12 rounded-2xl px-4 bg-white outline-none"
                    style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-lg">
                    What service are you interested in? <span style={{ color: "#EF1212" }}>*</span>
                  </label>
                  <select
                    className="h-12 rounded-2xl px-4 bg-white outline-none"
                    style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                  >
                    <option>Entrepreneurship</option>
                    <option>Acceleration</option>
                    <option>Investment</option>
                    <option>Business Advisory</option>
                  </select>
                </div>
              </div>

              {/* ردیف دوم */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-8">
                <div className="flex flex-col gap-3">
                  <label className="text-lg">
                    Phone Number <span style={{ color: "#EF1212" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="+91"
                    className="h-12 rounded-2xl px-4 bg-white outline-none"
                    style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-lg">
                    Email <span style={{ color: "#EF1212" }}>*</span>
                  </label>
                  <input
                    type="email"
                    className="h-12 rounded-2xl px-4 bg-white outline-none"
                    style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-lg">
                    How did you find out about us?
                  </label>
                  <select
                    className="h-12 rounded-2xl px-4 bg-white outline-none"
                    style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                  >
                    <option>Attorney</option>
                    <option>Friend</option>
                    <option>Google</option>
                    <option>Webinar</option>
                    <option>Tradeshow/Conference</option>
                    <option>Social Media</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3 p-8">
                <label className="text-lg">Details</label>
                <textarea
                  rows={5}
                  className="rounded-2xl px-4 py-3 bg-white outline-none resize-none"
                  style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                />
              </div>

              {/* Button داخل بک طوسی */}
              <div className="flex justify-end px-6 mb-8">
                <button type="submit" className=" bg-[#8F27FF] text-white h-12 px-10 rounded-full text-sm font-medium " > Submit </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Row>
  );
}
