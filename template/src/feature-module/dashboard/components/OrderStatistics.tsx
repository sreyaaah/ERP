import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import { dashboardService } from "../../services/dashboard.service";

interface OrderStatisticsProps {
  orderStats: any[];
}

const OrderStatistics: React.FC<OrderStatisticsProps> = ({ orderStats }) => {
    const [selectedPeriod, setSelectedPeriod] = useState("Monthly");
    const [internalStats, setInternalStats] = useState<any[]>(orderStats || []);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (orderStats && internalStats.length === 0) {
            setInternalStats(orderStats);
        }
    }, [orderStats]);

    const fetchHeatmap = async (period: string, label: string) => {
        try {
            setLoading(true);
            const res = await dashboardService.getOrdersHeatmap(period);
            if (res.status) {
                setInternalStats(res.data);
                setSelectedPeriod(label);
            }
        } catch (error) {
            console.error("Error fetching heatmap:", error);
        } finally {
            setLoading(false);
        }
    };

    const options: any = {
        chart: {
          type: "heatmap",
          height: 370,
          toolbar: { show: false }
        },
        plotOptions: {
          heatmap: {
            radius: 4,
            enableShades: false,
            colorScale: {
              ranges: [
                { from: 0, to: 0, color: "#F3F4F6" },
                { from: 1, to: 5, color: "#FFE3CB" },
                { from: 6, to: 1000, color: "#FE9F43" },
              ],
            },
          },
        },
        legend: { show: false },
        dataLabels: { enabled: false },
        grid: {
          padding: { top: -20, bottom: 0, left: 10, right: 10 },
        },
        xaxis: {
            position: 'top',
            labels: {
                style: { colors: "#6B7280" }
            }
        },
        yaxis: {
          labels: { 
              offsetX: -10,
              style: { colors: "#6B7280" }
          },
        },
        tooltip: {
            y: {
                formatter: (val: any) => `${val} Orders`
            }
        }
    };

  return (
    <div className="card flex-fill">
      <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div className="d-inline-flex align-items-center">
          <span className="title-icon bg-soft-indigo fs-16 me-2">
            <i className="ti ti-calendar-event" />
          </span>
          <h5 className="card-title mb-0">Order Statistics</h5>
        </div>
        <div className="dropdown">
          <Link to="#" className="dropdown-toggle btn btn-sm btn-white d-flex align-items-center" data-bs-toggle="dropdown">
            <i className="ti ti-calendar me-1" /> {selectedPeriod}
          </Link>
          <ul className="dropdown-menu p-3">
            <li>
              <Link to="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); fetchHeatmap("today", "Today"); }}>
                Today
              </Link>
            </li>
            <li>
              <Link to="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); fetchHeatmap("weekly", "Weekly"); }}>
                Weekly
              </Link>
            </li>
            <li>
              <Link to="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); fetchHeatmap("monthly", "Monthly"); }}>
                Monthly
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body pb-0 position-relative" style={{ minHeight: '370px' }}>
        {loading && (
          <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 10 }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div style={{ opacity: loading ? 0.3 : 1 }}>
          <ReactApexChart options={options} series={internalStats} type="heatmap" height={370} />
        </div>
      </div>
    </div>
  );
};

export default OrderStatistics;
