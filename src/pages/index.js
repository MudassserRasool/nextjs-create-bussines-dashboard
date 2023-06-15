import ReuseableCreateBusinessInputField from '@/components/ReuseableCreateBusinessInputField/ReuseableCreateBusinessInputField'
import ReuseableUploadLogo from '@/components/ReuseableUploadLogo/ReuseableUploadLogo'
import React from 'react'

const index = () => {
  return (
    <div style={{marginTop:'50px', marginRight:'50px', marginLeft:'50px', display:'grid', gap:'20px'}}>
      <ReuseableUploadLogo/>
      <ReuseableCreateBusinessInputField/>
    </div>
  )
}

export default index