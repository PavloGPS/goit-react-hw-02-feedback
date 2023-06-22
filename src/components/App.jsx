import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedbackOption => {
    this.setState(prevState => ({
      [feedbackOption]: prevState[feedbackOption] + 1,
    }));
  };
  calculateTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  calculatePositivePercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.calculateTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <div className="feedbackOptionsSection">
          <h2 className="sectionTitle">Please leave feedback</h2>
          <button
            key="good"
            className="goodBtn"
            onClick={() => this.onLeaveFeedback('good')}
          >
            Good
          </button>
          <button
            key="neutral"
            className="neutralBtn"
            onClick={() => this.onLeaveFeedback('neutral')}
          >
            Neutral
          </button>
          <button
            key="bad"
            className="badBtn"
            onClick={() => this.onLeaveFeedback('bad')}
          >
            Bad
          </button>
        </div>
        <div className="statisticsSection">
          <h2 className="sectionTitle">Statistics</h2>
          <p className="statistics__item">Good: {good}</p>
          <p className="statistics__item">Neutral: {neutral}</p>
          <p className="statistics__item">Bad: {bad}</p>
          <p className="statistics__item">
            Total: {this.calculateTotalFeedback()}
          </p>
          <p className="statistics__item">
            Positive Feedback: {this.calculatePositivePercentage()}%
          </p>
        </div>
      </>
    );
  }
}
