import React from 'react';
import img from '../../../Assets/HomepageImg/6864106_28687-ai.png'
const ContactUs = () => {
    return (
        <div><div className="space-y-2 text-center">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Don't hesitate to ask</h2>
            <div className="">Law is complicate matter. It can cause you a big problem
                if you ignore it. Let us help you!</div>
        </div>
            <div className="flex flex-col lg:flex-row justify-around align-middle px-8 py-16 mx-auto rounded-lg lg:px-16 ">
                <img src={img} alt="" className="lg:w-[35%]" />

                <form className="space-y-6 lg:w-[40%] py-20">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-100" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded bg-gray-100" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-100"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase btn btn-outline">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;