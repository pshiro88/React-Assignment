import { React, useRef, useEffect, useState } from 'react';
import FAQSection from '../components/accordion';
import Carousel from './carousel';

export default function Eligibility() {
    const [isSticky, setIsSticky] = useState(false);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const leftRect = leftRef.current.getBoundingClientRect();
            const rightRect = rightRef.current.getBoundingClientRect();

            // Check if the left part is about to go off-screen
            if (rightRect.top <= 0) {
                setIsSticky(true);
            }

            // If the right part is in view, reset sticky state
            if (leftRect.top >= 0) {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="flex pt-10 px-2" >
            <div className="w-1/2" ref={leftRef}>
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Eligibility For Treatment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur hic officia dignissimos
                        necessitatibus tempora ad nulla ipsam nemo quas excepturi quae, distinctio, illo, ducimus consequatur
                        eaque animi vitae iste.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur hic officia dignissimos
                        necessitatibus tempora ad nulla ipsam nemo quas excepturi quae, distinctio, illo, ducimus consequatur
                        eaque animi vitae iste.</p>
                    <br />
                    <ul className="list-disc">
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                    </ul>

                </div>

                <div className="p-4 border-b-2 border-dashed border-[#3DB6FB]">
                    <h2 className="text-2xl font-bold mb-4">Preparation For Treatment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur hic officia dignissimos
                        necessitatibus tempora ad nulla ipsam nemo quas excepturi quae, distinctio, illo, ducimus consequatur
                        eaque animi vitae iste.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur hic officia dignissimos
                        necessitatibus tempora ad nulla ipsam nemo quas excepturi quae, distinctio, illo, ducimus consequatur
                        eaque animi vitae iste.</p>
                    <br />
                    <ul className="list-disc">
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                    </ul>

                </div>
                <div className="p-4 border-b-2 border-dashed border-[#3DB6FB]">
                    <h2 className="text-2xl font-bold mb-4"> About Treatment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur hic officia dignissimos
                        necessitatibus tempora ad nulla ipsam nemo quas excepturi quae, distinctio, illo, ducimus consequatur
                        eaque animi vitae iste.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur hic officia dignissimos
                        necessitatibus tempora ad nulla ipsam nemo quas excepturi quae, distinctio, illo, ducimus consequatur
                        eaque animi vitae iste.</p>
                    <br />
                    <ul className="list-disc">
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                    </ul>

                </div>
                <div className="p-4 border-b-2 border-dashed border-[#3DB6FB]">
                    <h2 className="text-2xl font-bold mb-4">Post Treatment Care Treatment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur hic officia dignissimos
                        necessitatibus tempora ad nulla ipsam nemo quas excepturi quae, distinctio, illo, ducimus consequatur
                        eaque animi vitae iste.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur hic officia dignissimos
                        necessitatibus tempora ad nulla ipsam nemo quas excepturi quae, distinctio, illo, ducimus consequatur
                        eaque animi vitae iste.</p>
                    <br />
                    <ul className="list-disc">
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                    </ul>

                </div>
                <div className="p-4 border-b-2 border-dashed border-[#3DB6FB] ">
                    <h2 className="text-2xl font-bold mb-4"> Treatment Recovery Tips</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur hic officia dignissimos
                        necessitatibus tempora ad nulla ipsam nemo quas excepturi quae, distinctio, illo, ducimus consequatur
                        eaque animi vitae iste.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur hic officia dignissimos
                        necessitatibus tempora ad nulla ipsam nemo quas excepturi quae, distinctio, illo, ducimus consequatur
                        eaque animi vitae iste.</p>
                    <br />
                    <ul className="list-disc">
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit libero dolorum corporis amet
                            accusantium.
                        </li>
                    </ul>

                </div>
                <FAQSection />
                <Carousel />
                <div className="p-4"></div>
            </div>
            
            <div class={`w-1/2 max-w-md mx-auto mt-8 h-2/6 bg-white rounded-lg shadow-lg overflow-hidden ${isSticky ? 'sticky top-0  overflow-hidden' : ''
                }`} ref={rightRef}>
                <div class="px-6 py-4">
                    <h2 class="text-3xl font-semibold  text-[#3DB6FB] mb-2">Need Help?</h2>
                    <h3 class="text-m font text-gray-800 mb-2">Just let us know. We will be happy to assist you.</h3>
                    <form>
                        <div class="mb-4">
                            <input type="text" id="username" name="username" placeholder='Full Name'
                                class="mt-1 focus:ring-indigo-500 p-4 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div class="mb-4">
                            <input type="text" id="username" name="username" placeholder='Email'
                                class="mt-1 focus:ring-indigo-500 p-4 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div class="mb-4">
                            <input type="text" id="username" name="username" placeholder='Phone Number'
                                class="mt-1 focus:ring-indigo-500 p-4 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div class="mb-4">
                            <textarea
                                id="username"
                                name="username"
                                placeholder="Describe your treatment requirement"
                                className="mt-1 focus:ring-indigo-500 p-4 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md resize-none"
                            />

                        </div>
                        <div class="mt-6">
                            <button type="submit"
                                class="w-full px-4 py-4 bg-[#3DB6FB] border border-transparent rounded-md font-semibold text-white hover:bg-[#3DB6FB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ">Send Enquiry</button>
                        </div>
                    </form>
                </div>
            </div>



        </div>

    )
}