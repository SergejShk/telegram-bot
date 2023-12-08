import axios from "axios";

import { currencyCode } from "../utils/constants";

import { Currency, IMonoCurrency, IPBCurrency } from "@/interface/currency";

class CurrencyService {
  PrivateBankBaseUrl: string;
  MonobankBaseUrl: string;

  constructor() {
    this.PrivateBankBaseUrl = process.env.PB_API || "";
    this.MonobankBaseUrl = process.env.MONO_API || "";
  }

  private getByPrivateBank = async (currency: string) => {
    try {
      const { data } = await axios.get(this.PrivateBankBaseUrl);

      return data.filter((c: IPBCurrency) => c.ccy === currency);
    } catch (error) {
      console.log(error);
    }
  };

  private getByMonoank = async (currency: string) => {
    try {
      const { data } = await axios.get(this.MonobankBaseUrl);

      return data.find(
        (c: IMonoCurrency) =>
          c.currencyCodeA === currencyCode[currency as Currency] &&
          c.currencyCodeB === currencyCode.UAH
      );
    } catch (error) {
      console.log(error);
    }
  };

  private getMessage = (
    pbCurrency: IPBCurrency,
    monoCurrency: IMonoCurrency
  ) => {
    const header = `Currency: ${pbCurrency.ccy}`;
    const pbMessage = `\n\nPrivate Bank:\nBuy: ${pbCurrency.buy}\nSale: ${pbCurrency.sale}`;
    const monoMessage = monoCurrency
      ? `\n\nMonobank:\nBuy: ${monoCurrency?.rateBuy}\nSale: ${monoCurrency?.rateSell}`
      : "";

    return header + pbMessage + monoMessage;
  };

  public getCurrency = async (currency: string) => {
    const [pbCurrency] = await this.getByPrivateBank(currency);
    const monoCurrency = await this.getByMonoank(currency);

    return this.getMessage(pbCurrency, monoCurrency);
  };
}

export default CurrencyService;
