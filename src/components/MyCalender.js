import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { useSelector } from 'react-redux';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
    const events = useSelector(state => state.calendar.events);

    const expandEvents = (events) => {
        let expandedEvents = [];
        events.forEach(event => {
            let startDate = moment(event.start);
            let endDate = moment(event.end);
            while (startDate.isSameOrBefore(endDate)) {
                expandedEvents.push({
                    ...event,
                    start: startDate.toDate(),
                    end: endDate.isSame(startDate, 'day') ? endDate.toDate() : startDate.clone().endOf('day').toDate()
                });
                startDate.add(1, 'days').startOf('day');
            }
        });
        return expandedEvents;
    };

    const expandedEvents = expandEvents(events);

    const eventStyleGetter = (event, start, end, isSelected) => {
        let style = {
            backgroundColor: '#FFE5B4',
            borderRadius: '0px',
            border: 'none',
            color: 'black',
            boxShadow: 'none',
            width: '80%',
            margin: 'auto'
        };
        return {
            style: style
        };
    };

    const eventComponent = ({ event }) => {
        return (
            <div>
                <span style={{ fontSize: '16px', fontWeight: '600' }}>
                    {event.title}
                </span>
                <br />
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                    {moment(event.start).format('h:mm a')} - {moment(event.end).format('h:mm a')}
                </span>
            </div>
        );
    };

    return (
        <div style={{ height: 500 }}>
            <BigCalendar
                localizer={localizer}
                events={expandedEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ margin: 10 }}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: eventComponent
                }}
            />
        </div>
    );
};

export default MyCalendar;
