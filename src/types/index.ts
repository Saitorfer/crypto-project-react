import { z } from "zod";
import {
  CurrencySchema,
  CryptoCurrencyResponseSchema,
  PairSchema,
  CryptoPriceSchema,
} from "../schemas/crypto-schema";

// we saves the types here and connect them with zod
export type Currency = z.infer<typeof CurrencySchema>;

export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;

export type Pair = z.infer<typeof PairSchema>;

export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;
