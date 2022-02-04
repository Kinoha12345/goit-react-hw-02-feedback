import propTypes from "prop-types"

const Feedback = ({countFeedback, options}) => {
    return (
      <>
      
        {options.map(el => <button onClick={countFeedback} type="button"  id={el} key={el}>
          {el}
           </button>)}
           </>
    );
  };
  
  Feedback.propTypes = {
    countFeedback: propTypes.func.isRequired,
    options: propTypes.arrayOf(propTypes.string).isRequired,
  };

  export default Feedback;