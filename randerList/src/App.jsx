import "./App.css";
import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 45 },
    { id: 2, name: "Banana", calories: 95 },
    { id: 3, name: "Orange", calories: 110 },
    { id: 4, name: "Pineapple", calories: 145 },
    { id: 5, name: "Coconut", calories: 135 },
  ];

  const vegetables = [
    { id: 6, name: "Potatoes", calories: 115 },
    { id: 7, name: "Carrots", calories: 55 },
    { id: 8, name: "Corn", calories: 63 },
    { id: 9, name: "Broccoli", calories: 50 },
    { id: 10, name: "Celery", calories: 35 },
  ];

  return (
    <>
     <List items = {fruits} category = "Fruits"/>
     <List items = {vegetables} category = "Vegetables"/>

    </>
  );
}

export default App;
