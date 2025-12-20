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
    label: "General Settings",
    icon: "settings",
    submenu: true,
    submenuItems: [
      { label: "Profile", link: route.generalsettings },
      { label: "Security", link: route.securitysettings },
      { label: "Notifications", link: route.notification },
      { label: "Connected Apps", link: route.connectedapps },
    ],
  },
  {
    label: "Website Settings",
    icon: "world",
    submenu: true,
    submenuItems: [
      { label: "System Settings", link: route.systemsettings },
      { label: "Company Settings", link: route.companysettings },
      { label: "Localization", link: route.localizationsettings },
      { label: "Prefixes", link: route.prefixes },
      { label: "Preference", link: route.preference },
      { label: "Appearance", link: route.appearance },
      { label: "Social Authentication", link: route.socialauthendication },
      { label: "Language", link: route.languagesettings },
    ],
  },
  {
    label: "App Settings",
    icon: "device-mobile",
    submenu: true,
    submenuItems: [
      { label: "Invoice", link: route.invoicesettings },
      { label: "Invoice Templates", link: route.invoicetemplate },
      { label: "Printer", link: route.printersettings },
      { label: "POS", link: route.possettings },
      { label: "Signatures", link: route.signatures },
      { label: "Custom Fields", link: route.customfields },
    ],
  },
  {
    label: "System Settings",
    icon: "device-desktop",
    submenu: true,
    submenuItems: [
      {
        label: "Email",
        submenu: true,
        submenuItems: [
          { label: "Email Settings", link: route.emailsettings },
          { label: "Email Templates", link: route.emailtemplate },
        ],
      },
      {
        label: "SMS Gateways",
        submenu: true,
        submenuItems: [
          { label: "SMS Settings", link: route.smssettings },
          { label: "SMS Templates", link: route.smstemplate },
        ],
      },
      { label: "OTP", link: route.otpsettings },
      { label: "GDPR Cookies", link: route.gdbrsettings },
    ],
  },
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
  {
    label: "Other Settings",
    icon: "settings-2",
    submenu: true,
    submenuItems: [
      { label: "Storage", link: route.storagesettings },
      { label: "Ban IP Address", link: route.banipaddress },
    ],
  },
];

