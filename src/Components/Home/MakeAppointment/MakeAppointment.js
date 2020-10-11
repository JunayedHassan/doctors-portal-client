import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" srcset="" />
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h4>APPOINTMANT</h4>
                        <h1 className="my-4">Make An Appointment</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, quibusdam.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;