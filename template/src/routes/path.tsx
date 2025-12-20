
import { Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import { all_routes } from "./all_routes";
import { Units } from "../feature-module/inventory/units";
import StoreList from "../feature-module/people/store-list";
import Warehouse from "../feature-module/people/warehouse";

import Apexchart from "../feature-module/uiinterface/charts/apexcharts";
import ChartJs from "../feature-module/uiinterface/charts/chartjs";
import FloatingLabel from "../feature-module/uiinterface/forms/formelements/layouts/floating-label";
import FormHorizontal from "../feature-module/uiinterface/forms/formelements/layouts/form-horizontal";
import FormSelect2 from "../feature-module/uiinterface/forms/formelements/layouts/form-select2";
import FormValidation from "../feature-module/uiinterface/forms/formelements/layouts/form-validation";
import FormVertical from "../feature-module/uiinterface/forms/formelements/layouts/form-vertical";
import FormBasicInputs from "../feature-module/uiinterface/forms/formelements/basic-inputs";
import CheckboxRadios from "../feature-module/uiinterface/forms/formelements/checkbox-radios";
import FileUpload from "../feature-module/uiinterface/forms/formelements/fileupload";

import FormSelect from "../feature-module/uiinterface/forms/formelements/form-select";
import FormWizard from "../feature-module/uiinterface/forms/formelements/form-wizard";
import FormPikers from "../feature-module/uiinterface/forms/formelements/formpickers";
import GridGutters from "../feature-module/uiinterface/forms/formelements/grid-gutters";
import InputGroup from "../feature-module/uiinterface/forms/formelements/input-group";
import BootstrapIcons from "../feature-module/uiinterface/icons/bootstrapicons";
import FlagIcons from "../feature-module/uiinterface/icons/flagicons";
import FontawesomeIcons from "../feature-module/uiinterface/icons/fontawesome";
import MaterialIcons from "../feature-module/uiinterface/icons/materialicon";
import PE7Icons from "../feature-module/uiinterface/icons/pe7icons";
import RemixIcons from "../feature-module/uiinterface/icons/remixIcons";
import TablerIcon from "../feature-module/uiinterface/icons/tablericon";
import ThemifyIcons from "../feature-module/uiinterface/icons/themify";
import TypiconIcons from "../feature-module/uiinterface/icons/typicons";
import Leaflet from "../feature-module/uiinterface/map/leaflet";
import DataTables from "../feature-module/uiinterface/table/data-tables";
import TablesBasic from "../feature-module/uiinterface/table/tables-basic";
import Pos from "../feature-module/pos/pos";
import Accordion from "../feature-module/uiinterface/accordion";




const ProductList = lazy(
  () => import("../feature-module/inventory/productlist")
);
const Dashboard = lazy(() => import("../feature-module/dashboard/Dashboard"));
const AddProduct = lazy(() => import("../feature-module/inventory/addproduct"));
const SalesDashbaord = lazy(
  () => import("../feature-module/dashboard/salesdashbaord")
);
const BrandList = lazy(() => import("../feature-module/inventory/brandlist"));
const VariantAttributes = lazy(
  () => import("../feature-module/inventory/variantattributes")
);
const Warranty = lazy(() => import("../feature-module/inventory/warranty"));
const PrintBarcode = lazy(
  () => import("../feature-module/inventory/printbarcode")
);
const DepartmentGrid = lazy(
  () => import("../feature-module/hrm/departmentgrid")
);
const DepartmentList = lazy(
  () => import("../feature-module/hrm/departmentlist")
);
const Designation = lazy(() => import("../feature-module/hrm/designation"));
const Shift = lazy(() => import("../feature-module/hrm/shift"));
const AttendanceEmployee = lazy(
  () => import("../feature-module/hrm/attendance-employee")
);
const Chats = lazy(() => import("../feature-module/application/chat"));
const ExpensesList = lazy(
  () => import("../feature-module/finance-accounts/expenseslist")
);
const ExpenseCategory = lazy(
  () => import("../feature-module/finance-accounts/expensecategory")
);
const ExpiredProduct = lazy(
  () => import("../feature-module/inventory/expiredproduct")
);
const LowStock = lazy(() => import("../feature-module/inventory/lowstock"));
const CategoryList = lazy(
  () => import("../feature-module/inventory/categorylist")
);
const SubCategories = lazy(
  () => import("../feature-module/inventory/subcategories")
);
const EditProduct = lazy(
  () => import("../feature-module/inventory/editproduct")
);
const Videocall = lazy(() => import("../feature-module/application/videocall"));
const Audiocall = lazy(() => import("../feature-module/application/audiocall"));
const Email = lazy(() => import("../feature-module/application/email"));
const Callhistory = lazy(
  () => import("../feature-module/application/callhistory")
);
const QRcode = lazy(() => import("../feature-module/inventory/qrcode"));
const PurchasesList = lazy(
  () => import("../feature-module/purchases/purchase-list")
);
const PurchaseOrderReport = lazy(
  () => import("../feature-module/purchases/purchase-order-report")
);
const PurchaseReturns = lazy(
  () => import("../feature-module/purchases/purchase-returns")
);
const Appearance = lazy(
  () => import("../feature-module/settings/websitesettings/appearance")
);
const SocialAuthentication = lazy(
  () =>
    import("../feature-module/settings/websitesettings/socialauthentication")
);
const LanguageSettings = lazy(
  () => import("../feature-module/settings/websitesettings/languagesettings")
);
const InvoiceSettings = lazy(
  () => import("../feature-module/settings/appsetting/invoicesettings")
);
const PrinterSettings = lazy(
  () => import("../feature-module/settings/appsetting/printersettings")
);
const PosSettings = lazy(
  () => import("../feature-module/settings/websitesettings/possettings")
);
const CustomFields = lazy(
  () => import("../feature-module/settings/websitesettings/customfields")
);
const EmailSettings = lazy(
  () => import("../feature-module/settings/systemsettings/emailsettings")
);
const SmsGateway = lazy(
  () => import("../feature-module/settings/systemsettings/smsgateway")
);
const OtpSettings = lazy(
  () => import("../feature-module/settings/systemsettings/otpsettings")
);
const GdprSettings = lazy(
  () => import("../feature-module/settings/systemsettings/gdprsettings")
);
const PaymentGateway = lazy(
  () => import("../feature-module/settings/financialsettings/paymentgateway")
);
const BankSetting = lazy(
  () => import("../feature-module/settings/financialsettings/banksetting")
);
const Customers = lazy(() => import("../feature-module/people/customers"));
const Suppliers = lazy(() => import("../feature-module/people/suppliers"));
const Managestock = lazy(() => import("../feature-module/stock/manage-stock"));
const StockAdjustment = lazy(
  () => import("../feature-module/stock/stock-adjustment")
);
const StockTransfer = lazy(
  () => import("../feature-module/stock/stock-transfer")
);
const SalesReport = lazy(() => import("../feature-module/Reports/salesreport"));
const PurchaseReport = lazy(
  () => import("../feature-module/Reports/purchasereport")
);
const InventoryReport = lazy(
  () => import("../feature-module/Reports/inventoryreport")
);
// const Invoicereport = lazy(() => import("../feature-module/Reports/invoicereport"));
const SupplierReport = lazy(
  () => import("../feature-module/Reports/supplierreport")
);
const CustomerReport = lazy(
  () => import("../feature-module/Reports/customerreport")
);
const ExpenseReport = lazy(
  () => import("../feature-module/Reports/expensereport")
);
const IncomeReport = lazy(
  () => import("../feature-module/Reports/incomereport")
);
const TaxReport = lazy(() => import("../feature-module/Reports/taxreport"));
const ProfitLoss = lazy(() => import("../feature-module/Reports/profitloss"));
const GeneralSettings = lazy(
  () => import("../feature-module/settings/generalsettings/generalsettings")
);
const SecuritySettings = lazy(
  () => import("../feature-module/settings/generalsettings/securitysettings")
);
const Notification = lazy(
  () => import("../feature-module/settings/generalsettings/notification")
);
const ConnectedApps = lazy(
  () => import("../feature-module/settings/generalsettings/connectedapps")
);
const SystemSettings = lazy(
  () => import("../feature-module/settings/websitesettings/systemsettings")
);
const CompanySettings = lazy(
  () => import("../feature-module/settings/websitesettings/companysettings")
);
const LocalizationSettings = lazy(
  () =>
    import("../feature-module/settings/websitesettings/localizationsettings")
);
const Prefixes = lazy(
  () => import("../feature-module/settings/websitesettings/prefixes")
);
const Preference = lazy(
  () => import("../feature-module/settings/websitesettings/preference")
);
const BanIpaddress = lazy(
  () => import("../feature-module/settings/othersettings/ban-ipaddress")
);
const StorageSettings = lazy(
  () => import("../feature-module/settings/othersettings/storagesettings")
);
const AttendanceAdmin = lazy(
  () => import("../feature-module/hrm/attendanceadmin")
);
const Payslip = lazy(() => import("../feature-module/hrm/payslip"));
const Holidays = lazy(() => import("../feature-module/hrm/holidays"));
const SalesList = lazy(() => import("../feature-module/sales/saleslist"));
const SalesReturn = lazy(() => import("../feature-module/sales/salesreturn"));
const QuotationList = lazy(
  () => import("../feature-module/sales/quotationlist")
);
const Notes = lazy(() => import("../feature-module/application/notes"));
const FileManager = lazy(
  () => import("../feature-module/application/filemanager")
);
const Profile = lazy(() => import("../feature-module/pages/profile"));
const Signin = lazy(() => import("../feature-module/pages/authentication/login/signin"));
const SigninTwo = lazy(() => import("../feature-module/pages/authentication/login/signinTwo"));
const SigninThree = lazy(
  () => import("../feature-module/pages/authentication/login/signinThree")
);
const RegisterTwo = lazy(
  () => import("../feature-module/pages/authentication/register/registerTwo")
);
const Register = lazy(
  () => import("../feature-module/pages/authentication/register/register")
);
const RegisterThree = lazy(
  () => import("../feature-module/pages/authentication/register/registerThree")
);
const Forgotpassword = lazy(
  () => import("../feature-module/pages/authentication/forgotpassword/forgotpassword")
);
const ForgotpasswordTwo = lazy(
  () => import("../feature-module/pages/authentication/forgotpassword/forgotpasswordTwo")
);
const ForgotpasswordThree = lazy(
  () => import("../feature-module/pages/authentication/forgotpassword/forgotpasswordThree")
);
const Resetpassword = lazy(
  () => import("../feature-module/pages/authentication/resetpassword/resetpassword")
);
const ResetpasswordTwo = lazy(
  () => import("../feature-module/pages/authentication/resetpassword/resetpasswordTwo")
);
const ResetpasswordThree = lazy(
  () => import("../feature-module/pages/authentication/resetpassword/resetpasswordThree")
);
const EmailVerification = lazy(
  () => import("../feature-module/pages/authentication/emailverification/emailverification")
);
const EmailverificationTwo = lazy(
  () => import("../feature-module/pages/authentication/emailverification/emailverificationTwo")
);
const EmailverificationThree = lazy(
  () =>
    import("../feature-module/pages/authentication/emailverification/emailverificationThree")
);
const Twostepverification = lazy(
  () =>
    import("../feature-module/pages/authentication/twostepverification/twostepverification")
);
const TwostepverificationTwo = lazy(
  () =>
    import("../feature-module/pages/authentication/twostepverification/twostepverificationTwo")
);
const TwostepverificationThree = lazy(
  () =>
    import(
      "../feature-module/pages/authentication/twostepverification/twostepverificationThree"
    )
);
const Lockscreen = lazy(() => import("../feature-module/pages/lockscreen"));
const Error404 = lazy(
  () => import("../feature-module/pages/errorpages/error404")
);
const Error500 = lazy(
  () => import("../feature-module/pages/errorpages/error500")
);
const Blankpage = lazy(() => import("../feature-module/pages/blankpage"));
const Comingsoon = lazy(() => import("../feature-module/pages/comingsoon"));
const Undermaintainence = lazy(
  () => import("../feature-module/pages/undermaintainence")
);
const Users = lazy(() => import("../feature-module/usermanagement/users"));
const RolesPermissions = lazy(
  () => import("../feature-module/usermanagement/rolespermissions")
);
const Permissions = lazy(
  () => import("../feature-module/usermanagement/permissions")
);
const DeleteAccount = lazy(
  () => import("../feature-module/usermanagement/deleteaccount")
);
const EmployeesGrid = lazy(() => import("../feature-module/hrm/employeesgrid"));
const EditEmployee = lazy(() => import("../feature-module/hrm/editemployee"));
const AddEmployee = lazy(() => import("../feature-module/hrm/addemployee"));
const LeavesAdmin = lazy(() => import("../feature-module/hrm/leavesadmin"));
const LeavesEmployee = lazy(
  () => import("../feature-module/hrm/leavesemployee")
);
const LeaveTypes = lazy(() => import("../feature-module/hrm/leavetypes"));
const ProductDetail = lazy(
  () => import("../feature-module/inventory/productdetail")
);
// const Units = lazy(()=>import('../feature-module/inventory/units'))
const TaxRates = lazy(
  () => import("../feature-module/settings/financialsettings/taxrates")
);
const CurrencySettings = lazy(
  () => import("../feature-module/settings/financialsettings/currencysettings")
);
const Coupons = lazy(() => import("../feature-module/coupons/coupons"));
const BankSettingGrid = lazy(
  () => import("../feature-module/settings/financialsettings/banksettinggrid")
);
const PayrollList = lazy(() => import("../feature-module/hrm/payroll-list"));
const KanbanView = lazy(
  () => import("../feature-module/application/kanbanView")
);
const SocialFeed = lazy(
  () => import("../feature-module/application/socialfeed")
);
const NewDashboard = lazy(
  () => import("../feature-module/dashboard/newDashboard")
);
const Pos2 = lazy(() => import("../feature-module/pos/pos2"));
const Pos3 = lazy(() => import("../feature-module/pos/pos3"));
const OnlineOrder = lazy(
  () => import("../feature-module/sales/online-order/online-orders")
);
const Pos4 = lazy(() => import("../feature-module/pos/pos4"));
const Pos5 = lazy(() => import("../feature-module/pos/pos5"));
const PosOrder = lazy(
  () => import("../feature-module/sales/pos-order/posOrder")
);
const Invoice = lazy(() => import("../feature-module/sales/invoicereport"));
const Invoicedetails = lazy(
  () => import("../feature-module/sales/invoicedetails")
);
const Discount = lazy(() => import("../feature-module/coupons/discount"));
const DiscountPlan = lazy(
  () => import("../feature-module/coupons/discountPlan")
);
const GiftCards = lazy(() => import("../feature-module/coupons/giftCards"));
const Accountlist = lazy(
  () => import("../feature-module/finance-accounts/account-list/accountlist")
);
const Moneytransfer = lazy(
  () => import("../feature-module/finance-accounts/money-transfer/moneytransfer")
);
const Balancesheet = lazy(
  () => import("../feature-module/finance-accounts/balance-sheet/balancesheet")
);
const Trailbalance = lazy(
  () => import("../feature-module/finance-accounts/trail-balance/trailbalance")
);
const Cashflow = lazy(
  () => import("../feature-module/finance-accounts/cash-flow/cashflow")
);
const Accountstatement = lazy(
  () =>
    import(
      "../feature-module/finance-accounts/account-statement/accountstatement"
    )
);
const Biller = lazy(() => import("../feature-module/people/billers"));
const Employeedetails = lazy(
  () => import("../feature-module/hrm/employeedetails")
);
const Stockhistory = lazy(
  () => import("../feature-module/Reports/stockhistory")
);
const SoldStock = lazy(() => import("../feature-module/Reports/soldstock"));
const BestSeller = lazy(() => import("../feature-module/Reports/bestseller"));
const Invoicereportnew = lazy(
  () => import("../feature-module/Reports/invoicereportnew")
);
const Languagesetteingsweb = lazy(
  () =>
    import("../feature-module/settings/websitesettings/languagesetteingsweb")
);
const Success = lazy(() => import("../feature-module/pages/authentication/success/success"));
const SuccessTwo = lazy(
  () => import("../feature-module/pages/authentication/success/successTwo")
);
const SuccessThree = lazy(
  () => import("../feature-module/pages/authentication/success/successThree")
);
const EmployeesList = lazy(() => import("../feature-module/hrm/employeesList"));
const IncomeList = lazy(
  () => import("../feature-module/finance-accounts/income/incomeList")
);
const IncomeCategory = lazy(
  () => import("../feature-module/finance-accounts/income/incomeCategory")
);
const Products = lazy(() => import("../feature-module/ecommerce/products"));
const Productsdetails = lazy(
  () => import("../feature-module/ecommerce/productsdetails")
);
const Orders = lazy(() => import("../feature-module/ecommerce/orders"));
const Cart = lazy(() => import("../feature-module/ecommerce/cart"));
const Checkout = lazy(() => import("../feature-module/ecommerce/checkout"));
const Wishlist = lazy(() => import("../feature-module/ecommerce/wishlist"));
const Reviews = lazy(() => import("../feature-module/ecommerce/reviews"));
const Calendars = lazy(() => import("../feature-module/application/calendar"));
const SuperAdminDashboard = lazy(
  () => import("../feature-module/super-admin/dashboard")
);
const Companies = lazy(() => import("../feature-module/super-admin/companies"));
const Subscription = lazy(() => import("../feature-module/super-admin/subscription"));
const Packages = lazy(
  () => import("../feature-module/super-admin/packages/packagelist")
);
const Domain = lazy(() => import("../feature-module/super-admin/domin"));
const PurchaseTransaction = lazy(
  () => import("../feature-module/super-admin/purchase-transaction")
);
const EmailReply = lazy(
  () => import("../feature-module/application/emailReply")
);
const Todo = lazy(() => import("../feature-module/application/todo/todo"));
const TodoList = lazy(
  () => import("../feature-module/application/todo/todolist")
);
const PagesList = lazy(() => import("../feature-module/content/pages"));
const AllBlogs = lazy(() => import("../feature-module/content/blog/allBlogs"));
const Projects = lazy(() => import("../feature-module/application/projects"));
const Searchlist = lazy(
  () => import("../feature-module/application/searchlist")
);
const SupplierDueReport = lazy(
  () => import("../feature-module/Reports/supplierduereport")
);
const CustomerDueReport = lazy(
  () => import("../feature-module/Reports/customerduereport")
);
const Productreport = lazy(
  () => import("../feature-module/Reports/products-report/productreport")
);
const ProductExpiredreport = lazy(
  () => import("../feature-module/Reports/products-report/productexpiredreport")
);
const ProductQualityreport = lazy(
  () => import("../feature-module/Reports/products-report/productqualityreport")
);
const Salestax = lazy(() => import("../feature-module/Reports/salestax"));
const Annualreport = lazy(() => import("../feature-module/Reports/annualreport"));
const InvoiceTemplate = lazy(
  () => import("../feature-module/settings/appsetting/invoicetemplate")
);
const Signature = lazy(
  () => import("../feature-module/settings/appsetting/signature")
);
const Emailtemplatesettings = lazy(
  () =>
    import("../feature-module/settings/systemsettings/emailtemplatesettings")
);
const Smstemplate = lazy(
  () => import("../feature-module/settings/systemsettings/smstemplate")
);
const LayoutDemo = lazy(
  () => import("../components/layouts/layoutdemo")
);
const BlogDetails = lazy(
  () => import("../feature-module/content/blog/blogDetails")
);
const BlogTags = lazy(() => import("../feature-module/content/blog/blogTags"));
const BlogCategories = lazy(
  () => import("../feature-module/content/blog/blogCategories")
);
const BlogComments = lazy(
  () => import("../feature-module/content/blog/blogComments")
);
const Cities = lazy(() => import("../feature-module/content/location/cities"));
const Countries = lazy(
  () => import("../feature-module/content/location/countries")
);
const States = lazy(() => import("../feature-module/content/location/states"));
const Testimonial = lazy(() => import("../feature-module/content/testimonial"));
const Faq = lazy(() => import("../feature-module/content/faq"));
const Activities = lazy(() => import("../feature-module/pages/activities"));
const Pricing = lazy(() => import("../feature-module/pages/pricing"));
const Contacts = lazy(() => import("../feature-module/application/contacts"));
const Alert = lazy(() => import("../feature-module/uiinterface/alert"));
const Avatar = lazy(() => import("../feature-module/uiinterface/avatar"));
const Badges = lazy(() => import("../feature-module/uiinterface/badges"));
const Borders = lazy(() => import("../feature-module/uiinterface/borders"));
const Buttons = lazy(() => import("../feature-module/uiinterface/buttons"));
const ButtonsGroup = lazy(() => import("../feature-module/uiinterface/buttonsgroup"));
const Breadcrumb = lazy(() => import("../feature-module/uiinterface/breadcrumb"));
const Cards = lazy(() => import("../feature-module/uiinterface/cards"));
const Carousel = lazy(() => import("../feature-module/uiinterface/carousel"));
const Colors = lazy(() => import("../feature-module/uiinterface/colors"));
const Grid = lazy(() => import("../feature-module/uiinterface/grid"));
const Dropdowns = lazy(() => import("../feature-module/uiinterface/dropdowns"));
const Images = lazy(() => import("../feature-module/uiinterface/images"));
const Lightboxes = lazy(() => import("../feature-module/uiinterface/lightbox"));
const Media = lazy(() => import("../feature-module/uiinterface/media"));
const Modals = lazy(() => import("../feature-module/uiinterface/modals"));
const NavTabs = lazy(() => import("../feature-module/uiinterface/navtabs"));
const Offcanvas = lazy(() => import("../feature-module/uiinterface/offcanvas"));
const Pagination = lazy(() => import("../feature-module/uiinterface/pagination"));
const Placeholder = lazy(() => import("../feature-module/uiinterface/placeholder"));
const Progess = lazy(() => import("../feature-module/uiinterface/progress"));
const RangeSlides = lazy(() => import("../feature-module/uiinterface/rangeslider"));
const Spinner = lazy(() => import("../feature-module/uiinterface/spinner"));
const Toasts = lazy(() => import("../feature-module/uiinterface/toasts"));
const Tooltips = lazy(() => import("../feature-module/uiinterface/tooltips"));
const Typography = lazy(() => import("../feature-module/uiinterface/typography"));
const Video = lazy(() => import("../feature-module/uiinterface/video"));
const ClipBoard = lazy(() => import("../feature-module/uiinterface/advancedui/clipboard"));
const Counter = lazy(() => import("../feature-module/uiinterface/advancedui/counter"));
const DragDrop = lazy(() => import("../feature-module/uiinterface/advancedui/dragdrop"));
const Rating = lazy(() => import("../feature-module/uiinterface/advancedui/rating"));
const Ribbon = lazy(() => import("../feature-module/uiinterface/advancedui/ribbon"));
const TextEditor = lazy(() => import("../feature-module/uiinterface/advancedui/texteditor"));
const Timeline = lazy(() => import("../feature-module/uiinterface/advancedui/timeline"));


const routes = all_routes;

export const authRoutes = [
  {
    id: 1,
    path: routes.dashboard,
    name: "home",
    element: <Dashboard />,
    route: Route,
  },
  {
    id: 1,
    path: routes.newdashboard,
    name: "home new",
    element: <NewDashboard />,
    route: Route,
  },
  {
    id: 2,
    path: routes.productlist,
    name: "products",
    element: <ProductList />,
    route: Route,
  },
  {
    id: 3,
    path: routes.addproduct,
    name: "products",
    element: <AddProduct />,
    route: Route,
  },
  {
    id: 4,
    path: routes.salesdashboard,
    name: "salesdashboard",
    element: <SalesDashbaord />,
    route: Route,
  },
  {
    id: 5,
    path: routes.brandlist,
    name: "brant",
    element: <BrandList />,
    route: Route,
  },
  {
    id: 6,
    path: routes.units,
    name: "unit",
    element: <Units />,
    route: Route,
  },
  {
    id: 7,
    path: routes.variantyattributes,
    name: "variantyattributes",
    element: <VariantAttributes />,
    route: Route,
  },
  {
    id: 8,
    path: routes.warranty,
    name: "warranty",
    element: <Warranty />,
    route: Route,
  },
  {
    id: 9,
    path: routes.barcode,
    name: "barcode",
    element: <PrintBarcode />,
    route: Route,
  },

  {
    id: 38,
    path: routes.departmentgrid,
    name: "departmentgrid",
    element: <DepartmentGrid />,
    route: Route,
  },

  {
    id: 39,
    path: routes.departmentlist,
    name: "departmentlist",
    element: <DepartmentList />,
    route: Route,
  },

  {
    id: 40,
    path: routes.designation,
    name: "designation",
    element: <Designation />,
    route: Route,
  },

  {
    id: 41,
    path: routes.shift,
    name: "shift",
    element: <Shift />,
    route: Route,
  },

  {
    id: 42,
    path: routes.attendanceemployee,
    name: "attendanceemployee",
    element: <AttendanceEmployee />,
    route: Route,
  },

  {
    id: 60,
    path: routes.chat,
    name: "chat",
    element: <Chats />,
    route: Route,
  },
  {
    id: 100,
    path: routes.SocialFeed,
    name: "SocialFeed",
    element: <SocialFeed />,
    route: Route,
  },
  {
    id: 101,
    path: routes.Kanban,
    name: "Kanban",
    element: <KanbanView />,
    route: Route,
  },

  {
    id: 58,
    path: routes.expiredproduct,
    name: "expiredproduct",
    element: <ExpiredProduct />,
    route: Route,
  },
  {
    id: 59,
    path: routes.lowstock,
    name: "lowstock",
    element: <LowStock />,
    route: Route,
  },
  {
    id: 60,
    path: routes.categorylist,
    name: "categorylist",
    element: <CategoryList />,
    route: Route,
  },
  {
    id: 61,
    path: routes.expenselist,
    name: "expenselist",
    element: <ExpensesList />,
    route: Route,
  },
  {
    id: 62,
    path: routes.expensecategory,
    name: "expensecategory",
    element: <ExpenseCategory />,
    route: Route,
  },
  {
    id: 63,
    path: routes.calendars,
    name: "calendar",
    element: <Calendars />,
    route: Route,
  },

  {
    id: 64,
    path: routes.subcategories,
    name: "subcategories",
    element: <SubCategories />,
    route: Route,
  },
  {
    id: 65,
    path: routes.editproduct,
    name: "editproduct",
    element: <EditProduct />,
    route: Route,
  },
  {
    id: 63,
    path: routes.videocall,
    name: "videocall",
    element: <Videocall />,
    route: Route,
  },
  {
    id: 64,
    path: routes.audiocall,
    name: "audiocall",
    element: <Audiocall />,
    route: Route,
  },
  {
    id: 65,
    path: routes.email,
    name: "email",
    element: <Email />,
    route: Route,
  },
  {
    id: 66,
    path: routes.callhistory,
    name: "callhistory",
    element: <Callhistory />,
    route: Route,
  },
  {
    id: 67,
    path: routes.todo,
    name: "todo",
    element: <Todo />,
    route: Route,
  },
  {
    id: 66,
    path: routes.variantattributes,
    name: "variantattributes",
    element: <VariantAttributes />,
    route: Route,
  },
  {
    id: 67,
    path: routes.qrcode,
    name: "qrcode",
    element: <QRcode />,
    route: Route,
  },
  {
    id: 68,
    path: routes.purchaselist,
    name: "purchaselist",
    element: <PurchasesList />,
    route: Route,
  },
  {
    id: 69,
    path: routes.purchaseorderreport,
    name: "purchaseorderreport",
    element: <PurchaseOrderReport />,
    route: Route,
  },
  {
    id: 70,
    path: routes.purchasereturn,
    name: "purchasereturn",
    element: <PurchaseReturns />,
    route: Route,
  },
  {
    id: 71,
    path: routes.appearance,
    name: "appearance",
    element: <Appearance />,
    route: Route,
  },
  {
    id: 72,
    path: routes.socialauthendication,
    name: "socialauthendication",
    element: <SocialAuthentication />,
    route: Route,
  },
  {
    id: 73,
    path: routes.languagesettings,
    name: "languagesettings",
    element: <LanguageSettings />,
    route: Route,
  },
  {
    id: 74,
    path: routes.invoicesettings,
    name: "invoicesettings",
    element: <InvoiceSettings />,
    route: Route,
  },
  {
    id: 75,
    path: routes.printersettings,
    name: "printersettings",
    element: <PrinterSettings />,
    route: Route,
  },
  {
    id: 76,
    path: routes.possettings,
    name: "possettings",
    element: <PosSettings />,
    route: Route,
  },
  {
    id: 77,
    path: routes.customfields,
    name: "customfields",
    element: <CustomFields />,
    route: Route,
  },
  {
    id: 78,
    path: routes.emailsettings,
    name: "emailsettings",
    element: <EmailSettings />,
    route: Route,
  },
  {
    id: 79,
    path: routes.smssettings,
    name: "smssettings",
    element: <SmsGateway />,
    route: Route,
  },
  {
    id: 80,
    path: routes.otpsettings,
    name: "otpsettings",
    element: <OtpSettings />,
    route: Route,
  },
  {
    id: 81,
    path: routes.gdbrsettings,
    name: "gdbrsettings",
    element: <GdprSettings />,
    route: Route,
  },
  {
    id: 82,
    path: routes.paymentgateway,
    name: "paymentgateway",
    element: <PaymentGateway />,
    route: Route,
  },
  {
    id: 83,
    path: routes.banksettingslist,
    name: "banksettingslist",
    element: <BankSetting />,
    route: Route,
  },
  {
    id: 84,
    path: routes.customers,
    name: "customers",
    element: <Customers />,
    route: Route,
  },
  {
    id: 85,
    path: routes.suppliers,
    name: "suppliers",
    element: <Suppliers />,
    route: Route,
  },
  {
    id: 86,
    path: routes.storelist,
    name: "storelist",
    element: <StoreList />,
    route: Route,
  },
  {
    id: 87,
    path: routes.managestock,
    name: "managestock",
    element: <Managestock />,
    route: Route,
  },
  {
    id: 88,
    path: routes.stockadjustment,
    name: "stockadjustment",
    element: <StockAdjustment />,
    route: Route,
  },
  {
    id: 89,
    path: routes.stocktransfer,
    name: "stocktransfer",
    element: <StockTransfer />,
    route: Route,
  },
  {
    id: 90,
    path: routes.salesreport,
    name: "salesreport",
    element: <SalesReport />,
    route: Route,
  },
  {
    id: 91,
    path: routes.purchasereport,
    name: "purchasereport",
    element: <PurchaseReport />,
    route: Route,
  },
  {
    id: 92,
    path: routes.inventoryreport,
    name: "inventoryreport",
    element: <InventoryReport />,
    route: Route,
  },
  // {
  //   id: 93,
  //   path: routes.invoicereport,
  //   name: "invoicereport",
  //   element: <Invoicereport />,
  //   route: Route,
  // },
  {
    id: 94,
    path: routes.supplierreport,
    name: "supplierreport",
    element: <SupplierReport />,
    route: Route,
  },
  {
    id: 95,
    path: routes.customerreport,
    name: "customerreport",
    element: <CustomerReport />,
    route: Route,
  },
  {
    id: 96,
    path: routes.expensereport,
    name: "expensereport",
    element: <ExpenseReport />,
    route: Route,
  },
  {
    id: 97,
    path: routes.incomereport,
    name: "incomereport",
    element: <IncomeReport />,
    route: Route,
  },
  {
    id: 98,
    path: routes.taxreport,
    name: "taxreport",
    element: <TaxReport />,
    route: Route,
  },
  {
    id: 99,
    path: routes.profitloss,
    name: "profitloss",
    element: <ProfitLoss />,
    route: Route,
  },
  {
    id: 89,
    path: routes.generalsettings,
    name: "generalsettings",
    element: <GeneralSettings />,
    route: Route,
  },
  {
    id: 90,
    path: routes.securitysettings,
    name: "securitysettings",
    element: <SecuritySettings />,
    route: Route,
  },
  {
    id: 91,
    path: routes.notification,
    name: "notification",
    element: <Notification />,
    route: Route,
  },
  {
    id: 92,
    path: routes.connectedapps,
    name: "connectedapps",
    element: <ConnectedApps />,
    route: Route,
  },
  {
    id: 93,
    path: routes.systemsettings,
    name: "systemsettings",
    element: <SystemSettings />,
    route: Route,
  },
  {
    id: 94,
    path: routes.companysettings,
    name: "companysettings",
    element: <CompanySettings />,
    route: Route,
  },
  {
    id: 94,
    path: routes.localizationsettings,
    name: "localizationsettings",
    element: <LocalizationSettings />,
    route: Route,
  },
  {
    id: 95,
    path: routes.prefixes,
    name: "prefixes",
    element: <Prefixes />,
    route: Route,
  },
  {
    id: 99,
    path: routes.preference,
    name: "preference",
    element: <Preference />,
    route: Route,
  },
  {
    id: 99,
    path: routes.banipaddress,
    name: "banipaddress",
    element: <BanIpaddress />,
    route: Route,
  },
  {
    id: 99,
    path: routes.storagesettings,
    name: "storagesettings",
    element: <StorageSettings />,
    route: Route,
  },
  {
    id: 99,
    path: routes.taxrates,
    name: "taxrates",
    element: <TaxRates />,
    route: Route,
  },
  {
    id: 99,
    path: routes.currencysettings,
    name: "currencysettings",
    element: <CurrencySettings />,
    route: Route,
  },

  {
    id: 100,
    path: routes.attendanceadmin,
    name: "attendanceadmin",
    element: <AttendanceAdmin />,
    route: Route,
  },
  {
    id: 101,
    path: routes.payslip,
    name: "payslip",
    element: <Payslip />,
    route: Route,
  },
  {
    id: 102,
    path: routes.saleslist,
    name: "saleslist",
    element: <SalesList />,
    route: Route,
  },
  {
    id: 102,
    path: routes.invoicereport,
    name: "invoicereport",
    element: <Invoicereportnew />,
    route: Route,
  },
  {
    id: 102,
    path: routes.holidays,
    name: "holidays",
    element: <Holidays />,
    route: Route,
  },
  {
    id: 102,
    path: routes.salesreturn,
    name: "salesreturn",
    element: <SalesReturn />,
    route: Route,
  },
  {
    id: 103,
    path: routes.quotationlist,
    name: "quotationlist",
    element: <QuotationList />,
    route: Route,
  },
  {
    id: 104,
    path: routes.notes,
    name: "notes",
    element: <Notes />,
    route: Route,
  },
  {
    id: 105,
    path: routes.filemanager,
    name: "filemanager",
    element: <FileManager />,
    route: Route,
  },
  {
    id: 106,
    path: routes.profile,
    name: "profile",
    element: <Profile />,
    route: Route,
  },
  {
    id: 20,
    path: routes.blankpage,
    name: "blankpage",
    element: <Blankpage />,
    route: Route,
  },
  {
    id: 104,
    path: routes.users,
    name: "users",
    element: <Users />,
    route: Route,
  },
  {
    id: 105,
    path: routes.rolespermission,
    name: "rolespermission",
    element: <RolesPermissions />,
    route: Route,
  },
  {
    id: 106,
    path: routes.permissions,
    name: "permissions",
    element: <Permissions />,
    route: Route,
  },
  {
    id: 107,
    path: routes.deleteaccount,
    name: "deleteaccount",
    element: <DeleteAccount />,
    route: Route,
  },
  {
    id: 108,
    path: routes.employeegrid,
    name: "employeegrid",
    element: <EmployeesGrid />,
    route: Route,
  },
  {
    id: 109,
    path: routes.addemployee,
    name: "addemployee",
    element: <AddEmployee />,
    route: Route,
  },
  {
    id: 110,
    path: routes.editemployee,
    name: "editemployee",
    element: <EditEmployee />,
    route: Route,
  },
  {
    id: 111,
    path: routes.leavesadmin,
    name: "leavesadmin",
    element: <LeavesAdmin />,
    route: Route,
  },
  {
    id: 112,
    path: routes.leavesemployee,
    name: "leavesemployee",
    element: <LeavesEmployee />,
    route: Route,
  },
  {
    id: 113,
    path: routes.leavestype,
    name: "leavestype",
    element: <LeaveTypes />,
    route: Route,
  },
  {
    id: 113,
    path: routes.productdetails,
    name: "productdetails",
    element: <ProductDetail />,
    route: Route,
  },
  {
    id: 114,
    path: routes.warehouses,
    name: "warehouses",
    element: <Warehouse />,
    route: Route,
  },
  {
    id: 115,
    path: routes.coupons,
    name: "coupons",
    element: <Coupons />,
    route: Route,
  },
  {
    id: 116,
    path: "*",
    name: "NotFound",
    element: <Navigate to="/" />,
    route: Route,
  },
  {
    id: 117,
    path: "/",
    name: "Root",
    element: <Navigate to="/signin" />,
    route: Route,
  },
  {
    id: 118,
    path: routes.banksettingsgrid,
    name: "banksettingsgrid",
    element: <BankSettingGrid />,
    route: Route,
  },
  {
    id: 119,
    path: routes.payrollList,
    name: "payroll-list",
    element: <PayrollList />,
    route: Route,
  },
  {
    id: 120,
    path: routes.onlineorder,
    name: "online-order",
    element: <OnlineOrder />,
    route: Route,
  },
  {
    id: 121,
    path: routes.posorder,
    name: "pos-orders",
    element: <PosOrder />,
    route: Route,
  },
  {
    id: 122,
    path: routes.invoice,
    name: "invoice",
    element: <Invoice />,
    route: Route,
  },
  {
    id: 123,
    path: routes.invoicedetails,
    name: "invoice-details",
    element: <Invoicedetails />,
    route: Route,
  },
  {
    id: 124,
    path: routes.discount,
    name: "discount",
    element: <Discount />,
    route: Route,
  },
  {
    id: 124,
    path: routes.discountPlan,
    name: "discount-plan",
    element: <DiscountPlan />,
    route: Route,
  },
  {
    id: 124,
    path: routes.GiftCard,
    name: "gift-card",
    element: <GiftCards />,
    route: Route,
  },
  {
    id: 129,
    path: routes.accountlist,
    name: "account-list",
    element: <Accountlist />,
    route: Route,
  },
  {
    id: 125,
    path: routes.moneytransfer,
    name: "money-transfer",
    element: <Moneytransfer />,
    route: Route,
  },
  {
    id: 126,
    path: routes.balancesheet,
    name: "balance-sheet",
    element: <Balancesheet />,
    route: Route,
  },
  {
    id: 127,
    path: routes.trailbalance,
    name: "trial-balance",
    element: <Trailbalance />,
    route: Route,
  },
  {
    id: 128,
    path: routes.cashflow,
    name: "cash-flow",
    element: <Cashflow />,
    route: Route,
  },
  {
    id: 129,
    path: routes.accountstatement,
    name: "account-statement",
    element: <Accountstatement />,
    route: Route,
  },
  {
    id: 130,
    path: routes.biller,
    name: "billers",
    element: <Biller />,
    route: Route,
  },
  {
    id: 131,
    path: routes.employeedetails,
    name: "billers",
    element: <Employeedetails />,
    route: Route,
  },
  {
    id: 132,
    path: routes.stockhistory,
    name: "stock-history",
    element: <Stockhistory />,
    route: Route,
  },
  {
    id: 133,
    path: routes.soldstock,
    name: "sold-stock",
    element: <SoldStock />,
    route: Route,
  },
  {
    id: 134,
    path: routes.bestseller,
    name: "best-sellers",
    element: <BestSeller />,
    route: Route,
  },
  {
    id: 135,
    path: routes.invoicereportnew,
    name: "invoice-report",
    element: <Invoicereportnew />,
    route: Route,
  },
  {
    id: 135,
    path: routes.languagesettingsweb,
    name: "language-settings-web",
    element: <Languagesetteingsweb />,
    route: Route,
  },
  {
    id: 150,
    path: routes.employeelist,
    name: "employees-list",
    element: <EmployeesList />,
    route: Route,
  },
  {
    id: 151,
    path: routes.incomelist,
    name: "income-list",
    element: <IncomeList />,
    route: Route,
  },
  {
    id: 152,
    path: routes.incomecategory,
    name: "income-category",
    element: <IncomeCategory />,
    route: Route,
  },
  {
    id: 136,
    path: routes.product,
    name: "products",
    element: <Products />,
    route: Route,
  },
  {
    id: 137,
    path: routes.productdetails,
    name: "products-details",
    element: <Productsdetails />,
    route: Route,
  },
  {
    id: 138,
    path: routes.orders,
    name: "orders",
    element: <Orders />,
    route: Route,
  },
  {
    id: 139,
    path: routes.cart,
    name: "cart",
    element: <Cart />,
    route: Route,
  },
  {
    id: 140,
    path: routes.checkout,
    name: "checkout",
    element: <Checkout />,
    route: Route,
  },
  {
    id: 141,
    path: routes.wishlist,
    name: "wishlist",
    element: <Wishlist />,
    route: Route,
  },
  {
    id: 142,
    path: routes.reviews,
    name: "reviews",
    element: <Reviews />,
    route: Route,
  },
  {
    id: 143,
    path: routes.superadmindashboard,
    name: "super-admin-dashboard",
    element: <SuperAdminDashboard />,
    route: Route,
  },
  {
    id: 144,
    path: routes.companies,
    name: "companies",
    element: <Companies />,
    route: Route,
  },
  {
    id: 145,
    path: routes.subscription,
    name: "subscription",
    element: <Subscription />,
    route: Route,
  },
  {
    id: 146,
    path: routes.packagelist,
    name: "packages",
    element: <Packages />,
    route: Route,
  },
  {
    id: 147,
    path: routes.domain,
    name: "domain",
    element: <Domain />,
    route: Route,
  },
  {
    id: 148,
    path: routes.purchasetransaction,
    name: "purchase-transaction",
    element: <PurchaseTransaction />,
    route: Route,
  },
  {
    id: 149,
    path: routes.emailreply,
    name: "email-reply",
    element: <EmailReply />,
    route: Route,
  },
  {
    id: 150,
    path: routes.todolist,
    name: "todo-list",
    element: <TodoList />,
    route: Route,
  },
  {
    id: 151,
    path: routes.pagesList,
    name: "pages-list",
    element: <PagesList />,
    route: Route,
  },
  {
    path: routes.projects,
    name: "projects",
    element: <Projects />,
    route: Route,
  },
  {
    id: 152,
    path: routes.allBlogs,
    name: "pages-list",
    element: <AllBlogs />,
    route: Route,
  },
  {
    path: routes.searchlist,
    name: "Search-list",
    element: <Searchlist />,
    route: Route,
  },
  {
    id: 153,
    path: routes.blogDetails,
    name: "pages-list",
    element: <BlogDetails />,
    route: Route,
  },
  {
    path: routes.supplierduereport,
    name: "supplier-due-report",
    element: <SupplierDueReport />,
    route: Route,
  },
  {
    id: 154,
    path: routes.blogCategories,
    name: "pages-list",
    element: <BlogCategories />,
    route: Route,
  },
  {
    path: routes.customerduereport,
    name: "customer-due-report",
    element: <CustomerDueReport />,
    route: Route,
  },
  {
    id: 155,
    path: routes.blogComments,
    name: "pages-list",
    element: <BlogComments />,
    route: Route,
  },
  {
    path: routes.productreport,
    name: "product-report",
    element: <Productreport />,
    route: Route,
  },
  {
    id: 155,
    path: routes.productexpiredreport,
    name: "product-expired-report",
    element: <ProductExpiredreport />,
    route: Route,
  },
  {
    id: 155,
    path: routes.productquantityreport,
    name: "product-quality-report",
    element: <ProductQualityreport />,
    route: Route,
  },
  {
    id: 156,
    path: routes.blogTag,
    name: "pages-list",
    element: <BlogTags />,
    route: Route,
  },
  {
    path: routes.saletaxreport,
    name: "sales-tax",
    element: <Salestax />,
    route: Route,
  },
  {
    id: 157,
    path: routes.annualreport,
    name: "annual-report",
    element: <Annualreport />,
    route: Route,
  },
  {
    id: 158,
    path: routes.invoicetemplate,
    name: "invoice-template",
    element: <InvoiceTemplate />,
    route: Route,
  },
  {
    id: 159,
    path: routes.signatures,
    name: "signatures",
    element: <Signature />,
    route: Route,
  },
  {
    id: 160,
    path: routes.emailtemplate,
    name: "email-template",
    element: <Emailtemplatesettings />,
    route: Route,
  },
  {
    id: 161,
    path: routes.smstemplate,
    name: "sms-template",
    element: <Smstemplate />,
    route: Route,
  },
  {
    id: 162,
    path: routes.Horizontal,
    name: "layout-horizontal",
    element: <LayoutDemo />,
    route: Route,
  },
  {
    id: 163,
    path: routes.Detached,
    name: "layout-detached",
    element: <LayoutDemo />,
    route: Route,
  },
  {
    id: 165,
    path: routes.TwoColumn,
    name: "layout-two-column",
    element: <LayoutDemo />,
    route: Route,
  },
  {
    id: 166,
    path: routes.Hovered,
    name: "layout-hovered",
    element: <LayoutDemo />,
    route: Route,
  },
  {
    id: 167,
    path: routes.Boxed,
    name: "layout-boxed",
    element: <LayoutDemo />,
    route: Route,
  },
  {
    id: 168,
    path: routes.RTL,
    name: "layout-rtl",
    element: <LayoutDemo />,
    route: Route,
  },
  {
    id: 169,
    path: routes.Dark,
    name: "layout-dark",
    element: <LayoutDemo />,
    route: Route,
  },
  {
    id: 170,
    path: routes.cities,
    name: "cities",
    element: <Cities />,
    route: Route,
  },
  {
    id: 171,
    path: routes.countries,
    name: "countries",
    element: <Countries />,
    route: Route,
  },
  {
    id: 172,
    path: routes.states,
    name: "states",
    element: <States />,
    route: Route,
  },
  {
    id: 173,
    path: routes.testimonial,
    name: "testimonial",
    element: <Testimonial />,
    route: Route,
  },
  {
    id: 170,
    path: routes.faq,
    name: "faq",
    element: <Faq />,
    route: Route,
  },
  {
    id: 171,
    path: routes.activities,
    name: "activities",
    element: <Activities />,
    route: Route,
  },
  {
    id: 172,
    path: routes.pricing,
    name: "pricing",
    element: <Pricing />,
    route: Route,
  },
  {
    id: 173,
    path: routes.contact,
    name: "contact",
    element: <Contacts />,
    route: Route,
  },
  {
    id: 174,
    path: routes.alerts,
    name: "alerts",
    element: <Alert />,
    route: Route,
  },
  {
    id: 175,
    path: routes.avatar,
    name: "avatar",
    element: <Avatar />,
    route: Route,
  },
  {
    id: 176,
    path: routes.badges,
    name: "badges",
    element: <Badges />,
    route: Route,
  },
  {
    id: 177,
    path: routes.borders,
    name: "borders",
    element: <Borders />,
    route: Route,
  },

  {
    id: 178,
    path: routes.buttons,
    name: "buttons",
    element: <Buttons />,
    route: Route,
  },
  {
    id: 179,
    path: routes.buttonsgroup,
    name: "buttonsgroup",
    element: <ButtonsGroup />,
    route: Route,
  },
  {
    id: 180,
    path: routes.breadcrumb,
    name: "breadcrumb",
    element: <Breadcrumb />,
    route: Route,
  },
  {
    id: 181,
    path: routes.cards,
    name: "cards",
    element: <Cards />,
    route: Route,
  },
  {
    id: 182,
    path: routes.carousel,
    name: "carousel",
    element: <Carousel />,
    route: Route,
  },
  {
    id: 183,
    path: routes.colors,
    name: "colors",
    element: <Colors />,
    route: Route,
  },
  {
    id: 184,
    path: routes.dropdowns,
    name: "dropdowns",
    element: <Dropdowns />,
    route: Route,
  },
  {
    id: 185,
    path: routes.grid,
    name: "grid",
    element: <Grid />,
    route: Route,
  },
  {
    id: 186,
    path: routes.images,
    name: "images",
    element: <Images />,
    route: Route,
  },
  {
    id: 187,
    path: routes.lightbox,
    name: "lightbox",
    element: <Lightboxes />,
    route: Route,
  },
  {
    id: 188,
    path: routes.media,
    name: "media",
    element: <Media />,
    route: Route,
  },
  {
    id: 189,
    path: routes.modals,
    name: "modals",
    element: <Modals />,
    route: Route,
  },
  {
    id: 190,
    path: routes.navtabs,
    name: "navtabs",
    element: <NavTabs />,
    route: Route,
  },
  {
    id: 191,
    path: routes.offcanvas,
    name: "offcanvas",
    element: <Offcanvas />,
    route: Route,
  },
  {
    id: 192,
    path: routes.pagination,
    name: "pagination",
    element: <Pagination />,
    route: Route,
  },
  {
    id: 193,
    path: routes.placeholder,
    name: "placeholder",
    element: <Placeholder />,
    route: Route,
  },
  {
    id: 193,
    path: routes.progress,
    name: "progress",
    element: <Progess />,
    route: Route,
  },
 
  {
    id: 194,
    path: routes.rangeslider,
    name: "rangeslider",
    element: <RangeSlides />,
    route: Route,
  },
  {
    id: 195,
    path: routes.spinner,
    name: "spinner",
    element: <Spinner />,
    route: Route,
  },
  {
    id: 196,
    path: routes.toasts,
    name: "toasts",
    element: <Toasts />,
    route: Route,
  },
  {
    id: 197,
    path: routes.tooltip,
    name: "tooltip",
    element: <Tooltips />,
    route: Route,
  },
  {
    id: 198,
    path: routes.typography,
    name: "typography",
    element: <Typography />,
    route: Route,
  },
  {
    id: 199,
    path: routes.video,
    name: "video",
    element: <Video />,
    route: Route,
  },
  {
    id: 200,
    path: routes.clipboard,
    name: "clipboard",
    element: <ClipBoard />,
    route: Route,
  },
  {
    id: 201,
    path: routes.counter,
    name: "counter",
    element: <Counter />,
    route: Route,
  },
  {
    id: 222,
    path: routes.draganddrop,
    name: "draganddrop",
    element: <DragDrop />,
    route: Route,
  },
  {
    id: 223,
    path: routes.rating,
    name: "rating",
    element: <Rating />,
    route: Route,
  },
  {
    id: 224,
    path: routes.texteditor,
    name: "texteditor",
    element: <TextEditor />,
    route: Route,
  },
  {
    id: 225,
    path: routes.timeline,
    name: "timeline",
    element: <Timeline />,
    route: Route,
  },
  {
    id: 226,
    path: routes.ribbon,
    name: "ribbon",
    element: <Ribbon />,
    route: Route,
  },
  {
    id: 227,
    path: routes.apexchart,
    name: "apexchart",
    element: <Apexchart />,
    route: Route,
  },
  {
    id: 228,
    path: routes.chartjs,
    name: "chartjs",
    element: <ChartJs />,
    route: Route,
  },
  {
    id: 229,
    path: routes.floatinglabel,
    name: "floatinglabel",
    element: <FloatingLabel />,
    route: Route,
  },
  {
    id: 230,
    path: routes.formhorizontal,
    name: "formhorizontal",
    element: <FormHorizontal />,
    route: Route,
  },
 
  {
    id: 231,
    path: routes.formselect,
    name: "formselect",
    element: <FormSelect2 />,
    route: Route,
  },
  {
    id: 232,
    path: routes.formvalidation,
    name: "formvalidation",
    element: <FormValidation />,
    route: Route,
  },
  {
    id: 233,
    path: routes.formvertical,
    name: "formvertical",
    element: <FormVertical />,
    route: Route,
  },
  {
    id: 234,
    path: routes.basicinput,
    name: "basicinput",
    element: <FormBasicInputs />,
    route: Route,
  },
  {
    id: 235,
    path: routes.checkboxradio,
    name: "checkboxradio",
    element: <CheckboxRadios />,
    route: Route,
  },
  {
    id: 236,
    path: routes.fileupload,
    name: "fileupload",
    element: <FileUpload />,
    route: Route,
  },
 
  {
    id: 238,
    path: routes.select2,
    name: "formselect",
    element: <FormSelect />,
    route: Route,
  },
  {
    id: 239,
    path: routes.wizard,
    name: "wizard",
    element: <FormWizard />,
    route: Route,
  },
  {
    id: 240,
    path: routes.FormPicker,
    name: "FormPicker",
    element: <FormPikers />,
    route: Route,
  },
  {
    id: 241,
    path: routes.gridgutters,
    name: "gridgutters",
    element: <GridGutters />,
    route: Route,
  },
 
  {
    id: 242,
    path: routes.inputgroup,
    name: "inputgroup",
    element: <InputGroup />,
    route: Route,
  },
  {
    id: 242,
    path: routes.BootstrapIcon,
    name: "BootstrapIcon",
    element: <BootstrapIcons />,
    route: Route,
  },
  {
    id: 243,
    path: routes.flagicons,
    name: "flagicons",
    element: <FlagIcons />,
    route: Route,
  },
  {
    id: 244,
    path: routes.fontawesome,
    name: "fontawesome",
    element: <FontawesomeIcons />,
    route: Route,
  },

  {
    id: 246,
    path: routes.materialicons,
    name: "materialicons",
    element: <MaterialIcons />,
    route: Route,
  },
  {
    id: 247,
    path: routes.pe7icons,
    name: "pe7icons",
    element: <PE7Icons />,
    route: Route,
  },
  {
    id: 248,
    path: routes.remixIcon,
    name: "remixIcon",
    element: <RemixIcons />,
    route: Route,
  },
  {
    id: 249,
    path: routes.TablerIcon,
    name: "TablerIcon",
    element: <TablerIcon />,
    route: Route,
  },
  {
    id: 250,
    path: routes.themifyicons,
    name: "themifyicons",
    element: <ThemifyIcons />,
    route: Route,
  },
 
  {
    id: 251,
    path: routes.typicons,
    name: "typicons",
    element: <TypiconIcons />,
    route: Route,
  },
  {
    id: 252,
    path: routes.Leaflets,
    name: "Leaflets",
    element: <Leaflet />,
    route: Route,
  },
  {
    id: 253,
    path: routes.datatable,
    name: "datatable",
    element: <DataTables />,
    route: Route,
  },
  {
    id: 254,
    path: routes.tablebasic,
    name: "tablebasic",
    element: <TablesBasic />,
    route: Route,
  },
  {
    id: 255,
    path: routes.accordion,
    name: "accordion",
    element: <Accordion />,
    route: Route,
  },
 
  
];
export const posPages=[
  {
    id: 25,
    path: routes.pos,
    name: "pos",
    element: <Pos />,
    route: Route,
  },
  {
    id: 26,
    path: routes.pos2,
    name: "pos-2",
    element: <Pos2 />,
    route: Route,
  },
  {
    id: 27,
    path: routes.pos3,
    name: "pos-3",
    element: <Pos3 />,
    route: Route,
  },
  {
    id: 28,
    path: routes.pos4,
    name: "pos-4",
    element: <Pos4 />,
    route: Route,
  },
  {
    id: 29,
    path: routes.pos5,
    name: "pos-5",
    element: <Pos5 />,
    route: Route,
  },
];
export const unAuthRoutes = [
  {
    id: 1,
    path: routes.signin,
    name: "signin",
    element: <Signin />,
    route: Route,
  },
  {
    id: 2,
    path: routes.signintwo,
    name: "signintwo",
    element: <SigninTwo />,
    route: Route,
  },
  {
    id: 3,
    path: routes.signinthree,
    name: "signinthree",
    element: <SigninThree />,
    route: Route,
  },
  {
    id: 4,
    path: routes.register,
    name: "register",
    element: <Register />,
    route: Route,
  },
  {
    id: 5,
    path: routes.registerTwo,
    name: "registerTwo",
    element: <RegisterTwo />,
    route: Route,
  },
  {
    id: 6,
    path: routes.registerThree,
    name: "registerThree",
    element: <RegisterThree />,
    route: Route,
  },
  {
    id: 7,
    path: routes.forgotPassword,
    name: "forgotPassword",
    element: <Forgotpassword />,
    route: Route,
  },
  {
    id: 7,
    path: routes.forgotPasswordTwo,
    name: "forgotPasswordTwo",
    element: <ForgotpasswordTwo />,
    route: Route,
  },
  {
    id: 8,
    path: routes.forgotPasswordThree,
    name: "forgotPasswordThree",
    element: <ForgotpasswordThree />,
    route: Route,
  },
  {
    id: 9,
    path: routes.resetpassword,
    name: "resetpassword",
    element: <Resetpassword />,
    route: Route,
  },
  {
    id: 10,
    path: routes.resetpasswordTwo,
    name: "resetpasswordTwo",
    element: <ResetpasswordTwo />,
    route: Route,
  },
  {
    id: 11,
    path: routes.resetpasswordThree,
    name: "resetpasswordThree",
    element: <ResetpasswordThree />,
    route: Route,
  },
  {
    id: 12,
    path: routes.emailverification,
    name: "emailverification",
    element: <EmailVerification />,
    route: Route,
  },
  {
    id: 12,
    path: routes.emailverificationTwo,
    name: "emailverificationTwo",
    element: <EmailverificationTwo />,
    route: Route,
  },
  {
    id: 13,
    path: routes.emailverificationThree,
    name: "emailverificationThree",
    element: <EmailverificationThree />,
    route: Route,
  },
  {
    id: 14,
    path: routes.twostepverification,
    name: "twostepverification",
    element: <Twostepverification />,
    route: Route,
  },
  {
    id: 15,
    path: routes.twostepverificationTwo,
    name: "twostepverificationTwo",
    element: <TwostepverificationTwo />,
    route: Route,
  },
  {
    id: 16,
    path: routes.twostepverificationThree,
    name: "twostepverificationThree",
    element: <TwostepverificationThree />,
    route: Route,
  },
  {
    id: 17,
    path: routes.lockscreen,
    name: "lockscreen",
    element: <Lockscreen />,
    route: Route,
  },
  {
    id: 18,
    path: routes.error404,
    name: "error404",
    element: <Error404 />,
    route: Route,
  },
  {
    id: 19,
    path: routes.error500,
    name: "error500",
    element: <Error500 />,
    route: Route,
  },
  {
    id: 20,
    path: routes.comingsoon,
    name: "comingsoon",
    element: <Comingsoon />,
    route: Route,
  },
  {
    id: 21,
    path: routes.undermaintenance,
    name: "undermaintenance",
    element: <Undermaintainence />,
    route: Route,
  },
  {
    id: 22,
    path: routes.success,
    name: "success",
    element: <Success />,
    route: Route,
  },
  {
    id: 23,
    path: routes.successTwo,
    name: "success-2",
    element: <SuccessTwo />,
    route: Route,
  },
  {
    id: 24,
    path: routes.successThree,
    name: "success-3",
    element: <SuccessThree />,
    route: Route,
  },
  
 
];
