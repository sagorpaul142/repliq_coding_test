import React from 'react';
import imageOne from "@/public/images/best-selling-collection/B_ordz017ZkqddwiA4v6Z.png"
import imageTwo from "@/public/images/best-selling-collection/duAi2oyYeb4gurVEFPxlS.png"
import imageThree from "@/public/images/best-selling-collection/fhf5UnwUh3E7buI1Q6gJI.png"
import imageFour from "@/public/images/best-selling-collection/sVmJ8ze9vYMOTpkgCk8Xb.png"
import imageFive from "@/public/images/best-selling-collection/tGViUohuKkaMReMZpEEuR.png"
import Image from "next/image";
const BestSellingCollection = () => {
  return (
    <section className=" mb-[60px] container">
      {/*mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl*/}
      <div className="bg-white">
        <div className="px-4 py-8 md:px-6 md:py-12 lg:px-20">
          <h1 className="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">Our Best Selling Collection</h1>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 lg:gap-8">

            <article className="bg-slate-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Mens Scotch</h2>
                <p className="mt-2 text-xl font-semibold text-gray-800"></p>
              </div>
              <div className="mt-8 flex items-center justify-center md:mt-24">
                <Image className="" src={imageOne} alt="imageOne"/>
              </div>
            </article>

            <article className="bg-slate-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Mens Red</h2>
                <p className="mt-2 text-xl font-semibold text-gray-800"></p>
              </div>
              <div className="mt-8 flex items-center justify-center md:mt-24">
                <Image className="" src={imageTwo} alt="imageTwo"/>
              </div>
            </article>

            <article className="bg-slate-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Mens Punk</h2>
                <p className="mt-2 text-xl font-semibold text-gray-800"></p>
              </div>
              <div className="mt-8 flex items-center justify-center md:mt-24">
                <Image className="" src={imageThree} alt="imageThree"/>
              </div>
            </article>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-5 md:mt-6 md:grid-cols-2 md:gap-6 lg:mt-8 lg:gap-8">

            <article className="bg-slate-50 p-8">
              <div>
                <h2 className="text-xl text-gray-600">Mens Black</h2>
                <p className="mt-2 text-xl font-semibold text-gray-800"></p>
              </div>
              <div className="mt-28 flex items-center justify-center md:mt-3">
                <Image className="" src={imageFour} alt="imageFour"/>
              </div>
            </article>

            <article className="bg-slate-50 p-8">
              <div>
                <h2 className="text-xl text-gray-600">Womens Brown</h2>
                <p className="mt-2 text-xl font-semibold text-gray-800"></p>
              </div>
              <div className="mt-28 flex items-center justify-center md:mt-1">
                <Image className="" src={imageFive} alt="imageFive"/>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingCollection;