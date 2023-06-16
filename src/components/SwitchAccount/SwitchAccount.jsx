import React from 'react'
import Style from './SwitchAccount.module.css'
import ReuseableUserAccount from '../ReuseableUserAccount/ReuseableUserAccount'
import ReuseableAddNewButton from '../ReuseableAddNewButton/ReuseableAddNewButton'

const SwitchAccount = () => {
  return (
    <div>
        <div className={Style.switchAccountCard}>
            <div className={Style.arrangeAccountsInColummn}>
              <ReuseableUserAccount/>
              <hr className={Style.hrTag} />
              <ReuseableUserAccount/>
              <hr className={Style.hrTag} />
              <ReuseableUserAccount/>
              <hr className={Style.hrTag} />
              <ReuseableUserAccount/>
              <hr className={Style.hrTag} />
              <ReuseableAddNewButton/>
            </div>
        </div>
    </div>
  )
}

export default SwitchAccount