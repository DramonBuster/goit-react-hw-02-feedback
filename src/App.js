import React, { Component } from 'react';
import './App.css';
import Section from './Components/Section/Section';
import FeedbackButtons from './Components/FeedbackButtons/FeedbackButtons';
import FeedbackStatistics from './Components/FeedbackStatistics/FeedbackStatistics';
import Notification from './Components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  submitFeedback = feedback => {
    // проверить позже
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const positivePercentage = Math.round((this.state.good / total) * 100);
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackButtons
            feedbacks={Object.keys(this.state)}
            submitFeedback={this.submitFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <FeedbackStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification notificationMessage="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
