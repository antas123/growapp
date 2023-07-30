import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAPicToState, fetchPics } from "../features/randomPic/picSlice"
import { changePage, setPage } from '@/features/scroll/scrollSlice';



const InfiniteScroll = () => {

  const { pageCnt, pageUpdates } = useSelector((state) => state.scroll);
  const dispatch = useDispatch();

 const {pics} = useSelector((state) => state.pic)

    const handleInfiniteScroll = async () => {
      try{
        if(window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight)
          {
            dispatch(changePage())
          }
      }
      catch(error)
      {
        console.log(error);
      }
    }
  
     useEffect(() => {
      window.addEventListener("scroll", handleInfiniteScroll);
      return () => window.removeEventListener("scroll", handleInfiniteScroll);
     },[])
  
  
  useEffect( () => {
      const picCall = async () => {
        if(pageCnt !== undefined && pageUpdates===true)
        {
          if(pics.length < 9)
          await dispatch(fetchPics({page: pageCnt})).unwrap()
          else 
        dispatch(addAPicToState(pics[Math.floor(Math.random()*10)]))
        }
          
       dispatch(setPage(false))
      }
      picCall();
     },[pageUpdates])
  
}

export default InfiniteScroll