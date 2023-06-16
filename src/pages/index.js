import CreateBusinessSection from '@/components/CreateBusinessSection/CreateBusinessSection'
import ReuseableCreateBusinessInputField from '@/components/ReuseableCreateBusinessInputField/ReuseableCreateBusinessInputField'
import ReuseableUploadLogo from '@/components/ReuseableUploadLogo/ReuseableUploadLogo'
import ReuseableUserAccount from '@/components/ReuseableUserAccount/ReuseableUserAccount'
import SwitchAccount from '@/components/SwitchAccount/SwitchAccount'
import React from 'react'
// import Style from '../styles/globals.css'

const index = () => {
  return (
    <div className='sectionBackgroundColor'>
      {/* <CreateBusinessSection/> */}
      <SwitchAccount/>
      {/* <ReuseableUserAccount/> */}
    </div>
  )
}

export default index