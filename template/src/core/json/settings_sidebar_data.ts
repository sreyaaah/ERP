import { all_routes } from "../../routes/all_routes";

const route = all_routes;

export interface SettingsMenuItem {
  label: string;
  icon?: string;
  link?: string;
  submenu?: boolean;
  submenuItems?: SettingsMenuItem[];
}

export const SettingsSidebarData: SettingsMenuItem[] = [
  {
    label: "Financial Settings",
    icon: "settings-dollar",
    submenu: true,
    submenuItems: [
      { label: "Payment Gateway", link: route.paymentgateway },
      { label: "Bank Accounts", link: route.banksettingsgrid },
      { label: "Tax Rates", link: route.taxrates },
      { label: "Currencies", link: route.currencysettings },
    ],
  },
];

