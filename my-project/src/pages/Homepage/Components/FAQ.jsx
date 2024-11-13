import React from "react";

const FAQ = () => {
  return (
    <div className="FAQ" id="faq">
      <div className="faq-container md:py-[7vw] md:pt-[4vw] pt-[7vw] pb-[20vw] bg-white text-black">
        <div className="heading1">
          <h2
            data-aos="fade-up"
            className=" text-black mb-4 text-center text-[7vw] leading-[7.5vw] md:text-[3vw] md:leading-[3.5vw] font-Montserrat font-bold"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="pt-[0px] sm:flex-wrap flex-wrap">
          {/* _____________________ */}
          <div className="left">
            <div className="space-y-6">
              <details className="group lg:w-[40vw] w-[90vw] mx-auto border-b-2 border-[#47286C] rounded-xl">
                <summary className="cxobv c6xyh ceonn font-Montserrat mb-0 font-semibold flex cursor-pointer list-none items-center justify-between p-6  text-black">
                  What is Creatorships?
                  <div className="text-secondary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-secondary-500 text-gray-800 font-Montserrat font-medium">
                  Creatorships is a platform that connects creators with
                  businesses for meaningful partnerships. We help creators turn
                  their influence into real opportunities while businesses get
                  access to talented creators who can help them grow.
                </div>
              </details>

              <details className="group lg:w-[40vw] w-[90vw] mx-auto border-b-2 border-[#47286C] rounded-xl">
                <summary className="cxobv c6xyh ceonn font-Montserrat mb-0 font-semibold flex cursor-pointer list-none items-center justify-between p-6  text-black">
                  Do I need a large social media following to join?
                  <div className="text-secondary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-secondary-500 font-Montserrat text-gray-800 font-medium">
                  Not necessarily! Creatorships is for creators at all levels.
                  Whether you’re an up-and-coming creator or already have a
                  large following, there are opportunities for everyone.
                </div>
              </details>

              <details className="group lg:w-[40vw] w-[90vw] mx-auto border-b-2 border-[#47286C] rounded-xl">
                <summary className="cxobv c6xyh ceonn font-Montserrat mb-0 font-semibold flex cursor-pointer list-none items-center justify-between p-6  text-black">
                  How do equity partnerships work?
                  <div className="text-secondary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-secondary-500 font-Montserrat text-gray-800 font-medium">
                  An equity partnership means that instead of receiving direct
                  payments, creators can get a share of the business’s growth.
                  This could mean long-term rewards for both creators and
                  businesses.
                </div>
              </details>

              <details className="hidden group sm:w-[40vw] w-[90vw] mx-auto border-b-2 border-[#1e416e] rounded-xl">
                <summary className="font-semibold flex cursor-pointer list-none items-center justify-between p-6 text-lg text-secondary-900">
                  How can I join discussions in community hubs?
                  <div className="text-secondary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-secondary-500 font-Poppins text-gray-300 font-medium">
                  Community hubs are open to all users interested in connecting
                  with others in the Solana community. Simply join a hub or
                  group chat that interests you to participate in conversations,
                  DAOs, and collaborations with like-minded individuals.
                </div>
              </details>
            </div>
          </div>

          {/* __________________________________ */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
