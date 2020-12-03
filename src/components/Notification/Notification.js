import PropType from 'prop-types'
import s from './Notification.module.css'

const Notification = ({ message }) => <p className={s.message}>{message}</p>

Notification.propType = {
    message: PropType.string.isRequired,
}

export default Notification