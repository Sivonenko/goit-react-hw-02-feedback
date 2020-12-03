import PropTypes from 'prop-types'
import s from './FeedbackBtn.module.css'

const FeedbackBtn = ({ feedback, onleaveFeedback }) => {
    return (
        
            <button className={s.button} data-feedback={feedback} onClick={onleaveFeedback}>{feedback}</button>
            
    )
}
const FeedbackOptions = ({ options, onleaveFeedback }) => {
    return options.map((options) => <FeedbackBtn feedback={options} onleaveFeedback={onleaveFeedback} />)
}

FeedbackOptions.prototype = {
    options: PropTypes.arrayOf(PropTypes.string),
    onleaveFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions