import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoCurrency, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  //we can also use the array type and remove the []
  cryptoCurrencies: CryptoCurrency[];

  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

//Here we put the actions
//we can use zustand to do API calls
//here we use the devtools of zustand
export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],

    //we want to block getCryptos since he finish the task (to get the data correctly)
    //because it call an async await funcion, he also need to async await the data
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({
        cryptoCurrencies: cryptoCurrencies,
      }));
    },

    fetchData: async (pair) => {
      const result = await fetchCurrentCryptoPrice(pair);
    },
  }))
);
