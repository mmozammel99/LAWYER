import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../AuthContext/AuthProvider';
import moment from 'moment';

const CardDetails = ({ cardDetails }) => {

    const { dark, user, setLoading} = useContext(AuthContext)
    const { email, displayName, } = user
    const {_id, img, details, title } = cardDetails;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })


    const handleAppointment = () => {
        setLoading(true)
        const appointmentTime =moment().add(1, 'days').calendar()

        const appointments = { serviceName:title, email, displayName, serviceID: _id ,appointmentTime};

        console.log(appointments);

        fetch('https://lawyer-sigma.vercel.app/appointment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointments)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    setLoading(false)
                    Toast.fire({
                        icon: 'success',
                        title: `Congratulation ${displayName}, Your appointments is at ${appointmentTime}`
                    })
                }

            })
            .catch(err => console.error(err))


    }

    return (
        <>
            <div className={`p-5 mx-auto sm:p-10 md:p-16 ${dark ? "bg-base-100" : "bg-gray-100"} ${!dark ? "text-base-100" : "text-gray-100"} `} >
                <div className="flex flex-col  mx-auto overflow-hidden ">
                    <img src={img} alt="" className=" w-full lg:max-w-4xl mx-auto shadow-xl rounded-lg" />
                    <div className={`md:p-10 max-w-7xl mx-auto pb-12 lg:-mt-52 space-y-6 px-5 lg:rounded-md  text-justify shadow md:shadow-xl mb-10 ${dark ? "bg-base-200  " : "bg-primary"}`}>
                        <div className="space-y-2 text-center">
                            <h2 className="inline-block text-2xl font-semibold sm:text-3xl uppercase ">{title}</h2>
                        </div>
                        <div className={`${!dark ? "text-base-100" : "text-gray-100"}`}>
                            <p>{details}</p>
                        </div>
                        <div className='mx-auto text-center
mx-auto text-center'>

                            {
                                user?.email ?
                                    <button onClick={handleAppointment} className="btn btn-outline  ">Appointments</button>
                                    :
                                    <Link to="/login" className="btn btn-outline ">Appointments</Link>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetails;