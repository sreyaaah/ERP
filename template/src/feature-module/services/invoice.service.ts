export interface InvoiceItem {
  productId: string;
  productName: string;
  productImage?: string;
  qty: number;
  rate: number;
  discount: number;
  tax: number;
  taxAmount: number;
  unitCost: number;
  total: number;
}

export interface Invoice {
  id: number;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  customerId: string;
  customerName: string;
  customerImage: string;
  customerAddress?: string;
  customerEmail?: string;
  customerPhone?: string;
  quotationId?: number;
  quotationNumber?: string;
  invoiceType: "interstate" | "intrastate" | "international";
  items: InvoiceItem[];
  subTotal: number;
  totalTax: number;
  grandTotal: number;
  paidAmount: number;
  amountInWords: string;
  paymentStatus: "Paid" | "Unpaid" | "Partially Paid" | "Overdue";
  notes?: string;
  termsAndConditions?: string;
  createdAt: string;
  updatedAt: string;
}

const INVOICE_STORAGE_KEY = "invoiceList";

export class InvoiceService {

  static generateInvoiceNumber(): string {
    const d = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    return `INV-${d}-${Math.floor(1000 + Math.random() * 9000)}`;
  }


  static getAllInvoices(): Invoice[] {
    try {
      const data = localStorage.getItem(INVOICE_STORAGE_KEY);
      const invoices: Invoice[] = data ? JSON.parse(data) : [];

      return invoices.map(inv => ({
        ...inv,
        paidAmount: inv.paidAmount ?? 0
      }));
    } catch (error) {
      console.error('Error loading invoices:', error);
      return [];
    }
  }

  static getInvoiceById(id: number): Invoice | null {
    return this.getAllInvoices().find(i => i.id === id) || null;
  }

  static saveInvoice(invoice: Invoice): void {
    const invoices = this.getAllInvoices();
    invoices.unshift(invoice);
    localStorage.setItem(INVOICE_STORAGE_KEY, JSON.stringify(invoices));
    window.dispatchEvent(new Event("storage"));
  }

  static updateInvoice(updated: Invoice): void {
    const invoices = this.getAllInvoices().map(i =>
      i.id === updated.id ? { ...updated, updatedAt: new Date().toISOString() } : i
    );
    localStorage.setItem(INVOICE_STORAGE_KEY, JSON.stringify(invoices));
    window.dispatchEvent(new Event("storage"));
  }

  static deleteInvoice(id: number): void {
    const invoices = this.getAllInvoices().filter(i => i.id !== id);
    localStorage.setItem(INVOICE_STORAGE_KEY, JSON.stringify(invoices));
    window.dispatchEvent(new Event("storage"));
  }

  static createInvoiceFromQuotation(quotation: any): Invoice {
    console.log('Converting quotation:', quotation);

    if (!quotation) {
      throw new Error('Quotation data is required');
    }

    const today = new Date();
    const due = new Date();
    due.setDate(due.getDate() + 30);

    let items: InvoiceItem[] = [];

    if (Array.isArray(quotation.details) && quotation.details.length > 0) {

      items = quotation.details.map((detail: any) => {
        const product = detail.product || {};
        const qty = Number(detail.qty || 0);
        const rate = Number(detail.rate || 0);
        const discount = Number(detail.discount || 0);
        const tax = Number(detail.tax || 0);

        const baseAmount = qty * rate;
        const taxAmount = ((baseAmount - discount) * tax) / 100;
        const total = baseAmount - discount + taxAmount;

        return {
          productId: product.value || product.sku || String(product.id || ''),
          productName: product.label || product.product || product.name || 'Unknown Product',
          productImage: product.img || product.image || 'product-01.jpg',
          qty,
          rate,
          discount,
          tax,
          taxAmount,
          unitCost: rate,
          total
        };
      });
    } else if (Array.isArray(quotation.products) && quotation.products.length > 0) {
      items = quotation.products.map((p: any) => {
        const qty = Number(p.qty || 1);
        const rate = Number(p.rate || p.price || 0);
        const discount = Number(p.discount || 0);
        const tax = Number(p.tax || 0);

        const baseAmount = qty * rate;
        const taxAmount = ((baseAmount - discount) * tax) / 100;
        const total = baseAmount - discount + taxAmount;

        return {
          productId: String(p.id || p.productId || ''),
          productName: p.name || p.productName || 'Unknown Product',
          productImage: p.image || p.productImage || 'product-01.jpg',
          qty,
          rate,
          discount,
          tax,
          taxAmount,
          unitCost: rate,
          total
        };
      });
    } else if (quotation.Product_Name) {

      let qty = Number(quotation.Qty || 1);
      let rate = Number(quotation.Rate || 0);
      let discount = Number(quotation.Discount || 0);
      let tax = Number(quotation.Tax || 0);

      if (rate === 0 && quotation.Total) {
        const cleanedTotal = String(quotation.Total).replace(/[^0-9.]/g, '');
        rate = Number(cleanedTotal);
      }

      const baseAmount = qty * rate;
      const taxAmount = ((baseAmount - discount) * tax) / 100;
      const total = baseAmount - discount + taxAmount;

      items = [{
        productId: quotation.Product_Id || 'P1',
        productName: quotation.Product_Name || 'Unknown Product',
        productImage: quotation.Product_image || 'product-01.jpg',
        qty,
        rate,
        discount,
        tax,
        taxAmount,
        unitCost: rate,
        total
      }];
    }

    if (items.length === 0) {
      if (quotation.GrandTotal || quotation.Total) {
        const totalVal = Number(quotation.GrandTotal || String(quotation.Total).replace(/[^0-9.]/g, ''));
        items = [{
          productId: 'GENERIC',
          productName: 'Quotation Item',
          productImage: 'product-01.jpg',
          qty: 1,
          rate: totalVal,
          discount: 0,
          tax: 0,
          taxAmount: 0,
          unitCost: totalVal,
          total: totalVal
        }];
      } else {
        throw new Error('No valid items found in quotation');
      }
    }

    const subTotal = items.reduce((sum, item) => sum + (item.qty * item.rate - item.discount), 0);
    const totalTax = items.reduce((sum, item) => sum + item.taxAmount, 0);
    const grandTotal = subTotal + totalTax;

    const invoiceType = quotation.quotationType || quotation.invoiceType || 'intrastate';

    return {
      id: Date.now(),
      invoiceNumber: this.generateInvoiceNumber(),
      invoiceDate: today.toLocaleDateString("en-GB"),
      dueDate: due.toLocaleDateString("en-GB"),
      customerId: quotation.Custmer_Id || quotation.customerId || '',
      customerName: quotation.Custmer_Name || quotation.customerName || 'Unknown Customer',
      customerImage: quotation.Custmer_Image || quotation.customerImage || 'user-01.jpg',
      customerAddress: quotation.customerAddress || '',
      customerEmail: quotation.customerEmail || '',
      customerPhone: quotation.customerPhone || '',
      quotationId: quotation.id,
      quotationNumber: quotation.Quotation_No || quotation.quotationNumber || '',
      invoiceType: invoiceType as "interstate" | "intrastate" | "international",
      items,
      subTotal,
      totalTax,
      grandTotal,
      paidAmount: 0,
      amountInWords: this.numberToWords(grandTotal, invoiceType),
      paymentStatus: "Unpaid",
      notes: quotation.Description || quotation.notes || '',
      termsAndConditions: quotation.termsAndConditions ||
        "Please pay within 30 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  static numberToWords(num: number, invoiceType: string): string {
    const roundedNum = Math.round(num);

    if (roundedNum === 0) {
      return invoiceType === 'international' ? "Zero Dollars Only" : "Zero Rupees Only";
    }

    if (invoiceType === 'international') {
      return this.numberToWordsUSD(roundedNum);
    }
    return this.numberToWordsINR(roundedNum);
  }

  static numberToWordsINR(num: number): string {
    if (num === 0) return "Zero Rupees Only";

    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
      "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    const convertLessThanThousand = (n: number): string => {
      if (n === 0) return "";
      if (n < 10) return ones[n];
      if (n < 20) return teens[n - 10];
      if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
      return ones[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + convertLessThanThousand(n % 100) : "");
    };

    let result = "";

    const crore = Math.floor(num / 10000000);
    num %= 10000000;

    const lakh = Math.floor(num / 100000);
    num %= 100000;

    const thousand = Math.floor(num / 1000);
    num %= 1000;

    if (crore) result += convertLessThanThousand(crore) + " Crore ";
    if (lakh) result += convertLessThanThousand(lakh) + " Lakh ";
    if (thousand) result += convertLessThanThousand(thousand) + " Thousand ";
    if (num) result += convertLessThanThousand(num);

    return result.trim() + " Rupees Only";
  }

  static numberToWordsUSD(num: number): string {
    if (num === 0) return "Zero Dollars Only";

    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
      "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    const convertLessThanThousand = (n: number): string => {
      if (n === 0) return "";
      if (n < 10) return ones[n];
      if (n < 20) return teens[n - 10];
      if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
      return ones[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + convertLessThanThousand(n % 100) : "");
    };

    let result = "";

    const billion = Math.floor(num / 1000000000);
    num %= 1000000000;

    const million = Math.floor(num / 1000000);
    num %= 1000000;

    const thousand = Math.floor(num / 1000);
    num %= 1000;

    if (billion) result += convertLessThanThousand(billion) + " Billion ";
    if (million) result += convertLessThanThousand(million) + " Million ";
    if (thousand) result += convertLessThanThousand(thousand) + " Thousand ";
    if (num) result += convertLessThanThousand(num);

    return result.trim() + " Dollars Only";
  }

  static updatePaymentStatus(invoice: Invoice): Invoice {
    if (invoice.paymentStatus === "Paid") return invoice;

    try {
      const [d, m, y] = invoice.dueDate.split("/").map(Number);
      const dueDate = new Date(y, m - 1, d);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (dueDate < today && invoice.paymentStatus === "Unpaid") {
        return { ...invoice, paymentStatus: "Overdue" };
      }
    } catch (error) {
      console.error('Error updating payment status:', error);
    }

    return invoice;
  }
}