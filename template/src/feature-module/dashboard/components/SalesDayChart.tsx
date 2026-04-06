import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import { dashboardService } from "../../services/dashboard.service";

interface SalesDayChartProps {
  chartData: any;
}

const SalesDayChart: React.FC<SalesDayChartProps> = ({ chartData }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("Today");
  const [internalChartData, setInternalChartData] = useState<any>(chartData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (chartData) {
      setInternalChartData(chartData);
    }
  }, [chartData]);

  const fetchChartData = async (period: string, label: string) => {
    try {
      setLoading(true);
      const res = await dashboardService.getOrdersChart(period);
      if (res.status) {
        setInternalChartData(res.data);
        setSelectedPeriod(label);
      }
    } catch (error) {
      console.error("Error fetching chart data:", error);
    } finally {
      setLoading(false);
    }
  };

  const salesDayOptions: any = {
    chart: {
      height: 245,
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#FE9F43", "#FFE3CB"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        borderRadius: 8,
        borderRadiusWhenStacked: "all",
        horizontal: false,
        endingShape: "rounded",
      },
    },
    series: [
      {
        name: "Sales",
        data: internalChartData?.sales || [],
      },
      {
        name: "Purchase",
        data: internalChartData?.purchases || [],
      },
    ],
    xaxis: {
      categories: internalChartData?.categories || ["2 am", "4 am", "6 am", "8 am", "10 am", "12 am", "14 pm", "16 pm", "18 pm", "20 pm", "22 pm", "24 pm"],
      labels: {
        style: {
          colors: "#6B7280",
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (val: any) => `${Math.round(val)}K`,
        offsetX: -15,
        style: {
          colors: "#6B7280",
          fontSize: "13px",
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val: any) => `₹${Math.round(val * 1000).toLocaleString()}`
      }
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 5,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
  };

  const periods = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 Days", value: "7days" },
    { label: "Last 30 Days", value: "30days" },
    { label: "This Month", value: "thismonth" },
    { label: "Last Month", value: "lastmonth" },
  ];

  return (
    <div className="card flex-fill">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">Orders {selectedPeriod}</h5>
        <div className="dropdown">
          <Link
            to="#"
            className="dropdown-toggle btn btn-sm btn-white d-flex align-items-center"
            data-bs-toggle="dropdown"
          >
            {selectedPeriod}
          </Link>
          <ul className="dropdown-menu p-3">
            {periods.map((p) => (
              <li key={p.value}>
                <Link 
                  to="#" 
                  className="dropdown-item" 
                  onClick={(e) => {
                    e.preventDefault();
                    fetchChartData(p.value, p.label);
                  }}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card-body pb-0 position-relative">
        {loading && (
          <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 10 }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div id="sales-day" style={{ opacity: loading ? 0.3 : 1 }}>
          <ReactApexChart
            options={salesDayOptions}
            series={salesDayOptions.series}
            type="bar"
            height={245}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesDayChart;
