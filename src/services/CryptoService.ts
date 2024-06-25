import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "../schemas/crypto-schema";

//here we put the API calls
export async function getCryptos() {
    const url =
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
    //We take directly the DATA part of the JSOn
    const {
      data: { Data },
    } = await axios(url);
    const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  
    if (result.success) {
      return result.data;
    }
  }