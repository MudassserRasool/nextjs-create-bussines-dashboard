import React from "react";
import Style from "./ReuseableUploadLogo.module.css";
import { CiCamera } from "react-icons/ci";
import { AiOutlineCamera } from "react-icons/ai";
import { IoCameraOutline } from "react-icons/io5";

const ReuseableUploadLogo = () => {
  return (
    <div>
      <div className={Style.logoBox}>
        <div className={Style.logoCircle}>
          <p className={Style.logoText}>Logo</p>
        </div>

        <div className={Style.cameraiconBox}>
          <IoCameraOutline color="#ffffff" className={Style.cameraIcon}/>
        </div>
      </div>
    </div>
  );
};

export default ReuseableUploadLogo;
