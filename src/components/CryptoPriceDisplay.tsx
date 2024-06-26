import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result);
  const loading = useCryptoStore((state) => state.loading);

  const hasResult = useMemo(
    () => Object.keys(result).length > 0 && !Object.values(result).includes(""),
    [result]
  );

  return (
    <div className="result-wrapper">
      {loading ? (<Spinner />) : (hasResult && (
          <>
            <h2>Exchange Price:</h2>
            <div className="result">
              <img
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                alt="Crypto Image"
              />
              <div className="prices">
                <p>
                  Actual Price: <span>{result.PRICE}</span>
                </p>
                <p>
                  High Day: <span>{result.HIGHDAY}</span>
                </p>
                <p>
                  Low Day: <span>{result.LOWDAY}</span>
                </p>
                <p>
                  Variation last 24 hours: <span>{result.CHANGEPCT24HOUR}</span>
                </p>
                <p>
                  Last Update: <span>{result.LASTUPDATE}</span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
