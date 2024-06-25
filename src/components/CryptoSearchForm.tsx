import { useCryptoStore } from "../store";
import { currencies } from "../data";
import { ChangeEvent, useState } from "react";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

const CryptoSearchForm = () => {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);
  const fetchdata = useCryptoStore((state) => state.fetchData);

  
  const [pair, setPair] = useState<Pair>({
    currency: "",
    criptocurrency: "",
  });
  const [error,setError]= useState('');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      //as pair fields get the same name as the values, dont have to specifie
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.values(pair).includes('')){
        setError('All fields are required');
        return;
    }
    setError('');
    //call API for result
    fetchdata(pair);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
        {
            //Errors
            error && <ErrorMessage>{error}</ErrorMessage>
        }
      <div className="field">
        <select
          name="currency"
          id="currency"
          value={pair.currency}
          onChange={handleChange}
        >
          <option value=""> Select Currency </option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <select
          name="criptocurrency"
          id="criptocurrency"
          value={pair.criptocurrency}
          onChange={handleChange}
        >
          <option value=""> Select Crypto </option>
          {cryptoCurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {" "}
              {crypto.CoinInfo.FullName}{" "}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="calculate" />
    </form>
  );
};

export default CryptoSearchForm;
