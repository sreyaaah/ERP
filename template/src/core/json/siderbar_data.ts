import { all_routes } from "../../routes/all_routes";

const route = all_routes;

export const SidebarData = [

  {
    label: "Main",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Main",
    submenuItems: [
      {
        label: "Dashboard",
        icon: 'layout-grid',
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          { label: "Admin Dashboard", link: "/index" },
          { label: "Admin Dashboard 2", link: "/admin-dashboard" },
          { label: "Sales Dashboard", link: "/sales-dashboard" },
        ],
      },
      {
        label: "Super Admin",
        icon: 'user-edit',
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          { label: "Dashboard", link: "/dashboard" },
          { label: "Companies", link: "/companies" },
          { label: "Subscriptions", link: "/subscription" },
          { label: "Packages", link: "/packages" },
          { label: "Domain", link: "/domain" },
          { label: "Purchase Transaction", link: route.purchasetransaction },
        ],
      },
      {
        label: "Application",
        icon: 'brand-apple-arcade',
        submenu: true,
        showSubRoute: false,
        submenuItems: [
          { label: "Chat", link: "/chat", showSubRoute: false },
          {
            label: "Call",
            submenu: true,
            submenuItems: [
              { label: "Video Call", link: "/video-call" },
              { label: "Audio Call", link: "/audio-call" },
              { label: "Call History", link: "/call-history" },
            ],
          },
          { label: "Calendar", link: "/calendar", showSubRoute: false },
          { label: "Contact", link: "/contacts", showSubRoute: false },
          { label: "Email", link: "/email", showSubRoute: false },
          { label: "To Do", link: "/todo", showSubRoute: false },
          { label: "Notes", link: "/notes", showSubRoute: false },
          { label: "File Manager", link: "/file-manager", showSubRoute: false },
          { label: "Projects", link: "/projects", showSubRoute: false },
          {
            label: "Ecommerce",
            submenu: true,
            submenuItems: [
              { label: "Products", link: "/products" },
              { label: "Orders", link: "/orders" },
              { label: "Customers", link: "/customers" },
              { label: "Cart", link: "/cart" },
              { label: "Checkout", link: "/checkout" },
              { label: "Wishlist", link: "/wishlist" },
              { label: "Reviews", link: "/reviews" },
            ],
          },
          { label: "Social Feed", link: "/social-feed", showSubRoute: false },
          { label: "Search List", link: "/search-list", showSubRoute: false },
        ],
      },
      {
        label: "Layouts",
        icon: 'layout-sidebar-right-collapse',
        submenu: true,
        showSubRoute: false,
        submenuItems: [
          { label: "Horizontal", link: route.Horizontal, showSubRoute: false },
          { label: "Detached", link: route.Detached, showSubRoute: false },
          // { label: "Modern", link: route.Modern, showSubRoute: false },
          { label: "Two Column", link: route.TwoColumn, showSubRoute: false },
          { label: "Hovered", link: route.Hovered, showSubRoute: false },
          { label: "Boxed", link: route.Boxed, showSubRoute: false },
          { label: "RTL", link: route.RTL, showSubRoute: false },
          { label: "Dark", link: route.Dark, showSubRoute: false },
        ],
      },
    ],
  },
  {
    label: "Inventory",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Inventory",
    submenuItems: [
      {
        label: "Products",
        link: "/product-list",
        icon: 'box',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Create Product",
        link: "/add-product",
        icon: 'table-plus',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Expired Products",
        link: "/expired-products",
        icon: 'progress-alert',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Low Stocks",
        link: "/low-stocks",
        icon: 'trending-up-2',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Category",
        link: "/category-list",
        icon: 'list-details',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Sub Category",
        link: "/sub-categories",
        icon: 'carousel-vertical',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Brands",
        link: "/brand-list",
        icon: 'triangles',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Units",
        link: "/units",
        icon: 'brand-unity',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Variant Attributes",
        link: "/variant-attributes",
        icon: 'checklist',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Warranties",
        link: "/warranty",
        icon: 'certificate',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Print Barcode",
        link: "/barcode",
        icon: 'barcode',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Print QR Code",
        link: "/qrcode",
        icon: 'qrcode',
        showSubRoute: false,
        submenu: false,
      },
    ],
  },
  {
    label: "Stock",
    submenuOpen: true,
    submenuHdr: "Stock",
    submenu: true,
    showSubRoute: false,
    submenuItems: [
      {
        label: "Manage Stock",
        link: "/manage-stocks",
        icon: 'stack-3',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Stock Adjustment",
        link: "/stock-adjustment",
        icon: 'stairs-up',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Stock Transfer",
        link: "/stock-transfer",
        icon: 'stack-pop',
        showSubRoute: false,
        submenu: false,
      },
    ],
  },
  {
    label: "Sales",
    submenuOpen: true,
    submenuHdr: "Sales",
    submenu: false,
    showSubRoute: false,
    submenuItems: [
      {
        label: "Sales",
        icon: 'layout-grid',
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Online Orders", link: route.onlineorder, showSubRoute: false },
          { label: "POS Orders", link: route.posorder, showSubRoute: false },
        ],
      },
      {
        label: "Invoices",
        link: route.invoice,
        icon: 'file-invoice',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Sales Return",
        link: "/sales-returns",
        icon: 'receipt-refund',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Quotation",
        link: "/quotation-list",
        icon: 'files',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "POS",
        icon: 'device-laptop',
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "POS 1", link: "/pos", showSubRoute: false },
          { label: "POS 2", link: "/pos-2", showSubRoute: false },
          { label: "POS 3", link: "/pos-3", showSubRoute: false },
          { label: "POS 4", link: "/pos-4", showSubRoute: false },
          { label: "POS 5", link: "/pos-5", showSubRoute: false },
        ]
      },
    ],
  },
  {
    label: "Promo",
    submenuOpen: true,
    submenuHdr: "Promo",
    showSubRoute: false,
    submenuItems: [
      {
        label: "Coupons",
        link: "/coupons",
        icon: 'ticket',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Gift Cards",
        link: route.GiftCard,
        icon: 'cards',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Discount",
        icon: 'file-percent',
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Discount Plan", link: route.discountPlan, showSubRoute: false },
          { label: "Discount", link: route.discount, showSubRoute: false },
        ]
      },
    ],
  },
  {
    label: "Purchases",
    submenuOpen: true,
    submenuHdr: "Purchases",
    showSubRoute: false,
    submenuItems: [
      {
        label: "Purchases",
        link: "/purchase-list",
        icon: 'shopping-bag',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Purchase Order",
        link: "/purchase-order-report",
        icon: 'file-unknown',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Purchase Return",
        link: "/purchase-returns",
        icon: 'file-upload',
        showSubRoute: false,
        submenu: false,
      },
    ],
  },

  {
    label: "Finance & Accounts",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Finance & Accounts",
    submenuItems: [
      {
        label: "Expenses",
        submenu: true,
        showSubRoute: false,
        icon: 'file-stack',
        submenuItems: [
          { label: "Expenses", link: "/expense-list", showSubRoute: false },
          {
            label: "Expense Category",
            link: "/expense-category",
            showSubRoute: false,
          },
        ],
      },
      {
        label: "Income",
        submenu: true,
        showSubRoute: false,
        icon: 'file-pencil',
        submenuItems: [
          { label: "Income", link: "/income", showSubRoute: false },
          {
            label: "Income Category",
            link: "/income-category",
            showSubRoute: false,
          },
        ],
      },
      {
        label: "Bank Accounts",
        link: route.accountlist,
        icon: 'building-bank',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Money Transfer",
        link: "/money-transfer",
        icon: 'moneybag',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Balance Sheet",
        link: "/balance-sheet",
        icon: 'report-money',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Trial Balance",
        link: "/trial-balance",
        icon: 'alert-circle',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Cash Flow",
        link: "/cash-flow",
        icon: 'zoom-money',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Account Statement",
        link: "/account-statement",
        icon: 'file-infinity',
        showSubRoute: false,
        submenu: false,
      },
    ],
  },

  {
    label: "People",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "People",

    submenuItems: [
      {
        label: "Customers",
        link: route.customers,
        icon: 'users-group',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Billers",
        link: "/billers",
        icon: 'user-up',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Suppliers",
        link: "/suppliers",
        icon: 'user-dollar',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Stores",
        link: "/store-list",
        icon: 'home-bolt',
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Warehouses",
        link: "/warehouse",
        icon: 'archive',
        showSubRoute: false,
        submenu: false,
      },
    ],
  },

  {
    label: "HRM",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "HRM",
    submenuItems: [
      {
        label: "Employees",
        link: "/employees-grid",
        icon: 'user',
        showSubRoute: false,
      },
      {
        label: "Departments",
        link: "/department-grid",
        icon: 'compass',
        showSubRoute: false,
      },
      {
        label: "Designations",
        link: "/designation",
        icon: 'git-merge',
        showSubRoute: false,
      },
      {
        label: "Shifts",
        link: "/shift",
        icon: 'arrows-shuffle',
        showSubRoute: false,
      },

      {
        label: "Attendance",
        link: "#",
        icon: 'user-cog',
        showSubRoute: false,
        submenu: true,

        submenuItems: [
          { label: "Employee", link: "/attendance-employee" },
          { label: "Admin", link: "/attendance-admin" },
        ],
      },
      {
        label: "Leaves",
        link: "#",
        icon: 'calendar',
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Employee Leaves", link: "/leaves-employee" },
          { label: "Admin Leaves", link: "/leaves-admin" },
          { label: "Leave Types", link: "/leave-types" },
        ],
      },
      {
        label: "Holidays",
        link: "/holidays",
        icon: 'calendar-share',
        showSubRoute: false,
      },

      {
        label: "Payroll",
        link: "#",
        icon: 'file-dollar',
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Employee Salary", link: route.payrollList },
          { label: "Payslip", link: "/payslip" },
        ],
      },
    ],
  },
  {
    label: "Reports",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Reports",
    submenuItems: [
      {
        label: "Sales Report",
        icon: 'chart-bar',
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Sales Report", link: "/sales-report" },
          { label: "Best Seller", link: "/best-seller" },
        ],
      },
      {
        label: "Purchase Report",
        link: "/purchase-report",
        icon: 'chart-pie-2',
        showSubRoute: false,
      },
      {
        label: "Inventory Report",
        icon: 'triangle-inverted',
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Inventory Report", link: "/inventory-report" },
          { label: "Stock History", link: "/stock-history" },
          { label: "Sold Stock", link: "/sold-stock" },
        ],
      },
      {
        label: "Invoice Report",
        link: route.invoicereportnew,
        icon: 'businessplan',
        showSubRoute: false,
      },
      {
        label: "Supplier Report",
        icon: 'user-star',
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Supplier Report", link: "/supplier-report" },
          { label: "Supplier Due Report", link: "/supplier-due-report" },
        ],
      },
      {
        label: "Customer Report",

        icon: 'report',
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Customer Report", link: "/customer-report", },
          { label: "Customer Due Report", link: "/customer-due-report" },
        ],
      },
      {
        label: "Product Report",
        icon: 'report-analytics',
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Product Report", link: "/product-report" },
          { label: "Product Expiry Report", link: "/product-expiry-report" },
          { label: "Product Quantity Alert", link: route.productquantityreport },
        ],
      },
      {
        label: "Expense Report",
        link: "/expense-report",
        icon: 'file-vector',
        showSubRoute: false,
      },
      {
        label: "Income Report",
        link: "/income-report",
        icon: 'chart-ppf',
        showSubRoute: false,
      },
      {
        label: "Tax Report",
        link: "/tax-report",
        icon: 'chart-dots-2',
        showSubRoute: false,
      },
      {
        label: "Profit & Loss",
        link: "/profit-loss-report",
        icon: 'chart-donut',
        showSubRoute: false,
      },
      {
        label: "Annual Report",
        link: "/annual-report",
        icon: 'report-search',
        showSubRoute: false,
      },
    ],
  },

  {
    label: "Content (CMS)",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Content (CMS)",
    submenuItems: [
      {
        label: "Pages",
        icon: 'page-break',
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Pages", link: "/pages" },
        ],
      },
      {
        label: "Blog",
        icon: 'wallpaper',
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "All Blog", link: all_routes.allBlogs },
          { label: "Blog Tags", link: all_routes.blogTag },
          { label: "Categories", link:all_routes.blogCategories },
          { label: "Blog Comments", link: all_routes.blogComments },
        ],
      },
      {
        label: "Location",
        icon: 'map-pin',
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Countries", link: all_routes.countries },
          { label: "States", link: all_routes.states },
          { label: "Cities", link: all_routes.cities },
        ],
      },
      {
        label: "Testimonials",
        icon: 'star',
        link: all_routes.testimonial,
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "FAQ",
        icon: 'help-circle',
        link: all_routes.faq,
        showSubRoute: false,
        submenu: false,
      },

    ],
  },
  {
    label: "User Management",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "User Management",
    submenuItems: [
      {
        label: "Users",
        link: "/users",
        icon: 'shield-up',
        showSubRoute: false,
      },
      {
        label: "Roles & Permissions",
        link: "/roles-permissions",
        icon: 'jump-rope',
        showSubRoute: false,
      },
      {
        label: "Delete Account Request",
        link: "/delete-account",
        icon: 'trash-x',
        showSubRoute: false,
      },
    ],
  },
  {
    label: "Pages",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Pages",
    submenuItems: [
      {
        label: "Profile",
        link: "/profile",
        icon: 'user-circle',
        showSubRoute: false,
      },
      {
        label: "Authentication",
        submenu: true,
        showSubRoute: false,
        icon: 'shield',
        submenuItems: [
          {
            label: "Login",
            submenu: true,
            showSubRoute: false,
            submenuItems: [
              { label: "Cover", link: "/signin", showSubRoute: false },
              { label: "Illustration", link: "/signin-2", showSubRoute: false },
              { label: "Basic", link: "/signin-3", showSubRoute: false },
            ],
          },
          {
            label: "Register",
            submenu: true,
            showSubRoute: false,
            submenuItems: [
              { label: "Cover", link: "/register", showSubRoute: false },
              { label: "Illustration", link: "/register-2", showSubRoute: false, },
              { label: "Basic", link: "/register-3", showSubRoute: false },
            ],
          },
          {
            label: "Forgot Password",
            submenu: true,
            showSubRoute: false,
            submenuItems: [
              { label: "Cover", link: "/forgot-password", showSubRoute: false },
              { label: "Illustration", link: "/forgot-password-2", showSubRoute: false, },
              { label: "Basic", link: "/forgot-password-3", showSubRoute: false, },
            ],
          },
          {
            label: "Reset Password",
            submenu: true,
            showSubRoute: false,
            submenuItems: [
              { label: "Cover", link: "/reset-password", showSubRoute: false },
              { label: "Illustration", link: "/reset-password-2", showSubRoute: false, },
              { label: "Basic", link: "/reset-password-3", showSubRoute: false, },
            ],
          },
          {
            label: "Email Verification",
            submenu: true,
            showSubRoute: false,
            submenuItems: [
              {
                label: "Cover",
                link: "/email-verification",
                showSubRoute: false,
              },
              {
                label: "Illustration",
                link: "/email-verification-2",
                showSubRoute: false,
              },
              {
                label: "Basic",
                link: "/email-verification-3",
                showSubRoute: false,
              },
            ],
          },
          {
            label: "2 Step Verification",
            submenu: true,
            showSubRoute: false,
            submenuItems: [
              {
                label: "Cover",
                link: "/two-step-verification",
                showSubRoute: false,
              },
              {
                label: "Illustration",
                link: "/two-step-verification-2",
                showSubRoute: false,
              },
              {
                label: "Basic",
                link: "/two-step-verification-3",
                showSubRoute: false,
              },
            ],
          },
          { label: "Lock Screen", link: "/lock-screen", showSubRoute: false },
        ],
      },
      {
        label: "Error Pages",
        submenu: true,
        showSubRoute: false,
        icon: 'file-x',
        submenuItems: [
          { label: "404 Error", link: "/error-404", showSubRoute: false },
          { label: "500 Error", link: "/error-500", showSubRoute: false },
        ],
      },
      // {
      //   label: "Places",
      //   submenu: true,
      //   showSubRoute: false,
      //   icon: <Icon.Map />,
      //   submenuItems: [
      //     { label: "Countries", link: "countries",showSubRoute: false },
      //     { label: "States", link: "states",showSubRoute: false }
      //   ]
      // },
      {
        label: "Blank Page",
        link: "/blank-page",
        icon: 'file',
        showSubRoute: false,
      },
      {
        label: "Pricing",
        link: route.pricing,
        icon: 'currency-dollar',
        showSubRoute: false,
      },
      {
        label: "Coming Soon",
        link: "/coming-soon",
        icon: 'send',
        showSubRoute: false,
      },
      {
        label: "Under Maintenance",
        link: "/under-maintenance",
        icon: 'alert-triangle',
        showSubRoute: false,
      },
    ],
  },

  {
    label: "Settings",
    submenu: true,
    showSubRoute: false,
    submenuHdr: "Settings",
    submenuItems: [
      {
        label: "General Settings",
        submenu: true,
        showSubRoute: false,
        icon: 'settings',
        submenuItems: [
          { label: "Profile", link: "/general-settings" },
          { label: "Security", link: "/security-settings" },
          { label: "Notifications", link: "/notification" },
          { label: "Connected Apps", link: "/connected-apps" },
        ],
      },
      {
        label: "Website Settings",
        submenu: true,
        showSubRoute: false,
        icon: 'world',
        submenuItems: [
          {
            label: "System Settings",
            link: "/system-settings",
            showSubRoute: false,
          },
          {
            label: "Company Settings",
            link: "/company-settings",
            showSubRoute: false,
          },
          {
            label: "Localization",
            link: "/localization-settings",
            showSubRoute: false,
          },
          { label: "Prefixes", link: "/prefixes", showSubRoute: false },
          { label: "Preference", link: "/preference", showSubRoute: false },
          { label: "Appearance", link: "/appearance", showSubRoute: false },
          {
            label: "Social Authentication",
            link: "/social-authentication",
            showSubRoute: false,
          },
          {
            label: "Language",
            link: "/language-settings",
            showSubRoute: false,
          },
        ],
      },
      {
        label: "App Settings",
        submenu: true,

        showSubRoute: false,
        icon: 'device-mobile',
        submenuItems: [
          {
            label: "Invoice",
            link: "/invoice-settings",
            showSubRoute: false,
            submenu: true,
            submenuItems: [
              { label: "Invoice Settings", link: "/invoice-settings" },
              { label: "Invoice Template", link: "/invoice-template" },
            ],
          },
          { label: "Printer", link: "/printer-settings", showSubRoute: false },
          { label: "POS", link: "/pos-settings", showSubRoute: false },
          {
            label: "Custom Fields",
            link: "/custom-fields",
            showSubRoute: false,
          },
        ],
      },
      {
        label: "System Settings",
        submenu: true,
        showSubRoute: false,
        icon: 'device-desktop',
        submenuItems: [
          {
            label: "Email",
            link: "/email-settings",
            showSubRoute: false,
            submenu: true,
            submenuItems: [
              { label: "Email Settings", link: "/email-settings" },
              { label: "Email Template", link: "/email-template" },
            ],
          },
          {
            label: "SMS Gateways",
            link: "/sms-gateway",
            showSubRoute: false,
            submenu: true,
            submenuItems: [
              { label: "SMS Settings", link: "/sms-settings" },
              { label: "SMS Template", link: route.smstemplate },
            ],
          },
          { label: "OTP", link: "/otp-settings", showSubRoute: false },
          {
            label: "GDPR Cookies",
            link: "/gdpr-settings",
            showSubRoute: false,
          },
        ],
      },
      {
        label: "Financial Settings",
        submenu: true,
        showSubRoute: false,
        icon: 'settings-dollar',
        submenuItems: [
          {
            label: "Payment Gateway",
            link: "/payment-gateway-settings",
            showSubRoute: false,
          },
          {
            label: "Bank Accounts",
            link: "/bank-settings-grid",
            showSubRoute: false,
          },
          { label: "Tax Rates", link: "/tax-rates", showSubRoute: false },
          {
            label: "Currencies",
            link: "/currency-settings",
            showSubRoute: false,
          },
        ],
      },
      {
        label: "Other Settings",
        submenu: true,
        showSubRoute: false,
        icon: 'settings-2',
        submenuItems: [
          { label: "Storage", link: "/storage-settings", showSubRoute: false },
          {
            label: "Ban IP Address",
            link: "/ban-ip-address",
            showSubRoute: false,
          },
        ],
      },
      {
        label: "Logout",
        link: "/signin",
        icon: 'logout',
        showSubRoute: false,
      },
    ],
  },

  {
    label: "UI Interface",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "UI Interface",
    submenuItems: [
      {
        label: "Base UI",
        submenu: true,
        showSubRoute: false,
        icon: 'vector-bezier',
        submenuItems: [
          { label: "Alerts", link: "/ui-alerts", showSubRoute: false },
          { label: "Accordion", link: "/ui-accordion", showSubRoute: false },
          { label: "Avatar", link: "/ui-avatar", showSubRoute: false },
          { label: "Badges", link: "/ui-badges", showSubRoute: false },
          { label: "Border", link: "/ui-borders", showSubRoute: false },
          { label: "Buttons", link: "/ui-buttons", showSubRoute: false },
          {
            label: "Button Group",
            link: "/ui-buttons-group",
            showSubRoute: false,
          },
          { label: "Breadcrumb", link: "/ui-breadcrumb", showSubRoute: false },
          { label: "Card", link: "/ui-cards", showSubRoute: false },
          { label: "Carousel", link: "/ui-carousel", showSubRoute: false },
          { label: "Colors", link: "/ui-colors", showSubRoute: false },
          { label: "Dropdowns", link: "/ui-dropdowns", showSubRoute: false },
          { label: "Grid", link: "/ui-grid", showSubRoute: false },
          { label: "Images", link: "/ui-images", showSubRoute: false },
          { label: "Lightbox", link: "/ui-lightbox", showSubRoute: false },
          { label: "Media", link: "/ui-media", showSubRoute: false },
          { label: "Modals", link: "/ui-modals", showSubRoute: false },
          { label: "Offcanvas", link: "/ui-offcanvas", showSubRoute: false },
          { label: "Pagination", link: "/ui-pagination", showSubRoute: false },
          // { label: "Popovers", link: "/ui-popovers", showSubRoute: false },
          { label: "Progress", link: "/ui-progress", showSubRoute: false },
          {
            label: "Placeholders",
            link: "/ui-placeholders",
            showSubRoute: false,
          },
          {
            label: "Range Slider",
            link: "/ui-rangeslider",
            showSubRoute: false,
          },
          { label: "Spinner", link: "/ui-spinner", showSubRoute: false },
          // {
          //   label: "Sweet Alerts",
          //   link: "/ui-sweetalerts",
          //   showSubRoute: false,
          // },
          { label: "Tabs", link: "/ui-nav-tabs", showSubRoute: false },
          { label: "Toasts", link: "/ui-toasts", showSubRoute: false },
          { label: "Tooltips", link: "/ui-tooltips", showSubRoute: false },
          { label: "Typography", link: "/ui-typography", showSubRoute: false },
          { label: "Video", link: "/ui-video", showSubRoute: false },
          // { label: "Sortable", link: "/sortable", showSubRoute: false },
          // { label: "SwiperJs", link: "/swiper-js", showSubRoute: false },
        ],
      },
      {
        label: "Advanced UI",
        submenu: true,
        showSubRoute: false,
        icon: 'stack-forward',
        submenuItems: [
          { label: "Ribbon", link: "/ui-ribbon", showSubRoute: false },
          { label: "Clipboard", link: "/ui-clipboard", showSubRoute: false },
          { label: "Drag & Drop", link: "/ui-drag-drop", showSubRoute: false },
          // {
          //   label: "Range Slider",
          //   link: "/ui-rangeslider",
          //   showSubRoute: false,
          // },
          { label: "Rating", link: "/ui-rating", showSubRoute: false },
          {
            label: "Text Editor",
            link: "/ui-text-editor",
            showSubRoute: false,
          },
          { label: "Counter", link: "/ui-counter", showSubRoute: false },
          // { label: "Scrollbar", link: "/ui-scrollbar", showSubRoute: false },
          // { label: "Sticky Note", link: "/ui-stickynote", showSubRoute: false },
          { label: "Timeline", link: "/ui-timeline", showSubRoute: false },
        ],
      },
      {
        label: "Charts",
        submenu: true,
        showSubRoute: false,
        icon: 'chart-infographic',
        submenuItems: [
          { label: "Apex Charts", link: "/chart-apex", showSubRoute: false },
          { label: "Chart Js", link: "/chart-js", showSubRoute: false },
        ],
      },
      {
        label: "Icons",
        submenu: true,
        showSubRoute: false,
        icon: 'icons',
        submenuItems: [
          {
            label: "Fontawesome Icons",
            link: "/icon-fontawesome",
            showSubRoute: false,
          },
          {
            label: "Remix Icon",
            link: "/remix-icon",
            showSubRoute: false,
          },
          {
            label: "Bootstrap Icon",
            link: "/bootstrap-icon",
            showSubRoute: false,
          },
          {
            label: "Tabler Icon",
            link: "/tabler-icon",
            showSubRoute: false,
          },
          // {
          //   label: "Feather Icons",
          //   link: "/icon-feather",
          //   showSubRoute: false,
          // },
          // { label: "Ionic Icons", link: "/icon-ionic", showSubRoute: false },
          {
            label: "Material Icons",
            link: "/icon-material",
            showSubRoute: false,
          },
          { label: "Pe7 Icons", link: "/icon-pe7", showSubRoute: false },
         
         
          {
            label: "Themify Icons",
            link: "/icon-themify",
            showSubRoute: false,
          },
          {
            label: "Typicon Icons",
            link: "/icon-typicon",
            showSubRoute: false,
          },
          {
            label: "Bootstrap Icons",
            link: "/icon-bootstrap",
            showSubRoute: false,
          },
          { label: "Flag Icons", link: "/icon-flag", showSubRoute: false },
        ],
      },
      {
        label: "Forms",
        submenu: true,
        showSubRoute: false,
        icon: 'input-search',
        submenuItems: [
          {
            label: "Form Elements",
            submenu: true,
            showSubRoute: false,
            submenuItems: [
              {
                label: "Basic Inputs",
                link: "/form-basic-inputs",
                showSubRoute: false,
              },
              {
                label: "Checkbox & Radios",
                link: "/form-checkbox-radios",
                showSubRoute: false,
              },
              {
                label: "Input Groups",
                link: "/form-input-groups",
                showSubRoute: false,
              },
              {
                label: "Grid & Gutters",
                link: "/form-grid-gutters",
                showSubRoute: false,
              },
              {
                label: "Form Select",
                link: "/form-select",
                showSubRoute: false,
              },
              // { label: "Input Masks", link: "/form-mask", showSubRoute: false },
              {
                label: "File Uploads",
                link: "/form-fileupload",
                showSubRoute: false,
              },
            ],
          },
          {
            label: "Layouts",
            submenu: true,
            showSubRoute: false,
            submenuItems: [
              { label: "Horizontal Form", link: "/form-horizontal" },
              { label: "Vertical Form", link: "/form-vertical" },
              { label: "Floating Labels", link: "/form-floating-labels" },
            ],
          },
          { label: "Form Validation", link: "/form-validation" },
          { label: "Select", link: "/form-select2" },
          { label: "Form Wizard", link: "/form-wizard" },
          { label: "Form Picker", link: "/form-picker" },
        ],
      },
      {
        label: "Tables",
        submenu: true,
        showSubRoute: false,
        icon: 'table',
        submenuItems: [
          { label: "Basic Tables", link: "/tables-basic" },
          { label: "Data Table", link: "/data-tables" },
        ],
      },
      {
        label: "Map",
        submenu: true,
        showSubRoute: false,
        icon: 'map-pin-pin',
        submenuItems: [
          { label: "Leaflet", link: "/leaflet" },
        ],
      },
    ],
  },
  {
    label: "Help",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Help",
    submenuItems: [
      {
        label: "Documentation",
        link: "https://dreamspos.dreamstechnologies.com/documentation/react.html",
        icon: 'file-text',
        showSubRoute: false,
      },
      {
        label: "Changelog v2.2.2",
        link: "https://dreamspos.dreamstechnologies.com/documentation/changelog.html",
        icon: 'exchange',
        showSubRoute: false,
      },
      {
        label: "Multi Level",
        showSubRoute: false,
        submenu: true,
        icon: 'menu-2',
        submenuItems: [
          { label: "Level 1.1", link: "#", showSubRoute: false },
          {
            label: "Level 1.2",
            submenu: true,
            showSubRoute: false,
            submenuItems: [
              { label: "Level 2.1", link: "#", showSubRoute: false },
              {
                label: "Level 2.2",
                submenu: true,
                showSubRoute: false,
                submenuItems: [
                  { label: "Level 3.1", link: "#", showSubRoute: false },
                  { label: "Level 3.2", link: "#", showSubRoute: false },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
