export interface IPBCurrency {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

export interface IMonoCurrency {
  currencyCodeA: number;
  currencyCodeB: number;
  date: number;
  rateBuy: number;
  rateSell: number;
}

export interface ICurrencyCode {
  UAH: number;
  USD: number;
  EUR: number;
}

export enum Currency {
  UAH = "UAH",
  USD = "USD",
  EUR = "EUR",
}
