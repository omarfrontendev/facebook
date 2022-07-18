import React from 'react'
import Card from '../../UI/cards/Card';

const SingleEvent = ({ event, eventIcon, personsName, time, imgEvent }) => {

  const and = <span> and </span>

  return (
    <Card>

    <div className='event_box'>
      <div className='event_details'>
        <img src={eventIcon} alt={event} />
        <p>
          {personsName.length > 1 ? personsName[0] + ' and ' + ` ${personsName.length - 1} `+ 'other Friends' : personsName[0]} 
          <span> have a {event} {time}</span>
        </p>
      </div>
      {imgEvent && <img src={imgEvent}/>}
    </div>
    </Card>
  );
};

export default SingleEvent