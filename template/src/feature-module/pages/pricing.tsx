import RefreshIcon from '../../components/tooltip-content/refresh'
import CollapesIcon from '../../components/tooltip-content/collapes'
import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="add-item d-flex">
                            <div className="page-title">
                                <h4 className="fw-bold">Pricing</h4>
                                <h6>Manage your pricing</h6>
                            </div>
                        </div>
                        <ul className="table-top-head">
                            <RefreshIcon />
                            <CollapesIcon />
                        </ul>
                    </div>
                    {/* Pricing */}
                    <div className="card">
                        <div className="card-body pb-1">
                            <div className="d-flex justify-content-center align-items-center mb-4">
                                <p className="mb-0 me-2">Monthly</p>
                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexSwitchCheckDefault"
                                    />
                                </div>
                                <p>Yearly</p>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card bg-light mb-3">
                                        <div className="card-body">
                                            <p className="mb-1">Basic Plan</p>
                                            <div className="d-flex align-items-center mb-2">
                                                <h4>$29.00 </h4>
                                                <span className="d-inline-flex ms-1">/ Per Month</span>
                                            </div>
                                            <p className="mb-3">Feature for upto 10 users</p>
                                            <Link to="#" className="btn btn-secondary w-100 mb-3">
                                                Subscribe Now
                                            </Link>
                                            <span className="d-block mb-1">Features</span>
                                            <p className="mb-2">Includes in this basic plan </p>
                                            <ul>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Customer Profiles
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Inventory Management
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Discounts &amp; Promotions
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-secondary-transparent rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    24/7 Email &amp; Chat Support
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-secondary-transparent rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    API Access &amp; Integrations
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <span className="pricing-check bg-secondary-transparent rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Reports &amp; Analytics
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card pricing-active Position-relative mb-3">
                                        <span className="badge bg-pink badge-top">Recommended</span>
                                        <div className="card-body">
                                            <p className="mb-1">Business Plan</p>
                                            <div className="d-flex align-items-center mb-2">
                                                <h4>$69.00 </h4>
                                                <span className="d-inline-flex ms-1">/ Per Month</span>
                                            </div>
                                            <p className="mb-3">Feature for upto 22 users</p>
                                            <Link to="#" className="btn btn-secondary w-100 mb-3">
                                                Subscribe Now
                                            </Link>
                                            <span className="d-block mb-1">Features</span>
                                            <p className="mb-2">Includes in this business plan </p>
                                            <ul>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Customer Profiles
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Inventory Management
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Discounts &amp; Promotions
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    24/7 Email &amp; Chat Support
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-secondary-transparent rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    API Access &amp; Integrations
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <span className="pricing-check bg-secondary-transparent rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Reports &amp; Analytics
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card bg-light mb-3">
                                        <div className="card-body">
                                            <p className="mb-1">Premium Plan</p>
                                            <div className="d-flex align-items-center mb-2">
                                                <h4>$99.00 </h4>
                                                <span className="d-inline-flex ms-1">/ Per Month</span>
                                            </div>
                                            <p className="mb-3">Feature for upto 33 users</p>
                                            <Link to="#" className="btn btn-secondary w-100 mb-3">
                                                Subscribe Now
                                            </Link>
                                            <span className="d-block mb-1">Features</span>
                                            <p className="mb-2">Includes in this premium plan </p>
                                            <ul>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Customer Profiles
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Inventory Management
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Discounts &amp; Promotions
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    24/7 Email &amp; Chat Support
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    API Access &amp; Integrations
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <span className="pricing-check bg-secondary-transparent rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Reports &amp; Analytics
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card bg-light mb-3">
                                        <div className="card-body">
                                            <p className="mb-1">Enterprise Plan</p>
                                            <div className="d-flex align-items-center mb-2">
                                                <h4>$199.00 </h4>
                                                <span className="d-inline-flex ms-1">/ Per Month</span>
                                            </div>
                                            <p className="mb-3">Feature for upto Unlimited users</p>
                                            <Link to="#" className="btn btn-secondary w-100 mb-3">
                                                Subscribe Now
                                            </Link>
                                            <span className="d-block mb-1">Features</span>
                                            <p className="mb-2">Includes in this enterprise plan </p>
                                            <ul>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Customer Profiles
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Inventory Management
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Discounts &amp; Promotions
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    24/7 Email &amp; Chat Support
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    API Access &amp; Integrations
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <span className="pricing-check bg-success rounded-circle me-2">
                                                        <i className="ti ti-check fs-10" />
                                                    </span>
                                                    Reports &amp; Analytics
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Pricing */}
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

        </div>
    )
}

export default Pricing
