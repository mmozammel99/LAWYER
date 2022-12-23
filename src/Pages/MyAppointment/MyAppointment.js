import React, { useContext, useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthContext/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const MyAppointment = () => {
    const { user, userLogOut } = useContext(AuthContext)
    const [appointment, setAppointment] = useState([])
    useTitle("My Appointment")

    // load data 

    useEffect(() => {
        fetch(`https://lawyer-sigma.vercel.app/my-appointment?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return userLogOut()
                }
                return res.json()
            })
            .then(data => {
                setAppointment(data)
            })

    }, [user?.email, userLogOut])

    console.log(appointment);

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://lawyer-sigma.vercel.app/my-appointment/${id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {

                        const remainingAppointment = appointment.filter(r => r._id !== id)
                        setAppointment(remainingAppointment)

                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success')
                    })
                    .catch(err => console.error(err))


            }
        })


    }
    return (
        <div className="overflow-x-auto h-[100vh]">
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Service Name</th>
                        <th>Booking Time</th>
                        <th>Appointment Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {appointment.map((a, i) =>
                        <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{a.serviceName}</td>
                            <td>{a.appointmentTime}</td>
                            <td><button onClick={() => handleDelete(a._id)} className='bg-red-100 p-2 h-9 rounded-full'>
                                <FaTrashAlt className='text-red-600' />
                            </button></td>
                        </tr>
                    )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;