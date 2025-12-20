
import { Link } from "react-router-dom";
import { customer15, logo, logoSmall, logoWhite } from "../../utils/imagepath";
import { all_routes } from "../../routes/all_routes";

const TwoColumnSidebar = () => {
  const route = all_routes;

  return (
    <>
      {/* Two Col Sidebar */}
      <div className="two-col-sidebar" id="two-col-sidebar">
        <div className="sidebar sidebar-twocol">
          <div className="twocol-mini">
            <div className="sidebar-left slimscroll">
              <div
                className="nav flex-column align-items-center nav-pills"
                id="sidebar-tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                <Link
                  to="#"
                  className="nav-link active"
                  title="Dashboard"
                  data-bs-toggle="tab"
                  data-bs-target="#dashboard"
                >
                  <i className="ti ti-smart-home" />
                </Link>
                <Link
                  to="#"
                  className="nav-link "
                  title="Super Admin"
                  data-bs-toggle="tab"
                  data-bs-target="#super-admin"
                >
                  <i className="ti ti-user-star" />
                </Link>
                <Link
                  to="#"
                  className="nav-link "
                  title="Apps"
                  data-bs-toggle="tab"
                  data-bs-target="#application"
                >
                  <i className="ti ti-layout-grid-add" />
                </Link>
                <Link
                  to="#"
                  className="nav-link"
                  title="Layout"
                  data-bs-toggle="tab"
                  data-bs-target="#layout"
                >
                  <i className="ti ti-layout-board-split" />
                </Link>
                <Link
                  to="#"
                  className="nav-link"
                  title="Inventory"
                  data-bs-toggle="tab"
                  data-bs-target="#inventory"
                >
                  <i className="ti ti-table-plus" />
                </Link>
                <Link
                  to="#"
                  className="nav-link"
                  title="Stock"
                  data-bs-toggle="tab"
                  data-bs-target="#stock"
                >
                  <i className="ti ti-stack-3" />
                </Link>
                <Link
                  to="#"
                  className="nav-link"
                  title="Sales"
                  data-bs-toggle="tab"
                  data-bs-target="#sales"
                >
                  <i className="ti ti-device-laptop" />
                </Link>
                <Link
                  to="#"
                  className="nav-link"
                  title="Finance"
                  data-bs-toggle="tab"
                  data-bs-target="#finance"
                >
                  <i className="ti ti-shopping-cart-dollar" />
                </Link>
                <Link
                  to="#"
                  className="nav-link"
                  title="Hrm"
                  data-bs-toggle="tab"
                  data-bs-target="#hrm"
                >
                  <i className="ti ti-cash" />
                </Link>
                <Link
                  to="#"
                  className="nav-link"
                  title="Reports"
                  data-bs-toggle="tab"
                  data-bs-target="#reports"
                >
                  <i className="ti ti-license" />
                </Link>
                <Link
                  to="#"
                  className="nav-link"
                  title="Pages"
                  data-bs-toggle="tab"
                  data-bs-target="#pages"
                >
                  <i className="ti ti-page-break" />
                </Link>
                <Link
                  to="#"
                  className="nav-link"
                  title="Settings"
                  data-bs-toggle="tab"
                  data-bs-target="#settings"
                >
                  <i className="ti ti-lock-check" />
                </Link>
                <Link
                  to="#"
                  className="nav-link "
                  title="UI Elements"
                  data-bs-toggle="tab"
                  data-bs-target="#ui-elements"
                >
                  <i className="ti ti-ux-circle" />
                </Link>
                <Link
                  to="#"
                  className="nav-link"
                  title="Extras"
                  data-bs-toggle="tab"
                  data-bs-target="#extras"
                >
                  <i className="ti ti-vector-triangle" />
                </Link>
              </div>
            </div>
          </div>
          <div className="sidebar-right">
            <>
              {/* Logo */}
              <div className="sidebar-logo">
                <Link to={route.newdashboard} className="logo logo-normal">
                  <img src={logo} alt="Img" />
                </Link>
                <Link to={route.newdashboard} className="logo logo-white">
                  <img src={logoWhite} alt="Img" />
                </Link>
                <Link to={route.newdashboard} className="logo-small">
                  <img src={logoSmall} alt="Img" />
                </Link>
              </div>
              {/* /Logo */}
            </>

            <div className="sidebar-scroll">
              <div className="text-center rounded bg-light p-3 mb-3 user-profile">
                <div className="avatar avatar-lg online mb-3">
                  <img
                    src={customer15}
                    alt="Img"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h6 className="fs-12 fw-bold mb-1">Adrian Herman</h6>
                <p className="fs-10 mb-0">System Admin</p>
              </div>
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="dashboard">
                  <ul>
                    <li className="menu-title">
                      <span>MAIN</span>
                    </li>
                    <li>
                      <Link to={route.dashboard} className="active">
                        Admin Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to={route.newdashboard}>Admin Dashboard 2</Link>
                    </li>
                    <li>
                      <Link to={route.salesdashboard}>Sales Dashboard</Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="super-admin">
                  <ul>
                    <li className="menu-title">
                      <span>SUPER ADMIN</span>
                    </li>
                    <li>
                      <Link to={route.superadmindashboard}>Dashboard</Link>
                    </li>
                    <li>
                      <Link to={route.companies}>Companies</Link>
                    </li>
                    <li>
                      <Link to={route.subscription}>Subscriptions</Link>
                    </li>
                    <li>
                      <Link to={route.packagelist}>Packages</Link>
                    </li>
                    <li>
                      <Link to={route.domain}>Domain</Link>
                    </li>
                    <li>
                      <Link to={route.purchasetransaction}>
                        Purchase Transaction
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="application">
                  <ul>
                    <li>
                      <Link to="chat">Chat</Link>
                    </li>
                    <li className="submenu submenu-two">
                      <Link to="#">
                        Call
                        <span className="menu-arrow inside-submenu" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.videocall}>Video Call</Link>
                        </li>
                        <li>
                          <Link to={route.audiocall}>Audio Call</Link>
                        </li>
                        <li>
                          <Link to={route.callhistory}>Call History</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={route.calendars}>Calendar</Link>
                    </li>
                    {/* <li>
                                            <Link to="contacts">Contacts</Link>
                                        </li> */}
                    <li>
                      <Link to={route.email}>Email</Link>
                    </li>
                    <li>
                      <Link to={route.todo}>To Do</Link>
                    </li>
                    <li>
                      <Link to={route.notes}>Notes</Link>
                    </li>
                    <li>
                      <Link to={route.filemanager}>File Manager</Link>
                    </li>
                    <li>
                      <Link to={route.projects}>Projects</Link>
                    </li>
                    <li className="submenu submenu-two">
                      <Link to="#">
                        Ecommerce
                        <span className="menu-arrow inside-submenu" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.product}>Products</Link>
                        </li>
                        <li>
                          <Link to={route.orders}>Orders</Link>
                        </li>
                        <li>
                          <Link to={route.customer}>Customers</Link>
                        </li>
                        <li>
                          <Link to={route.cart}>Cart</Link>
                        </li>
                        <li>
                          <Link to={route.checkout}>Checkout</Link>
                        </li>
                        <li>
                          <Link to={route.wishlist}>Wishlist</Link>
                        </li>
                        <li>
                          <Link to={route.reviews}>Reviews</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={route.SocialFeed}>Social Feed</Link>
                    </li>
                    <li>
                      <Link to={route.searchlist}>Search List</Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="layout">
                  <ul>
                    <li className="menu-title">
                      <span>LAYOUT</span>
                    </li>
                    <li>
                      <Link to={all_routes.Horizontal}>Horizontal</Link>
                    </li>
                    <li>
                      <Link to={all_routes.Detached}>Detached</Link>
                    </li>
                    <li>
                      <Link to={all_routes.TwoColumn}>Two Column</Link>
                    </li>
                    <li>
                      <Link to={all_routes.Hovered}>Hovered</Link>
                    </li>
                    <li>
                      <Link to={all_routes.Boxed}>Boxed</Link>
                    </li>
                    <li>
                      <Link to={all_routes.RTL}>RTL</Link>
                    </li>
                    <li>
                      <Link to={all_routes.Dark}>Dark</Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="inventory">
                  <ul>
                    <li className="menu-title">
                      <span>Inventory</span>
                    </li>
                    <li>
                      <Link to={route.productlist}>
                        <span>Products</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.addproduct}>
                        <span>Create Product</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.expiredproduct}>
                        <span>Expired Products</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.lowstock}>
                        <span>Low Stocks</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.categorylist}>
                        <span>Category</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.subcategories}>
                        <span>Sub Category</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.brandlist}>
                        <span>Brands</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.units}>
                        <span>Units</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.variantattributes}>
                        <span>Variant Attributes</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.warranty}>
                        <span>Warranties</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.barcode}>
                        <span>Print Barcode</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.qrcode}>
                        <span>Print QR Code</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="stock">
                  <ul>
                    <li className="menu-title">
                      <span>Stock</span>
                    </li>
                    <li>
                      <Link to={route.managestock}>
                        <span>Manage Stock</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.stockadjustment}>
                        <span>Stock Adjustment</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.stocktransfer}>
                        <span>Stock Transfer</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="sales">
                  <ul>
                    <li className="menu-title">
                      <span>Sales</span>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Sales</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.onlineorder}>Online Orders</Link>
                        </li>
                        <li>
                          <Link to={route.posorder}>POS Orders</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={route.invoice}>
                        <span>Invoices</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.salesreturn}>
                        <span>Sales Return</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.quotationlist}>
                        <span>Quotation</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>POS</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.pos}>POS 1</Link>
                        </li>
                        <li>
                          <Link to={route.pos2}>POS 2</Link>
                        </li>
                        <li>
                          <Link to={route.pos3}>POS 3</Link>
                        </li>
                        <li>
                          <Link to={route.pos4}>POS 4</Link>
                        </li>
                        <li>
                          <Link to={route.pos5}>POS 5</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="finance">
                  <ul>
                    <li className="menu-title">
                      <span>FINANCE &amp; ACCOUNTS</span>
                    </li>
                    <li>
                      <Link to={route.coupons}>
                        <span>Coupons</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.GiftCard}>
                        <span>Gift Cards</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Discount</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.discountPlan}>Discount Plan</Link>
                        </li>
                        <li>
                          <Link to={route.discount}>Discount</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={route.purchaselist}>
                        <span>Purchases</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.purchaseorderreport}>
                        <span>Purchase Order</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.purchasereturn}>
                        <span>Purchase Return</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Expenses</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.expenselist}>Expenses</Link>
                        </li>
                        <li>
                          <Link to={route.expensecategory}>
                            Expense Category
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Income</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.incomelist}>Income</Link>
                        </li>
                        <li>
                          <Link to={route.incomecategory}>Income Category</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={route.accountlist}>
                        <span>Bank Accounts</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.moneytransfer}>
                        <span>Money Transfer</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.balancesheet}>
                        <span>Balance Sheet</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.trailbalance}>
                        <span>Trial Balance</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.cashflow}>
                        <span>Cash Flow</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.accountstatement}>
                        <span>Account Statement</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.customer}>
                        <span>Customers</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.biller}>
                        <span>Billers</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.suppliers}>
                        <span>Suppliers</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.storelist}>
                        <span>Stores</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.warehouses}>
                        <span>Warehouses</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="hrm">
                  <ul>
                    <li className="menu-title">
                      <span>Hrm</span>
                    </li>
                    <li>
                      <Link to={route.employeegrid}>
                        <span>Employees</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.departmentgrid}>
                        <span>Departments</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.designation}>
                        <span>Designation</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.shift}>
                        <span>Shifts</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Attendence</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.attendanceemployee}>Employee</Link>
                        </li>
                        <li>
                          <Link to={route.attendanceadmin}>Admin</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Leaves</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.leavesadmin}>Admin Leaves</Link>
                        </li>
                        <li>
                          <Link to={route.leavesemployee}>Employee Leaves</Link>
                        </li>
                        <li>
                          <Link to={route.leavestype}>Leave Types</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={route.holidays}>
                        <span>Holidays</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Payroll</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.payrollList}>Employee Salary</Link>
                        </li>
                        <li>
                          <Link to={route.payslip}>Payslip</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="reports">
                  <ul>
                    <li className="menu-title">
                      <span>Reports</span>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Sales Report</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.salesreport}>Sales Report</Link>
                        </li>
                        <li>
                          <Link to={route.bestseller}>Best Seller</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={route.purchasereport}>
                        <span>Purchase report</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Inventory Report</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.inventoryreport}>
                            Inventory Report
                          </Link>
                        </li>
                        <li>
                          <Link to={route.stockhistory}>Stock History</Link>
                        </li>
                        <li>
                          <Link to={route.soldstock}>Sold Stock</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={route.invoicereport}>
                        <span>Invoice Report</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Supplier Report</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.supplierreport}>Supplier Report</Link>
                        </li>
                        <li>
                          <Link to={route.supplierduereport}>
                            Supplier Due Report
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Customer Report</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.customerreport}>Customer Report</Link>
                        </li>
                        <li>
                          <Link to={route.customerduereport}>
                            Customer Due Report
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Product Report</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.product}>Product Report</Link>
                        </li>
                        <li>
                          <Link to={route.productexpiredreport}>
                            Product Expiry Report
                          </Link>
                        </li>
                        <li>
                          <Link to={route.productquantityreport}>
                            Product Quantity Alert
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={route.expensereport}>
                        <span>Expense Report</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.incomereport}>
                        <span>Income Report</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.taxreport}>
                        <span>Tax Report</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.profitloss}>
                        <span>Profit &amp; Loss</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.annualreport}>
                        <span>Annual Report</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="pages">
                  <ul>
                    <li className="menu-title">
                      <span>Pages</span>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Pages</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.pagesList}>Pages</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Blog</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.allBlogs}>All Blog</Link>
                        </li>
                        <li>
                          <Link to={route.blogTag}>Blog Tags</Link>
                        </li>
                        <li>
                          <Link to={route.categorylist}>Categories</Link>
                        </li>
                        <li>
                          <Link to={route.blogComments}>Blog Comments</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Location</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.counter}>Countries</Link>
                        </li>
                        <li>
                          <Link to={route.states}>States</Link>
                        </li>
                        <li>
                          <Link to={route.cities}>Cities</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={route.testimonial}>
                        <span>Testimonials</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.faq}>
                        <span>FAQ</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.users}>
                        <span>Users</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.rolespermission}>
                        <span>Roles &amp; Permissions</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.deleteaccount}>
                        <span>Delete Account Request</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={route.profile}>
                        <span>Profile</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Authentication</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li className="submenu submenu-two">
                          <Link to="#">
                            Login
                            <span className="menu-arrow inside-submenu" />
                          </Link>
                          <ul>
                            <li>
                              <Link to={route.signin}>Cover</Link>
                            </li>
                            <li>
                              <Link to={route.signintwo}>Illustration</Link>
                            </li>
                            <li>
                              <Link to={route.signinthree}>Basic</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu submenu-two">
                          <Link to="#">
                            Register
                            <span className="menu-arrow inside-submenu" />
                          </Link>
                          <ul>
                            <li>
                              <Link to={route.register}>Cover</Link>
                            </li>
                            <li>
                              <Link to={route.registerTwo}>Illustration</Link>
                            </li>
                            <li>
                              <Link to={route.registerThree}>Basic</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu submenu-two">
                          <Link to="#">
                            Forgot Password
                            <span className="menu-arrow inside-submenu" />
                          </Link>
                          <ul>
                            <li>
                              <Link to={route.forgotPassword}>Cover</Link>
                            </li>
                            <li>
                              <Link to={route.forgotPasswordTwo}>
                                Illustration
                              </Link>
                            </li>
                            <li>
                              <Link to={route.forgotPasswordThree}>Basic</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu submenu-two">
                          <Link to="#">
                            Reset Password
                            <span className="menu-arrow inside-submenu" />
                          </Link>
                          <ul>
                            <li>
                              <Link to={route.resetpassword}>Cover</Link>
                            </li>
                            <li>
                              <Link to={route.resetpasswordTwo}>
                                Illustration
                              </Link>
                            </li>
                            <li>
                              <Link to={route.resetpasswordThree}>Basic</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu submenu-two">
                          <Link to="#">
                            Email Verification
                            <span className="menu-arrow inside-submenu" />
                          </Link>
                          <ul>
                            <li>
                              <Link to={route.emailverification}>Cover</Link>
                            </li>
                            <li>
                              <Link to={route.emailverificationTwo}>
                                Illustration
                              </Link>
                            </li>
                            <li>
                              <Link to={route.emailverificationThree}>
                                Basic
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu submenu-two">
                          <Link to="#">
                            2 Step Verification
                            <span className="menu-arrow inside-submenu" />
                          </Link>
                          <ul>
                            <li>
                              <Link to={route.twostepverification}>Cover</Link>
                            </li>
                            <li>
                              <Link to={route.twostepverificationTwo}>
                                Illustration
                              </Link>
                            </li>
                            <li>
                              <Link to={route.twostepverificationThree}>
                                Basic
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to={route.lockscreen}>Lock Screen</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Error Pages</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.error404}>404 Error </Link>
                        </li>
                        <li>
                          <Link to={route.error500}>500 Error </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={route.blankpage}>
                        <span>Blank Page</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to={route.pricing}>
                        <span>Pricing</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to={route.comingsoon}>
                        <span>Coming Soon</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to={route.undermaintenance}>
                        <span>Under Maintenance</span>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="settings">
                  <ul>
                    <li className="menu-title">
                      <span>Settings</span>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>General Settings</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.generalsettings}>Profile</Link>
                        </li>
                        <li>
                          <Link to={route.securitysettings}>Security</Link>
                        </li>
                        <li>
                          <Link to={route.notification}>Notifications</Link>
                        </li>
                        <li>
                          <Link to={route.connectedapps}>Connected Apps</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Website Settings</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.systemsettings}>System Settings</Link>
                        </li>
                        <li>
                          <Link to={route.companysettings}>
                            Company Settings{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to={route.localizationsettings}>
                            Localization
                          </Link>
                        </li>
                        <li>
                          <Link to={route.prefixes}>Prefixes</Link>
                        </li>
                        <li>
                          <Link to={route.preference}>Preference</Link>
                        </li>
                        <li>
                          <Link to={route.appearance}>Appearance</Link>
                        </li>
                        <li>
                          <Link to={route.socialauthendication}>
                            Social Authentication
                          </Link>
                        </li>
                        <li>
                          <Link to={route.languagesettings}>Language</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>App Settings</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li className="submenu submenu-two">
                          <Link to="#">
                            Invoice
                            <span className="menu-arrow inside-submenu" />
                          </Link>
                          <ul>
                            <li>
                              <Link to={route.invoicesettings}>
                                Invoice Settings
                              </Link>
                            </li>
                            <li>
                              <Link to={route.invoice}>Invoice Template</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to={route.printersettings}>Printer</Link>
                        </li>
                        <li>
                          <Link to={route.possettings}>POS</Link>
                        </li>
                        <li>
                          <Link to={route.customfields}>Custom Fields</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>System Settings</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li className="submenu submenu-two">
                          <Link to="#">
                            Email
                            <span className="menu-arrow inside-submenu" />
                          </Link>
                          <ul>
                            <li>
                              <Link to={route.emailsettings}>
                                Email Settings
                              </Link>
                            </li>
                            <li>
                              <Link to={route.email}>Email Template</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu submenu-two">
                          <Link to="#">
                            SMS
                            <span className="menu-arrow inside-submenu" />
                          </Link>
                          <ul>
                            <li>
                              <Link to={route.smssettings}>SMS Settings</Link>
                            </li>
                            <li>
                              <Link to={route.smstemplate}>SMS Template</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to={route.otpsettings}>OTP</Link>
                        </li>
                        <li>
                          <Link to={route.gdbrsettings}>GDPR Cookies</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Financial Settings</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to="payment-gateway-settings">
                            Payment Gateway
                          </Link>
                        </li>
                        <li>
                          <Link to={route.banksettingslist}>Bank Accounts</Link>
                        </li>
                        <li>
                          <Link to={route.taxrates}>Tax Rates</Link>
                        </li>
                        <li>
                          <Link to={route.currencysettings}>Currencies</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Other Settings</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.storagesettings}>Storage</Link>
                        </li>
                        <li>
                          <Link to={route.banipaddress}>Ban IP Address</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={route.signin}>
                        <span>Logout</span>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="ui-elements">
                  <ul>
                    <li className="menu-title">
                      <span>Ui Interface</span>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Base UI</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.alerts}>Alerts</Link>
                        </li>
                        <li>
                          <Link to={route.accordion}>Accordion</Link>
                        </li>
                        <li>
                          <Link to={route.avatar}>Avatar</Link>
                        </li>
                        <li>
                          <Link to={route.badges}>Badges</Link>
                        </li>
                        <li>
                          <Link to={route.borders}>Border</Link>
                        </li>
                        <li>
                          <Link to={route.buttons}>Buttons</Link>
                        </li>
                        <li>
                          <Link to={route.buttonsgroup}>Button Group</Link>
                        </li>
                        <li>
                          <Link to={route.breadcrumb}>Breadcrumb</Link>
                        </li>
                        <li>
                          <Link to={route.cards}>Card</Link>
                        </li>
                        <li>
                          <Link to={route.carousel}>Carousel</Link>
                        </li>
                        <li>
                          <Link to={route.colors}>Colors</Link>
                        </li>
                        <li>
                          <Link to={route.dropdowns}>Dropdowns</Link>
                        </li>
                        <li>
                          <Link to={route.grid}>Grid</Link>
                        </li>
                        <li>
                          <Link to={route.images}>Images</Link>
                        </li>
                        <li>
                          <Link to={route.lightbox}>Lightbox</Link>
                        </li>
                        <li>
                          <Link to={route.media}>Media</Link>
                        </li>
                        <li>
                          <Link to={route.modals}>Modals</Link>
                        </li>
                        <li>
                          <Link to={route.offcanvas}>Offcanvas</Link>
                        </li>
                        <li>
                          <Link to={route.pagination}>Pagination</Link>
                        </li>
                        <li>
                          <Link to={route.popover}>Popovers</Link>
                        </li>
                        <li>
                          <Link to={route.progress}>Progress</Link>
                        </li>
                        <li>
                          <Link to={route.placeholder}>Placeholders</Link>
                        </li>
                        <li>
                          <Link to={route.rangeslider}>Range Slider</Link>
                        </li>
                        <li>
                          <Link to={route.spinner}>Spinner</Link>
                        </li>
                        <li>
                          <Link to={route.sweetalerts}>Sweet Alerts</Link>
                        </li>
                        <li>
                          <Link to={route.navtabs}>Tabs</Link>
                        </li>
                        <li>
                          <Link to={route.toasts}>Toasts</Link>
                        </li>
                        <li>
                          <Link to={route.tooltip}>Tooltips</Link>
                        </li>
                        <li>
                          <Link to={route.typography}>Typography</Link>
                        </li>
                        <li>
                          <Link to={route.video}>Video</Link>
                        </li>
                        <li>
                          <Link to={route.Sortable}>Sortable</Link>
                        </li>
                        <li>
                          <Link to={route.SwiperJs}>Swiperjs</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Advanced UI</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.ribbon}>Ribbon</Link>
                        </li>
                        <li>
                          <Link to={route.clipboard}>Clipboard</Link>
                        </li>
                        <li>
                          <Link to={route.draganddrop}>Drag &amp; Drop</Link>
                        </li>
                        <li>
                          <Link to={route.rangeslider}>Range Slider</Link>
                        </li>
                        <li>
                          <Link to={route.rating}>Rating</Link>
                        </li>
                        <li>
                          <Link to={route.texteditor}>Text Editor</Link>
                        </li>
                        <li>
                          <Link to={route.counter}>Counter</Link>
                        </li>
                        <li>
                          <Link to={route.scrollbar}>Scrollbar</Link>
                        </li>
                        <li>
                          <Link to={route.stickynote}>Sticky Note</Link>
                        </li>
                        <li>
                          <Link to={route.timeline}>Timeline</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Charts</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.apexchart}>Apex Charts</Link>
                        </li>
                        <li>
                          <Link to={route.chartjs}>Chart Js</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Icons</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.fontawesome}>Fontawesome Icons</Link>
                        </li>
                        <li>
                          <Link to={route.feathericon}>Feather Icons</Link>
                        </li>
                        <li>
                          <Link to={route.ionicicons}>Ionic Icons</Link>
                        </li>
                        <li>
                          <Link to={route.materialicons}>Material Icons</Link>
                        </li>
                        <li>
                          <Link to={route.pe7icons}>Pe7 Icons</Link>
                        </li>
                        <li>
                          <Link to={route.simpleline}>Simpleline Icons</Link>
                        </li>
                        <li>
                          <Link to={route.themifyicons}>Themify Icons</Link>
                        </li>
                        <li>
                          <Link to={route.iconweather}>Weather Icons</Link>
                        </li>
                        <li>
                          <Link to={route.typicons}>Typicon Icons</Link>
                        </li>
                        <li>
                          <Link to={route.flagicons}>Flag Icons</Link>
                        </li>
                        <li>
                          <Link to={route.TablerIcon}>Tabler Icons</Link>
                        </li>
                        <li>
                          <Link to={route.BootstrapIcon}>Bootstrap Icons</Link>
                        </li>
                        <li>
                          <Link to={route.remixIcon}>Remix Icons</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Forms</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li className="submenu submenu-two">
                          <Link to="#">
                            Form Elements
                            <span className="menu-arrow inside-submenu" />
                          </Link>
                          <ul>
                            <li>
                              <Link to={route.basicinput}>Basic Inputs</Link>
                            </li>
                            <li>
                              <Link to={route.checkboxradio}>
                                Checkbox &amp; Radios
                              </Link>
                            </li>
                            <li>
                              <Link to={route.inputgroup}>Input Groups</Link>
                            </li>
                            <li>
                              <Link to={route.gridgutters}>
                                Grid &amp; Gutters
                              </Link>
                            </li>
                            <li>
                              <Link to={route.formselect}>Form Select</Link>
                            </li>
                            <li>
                              <Link to={route.inputgroup}>Input Masks</Link>
                            </li>
                            <li>
                              <Link to={route.fileupload}>File Uploads</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu submenu-two">
                          <Link to="#">
                            Layouts
                            <span className="menu-arrow inside-submenu" />
                          </Link>
                          <ul>
                            <li>
                              <Link to={route.formhorizontal}>
                                Horizontal Form
                              </Link>
                            </li>
                            <li>
                              <Link to={route.formvertical}>Vertical Form</Link>
                            </li>
                            <li>
                              <Link to={route.floatinglabel}>
                                Floating Labels
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to={route.formvalidation}>Form Validation</Link>
                        </li>
                        <li>
                          <Link to={route.select2}>Select2</Link>
                        </li>
                        <li>
                          <Link to={route.wizard}>Form Wizard</Link>
                        </li>
                        <li>
                          <Link to={route.FormPicker}>Form Picker</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Tables</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.tablebasic}>Basic Tables </Link>
                        </li>
                        <li>
                          <Link to={route.datatable}>Data Table </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Maps</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to={route.Leaflets}>Leaflet</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="extras">
                  <ul>
                    <li className="menu-title">
                      <span>Help</span>
                    </li>
                    <li>
                      <Link to="https://dreamspos.dreamstechnologies.com/documentation/react.html">
                        <span>Documentation</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://dreamspos.dreamstechnologies.com/documentation/changelog.html">
                        <span>Changelog v2.2.2</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="#">
                        <span>Multi Level</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">Level 1.1</Link>
                        </li>
                        <li className="submenu submenu-two">
                          <Link to="#">
                            Level 1.2
                            <span className="menu-arrow inside-submenu" />
                          </Link>
                          <ul>
                            <li>
                              <Link to="#">Level 2.1</Link>
                            </li>
                            <li className="submenu submenu-two submenu-three">
                              <Link to="#">
                                Level 2.2
                                <span className="menu-arrow inside-submenu inside-submenu-two" />
                              </Link>
                              <ul>
                                <li>
                                  <Link to="#">Level 3.1</Link>
                                </li>
                                <li>
                                  <Link to="#">Level 3.2</Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Two Col Sidebar */}
    </>
  );
};

export default TwoColumnSidebar;
