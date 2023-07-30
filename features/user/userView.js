import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'
import UserProfile from '@/pages/user/[username]'

const UserView = () => {
  
  // const {users} = useSelector((state) => state.user)
  // console.log(users)

  // const dispatch = useDispatch();

  // const userIdUpdate =  (Id)=>{
  //   await dispatch(fetchUsers({Id: Id})).unwrap()
  // }
  
  // useEffect(() => {
  //  dispatch(fetchUsers())
  // },[])
  return (
    <div>
        <UserProfile  />
    </div>
  )
}

export default UserView