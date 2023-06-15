import React from "react";
import Style from "./ReuseableUploadLogo.module.css";
import { CiCamera } from "react-icons/ci";

const ReuseableUploadLogo = () => {
  return (
    <div>
      <div className={Style.logoBox}>
        <div className={Style.logoCircle}>
          <p className={Style.logoText}>Logo</p>
        </div>

        <div className={Style.cameraiconBox}>
          <CiCamera color="#ffffff" className={Style.cameraIcon}/>
        </div>
      </div>
    </div>
  );
};

export default ReuseableUploadLogo;
