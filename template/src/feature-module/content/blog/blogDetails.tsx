
import { Link } from "react-router-dom";

import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import { blog_detail, user01 } from "../../../utils/imagepath";

const BlogDetails = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4 className="fw-bold">Blogs</h4>
              <h6>Manage your blogs</h6>
            </div>
          </div>
          <ul className="table-top-head">
            <RefreshIcon />
            <CollapesIcon />
          </ul>
        </div>
        <div className="card">
          <div className="card-body">
            <h4>Blog Detail</h4>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <img src={blog_detail} className="rounded w-100" alt="Img" />
            </div>
            <div className="mb-3 pb-3 border-bottom">
              <div className="row">
                <div className="col-lg-8">
                  <div>
                    <h5 className="mb-1">
                      What is a POS System? A Beginner’s Guide
                    </h5>
                    <div className="d-flex align-items-center">
                      <p className="me-3 mb-0 border-end pe-3">
                        <i className="ti ti-calendar me-1" />
                        24 Dec 2024
                      </p>
                      <h6 className="d-flex align-items-center">
                        <img
                          src={user01}
                          className="avatar avatar-xs rounded-circle me-2"
                          alt="Img"
                        />
                        Gertrude Bowie
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex align-items-center justify-content-between text-center">
                    <div className="me-3">
                      <h6 className="fs-14 fw-medium">3000</h6>
                      <span className="fs-12 fw-normal">Likes</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">454</h6>
                      <span className="fs-12 fw-normal">Comments</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">102</h6>
                      <span className="fs-12 fw-normal">Share</span>
                    </div>
                    <div className="border-start text-gray ps-3">
                      <h6 className="fs-14 fw-medium">350</h6>
                      <span className="fs-12 fw-normal">Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 pb-3 border-bottom">
              <p className="mb-3">
                A POS (Point of Sale) System is a combination of hardware and
                software designed to facilitate and manage sales transactions in
                retail, restaurants, and other businesses. It is essentially
                where customers make payments for goods or services. A modern
                POS system integrates several functions like inventory
                management, customer relationship management (CRM), and sales
                reporting, making it a crucial tool for businesses. At its core,
                a POS system processes payments, calculates total prices,
                applies discounts, and issues receipts. The hardware typically
                includes a register, barcode scanner, card reader, receipt
                printer, and sometimes a cash drawer. The software, on the other
                hand, manages transactions, tracks sales data, and provides
                detailed insights into business operations, helping business
                owners streamline their processes and make informed decisions.
                Whether you&apos;re running a small shop or a large restaurant,
                understanding and using a POS system effectively can improve
                efficiency, enhance customer service, and help in scaling your
                business.
              </p>
              <p className="mb-3">
                In addition to processing payments, modern POS systems offer a
                variety of features that make them indispensable for business
                owners. These systems can manage inventory, automatically
                updating stock levels as sales are made, and even sending alerts
                when it&apos;s time to reorder products. Sales analytics is
                another key feature, allowing businesses to track performance by
                generating reports on best-selling items, peak sales times, and
                customer preferences. This data can help businesses identify
                trends, optimize their offerings, and adjust pricing strategies.
              </p>
              <p className="mb-0">
                Additionally, POS systems can be integrated with other business
                tools like accounting software, eCommerce platforms, and
                customer support tools, further streamlining operations. With
                advancements in mobile POS technology, businesses can now
                process transactions anywhere, whether on the shop floor or out
                in the field. This flexibility and ease of use have made POS
                systems a must-have for both small businesses and large
                enterprises aiming to enhance operational efficiency and
                customer satisfaction.
              </p>
            </div>
            <div className="d-flex align-items-center flex-wrap row-gap-3">
              <h6 className="me-2">Tags :</h6>
              <Link to="#" className="badge bg-soft-info me-2">
                PointOfSale
              </Link>
              <Link to="#" className="badge bg-soft-info me-2">
                RetailTech
              </Link>
              <Link to="#" className="badge bg-soft-info me-2">
                POSIntegration
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <p className="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
        <p>
          Designed &amp; Developed By{" "}
          <Link to="#" className="text-primary">
            Dreams
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
