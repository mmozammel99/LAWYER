import React from 'react';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const details = form.details.value;
        const price = form.price.value;
        const time = new Date()
        console.log(title, img, details);
        const service = { title, img, price, details,time }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .than(data => {
                if (data.acknowledged) {
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <form onSubmit={handleSubmit} className='w-full bg-primary lg:py-10'>
            <fieldset className=" max-w-3xl mx-auto p-6 py-20 rounded-md shadow-sm bg-gray-50 text-center  lg:shadow-xl">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-bold text-5xl my-10">Add Service</p>

                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                        <label>Service Title</label>
                        <input id="Service Title" type="text"
                            name="title" placeholder="Service Title" className="w-full rounded-md h-12 bg-primary border-2 p-5 my-5 " />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label>Service Photo URL</label>
                        <input name="img" id="Service Photo URL" type="text" placeholder="https://" className="w-full rounded-md h-12 bg-primary border-2 p-5 my-5" />
                    </div>
                    <div className="col-span-full">
                        <label>Service Details</label>
                        <textarea name="details" id="bio" placeholder="Service Details" className="w-full rounded-md h-52 bg-primary border-2 p-5 my-5"></textarea>
                    </div>
                    <div className="col-span-full flex ">
                        <label className="input-group">
                            <span>Price</span>
                            <input type="text" name='price' placeholder="Enter amount" className="input input-bordered bg-primary" />
                            <span>USD</span>
                        </label>
                        <button type="submit" className="px-4 py-2 border btn">Add Service</button>

                    </div>
                </div>
            </fieldset>
        </form>
    );
};

export default AddService;