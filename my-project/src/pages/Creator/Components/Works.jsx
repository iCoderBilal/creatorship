import React from "react";
import creatorImg from "../../../assets/creator-img.jpg";

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={creatorImg}
              alt="Person reading"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Steps Section */}
          <div className="text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Take Control of Your Creative Career
            </h2>
            <ul className="space-y-4">
              <li className="flex">
                <span className="font-bold text-xl text-indigo-600 mr-4">
                  1
                </span>
                <p className="text-gray-600">
                  You need to choose the productivity SaaS tool that best fits
                  your needs.
                </p>
              </li>
              <li className="flex">
                <span className="font-bold text-xl text-indigo-600 mr-4">
                  2
                </span>
                <p className="text-gray-600">
                  Once you have chosen your productivity SaaS tool, you will
                  need to set up your account.
                </p>
              </li>
              <li className="flex">
                <span className="font-bold text-xl text-indigo-600 mr-4">
                  3
                </span>
                <p className="text-gray-600">
                  With your account set up, it’s time to start using the
                  productivity SaaS tool.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
