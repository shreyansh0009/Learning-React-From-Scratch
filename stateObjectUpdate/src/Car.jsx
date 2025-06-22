import React, {useState} from "react";

function Car() {
  const [car, setcar] = useState({ company: "BMW", model: "M5", year: 2024 });

  const handleCompany = (e) => {
    setcar({ ...car, company: e.target.value }); //keeping older details same, only changes required ones.
  };

  const handleModel = (e) => {
    setcar({ ...car, model: e.target.value });
  };

  const handleYear = (e) => {
    setcar({ ...car, year: e.target.value });
  };

  return (
    <div>
      <h1>
        Your fav. car is: {car.company} {car.model} {car.year}
      </h1>
      <br />
      <input type="text" value={car.company} onChange={handleCompany} />
      <input type="text" value={car.model} onChange={handleModel} />
      <input type="number" value={car.year} onChange={handleYear} />
    </div>
  );
}

export default Car;
