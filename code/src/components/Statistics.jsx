const Statistics = ({good,neutral,bad,total,positivePercentage}) => 
{
    return ( 
    <>
    <h2>Statistics</h2>
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    <p>total: {total}</p>
    <p>positivePercentage:{Math.floor(positivePercentage)}%</p>
    </>
        );
}
 
export default Statistics;