import { useState } from "react";
import "../App.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("add");
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Enter 2 numbers");
      return;
    }

    let res;

    switch (
      operator //applying the switch statement
    ) {
      case "add":
        res = n1 + n2;
        break;
      case "subtract":
        res = n1 - n2;
        break;
      case "multiply":
        res = n1 * n2;
        break;
      case "divide":
        if (n2 === 0) {
          res = "Cannot divide by 0";
        } else {
          res = n1 / n2;
        }
        break;
      default:
        res = "Invalid Operator";
    }
    setResult(res);
  };

  return (
    <>

    <h3>Exercise 6 Calculator.jsx</h3>
      <form onSubmit={handleCalculate} className="calculator">
        <div>
          <label>
            Enter Number {" "}
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Enter Number {" "}
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Choose an Operator {" "}
            <select
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
            >
              <option value="add">Add</option>
              <option value="subtract">Subtract</option>
              <option value="divide">Divide</option>
              <option value="multiply">Multiply</option>
            </select>
          </label>
        </div>

        <div>
          <button type="calculate" className="calculator-button">Calculate</button>
        </div>

        <div className="calculator-result">Result: {result !== null ? result : "-"}</div>
      </form>
    </>
  );
}
export default Calculator;
