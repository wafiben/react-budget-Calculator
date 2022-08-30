import "./App.css";
import Form from "./components/Form";
import Alert from "./components/Alert";
import List from "./components/List";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const initialItems = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1200 },
];

function App() {
  const [expenses, setExpenses] = useState(initialItems);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  const [id, setId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let editList = expenses.map((elt) => {
          if (elt.id === id) {
            const updateItem = { id: id, amount, charge };
            return updateItem;
          } else {
            return elt;
          }
        });
        setExpenses(editList);
        handleAlert({ type: "success", text: "item updated" });
        setEdit(false);
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
        setCharge("");
        setAmount("");
      }
    } else {
      handleAlert({
        type: "danger",
        text: "charge can not be empty value and amount must be bigger than 0",
      });
    }
  };
  const deleteItem = (id) => {
    const itemAfterDelete = expenses.filter((elt) => elt.id !== id);
    setExpenses(itemAfterDelete);
    handleAlert({ type: "danger", text: "item is deleted" });
  };
  const handleEdit = (id) => {
    const searchtem = expenses.find((elt) => elt.id === id);
    const { charge, amount } = searchtem;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };
  const formProps = {
    handleSubmit,
    handleAmount,
    handleCharge,
    charge,
    amount,
    edit,
  };
  const clearAllItem = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "All items deleted" });
  };
  return (
    <>
      {alert.show && <Alert text={alert.text} type={alert.type} />}

      <h1>Budget Calculator </h1>
      <main className="App">
        <Form {...formProps} />
        <List
          expenses={expenses}
          deleteItem={deleteItem}
          clearAllItem={clearAllItem}
          handleEdit={handleEdit}
        />
      </main>
      <h1>
        Total Spending :
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc = acc + Number(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
