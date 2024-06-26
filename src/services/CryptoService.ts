import axios from "axios";
import {
  CryptoCurrenciesResponseSchema,
  CryptoPriceSchema,
} from "../schemas/crypto-schema";
import { Pair } from "../types";

//here we put the API calls
export async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  //We take directly the DATA part of the Json
  const {
    data: { Data },
  } = await axios(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);

  if (result.success) {
    return result.data;
  }
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
  //use `` NOT ''
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`;
  //We take directly the Display part of the Json
  const {
    data: { DISPLAY },
  } = await axios(url);
  const result = CryptoPriceSchema.safeParse(
    DISPLAY[pair.criptocurrency][pair.currency]
  );
  if (result.success) {
      return result.data;

  }
}
