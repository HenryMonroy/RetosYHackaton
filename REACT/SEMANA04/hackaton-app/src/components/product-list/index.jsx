import React from "react";

export const ProductList = ()  => (
    <>
        <div className="px-5 mx-1 my-5">
            <h2 className="text-4xl font-bold text-blue-900 text-left mb-9">Categories</h2>
            <div className="flex justify-between text-gray-300  font-bold">
                <a href="#" className="text-blue-900">Nike</a>
                <a href="#">Adidas</a>
                <a href="#">Puma</a>
                <a href="#">Balenciaga</a>
                <a href="#">Converse</a>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-10 text-blue-900">
                <div className="bg-white p-3 rounded shadow-md">
                    <div className="flex justify-between">
                        <p className="font-bold">
                            <span className="text-green-400">S/.</span>
                            289.00
                        </p>
                        <span className="cursor-pointer">
                        <svg class="w-6 h-6 stroke-current text-gray-300 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </span>
                    </div>
                    <div className="p-2">
                        <img src="https://runastore.pe/media/catalog/product/cache/1/image/950x/040ec09b1e35df139433887a97daa66f/c/d/cd0189-004_1.jpg" alt="NIKE FLY.BY MID BASKETBALL"/>
                    </div>
                    <div className="text-sm font-bold"><p>NIKE FLY.BY MID BASKETBALL</p></div>
                </div>
                <div className="bg-white p-3 rounded shadow-md">
                    <div className="flex justify-between">
                        <p className="font-bold">
                            <span className="text-green-400">S/.</span>
                            889.00
                        </p>
                        <span className="cursor-pointer">
                        <svg class="w-6 h-6 stroke-current text-gray-300 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </span>
                    </div>
                    <div className="p-2">
                        <img src="https://runastore.pe/media/catalog/product/cache/1/image/950x/040ec09b1e35df139433887a97daa66f/a/r/ar3240-600_1.jpg" alt="NIKE AIR JORDAN XXXIV BASKETBALL"/>
                    </div>
                    <div className="text-sm font-bold"><p>NIKE AIR JORDAN XXXIV BASKETBALL</p></div>
                </div>
                <div className="bg-white p-3 rounded shadow-md">
                    <div className="flex justify-between">
                        <p className="font-bold">
                            <span className="text-green-400">S/.</span>
                            379.00
                        </p>
                        <span className="cursor-pointer">
                        <svg class="w-6 h-6 stroke-current text-gray-300 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </span>
                    </div>
                    <div className="p-2">
                        <img src="https://runastore.pe/media/catalog/product/cache/1/image/950x/040ec09b1e35df139433887a97daa66f/c/t/ct1972-002_1.jpg" alt="NIKE KYRIE FLYTRAP IV BASKETBALL"/>
                    </div>
                    <div className="text-sm font-bold"><p>NIKE KYRIE FLYTRAP IV BASKETBALL</p></div>
                </div>
                <div className="bg-white p-3 rounded shadow-md">
                    <div className="flex justify-between">
                        <p className="font-bold">
                            <span className="text-green-400">S/.</span>
                            599.00
                        </p>
                        <span className="cursor-pointer">
                        <svg class="w-6 h-6 stroke-current text-gray-300 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </span>
                    </div>
                    <div className="p-2">
                        <img src="https://runastore.pe/media/catalog/product/cache/1/image/950x/040ec09b1e35df139433887a97daa66f/c/z/cz3984-400_1_1.jpg" alt="NIKE JORDAN AIR NFH BASKETBALL"/>
                    </div>
                    <div className="text-sm font-bold"><p>NIKE JORDAN AIR NFH BASKETBALL</p></div>
                </div>
            </div>
        </div>
    </>
);