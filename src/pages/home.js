import React, { useState, useEffect } from "react";
import car from "../assets/images/car.jpg";
import carShort from "../assets/images/carShort.jpg";
import Select from "react-select";
import Chart from "chart.js/auto";
import { Line, Bar, Pie } from "react-chartjs-2";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home = () => {
  const [year, setYear] = useState();
  const [trim, setTrim] = useState("");
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Line Chart",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        hoverBackgroundColor: "rgba(75, 192, 192, 0.8)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const pieChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
      },
    ],
  };

  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Bar Chart",
        data: [50, 30, 45, 70, 20, 35],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  const charOptions = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const value = dataset.data[tooltipItem.index];
          return dataset.label + ": " + value;
        },
      },
    },
  };

  const yearOptions = [
    { value: "2010", label: "2010" },
    { value: "2011", label: "2011" },
    { value: "2012", label: "2012" },
    { value: "2013", label: "2013" },
    { value: "2014", label: "2014" },
    { value: "2015", label: "2015" },
    { value: "2016", label: "2016" },
    { value: "2017", label: "2017" },
    { value: "2018", label: "2018" },
    { value: "2029", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];
  const trimOptions = [
    { value: "trim1", label: "Trim 1" },
    { value: "trim2", label: "Trim 2" },
    { value: "trim3", label: "Trim 3" },
    { value: "trim4", label: "Trim 4" },
    { value: "trim5", label: "Trim 5" },
    { value: "trim6", label: "Trim 6" },
    { value: "trim7", label: "Trim 7" },
    { value: "trim8", label: "Trim 8" },
    { value: "trim9", label: "Trim 9" },
    { value: "trim10", label: "Trim 10" },
  ];
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "0.5%", // Adjust the padding value as needed
    }),
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{ paddingLeft: "20%", paddingRight: "20%", marginTop: "2%" }}>
        <text style={{ fontSize: 40, fontWeight: "bold" }}>
          Welcome To CarTrends.ai
        </text>
        <div style={{ marginTop: "2%" }}>
          <img
            style={{ height: "100%", width: "100%" }}
            src={carShort}
            alt="React Image"
          />
        </div>
        <div style={{ marginTop: "5%" }}>
          <text style={{ fontSize: 30, fontWeight: "bold", marginTop: "5%" }}>
            Tell us what trim you are interested and we will share some insights
            with you..
          </text>
          <text style={{ marginTop: "5%", fontSize: 20, display: "block" }}>
            Select a Year :
          </text>

          <Select
            styles={customStyles}
            options={yearOptions}
            onChange={(val) => setYear(val.value)}
          />

          <text style={{ marginTop: "5%", fontSize: 20, display: "block" }}>
            Select a trim :
          </text>
          <Select
            styles={customStyles}
            options={trimOptions}
            onChange={(val) => setTrim(val.value)}
          />
          <text style={{ marginTop: "2%", fontSize: 20, display: "block" }}>
            You selected :
          </text>
          {year && trim && (
            <text style={{ marginTop: "2s%", fontSize: 20, display: "block" }}>
              {year + "   " + trim}
            </text>
          )}
        </div>
        <div style={{ marginTop: 50 }}>
          <text style={{ fontSize: 30, fontWeight: "bold", marginTop: "5%" }}>
            This is Line chart shown the statistics of the dummy data
          </text>
          <Line data={lineChartData} />
        </div>
        <div style={{ marginTop: 50 }}>
          <text style={{ fontSize: 30, fontWeight: "bold", marginTop: "5%" }}>
            This is Bar chart shown the statistics of the dummy data
          </text>
          <Bar data={barChartData} options={charOptions} />
        </div>
        <div style={{ marginTop: 50 }}>
          <text style={{ fontSize: 30, fontWeight: "bold", marginTop: "5%" }}>
            This is Pie chart shown the statistics of the dummy data
          </text>
          <div
            style={{
              height: 500,
              width: "70%",
              alignSelf: "center",
              marginTop: 20,
              marginLeft: "15%",
            }}
          >
            <Pie data={pieChartData} />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
