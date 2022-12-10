import axios from "axios";
import React, { useEffect, useState } from "react";

const Balacesheet = () => {
  const [revenue, setrevenue] = useState([]);
  const [expence, setexpence] = useState([]);

  const getRevenue = async () => {
    return await axios
      .get("http://localhost:8080/revenueData")
      .then((res) => setrevenue(res.data));
  };

  const getExpence = async () => {
    return await axios
      .get("http://localhost:8080/expenseData")
      .then((res) => setexpence(res.data));
  };

  useEffect(() => {
    getRevenue();
    getExpence();
  }, []);

  console.log(revenue);
  console.log(expence);


  return (
    <div>
      {revenue.map((r) => (
        <>
          {expence.map((e) => (
            <>
              <h1>
                {" "}
                {new Date(r.startDate).getMonth() + 1 ===
                 new Date(e.startDate).getMonth() + 1 ? (
                  <>{r.amount - e.amount}</>
                ) : r.amount }
              </h1>
            </>
          ))}
        </>
      ))}
    </div>
  );
};

export default Balacesheet;
