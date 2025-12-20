const STORAGE_KEY = "customers";

export const CustomerService = {
  getAll: () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  saveAll: (customers: any[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
  },

  add: (customer: any) => {
    const customers = CustomerService.getAll();
    const updated = [customer, ...customers];
    CustomerService.saveAll(updated);
    return updated;
  },

  remove: (code: string) => {
    const customers = CustomerService.getAll();
    const updated = customers.filter(
      (c: any) => c.code !== code
    );
    CustomerService.saveAll(updated);
    return updated;
  }
};
