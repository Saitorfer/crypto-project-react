import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});


export const CryptoCurrencyResponseSchema = 
    z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string()
    })
});

//Dont forget the JSON is an Array
//Best way is to get one in singular and other one in plural
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)