import React from 'react'


const CryptoSearchForm = () => {

  return (
    <form className="form">
        <div className="field">
            <select name="currency" id="currency">
                <option value=""> Select Currency </option>
            </select>
        </div>

        <div className="field">
            <select name="cryptocurrency" id="cryptocurrency">
                <option value=""> Select Crypto </option>
            </select>
        </div>

        <input type="submit" value="calculate"/>

    </form>
  )
}

export default CryptoSearchForm
