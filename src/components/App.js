import React, { useState } from 'react';
import EventForm from './EventForm';
import MyCalendar from './MyCalender';
import './app.css';

const App = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleFormSubmit = () => {
        closePopup();
    };

    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    const monthIndex = currentDate.getMonth();
    const month = monthNames[monthIndex];

    const formattedDate = `${day} of ${month}`;

    return (
        <>
            <div className='wrapper'>
                <div className="container">
                    <div className="date-container">
                        <h1>{formattedDate}</h1>
                    </div>
                    <div className="button-container">
                        <button onClick={openPopup} className='button'>Add New Event</button>
                    </div>
                </div>

                {isPopupOpen && (
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={closePopup}>&times;</span>
                            <EventForm isOpen={isPopupOpen} onClose={closePopup} onSubmit={handleFormSubmit} />
                        </div>
                    </div>
                )}
                <div className='calender'>
                    <MyCalendar />
                </div>
            </div>
        </>
    );
};

export default App;
