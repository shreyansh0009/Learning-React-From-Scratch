import Employee from "../components/Employee";
import Students from "../components/Students";

function App() {
  const employees = {
    name: "Saurabh Shreyansh",
    age: 25,
    department: "Engineering",
    isFullTime: true,
    skills: ["JavaScript", "React", "Node.js"],
  };

  const students = {
    name: "Saurabh Shreyansh",
    roll: "22ESKIT147",
    branch: "IT",
    CGPA: 8.4,
    isStudent: true,
  };
  

  return (
    <>
      {/* easiest way.....
      <Students name="Saurabh" age={23} isStudent={false} /> */}

      {/* professional way... */}
      <Students data={students} />

      <Employee data={employees} />

    </>
  );
}

export default App;
