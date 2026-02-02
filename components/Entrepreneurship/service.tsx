import Image from "next/image";
import Row from "../global/Row";

const Service = () => {
    return (
        <div className="bg-[#F6F6F6] py-20 mt-20 ">
            <h2 className="text-center mb-12 text-4xl font-bold">Our Service</h2>
            <Row>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  ">

                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="bg-[#F6F6F6] rounded-3xl shadow-2xl p-8  flex flex-col"
                            style={{
                                boxShadow: "0px 4px 4px 0px #00000040",
                            }}
                        >
                            {/* Icon Box */}
                            <div className="w-12 h-10 bg-white rounded-lg shadow-md flex items-center justify-center mb-6">
                                <Image
                                    src="/images/Entrepreneurship/service.svg"
                                    alt="service icon"
                                    width={36}
                                    height={20}
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-medium text-black mb-4">
                                Company registration
                            </h3>

                            {/* Description */}
                            <p className="text-md text-gray-600 leading-relaxed">
                                Company registration and post-launch support Company registration
                            </p>
                        </div>
                    ))}

                </div>
            </Row>
        </div>
    );
};

export default Service;
