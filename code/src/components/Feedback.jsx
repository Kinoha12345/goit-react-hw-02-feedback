const Feedback = ({countFeedback}) => {
    return (
      <>
        <h1>Please leave feedback</h1>
        <button onClick={countFeedback} type="button" id="good">
          Good
        </button>
        <button onClick={countFeedback} type="button" id="neutral">
          Neutral
        </button>
        <button onClick={countFeedback} type="button" id="bad">
          Bad
        </button>
      </>
    );
  };
  
  export default Feedback;