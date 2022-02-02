import { Component } from 'react';
import './App.css';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';
class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  countFeedback = (e) => {
    const target = e.target.id;
    this.setState((prevState) => ({ [target]: prevState[target] + 1 }));
  };
  countTotalFeedback = () => Object.values(this.state).reduce((acc, el) => acc + Number(el), 0);

  countPositiveFeedbackPercentage = () => {
    const total =  this.countTotalFeedback();
    const good = this.state.good
    return total ? Number(good * 100) / Number(this.countTotalFeedback()) : 0
    
  }

  render() {
    // const {good,neutral,bad} = this
    const {countTotalFeedback, countPositiveFeedbackPercentage,countFeedback} = this
    return (
      <div className="App">
        <Feedback countFeedback ={countFeedback}/>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
      </div>
    );
  }
}

export default App;
