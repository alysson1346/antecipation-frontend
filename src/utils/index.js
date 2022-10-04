import React from "react";
import IntlCurrencyInput from "react-intl-currency-input";

const currencyConfig = {
  locale: "pt-BR",
  formats: {
    number: {
      BRL: {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

const BrlCurrencyComponent = ({ setValueAmounts }) => {
  const handleChange = (event, value) => {
    event.preventDefault();
    setValueAmounts(value);
  };

  return (
    <IntlCurrencyInput
      currency="BRL"
      config={currencyConfig}
      onChange={handleChange}
    />
  );
};

export default BrlCurrencyComponent;
