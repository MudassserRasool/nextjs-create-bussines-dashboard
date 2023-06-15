import React from 'react'
import ReuseableUploadLogo from '../ReuseableUploadLogo/ReuseableUploadLogo'
import ReuseableCreateBusinessInputField from '../ReuseableCreateBusinessInputField/ReuseableCreateBusinessInputField'
import Style from './CreateBusinessSection.module.css'

const CreateBusinessSection = () => {
  return (
    <div className={Style.sectionBackground}>
        <ReuseableUploadLogo/>
        <ReuseableCreateBusinessInputField/>
        <ReuseableCreateBusinessInputField/>
        <ReuseableCreateBusinessInputField/>
        <ReuseableCreateBusinessInputField/>
        <ReuseableCreateBusinessInputField/>
    </div>
  )
}

export default CreateBusinessSection