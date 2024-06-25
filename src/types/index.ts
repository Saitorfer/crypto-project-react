import { z } from "zod";
import { CurrencySchema,CryptoCurrencyResponseSchema } from "../schemas/crypto-schema";



// we saves the types here and connect them with zod 
export type Currency = z.infer<typeof CurrencySchema>

export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>