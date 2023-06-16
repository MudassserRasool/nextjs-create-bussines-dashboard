import React from "react";
import Style from "./ReuseableAddNewButton.module.css";
import { IoAddSharp } from "react-icons/io5";

const ReuseableAddNewButton = () => {
  return (
    <div>
      <div className={Style.iconAndText}>
        {/* start Icon and text------------------ */}
        <div className={Style.addAccountIconAndText}>
          <div className={Style.addNewAccountButtonBox}>
            <IoAddSharp size={25} className={Style.addIcon} color="#999999"/>
          </div>
          <div>
            <h3 className={Style.accountUserNameText}>Mudasser</h3>
          </div>
        </div>
        {/* end Icon and text------------------ */}
      </div>
    </div>
  );
};

export default ReuseableAddNewButton;
