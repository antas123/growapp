import React, { useEffect, useState } from "react";
import ImgDiscrip from "@/components/ImgDiscrip";
import styles from "../../styles/random.module.css";
import Myprofile from "@/components/Myprofile";
import { useSelector } from "react-redux";

const RandomPic = ({ pics, type, name }) => {
  const { error, loading } = useSelector((state) => state.pic);

  console.log(pics)

  return (
    <div className={styles.boss}>
      <div className={styles.container}>
        <h1 style={{ color: "gray" }}>{name}</h1>

        <div className="photo">
          {pics?.map((data, id) => {
            console.log(data);
            return (
              <div key={id}>
                {type === "profile" && (
                  <img
                    style={{
                      borderRadius: "5px",
                      height: "40rem",
                      width: "30rem",
                    }}
                    src={data?.urls?.small}
                    alt={data?.alt_description}
                  />
                )}

                {type === "feed" && (
                  <div className={styles.image}>
                    <img
                      // style={{
                      //   borderRadius: "5px",
                      //   height: "40rem",
                      //   width: "30rem",
                      // }}
                      src={data?.urls?.small}
                      alt={data?.alt_description}
                    />
                    <ImgDiscrip data={data} />{" "}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {loading ? (
          <h1>WAIT LOADING...</h1>
        ) : error !== "" ? (
          <h1>Please wait for some time as API limit has been exceeded</h1>
        ) : (
          <></>
        )}
      </div>

      {type === "feed" && (
        <div className={styles.b2}>
          <Myprofile />
        </div>
      )}
    </div>
  );
};

export default RandomPic;
