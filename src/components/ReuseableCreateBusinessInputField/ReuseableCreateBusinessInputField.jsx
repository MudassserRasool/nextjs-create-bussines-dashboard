import React from 'react'
import Style from './ReuseableCreateBusinessInputField.module.css'

const ReuseableCreateBusinessInputField = () => {
  return (
    <div>
        {/* <div className={Style.inputFieldBox}>
            <label htmlFor="" className={Style.inputFieldLabel}>Business Name</label>
            <input type="text" className={Style.inputField}/>
        </div> */}
        <div className={Style.questionAnswerBox}>
        <p className={Style.questionText}>How Log Have You Had TheseSports</p>
        <input type="text" className={Style.answerInput} />
      </div>
    </div>
  )
}

export default ReuseableCreateBusinessInputField