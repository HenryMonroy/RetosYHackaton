import React from 'react';
import { ProductList } from '../product-list';
import { EmployeeList } from '../employee-list';

export const Home = () => (
    <>
        <div className="container mx-auto">
            <nav className="bg-gray-100">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="flex justify-between">
                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                            </button>
                        </div>
                        <div className="flex justify-between space-x-4">
                            <div className="hidden md:flex items-center space-x-1">
                                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Profile</a>
                                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Settings</a>
                            </div>
                            <div className="py-2">
                                <img 
                                    src="https://images.unsplash.com/photo-1624669240815-815a23372f37?"
                                    alt="Profile"
                                    className="w-12 h-12 rounded-full object-cover border-2 cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu hidden">
                    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Profile</a>
                    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Settings</a>
                </div>
            </nav>
            <div class="flex justify-between px-2 py-1 m-2 mt-9 text-gray-600 border-2 border-gray-300 rounded-3xl">
                <input class="bg-white h-10 px-5 pr-16 text-sm focus:outline-none"
                       type="search" name="search" placeholder="Search"/>
                <button type="submit" class="rounded-full bg-green-300 w-10 h-10">
                    <svg class="w-6 h-6 stroke-current text-white inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </div>
            <ProductList/>
        </div>
    </>
);