import { useCryptoStore } from '../store'
import {currencies} from '../data'
import { optional } from 'zod'

const CryptoSearchForm = () => {

   const cryptoCurrencies =  useCryptoStore((state) => state.cryptoCurrencies)

  return (
    <form className="form">
        <div className="field">
            <select name="currency" id="currency">
                <option value=""> Select Currency </option>
                {currencies.map (currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>

        <div className="field">
            <select name="criptocurrency" id="criptocurrency">
                <option value=""> Select Crypto </option>
                {cryptoCurrencies.map(crypto => (
                    <option
                        key={crypto.CoinInfo.Name}
                        value={crypto.CoinInfo.Name}
                    > {crypto.CoinInfo.FullName} </option>
                ))}
            </select>
        </div>

        <input type="submit" value="calculate"/>

    </form>
  )
}

export default CryptoSearchForm
