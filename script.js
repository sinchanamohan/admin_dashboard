window.onload = function () {
  const ChartLib = window.Chart;

  // Theme toggle
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  window.toggleTheme = function () {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
  };

  // Line chart
  const lineCtx = document.getElementById("lineChart").getContext("2d");
  new ChartLib(lineCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Users",
        data: [200, 300, 500, 700, 600, 900],
        backgroundColor: "rgba(0, 123, 255, 0.3)",
        borderColor: "blue",
        fill: true
      }]
    },
    options: { responsive: true }
  });

  // Bar chart
  const barCtx = document.getElementById("barChart").getContext("2d");
  new ChartLib(barCtx, {
    type: "bar",
    data: {
      labels: ["Electronics", "Clothing", "Grocery", "Books"],
      datasets: [{
        label: "Sales",
        data: [500, 700, 400, 650],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#2ecc71"]
      }]
    },
    options: { responsive: true }
  });

  // Load transaction data
  fetch("transactions.json")
  .then(res => res.json())
  .then(data => {
    const table = document.getElementById("transactionTable");
    table.innerHTML = data.map(tx => `
      <tr>
        <td>${tx.date}</td>
        <td>${tx.description}</td>
        <td>${tx.amount}</td>
        <td>${tx.status}</td>
      </tr>
    `).join("");
  });

};
