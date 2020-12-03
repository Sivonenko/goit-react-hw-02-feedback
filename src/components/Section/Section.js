import PropType from 'prop-types'
import s from './Section.module.css'

const Section = ({ title, children }) => {
    return (
        <section className={s.wrap}>
            <h2 className={s.caption}>{title}</h2>
            {children}
        </section>
    )
}

Section.prototype = {
    title: PropType.string.inRequired,
    children: PropType.element.inRequired,
}

export default Section 