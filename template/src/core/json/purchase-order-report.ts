import {
  expireProduct01,
  expireProduct02,
  expireProduct03,
  expireProduct04,
  stockImg01,
  stockImg02,
  stockImg03,
  stockImg04,
  stockImg05,
  stockImg06,
} from "../../utils/imagepath";

export const purchaseOrderReportData = [
  {
    id: 1,
    product: {
      name: "Lenovo IdeaPad 3",
      image: stockImg01,
    },
    purchasedAmount: "$1000",
    purchasedQty: 40,
    instockQty: 30,
  },
  {
    id: 2,
    product: {
      name: "Beats Pro",
      image: stockImg06,
    },
    purchasedAmount: "$1500",
    purchasedQty: 25,
    instockQty: 18,
  },
  {
    id: 3,
    product: {
      name: "Nike Jordan",
      image: stockImg02,
    },
    purchasedAmount: "$1500",
    purchasedQty: 30,
    instockQty: 35,
  },
  {
    id: 4,
    product: {
      name: "Apple Series 5 Watch",
      image: stockImg03,
    },
    purchasedAmount: "$2000",
    purchasedQty: 28,
    instockQty: 30,
  },
  {
    id: 5,
    product: {
      name: "Amazon Echo Dot",
      image: stockImg04,
    },
    purchasedAmount: "$800",
    purchasedQty: 15,
    instockQty: 10,
  },
  {
    id: 6,
    product: {
      name: "Sanford Chair Sofa",
      image: stockImg05,
    },
    purchasedAmount: "$750",
    purchasedQty: 20,
    instockQty: 15,
  },
  {
    id: 7,
    product: {
      name: "Red Premium Satchel",
      image: expireProduct01,
    },
    purchasedAmount: "$1300",
    purchasedQty: 35,
    instockQty: 40,
  },
  {
    id: 8,
    product: {
      name: "Iphone 14 Pro",
      image: expireProduct02,
    },
    purchasedAmount: "$1100",
    purchasedQty: 45,
    instockQty: 35,
  },
  {
    id: 9,
    product: {
      name: "Gaming Chair",
      image: expireProduct03,
    },
    purchasedAmount: "$2300",
    purchasedQty: 22,
    instockQty: 20,
  },
  {
    id: 10,
    product: {
      name: "Borealis Backpack",
      image: expireProduct04,
    },
    purchasedAmount: "$1700",
    purchasedQty: 18,
    instockQty: 25,
  },
];
