import React from 'react';
import PersonImage from '../../UI/personImage/PersonImage';

const SingleRequset = ({ request, i, actionHandler, acceptFriend }) => {

  const acceptRequestHandler = () => {
    actionHandler(request, i, 'accepted');
    acceptFriend(request)
  };

  return (
    <li>
      <div className='name_img flex'>
        <PersonImage url={request.url} state={request.state} size='small' />
        <span>{request.userName}</span>
      </div>
      <div className='flex btns'>
        {request.requsetState === 'pending' ? 
          <>
            <button onClick={acceptRequestHandler}>Accept</button>
            <button className='cancel'
              onClick={() => actionHandler(request, i, 'canceled')}
            >Cancel</button> 
          </>
          : request.requsetState === 'accepted' ? <button disabled >Acceptted</button> : <button className='cancel'>Canceled</button> 
          }
      </div>
    </li>
  )
}

export default SingleRequset