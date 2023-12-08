import axios from "axios";

import { IPBCurrency } from "@/interface/currency";

class CurrencyService {
  PrivateBankBaseUrl: string;
  MonoBankBaseUrl: string;

  constructor() {
    this.PrivateBankBaseUrl = process.env.PB_API || "";
    this.MonoBankBaseUrl = process.env.MONO_API || "";
  }

  private getByPrivateBank = async (currency: string) => {
    const { data } = await axios.get(this.PrivateBankBaseUrl);

    return data.filter((c: IPBCurrency) => c.ccy === currency);
  };

  private getMessage = (pbCurrency: IPBCurrency) => {
    return `Currency: ${pbCurrency.ccy}\n\nPrivate Bank:\nBuy: ${pbCurrency.buy}\nSale: ${pbCurrency.sale}`;
  };

  public getCurrency = async (currency: string) => {
    const [pbCurrency] = await this.getByPrivateBank(currency);

    return this.getMessage(pbCurrency);
  };
}

export default CurrencyService;
