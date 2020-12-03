import PropTypes from 'prop-types'
import Notification from '../Notification'
import s from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            {total > 0 && (
                <div className={s.list}>
                    <div>Good: {good}</div>
                    <div>Neutral:{neutral}</div>
                    <div>Bad: {bad}</div>
                    <div>Total: {total}</div>
                    <div>PositivePercentage: {positivePercentage}%</div>
                </div>
            )}
            {total === 0 && <Notification message='No feedback given'/>}

        </>
    )
    
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
export default Statistics