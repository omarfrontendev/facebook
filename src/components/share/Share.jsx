import React, { useContext, useState } from 'react'
import PersonImage from '../../UI/personImage/PersonImage';
import { FaImage } from 'react-icons/fa';
import { AiFillTag } from 'react-icons/ai';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import Card from '../../UI/cards/Card';

import './share.css';
import Button from '../../UI/button/Button';
import FriendsContext from '../../store/friends-context';

const Share = () => {

  const ctx = useContext(FriendsContext);

  const [caption, setCaption] = useState('');
  const [postImage, setPostImage] = useState('')

  const submitFormHandler = e => {
    e.preventDefault();
    ctx.addPost({
      id: Math.random(),
      date: 'now',
      postImage: postImage,
      numOfLiks: 0,
      caption: caption,
      comments: []
    });
    setCaption('')
  };

  return (
    <Card>
      <form onSubmit={submitFormHandler} className='form_share'>
        <div className='top_share flex'>
          <PersonImage size='medium' url={ctx.user.url} />
          <input 
            type='text' 
            placeholder={`what's in your Mind ${ctx.user.userName}`}
            onChange={e => setCaption(e.target.value)}
            value={caption}
          />
        </div>
        <div className='bottom_share flex'>
          <div className='bottom_left_share flex'>
            <div className='flex input_control'>
              <input type='file' id='img_share' onChange={e => setPostImage(URL.createObjectURL(e.target.files[0]))}/>
              <label htmlFor='img_share'>
                <FaImage />
                Photo or Video
              </label>
            </div>
            {/* <div className='flex input_control'>
              <input type='file' id='tag' />
              <label htmlFor='tag '>
                <AiFillTag />
                Tag
              </label>
            </div>
            <div className='flex input_control'>
              <input type='file' id='location' />
              <label htmlFor='location'>
                <MdLocationOn />
                Location
              </label>
            </div>
            <div className='flex input_control'>
                <BsFillEmojiSmileFill />
                Feelings
            </div> */}
          </div>
          <Button type='submite'>Share</Button>
        </div>
      </form>
    </Card>
  );
};

export default Share