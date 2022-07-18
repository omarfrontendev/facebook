import React, { useEffect, useContext, useState } from 'react';
import FriendsContext from '../../store/friends-context';
import PersonImage from '../../UI/personImage/PersonImage';
import { GoDiffAdded } from 'react-icons/go'


const UserImages = ({ myPofile, user }) => {

  const ctx = useContext(FriendsContext);
  const userObj = ctx.user;

  const changeCoverHandler = (e) => {
    ctx.editUser({
      ...userObj,
      cover: URL.createObjectURL(e.target.files[0])
    });
  };


  // const [image, setImage] = useState('');

  const changeProfileImg = (e) => {
    ctx.editUser({
      ...userObj,
      url: URL.createObjectURL(e.target.files[0])
    })
  };

  return (
    <>
      <div className='user_imgs'>
        <div className="cover">
          {myPofile && 
            <>
              <input 
                type='file' id='input_cover' 
                style={{ display: 'none' }} 
                onChange={changeCoverHandler} 
              />
              <label htmlFor='input_cover' style={{ position: 'absolute' }}></label>
            </>
            }
          <img src={user?.cover || "data:image/jpeg;base64,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"} alt="" className="img_cover" />
        </div>
        <div className="user_data">
          <div className='user_profile_image'>
            <PersonImage state={user?.state} url={user?.url} size='large'/>
            {myPofile && 
              <>
                <input 
                  type='file' 
                  id='input_profile_img' 
                  style={{ display: 'none' }} 
                  onChange={changeProfileImg}
                />
                <label htmlFor='input_profile_img'>
                  <GoDiffAdded />
                </label>
              </>
              }
          </div>
          <h1>{user?.userName}</h1>
          <div style={{width: '100%'}} className='flex'>
            {myPofile ?

              <div className='flex'>
                <input type='text' value={user?.bio || ''} onChange={e => ctx.editUser({
                  ...userObj,
                  bio: e.target.value
                })}/>            
              </div>

            :           
              <span>{user?.bio}</span>
            }
          </div>
        </div>
      </div>
      :  
    </>
  )
}

export default UserImages