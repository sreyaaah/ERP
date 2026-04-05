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
        label: "Warranties",
        link: "/warranty",
        icon: 'certificate',
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
        submenuOpen: true,
        submenuHdr: "Sales",
        showSubRoute: false,
        submenu: false,
         link: route.sales,
      },
      {
        label: "Invoices",
        link: route.invoice,
        icon: 'file-invoice',
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
    label: "Financial Settings",
    submenu: true,
    showSubRoute: false,
    submenuHdr: "Settings",
    submenuItems: [
          {
            label: "Bank Accounts",
            link: "/bank-settings-grid",
            icon: "building-bank",
            showSubRoute: false,
          },
          { label: "Tax Rates", 
            link: "/tax-rates", 
            icon: "receipt-tax",
            showSubRoute: false },
          {
            label: "Currencies",
            link: "/currency-settings",
            icon: "currency-dollar",
            showSubRoute: false,
          },
      
      {
        label: "Logout",
        link: "/signin",
        icon: 'logout',
        showSubRoute: false,
      },
    ],
  },
];
