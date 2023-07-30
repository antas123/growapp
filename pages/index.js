import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Pics from '@/components/Pics';
import UserView from '@/features/user/userView';
import RandomPic from '@/features/randomPic/randomPic';
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from '@/components/InfiniteScroll';
import Layout from './layout';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  InfiniteScroll();
  const {pics} = useSelector(state => state.pic)
  

  return (
    <div>
    <Layout>
    <RandomPic  pics={pics} type='feed' name={"Today's Feed"}/>
    </Layout>
    </div>
  );
}
