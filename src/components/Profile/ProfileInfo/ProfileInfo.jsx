import React, { Component } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';

const ProfileInfo = (props) => {

  if(!props.profile){
    return <Preloader />
  }

  return (
    <div>
      <div className={s.profileInfo}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8baLR8UBlpq_86IRQPbL97hmMwWC1o8xesgW8WVOx0YAOG2_" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
      </div>
      <div>
        <p>
         <span>Имя:</span> {props.profile.fullName}
        </p>
        
      </div>
        <div>
          <p>
          <span>Ищете ли Вы работу? --</span>{props.profile.lookingForAJobDescription}
          </p>
        </div>
    </div>
  );

}

export default ProfileInfo;
