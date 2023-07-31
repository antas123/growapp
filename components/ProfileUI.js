import React from 'react'
import styles from "../styles/profile.module.css"
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';



const ProfileUI = ({userId}) => {

  const { users } = useSelector((state) => state.user);

  return (
    <div className={styles.profileui}>
   
    <div className={styles['user-info']}>
    <img src={users?.profile_image?.medium} alt="" />
    </div>

    <div className={styles.two}>
    <h5 style={{color:"grey"}}>{users?.username}  &nbsp;  &nbsp;
     {users?.instagram_username && <i class="fa-brands fa-square-instagram" style={{color: '#ff8080'}}></i>} {users?.instagram_username}  &nbsp;  &nbsp;
     {users?.twitter_username && <i class="fa-brands fa-twitter" style={{color: '#0080ff'}}></i>}{users?.twitter_username}  </h5> 
    <h3 style={{marginTop:"-15px"}} >{users?.name}</h3>
   
    <p>{users?.bio}</p>
    <p> <i class="fa-solid fa-location-dot" style={{color: '#770000', fontSize:"larger"}}></i> {users?.location}</p>

    <div className={styles.bt}>
    <div style={{marginRight:"15px"}}>
    <Button name={'follow'} />
    </div>
    <div style={{marginRight:"15px"}}>
    <Button name={'Message'} />
    </div>
    <div>
    <Button name={'Block'} />
    </div>
    </div>
    
    <div className={styles.flw} >
    <p style={{marginRight:"15px"}} > <b>{users?.followers_count}</b> followers  </p>
    <p style={{marginRight:"15px"}}><b>{users?.following_count}</b> following</p>
    <p><b> {users?.total_photos} </b> Posts </p>
    </div>
    
    </div>
   
  </div>
  )
}

export default ProfileUI