import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { product11 } from "../../../utils/imagepath";
import { dashboardService } from "../../services/dashboard.service";
import { getImageUrl } from "../../../utils/imageUtils";

interface TopSellingProductsProps {
  products: any[];
}

const TopSellingProducts: React.FC<TopSellingProductsProps> = ({ products }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("Today");
  const [productList, setProductList] = useState<any[]>(products);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (products && !productList) {
      setProductList(products);
    }
  }, [products]);

  const fetchTopSelling = async (period: string, label: string) => {
    try {
      setLoading(true);
      const res = await dashboardService.getTopSelling(period);
      if (res.status) {
        setProductList(res.data);
        setSelectedPeriod(label);
      }
    } catch (error) {
      console.error("Error fetching top selling:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card flex-fill">
      <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div className="d-inline-flex align-items-center">
          <span className="title-icon bg-soft-orange fs-16 me-2">
            <i className="ti ti-box" />
          </span>
          <h5 className="card-title mb-0">Top Selling Products</h5>
        </div>
        <div className="dropdown">
          <Link
            to="#"
            className="dropdown-toggle btn btn-sm btn-white d-flex align-items-center"
            data-bs-toggle="dropdown"
          >
            {selectedPeriod}
          </Link>
          <ul className="dropdown-menu p-3">
            <li>
              <Link 
                to="#" 
                className="dropdown-item" 
                onClick={(e) => { e.preventDefault(); fetchTopSelling("today", "Today"); }}
              >
                Today
              </Link>
            </li>
            <li>
              <Link 
                to="#" 
                className="dropdown-item" 
                onClick={(e) => { e.preventDefault(); fetchTopSelling("monthly", "Monthly"); }}
              >
                Monthly
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body sell-product position-relative" style={{ minHeight: '200px' }}>
        {loading && (
          <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 10 }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div style={{ opacity: loading ? 0.3 : 1 }}>
          {productList?.map((item: any, index: number) => (
            <div key={index} className={`d-flex align-items-center justify-content-between ${index < productList.length - 1 ? 'border-bottom' : ''} mb-3 pb-3`}>
              <div className="d-flex align-items-center">
                <Link to="#" className="avatar avatar-lg">
                  <img src={getImageUrl(item.images?.[0]?.url) || product11} alt="img" />
                </Link>
                <div className="ms-2">
                  <h6 className="fw-bold mb-1">
                    <Link to="#">{item.productName}</Link>
                  </h6>
                  <div className="d-flex align-items-center item-list">
                    <p>₹{Math.round(item.totalAmount)?.toLocaleString()}</p>
                    <p>{item.totalQty} Sales</p>
                  </div>
                </div>
              </div>
              <span className="badge bg-outline-success badge-xs d-inline-flex align-items-center">
                <i className="ti ti-arrow-up-left me-1" />
                {((index + 1) * 5) + 70}%
              </span>
            </div>
          ))}
          {(!productList || productList.length === 0) && !loading && (
            <div className="text-center p-3">No top selling products found for this period</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;
