
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent } from '../actions';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './eventForm.css';

const EventForm = ({ isOpen, onClose, onSubmit }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const startDateTime = new Date(startDate + 'T' + startTime);
        const endDateTime = new Date(endDate + 'T' + endTime);

        const newEvent = {
            title,
            description,
            start: startDateTime,
            end: endDateTime,
        };
        console.log(newEvent);
        dispatch(addEvent(newEvent));
        setTitle('');
        setDescription('');
        setStartDate('');
        setStartTime('');
        setEndDate('');
        setEndTime('');
        onClose();
        onSubmit();
    };

    return (
        <Dialog fullWidth={true} open={isOpen} onClose={onClose}>
            <DialogTitle className="dialog-title">Add Event</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label">Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter event title"
                            required
                            className="input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="label">Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter event description"
                            rows="4"
                            className="textarea"
                        />
                    </div>
                    <div className="form-group">
                        <div className="date-time-group">
                            <div>
                                <label className="label">Start Date:</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    required
                                    className="input"
                                />
                            </div>
                            <div>
                                <label className="label">Start Time:</label>
                                <input
                                    type="time"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    required
                                    className="input"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="date-time-group">
                            <div>
                                <label className="label">End Date:</label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    required
                                    className="input"
                                />
                            </div>
                            <div>
                                <label className="label">End Time:</label>
                                <input
                                    type="time"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    required
                                    className="input"
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="button">Add Event</button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EventForm;
