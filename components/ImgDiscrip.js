import React from 'react'
import Link from 'next/link.js'
import styles from "../styles/imgD.module.css"


const ImgDiscrip = ({data}) => {


  return (
    <div className={styles.box}>

       <div className={styles.box1} >
       <p style={{cursor:"pointer"}} > <i class="fa-regular fa-thumbs-up" style={{ fontSize:"larger"}}></i>&nbsp; <i class="fa-solid fa-heart" style={{color: '#ff0000', fontSize:"larger"}}></i>{data?.likes} &nbsp; <i class="fa-regular fa-comment-dots" style={{color:' #808080', fontSize:"larger"}}></i></p>
       <p> <i class="fa-regular fa-calendar-days" style={{color: '#408080', fontSize:"larger"}}></i> {data?.updated_at.slice(0,10)}</p>
       </div>
          
          <div style={{ width:"500px"}} className={styles.box2}>
          <h4>Post by <img style={{borderRadius:"50%" , border:"1px solid black" , marginBottom:"-10px"}} src={data?.user?.profile_image?.small} alt="" />
          <Link className={styles.linki} href={`user/${data?.user?.username}`}>
           {data?.user?.name}
          </Link>
           </h4>
          <p style={{marginTop:"-10px"}} > <i class="fa-solid fa-pen " style={{color: '#000080'}}></i> {data?.alt_description}</p>
          <hr style={{ marginBottom:"30px"}}/>
          </div>
         
    </div>
  )
}

export default ImgDiscrip