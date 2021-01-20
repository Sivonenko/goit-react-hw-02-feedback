
import { Component } from 'react'
import Container from './Container'
import Section from './Section'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'

import{fdbkOptions} from '../data/constans'
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
    
    return <Container>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={fdbkOptions} onleaveFeedback={this.handleaveFeedback}/>
      </Section>
      <Section title='Statistics'>
        <Statistics
          good={good}
          neutral={neutral}
          total={this.countTotalFeedback()}
          bad={bad}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    </Container>
  }
}


export default App