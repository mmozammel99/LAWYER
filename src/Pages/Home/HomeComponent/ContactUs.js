import React, { useContext } from 'react';
import img from '../../../Assets/HomepageImg/6864106_28687-ai.png'
import { AuthContext } from '../../../AuthContext/AuthProvider';
const ContactUs = () => {
    const { dark } = useContext(AuthContext)
    return (
        <div className={`${dark ? "bg-base-200" : "bg-primary"} shadow `}>

            <div className={`space-y-2 text-center py-10  `} >
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Don't hesitate to ask</h2>
                <div className={`${!dark ? "text-base-100" : "text-gray-100"}`}>Law is complicate matter. It can cause you a big problem if you ignore it. Let us help you!</div>
            </div>

            <div className="flex flex-col lg:flex-row justify-around align-middle px-8 py-16 mx-auto rounded-lg lg:px-16 ">
                <img src={img} alt="" className="lg:w-[35%]" />
                <form className="space-y-6 lg:w-[40%] py-20">

                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className={`w-full p-3 rounded ${dark ? "" : "bg-gray-100"} `} />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className={`w-full p-3 rounded ${dark ? "" : "bg-gray-100"} `} />
                    </div>

                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className={`w-full p-3 rounded ${dark ? "" : "bg-gray-100"} `}></textarea>
                    </div >

                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase btn btn-outline">Send Message</button>

                </form >
            </div >
        </div >
    );
};

export default ContactUs;