
import { Link } from "react-router-dom";
import "bootstrap-daterangepicker/daterangepicker.css";
import { useState, useEffect } from "react";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";
import CommonSelect from "../../components/select/common-select";
import { dashboardService } from "../services/dashboard.service";

import SummaryCards from "./components/SummaryCards";
import StatCards from "./components/StatCards";
import RevenueWidgets from "./components/RevenueWidgets";
import SalesDayChart from "./components/SalesDayChart";
import OverallInfo from "./components/OverallInfo";
import TopSellingProducts from "./components/TopSellingProducts";
import LowStockProducts from "./components/LowStockProducts";
import RecentSalesList from "./components/RecentSalesList";
import RecentTransactions from "./components/RecentTransactions";
import TopCustomers from "./components/TopCustomers";
import TopCategories from "./components/TopCategories";
import OrderStatistics from "./components/OrderStatistics";
import SalesStatistics from "./components/SalesStatistics";

const NewDashboard = () => {
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedResponsible, setSelectedResponsible] = useState(null);

  const [dashboardData, setDashboardData] = useState<any>(null);
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState<{start: string, end: string} | null>(null);


  const fetchDashboardData = async (start?: string, end?: string) => {
    try {
      setLoading(true);
      const [summary, charts] = await Promise.all([
        dashboardService.getSummary(start, end),
        dashboardService.getCharts()
      ]);
      if (summary.status) setDashboardData(summary.data);
      if (charts.status) setChartData(charts.data);
    } catch (error) {
      console.error("Dashboard fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData(dateRange?.start, dateRange?.end);
  }, [dateRange]);

  const handleRangeChange = (start: string, end: string) => {
    setDateRange({ start, end });
  };

  const Warehouse = [
    { value: "Lobar Handy", label: "Lobar Handy" },
    { value: "Quaint Warehouse", label: "Quaint Warehouse" },
  ];
  const Store = [
    { value: "Selosy", label: "Selosy" },
    { value: "Logerro", label: "Logerro" },
  ];
  const Responsible = [
    { value: "Steven", label: "Steven" },
    { value: "Gravely", label: "Gravely" },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {loading && (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <div style={{ display: loading ? 'none' : 'block' }}>
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-2">
              <div className="mb-3">
                <h1 className="mb-1">Welcome, Admin</h1>
                <p className="fw-medium">
                  You have <span className="text-primary fw-bold">{dashboardData?.summary?.todayInvoiceCount || 0}+</span> Orders, Today
                </p>
              </div>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="input-icon-start position-relative">
                  <span className="input-icon-addon fs-16 text-gray-9">
                    <i className="ti ti-calendar" />
                  </span>
                  <CommonDateRangePicker onRangeChange={handleRangeChange} />
                </div>
                <button 
                  className="btn btn-white d-flex align-items-center gap-2"
                  onClick={() => fetchDashboardData(dateRange?.start, dateRange?.end)}
                >
                  <i className="ti ti-refresh" />
                  Refresh
                </button>
              </div>
            </div>

            <SummaryCards summary={dashboardData?.summary} />
            <RevenueWidgets summary={dashboardData?.summary} />
            
            <div className="row">
                <div className="col-xxl-8 col-xl-7 col-sm-12 col-12 d-flex">
                    <SalesDayChart chartData={dashboardData?.todayChart} />
                </div>
                <div className="col-xxl-4 col-xl-5 d-flex">
                    <OverallInfo summary={dashboardData?.summary} />
                </div>
            </div>

            <div className="row">
               <div className="col-xxl-4 col-md-4 d-flex">
                    <TopSellingProducts products={dashboardData?.topSellingProducts} />
               </div>
               <div className="col-xxl-4 col-md-4 d-flex">
                    <LowStockProducts products={dashboardData?.lowStockProducts} />
               </div>
               <div className="col-xxl-4 col-md-4 d-flex">
                    <RecentSalesList sales={dashboardData?.transactions?.recentSales} />
               </div>
            </div>

            <div className="row">
                <div className="col-xxl-8 col-xl-7 col-sm-12 col-12 d-flex">
                    <RecentTransactions transactions={dashboardData?.transactions} />
                </div>
                <div className="col-xxl-4 col-xl-5 col-sm-12 col-12 d-flex">
                    <SalesStatistics 
                        chartData={chartData} 
                        totalSales={dashboardData?.summary?.totalSales} 
                        totalPurchases={dashboardData?.summary?.totalPurchases} 
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-xxl-4 col-md-6 d-flex">
                    <TopCustomers customers={dashboardData?.topCustomers} />
                </div>
                <div className="col-xxl-4 col-md-6 d-flex">
                    <TopCategories 
                        categoryStats={dashboardData?.categoryStats} 
                        totalCategories={dashboardData?.summary?.categoryCount || 0}
                        totalProducts={dashboardData?.summary?.productCount || 0}
                    />
                </div>
                <div className="col-xxl-4 col-md-12 d-flex">
                    <OrderStatistics orderStats={dashboardData?.orderStats} />
                </div>
            </div>

            <StatCards summary={dashboardData?.summary} />

          </div>
        </div>
        <div className="copyright-footer d-flex align-items-center justify-content-between border-top bg-white gap-3 flex-wrap">
          <p className="fs-13 text-gray-9 mb-0">2014-2025 &copy; DreamsPOS. All Right Reserved</p>
          <p>Designed &amp; Developed By Dreams <Link to="#" className="link-primary">Dreams</Link></p>
        </div>
      </div>

      {/* Add Stock Modal */}
      <div className="modal fade" id="add-stock">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Stock</h4>
              </div>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form action="index.html">
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Warehouse <span className="text-danger ms-1">*</span></label>
                      <CommonSelect
                        filter={false}
                        options={Warehouse}
                        value={selectedWarehouse}
                        onChange={(e: any) => setSelectedWarehouse(e.value)}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Store <span className="text-danger ms-1">*</span></label>
                      <CommonSelect
                        filter={false}
                        options={Store}
                        value={selectedStore}
                        onChange={(e: any) => setSelectedStore(e.value)}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Responsible Person <span className="text-danger ms-1">*</span></label>
                      <CommonSelect
                        filter={false}
                        options={Responsible}
                        value={selectedResponsible}
                        onChange={(e: any) => setSelectedResponsible(e.value)}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="search-form search-form-one mb-0">
                      <label className="form-label">Product <span className="text-danger ms-1">*</span></label>
                      <div className="position-relative">
                        <input type="text" className="form-control" placeholder="Select Product" />
                        <i data-feather="search" className="feather-search"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-md btn-dark me-2" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-md btn-primary">Add Stock</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDashboard;
