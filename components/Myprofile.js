import React from "react";
import styles from "../styles/myprof.module.css";
import kng from "./photos/k.jpg";
import Button from "./Button";

const Myprofile = () => {
  return (
    <div className={styles.box}>
      <div className={styles.box1}>
        <div>
          <img
            src="	https://static.toiimg.com/thumb/msid-98931027,width-1280,resizemode-4/98931027.jpg"
            alt="photo"
          />
        </div>

        <div style={{marginLeft:"5px"}}>
          <h5 style={{ color: "gray" }}>Queen_Kangana  <i className="fa-solid fa-right-from-bracket" style={{color: '#ff0000'}}></i> </h5>
          <h4>Kangana Ranaut</h4>
          <p style={{fontSize:"small"}}>
            Actor, writer, Film Maker. Padmashri awardee, four times national
            award winner, most celebrated female lead films in Indian film
            Industry.
          </p>
        </div>
      </div>

      <div className={styles.box2} >
        <div> <b>1364</b> Posts</div>
        <div> <b>9.4M</b> Followers</div>
        <div> <b>183</b> Following</div>
      </div>

     <div className={styles.btngrp} style={{display:"flex" , flexDirection:"row" , justifyContent:"space-around", marginTop:"20px"}}>
      <Button className={styles.btn} name={'Edit Profile'}/>
      <Button  className={styles.btn} name ={"Switch Account"}/>
      <Button  className={styles.btn} name ={"Delete Account"} prop={'delete'}/>
      </div>
    </div>
  );
};

export default Myprofile;
