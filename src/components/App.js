import { Component } from 'react'

import Section from './Section'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'

import{FEEDBACK_OPTIONS} from '../data/constans'
class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  handleaveFeedback = ({ target }) => {
    const { feedback } = target.dataset
    this.setState(prevState => ({[feedback]: prevState[feedback] + 1}))
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state 
    return good + neutral + bad
  }
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback()
    return total ?Math.round((good / (total)) * 100) : 0
  }
  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    const styles = {
      wrapper: {
        background: '#b1b1b1',
        width: "700px",
        margin: '0 auto'
      }
    }
    return <div style={styles.wrapper}>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={FEEDBACK_OPTIONS} onleaveFeedback={this.handleaveFeedback}/>
      </Section>
      <Section title='Statistics'>
        <Statistics
          good={good}
          neutral={neutral}
          total={total}
          bad={bad}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  }
}


export default App