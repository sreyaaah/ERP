import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import type { ApexOptions } from "apexcharts";
import { dashboardService } from "../../services/dashboard.service";

interface SalesStatisticsProps {
  chartData: any;
  totalSales: number;
  totalPurchases: number;
}

const SalesStatistics: React.FC<SalesStatisticsProps> = ({ 
  chartData, 
  totalSales, 
  totalPurchases,
}) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [internalChartData, setInternalChartData] = useState<any>(chartData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (chartData) {
      setInternalChartData(chartData);
    }
  }, [chartData]);

  const fetchYearlyData = async (year: number) => {
    try {
      setLoading(true);
      const res = await dashboardService.getCharts(year);
      if (res.status) {
        setInternalChartData(res.data);
        setSelectedYear(year);
      }
    } catch (error) {
      console.error("Error fetching yearly statistics:", error);
    } finally {
      setLoading(false);
    }
  };

  // Determine which totals to display: either yearly-specific or overall-summary
  const displaySales = internalChartData?.hasOwnProperty('yearlySalesTotal') 
    ? internalChartData.yearlySalesTotal 
    : totalSales;
    
  const displayPurchases = internalChartData?.hasOwnProperty('yearlyPurchaseTotal') 
    ? internalChartData.yearlyPurchaseTotal 
    : totalPurchases;

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 290,
      stacked: true,
      toolbar: { show: false }
    },
    colors: ["#0E9384", "#E04F16"],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        columnWidth: "20%",
      },
    },
    dataLabels: { enabled: false },
    yaxis: {
      labels: {
        offsetX: -15,
        formatter: (val: any) => `${(val / 1).toFixed(1)}K`,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    fill: { opacity: 1 },
    legend: { show: false },
    grid: {
        padding: { top: 5, right: 5 },
    },
    tooltip: {
      y: {
        formatter: (val: any) => `₹${Math.round(Math.abs(val) * 1000).toLocaleString()}`
      }
    },
    series: [
      {
        name: "Revenue",
        data: internalChartData?.sales?.map((v: number) => v / 1000) || Array(12).fill(0),
      },
      {
        name: "Expenses",
        data: internalChartData?.purchases?.map((v: number) => -(v / 1000)) || Array(12).fill(0),
      },
    ],
  };

  return (
    <div className="card flex-fill">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div className="d-inline-flex align-items-center">
          <span className="title-icon bg-soft-danger fs-16 me-2">
            <i className="ti ti-alert-triangle" />
          </span>
          <h5 className="card-title mb-0">Sales Statistics</h5>
        </div>
        <div className="dropdown">
          <Link to="#" className="dropdown-toggle btn btn-sm btn-white d-flex align-items-center" data-bs-toggle="dropdown">
            <i className="ti ti-calendar me-1" /> {selectedYear}
          </Link>
          <ul className="dropdown-menu p-3">
            <li>
              <Link 
                to="#" 
                className="dropdown-item" 
                onClick={(e) => { e.preventDefault(); fetchYearlyData(2026); }}
              >
                2026
              </Link>
            </li>
            <li>
              <Link 
                to="#" 
                className="dropdown-item" 
                onClick={(e) => { e.preventDefault(); fetchYearlyData(2025); }}
              >
                2025
              </Link>
            </li>
            <li>
              <Link 
                to="#" 
                className="dropdown-item" 
                onClick={(e) => { e.preventDefault(); fetchYearlyData(2024); }}
              >
                2024
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body pb-0 position-relative" style={{ minHeight: '350px' }}>
        {loading && (
          <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 10 }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div style={{ opacity: loading ? 0.3 : 1 }}>
          <div className="d-flex align-items-center flex-wrap gap-2 mb-3">
            <div className="border p-2 br-8 flex-fill">
              <h5 className="d-inline-flex align-items-center text-teal mb-0">
                ₹{displaySales?.toLocaleString() || "0"}
              </h5>
              <p className="mb-0 fs-13 text-muted">Revenue ({selectedYear})</p>
            </div>
            <div className="border p-2 br-8 flex-fill">
              <h5 className="d-inline-flex align-items-center text-orange mb-0">
                ₹{displayPurchases?.toLocaleString() || "0"}
              </h5>
              <p className="mb-0 fs-13 text-muted">Expense ({selectedYear})</p>
            </div>
          </div>
          <div id="sales-statistics">
            <ReactApexChart options={options} series={options.series} type="bar" height={290} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesStatistics;
