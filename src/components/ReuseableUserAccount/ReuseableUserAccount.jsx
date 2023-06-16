import React from 'react'
import Style from './ReuseableUserAccount.module.css'
import Image from 'next/image'
import { MudasserAccountImage, ExpertAccountImage } from '@/assets'

const ReuseableUserAccount = () => {
  return (
    <div>
      <div className={Style.profileAndRadioRow}>

        {/* start profile image and text------------------ */}
        <div className={Style.profileAndText}>
          <Image width='' height='' src={MudasserAccountImage} alt="" className={Style.profileImageStyle} />
          <div>
          <h3 className={Style.accountUserNameText}>Mudasser</h3>
          <p className={Style.accountUserRoleText}>Director</p>
          </div>
        </div>
        {/* end profile image and text------------------ */}

        {/* start radio selector------------------------ */}
        <input type="radio" name='myName' className={`${Style.radioInputStyle}, ${Style.input}`}/>
        {/* end radio selector------------------------ */}
      </div>
    </div>
  )
}

export default ReuseableUserAccount