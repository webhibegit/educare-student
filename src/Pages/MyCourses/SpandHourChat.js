import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import HttpClient from "../../utils/HttpClient";
import moment from "moment";

export default function SpandHourChat() {
  const [ChatData, setChatData] = useState([]);

  useEffect(() => {
    fetchWeeklyWatchHour();
  }, []);

  let colors = ["#40E6FD", "#138BFB"];
  let series = [
    {
      data: ChatData.map((val) => {
        return val.time;
      }),
    },
  ];

  let options = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "20%",

        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ChatData.map((val) => {
        return [val.day];
      }),
      labels: {
        style: {
          //   colors: colors,
          fontSize: "10px",
        },
      },
    },
  };

  let fetchWeeklyWatchHour = async () => {
    let result = await HttpClient.requestData("course/weeklySpandHours", "GET");
    // console.log("result", result);
    if (result && result.status) {
      let arr = result.data.map((val) => {
        return {
          day: moment(val.date).format("dddd"),
          time: (val.spentSecend / 3600).toFixed(1),
        };
      });
      setChatData(arr);
    }
  };

  return (
    <>
      <div className="col-xl-7 col-lg-7 col-md-12 col-12 pl-0">
        <div
          className="bg-white weekly_Section px-4 py-4"
          style={{ borderRadius: "25px" }}
        >
          <h4 className="weekly_Title">Weekly Spent Hours</h4>
          <div className="">
            <div id="chart">
              <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
