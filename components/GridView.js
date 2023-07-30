import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '@/features/user/userSlice'
import styles from "../styles/grid.module.css"

const GridView = ({name}) => {

    const {users} = useSelector((state) => state.user)
    console.log(users)


  return (
    <div className={styles.grid_container}>
      {/* <h1>{name}</h1> */}
     {
      users?.photos?.map((pic,id) => {
        return  <img src={pic.urls.small} alt="" />
      })
    }

    </div>
  )
}

export default GridView