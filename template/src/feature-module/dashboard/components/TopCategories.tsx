import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { dashboardService } from "../../services/dashboard.service";

interface TopCategoriesProps {
  categoryStats: any[];
  totalCategories: number;
  totalProducts: number;
}

const TopCategories: React.FC<TopCategoriesProps> = ({ categoryStats, totalCategories, totalProducts }) => {
    const [selectedPeriod, setSelectedPeriod] = useState("Monthly");
    const [internalStats, setInternalStats] = useState<any[]>(categoryStats || []);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (categoryStats && internalStats.length === 0) {
            setInternalStats(categoryStats);
        }
    }, [categoryStats]);

    const fetchTopCategories = async (period: string, label: string) => {
        try {
            setLoading(true);
            const res = await dashboardService.getTopCategories(period);
            if (res.status) {
                setInternalStats(res.data);
                setSelectedPeriod(label);
            }
        } catch (error) {
            console.error("Error fetching top categories:", error);
        } finally {
            setLoading(false);
        }
    };

    const series = internalStats?.length > 0 ? internalStats.map(c => c.totalRevenue) : [0];
    const labels = internalStats?.length > 0 ? internalStats.map(c => c._id) : ["No Data"];

    const options: ApexOptions = {
        chart: {
            type: 'donut',
            height: 300
        },
        labels: labels,
        colors: ["#092C4C", "#E04F16", "#FE9F43"],
        plotOptions: {
            pie: {
                donut: {
                    size: '75%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '16px',
                            color: '#092C4C'
                        },
                        value: {
                            show: true,
                            fontSize: '24px',
                            fontWeight: 'bold',
                            formatter: function (val: any) {
                                return '₹' + Math.round(Number(val)).toLocaleString();
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w: any) {
                                const total = w.globals.seriesTotals.reduce((a: any, b: any) => a + b, 0);
                                return '₹' + Math.round(total).toLocaleString();
                            }
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        stroke: {
            show: false
        },
        tooltip: {
            y: {
                formatter: (val) => `₹${Math.round(val).toLocaleString()}`
            }
        }
    };

    return (
        <div className="card flex-fill">
            <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div className="d-inline-flex align-items-center">
                    <span className="title-icon bg-soft-orange fs-16 me-2">
                        <i className="ti ti-package" />
                    </span>
                    <h5 className="card-title mb-0">Top Categories</h5>
                </div>
                <div className="dropdown">
                    <Link to="#" className="dropdown-toggle btn btn-sm btn-white d-flex align-items-center" data-bs-toggle="dropdown">
                        <i className="ti ti-calendar me-1" /> {selectedPeriod}
                    </Link>
                    <ul className="dropdown-menu p-3">
                        <li>
                            <Link to="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); fetchTopCategories("today", "Today"); }}>
                                Today
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); fetchTopCategories("monthly", "Monthly"); }}>
                                Monthly
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card-body position-relative" style={{ minHeight: '350px' }}>
                {loading && (
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 10 }}>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                <div style={{ opacity: loading ? 0.3 : 1 }}>
                    <div className="mb-4 d-flex justify-content-center">
                        <ReactApexChart 
                            options={options} 
                            series={series} 
                            type="donut" 
                            height={250} 
                            width="100%"
                        />
                    </div>
                    
                    <div className="mb-4">
                        {internalStats?.map((cat, idx) => {
                            const hexColors = ["#092C4C", "#E04F16", "#FE9F43"];
                            return (
                                <div key={idx} className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="d-flex align-items-center">
                                        <span className="badge rounded-circle me-2" style={{ width: '8px', height: '8px', padding: 0, backgroundColor: hexColors[idx % 3] }}> </span>
                                        <span className="fs-13 text-gray-9">{cat._id}</span>
                                    </div>
                                    <div className="text-end">
                                        <span className="fs-13 fw-bold">{cat.salesCount} Sales</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <h6 className="mb-2 fs-14 fw-bold">General Statistics</h6>
                    <div className="border br-8 overflow-hidden">
                        <div className="d-flex align-items-center justify-content-between border-bottom p-2 bg-light-gray-100">
                            <p className="d-inline-flex align-items-center mb-0 fs-13">
                                <i className="ti ti-square-rounded-filled text-indigo fs-8 me-2" />
                                Total Categories
                            </p>
                            <h5 className="mb-0 fs-14">{totalCategories || 0}</h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 bg-light-gray-100">
                            <p className="d-inline-flex align-items-center mb-0 fs-13">
                                <i className="ti ti-square-rounded-filled text-orange fs-8 me-2" />
                                Total Products
                            </p>
                            <h5 className="mb-0 fs-14">{totalProducts || 0}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCategories;
