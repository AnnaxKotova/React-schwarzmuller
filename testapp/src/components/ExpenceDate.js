import "./ExpenceDate.css";

function ExpenceDate(props) {
  const month = props.datex.toLocaleString("en-US", { month: "long" });
  const year = props.datex.getFullYear();
  const day = props.datex.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-item__month">{month}</div>
      <div className="expense-item__year">{year}</div>
      <div className="expense-item__day">{day}</div>
    </div>
  );
}

export default ExpenceDate;
