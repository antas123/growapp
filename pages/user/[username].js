import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '@/features/user/userSlice';
import GridView from '@/components/GridView';
import RandomPic from '@/features/randomPic/randomPic';
import styles from "../../styles/profile.module.css"
import Layout from '../layout';
import ProfileUI from '@/components/ProfileUI';
import { useQuery } from 'react-query';

const UserProfile = () => {
  const router = useRouter();
  const userId = router.query.username;
  const [viewType, setViewType] = useState('G');

  // const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {data, isLoading} = useQuery('data', async()=>{
    return  await dispatch(fetchUsers({ Id: userId })).unwrap();
  })
    // const userCall = async () => {
     
    // };

  if(isLoading === true)
  {
    return <h1>Loading....</h1>
  }

  const handleViewChange = (event) => {
    setViewType(event.target.value);
  };

  return (
    <Layout>
    <div className={styles.container} style={{backgroundColor:"#EEEDED"}} >
    <ProfileUI userid={userId}/>
    <hr />
      <div className={styles['view-selector']}>
        <p>List View</p>
        <input
          type="radio"
          value="L"
          name="ViewType"
          checked={viewType === 'L'}
          onChange={handleViewChange}
          style={{marginRight:"20px"}}
        />
        <p>Grid View</p>
        <input
          type="radio"
          value="G"
          name="ViewType"
          checked={viewType === 'G'}
          onChange={handleViewChange}
        />
      </div>

      <div className={viewType === 'G' ? styles['grid-view'] : ''}>
        {viewType === 'L' && <RandomPic pics={data?.photos} type={'profile'}  />}
        {viewType === 'G' && <GridView />}
      </div>
    </div>
    </Layout>
  );
};

export default UserProfile;
