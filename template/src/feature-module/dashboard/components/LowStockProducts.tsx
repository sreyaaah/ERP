import React from "react";
import { Link } from "react-router-dom";
import { product6 } from "../../../utils/imagepath";
import { getImageUrl } from "../../../utils/imageUtils";

interface LowStockProductsProps {
  products: any[];
}

const LowStockProducts: React.FC<LowStockProductsProps> = ({ products }) => {
  return (
    <div className="card flex-fill">
      <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div className="d-inline-flex align-items-center">
          <span className="title-icon bg-soft-danger fs-16 me-2">
            <i className="ti ti-alert-triangle" />
          </span>
          <h5 className="card-title mb-0">Low Stock Products</h5>
        </div>
      </div>
      <div className="card-body custom-scrollbar" style={{ height: '350px', overflowY: 'auto' }}>
        {products?.map((item: any, index: number) => (
          <div key={index} className={`d-flex align-items-center justify-content-between ${index < products.length - 1 ? 'mb-4' : 'mb-0'}`}>
            <div className="d-flex align-items-center">
              <Link to="#" className="avatar avatar-lg">
                <img src={getImageUrl(item.images?.[0]?.url) || product6} alt="img" />
              </Link>
              <div className="ms-2">
                <h6 className="fw-bold mb-1">
                  <Link to="#">{item.product}</Link>
                </h6>
                <p className="fs-13">ID : #{item.sku || item.itemCode}</p>
              </div>
            </div>
            <div className="text-end">
              <p className="fs-13 mb-1">Instock</p>
              <h6 className="text-orange fw-bold">{item.quantity?.toString().padStart(2, '0')}</h6>
            </div>
          </div>
        ))}
        {(!products || products.length === 0) && (
          <div key="no-low-stock" className="text-center p-3">No low stock products found</div>
        )}
      </div>
    </div>
  );
};

export default LowStockProducts;
