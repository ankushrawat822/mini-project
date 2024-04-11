import React, { useState, useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const Courses = () => {


    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <>
            <div data-aos="flip-down">
                {/* custom application bg div  */}
                <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] courses-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

                    <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4 '>Courses
                    </h1>
                    <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Explore specialized courses designed for college students and job seekers. Elevate your speech, articulation, and confidence for a standout performance in interviews, presentations, and daily interactions.</p>

                </div>
            </div>


            {/* courses cards section */}
            <div className="min-h-screen bg-gray-100 overflow-auto">
                <div className="container mx-auto max-w-4xl">
                    <div className="mt-10 text-center">
                        <h1 className="text-4xl font-bold text-gray-800">Pricing plans</h1>
                        <p className="text-lg mt-3 font-semibold">
                            Discover the perfect plan to suit your journey.
                        </p>
                    </div>

                    <hr className="mt-10" />
                    <div className="flex space-x-10 pt-10">
                        <div className="py-12">
                            <div className="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
                                <div className="px-8 flex justify-between items-center">
                                    <h4 className="text-xl font-bold text-gray-800">Hobby</h4>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-4xl text-center font-bold">$10.00</h1>
                                <p className="px-4 text-center text-sm ">
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The point
                                    of using Lorem
                                </p>
                                <ul className="text-center">
                                    <li>
                                        <a href="#" className="font-semibold">
                                            It is a long established
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="font-semibold">
                                            It is a long established
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="font-semibold">
                                            It is a long established
                                        </a>
                                    </li>
                                </ul>
                                <div className="text-center bg-gray-200 ">
                                    <button className="inline-block my-6 font-bold text-gray-800">
                                        Get started today
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="py-12">
                            <div className="bg-white  pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 -translate-y-2 scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
                                <div className="px-8 flex justify-between items-center">
                                    <h4 className="text-xl font-bold text-gray-800">Professional</h4>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-pink-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-4xl text-center font-bold">$30.00</h1>
                                <p className="px-4 text-center text-sm ">
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The point
                                    of using Lorem
                                </p>
                                <ul className="text-center">
                                    <li>
                                        <a href="#" className="font-semibold">
                                            It is a long established
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="font-semibold">
                                            It is a long established
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="font-semibold">
                                            It is a long established
                                        </a>
                                    </li>
                                </ul>
                                <div className="text-center bg-pink-600 ">
                                    <button className="inline-block my-6 font-bold text-white">
                                        Get started today
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="py-12">
                            <div className="bg-white pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
                                <div className="px-8 flex justify-between items-center">
                                    <h4 className="text-xl font-bold text-gray-800">Business</h4>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-4xl text-center font-bold">$45.00</h1>
                                <p className="px-4 text-center text-sm ">
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The point
                                    of using Lorem
                                </p>
                                <ul className="text-center">
                                    <li>
                                        <a href="#" className="font-semibold">
                                            It is a long established
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="font-semibold">
                                            It is a long established
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="font-semibold">
                                            It is a long established
                                        </a>
                                    </li>
                                </ul>
                                <div className="text-center bg-gray-200 ">
                                    <button className="inline-block my-6 font-bold text-gray-800">
                                        Get started today
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* faqs */}
            <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
                    <p className="text-neutral-500 text-xl mt-3">Frequenty asked questions</p>
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> What is a SAAS platform?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height={24}
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width={24}
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                SAAS platform is a cloud-based software service that allows users to
                                access and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> How does billing work?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height={24}
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width={24}
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We offers a variety of billing options, including monthly and annual
                                subscription plans, as well as pay-as-you-go pricing for certain
                                services. Payment is typically made through a credit card or other
                                secure online payment method.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> Can I get a refund for my subscription?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height={24}
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width={24}
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We offers a 30-day money-back guarantee for most of its subscription
                                plans. If you are not satisfied with your subscription within the
                                first 30 days, you can request a full refund. Refunds for
                                subscriptions that have been active for longer than 30 days may be
                                considered on a case-by-case basis.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> How do I cancel my subscription?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height={24}
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width={24}
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                To cancel your We subscription, you can log in to your account and
                                navigate to the subscription management page. From there, you should
                                be able to cancel your subscription and stop future billing.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> Can I try this platform for free?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height={24}
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width={24}
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We offers a free trial of its platform for a limited time. During the
                                trial period, you will have access to a limited set of features and
                                functionality, but you will not be charged.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> How do I access documentation?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height={24}
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width={24}
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                Documentation is available on the company's website and can be
                                accessed by logging in to your account. The documentation provides
                                detailed information on how to use the , as well as code examples and
                                other resources.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> How do I contact support?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height={24}
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width={24}
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                If you need help with the platform or have any other questions, you
                                can contact the company's support team by submitting a support request
                                through the website or by emailing support@We.com.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> Do you offer any discounts or promotions?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height={24}
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width={24}
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We may offer discounts or promotions from time to time. To stay
                                up-to-date on the latest deals and special offers, you can sign up for
                                the company's newsletter or follow it on social media.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> How do we compare to other similar services?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height={24}
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width={24}
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                This platform is a highly reliable and feature-rich service that
                                offers a wide range of tools and functionality. It is competitively
                                priced and offers a variety of billing options to suit different needs
                                and budgets.
                            </p>
                        </details>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Courses