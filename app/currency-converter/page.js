"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Button from "@/components/Button/Button";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [liveRates, setLiveRates] = useState([]);
  const [ratesLoading, setRatesLoading] = useState(true);

  const currencies = [
    { code: "USD", name: "US Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "AED", name: "UAE Dirham" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "THB", name: "Thai Baht" },
    { code: "INR", name: "Indian Rupee" },
  ];

  // Top 20 countries where Indians travel or live
  const topCountries = [
    { code: "USD", name: "United States", flag: "🇺🇸" },
    { code: "AED", name: "United Arab Emirates", flag: "🇦🇪" },
    { code: "GBP", name: "United Kingdom", flag: "🇬🇧" },
    { code: "CAD", name: "Canada", flag: "🇨🇦" },
    { code: "AUD", name: "Australia", flag: "🇦🇺" },
    { code: "SGD", name: "Singapore", flag: "🇸🇬" },
    { code: "SAR", name: "Saudi Arabia", flag: "🇸🇦" },
    { code: "EUR", name: "Germany, France, Italy, Spain, Netherlands", flag: "🇪🇺" },
    { code: "NZD", name: "New Zealand", flag: "🇳🇿" },
    { code: "MYR", name: "Malaysia", flag: "🇲🇾" },
    { code: "THB", name: "Thailand", flag: "🇹🇭" },
    { code: "JPY", name: "Japan", flag: "🇯🇵" },
    { code: "HKD", name: "Hong Kong", flag: "🇭🇰" },
    { code: "CHF", name: "Switzerland", flag: "🇨🇭" },
    { code: "QAR", name: "Qatar", flag: "🇶🇦" },
    { code: "KWD", name: "Kuwait", flag: "🇰🇼" },
    { code: "OMR", name: "Oman", flag: "🇴🇲" },
    { code: "BHD", name: "Bahrain", flag: "🇧🇭" },
    { code: "NOK", name: "Norway", flag: "🇳🇴" },
    { code: "SEK", name: "Sweden", flag: "🇸🇪" },
  ];

  const fetchExchangeRate = async () => {
    if (fromCurrency === toCurrency) {
      setExchangeRate(1);
      setConvertedAmount(amount);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Using exchangerate-api.com free tier (no API key required for basic usage)
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates");
      }

      const data = await response.json();
      const rate = data.rates[toCurrency];

      if (!rate) {
        throw new Error(`Exchange rate not found for ${toCurrency}`);
      }

      setExchangeRate(rate);
      setConvertedAmount((amount * rate).toFixed(2));
      setLastUpdated(new Date().toLocaleString());
    } catch (err) {
      setError(err.message || "Failed to fetch exchange rates. Please try again.");
      console.error("Exchange rate error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchLiveRates = async () => {
    setRatesLoading(true);
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/INR`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch live rates");
      }

      const data = await response.json();
      const rates = [];
      const uniqueCurrencies = new Set();

      topCountries.forEach((country) => {
        if (!uniqueCurrencies.has(country.code)) {
          uniqueCurrencies.add(country.code);
          const rate = data.rates[country.code];
          if (rate) {
            rates.push({
              code: country.code,
              name: country.name,
              flag: country.flag,
              rate: (1 / rate).toFixed(4), // Convert from INR to foreign currency
              inrRate: rate.toFixed(4), // 1 foreign currency = X INR
            });
          }
        }
      });

      // Sort by currency code for better organization
      rates.sort((a, b) => a.code.localeCompare(b.code));
      setLiveRates(rates);
    } catch (err) {
      console.error("Live rates error:", err);
    } finally {
      setRatesLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRate();
    fetchLiveRates();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <>
      <div className="pt-[4.5rem] sm:pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden min-h-screen">
        <Header />
        <Section className="py-12 sm:py-16 lg:py-20">
          <div className="container relative z-2 px-4 sm:px-5">
            <Heading
              title="Currency Converter"
              text="Get live exchange rates and convert currencies in real-time"
              className="mb-8 sm:mb-12"
            />

            {/* Live Rates Table */}
            <div className="mb-8 sm:mb-12">
              <div className="bg-n-8 border border-n-6 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
                <h2 className="h3 mb-4 sm:mb-6 text-n-1 text-xl sm:text-2xl md:text-3xl">Live Exchange Rates - Top 20 Countries</h2>
                <p className="body-2 text-n-2 mb-4 sm:mb-6 text-sm sm:text-base">
                  Real-time exchange rates for countries where Indians travel or live
                </p>
                
                {ratesLoading ? (
                  <div className="text-center py-8 sm:py-12">
                    <p className="body-2 text-n-2 text-sm sm:text-base">Loading live rates...</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto -mx-4 sm:mx-0">
                    <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                      <table className="w-full min-w-[600px]">
                        <thead>
                          <tr className="border-b border-n-6">
                            <th className="text-left py-3 sm:py-4 px-2 sm:px-4 body-2 text-n-1 text-xs sm:text-sm">Country</th>
                            <th className="text-left py-3 sm:py-4 px-2 sm:px-4 body-2 text-n-1 text-xs sm:text-sm">Currency</th>
                            <th className="text-right py-3 sm:py-4 px-2 sm:px-4 body-2 text-n-1 text-xs sm:text-sm">1 INR =</th>
                            <th className="text-right py-3 sm:py-4 px-2 sm:px-4 body-2 text-n-1 text-xs sm:text-sm">1 Foreign =</th>
                          </tr>
                        </thead>
                        <tbody>
                          {liveRates.map((rate, index) => (
                            <tr
                              key={index}
                              className="border-b border-n-6/50 hover:bg-n-7/30 transition-colors"
                            >
                              <td className="py-3 sm:py-4 px-2 sm:px-4 body-2 text-n-2 text-xs sm:text-sm">
                                <span className="mr-2">{rate.flag}</span>
                                <span className="hidden sm:inline">{rate.name}</span>
                                <span className="sm:hidden">{rate.code}</span>
                              </td>
                              <td className="py-3 sm:py-4 px-2 sm:px-4 body-2 text-n-2 font-semibold text-xs sm:text-sm">
                                {rate.code}
                              </td>
                              <td className="py-3 sm:py-4 px-2 sm:px-4 body-2 text-n-2 text-right text-xs sm:text-sm">
                                {rate.rate} {rate.code}
                              </td>
                              <td className="py-3 sm:py-4 px-2 sm:px-4 body-2 text-color-1 text-right font-semibold text-xs sm:text-sm">
                                ₹{rate.inrRate}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-n-7/50 border border-n-6 rounded-xl">
                  <p className="body-2 text-n-2 text-center text-xs sm:text-sm md:text-base">
                    <strong className="text-n-1">Note:</strong> Rates are updated in real-time. 
                    For transaction-specific rates, please{" "}
                    <a
                      href={
                        "https://wa.me/919599516159?text=" +
                        encodeURIComponent(
                          "Hi Shivalix Forex, I need transaction-specific forex rates from the Currency Converter page."
                        )
                      }
                      className="text-color-1 hover:underline break-all sm:break-normal"
                    >
                      contact us on WhatsApp
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-n-8 border border-n-6 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  {/* From Currency */}
                  <div>
                    <label className="block body-2 text-n-1 mb-2 sm:mb-3 text-sm sm:text-base">
                      From Currency
                    </label>
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-n-7 border border-n-6 rounded-xl text-n-1 body-2 focus:outline-none focus:border-color-1 transition-colors text-sm sm:text-base"
                    >
                      {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* To Currency */}
                  <div>
                    <label className="block body-2 text-n-1 mb-2 sm:mb-3 text-sm sm:text-base">
                      To Currency
                    </label>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-n-7 border border-n-6 rounded-xl text-n-1 body-2 focus:outline-none focus:border-color-1 transition-colors text-sm sm:text-base"
                    >
                      {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <button
                    onClick={handleSwap}
                    className="p-2 sm:p-3 bg-n-7 border border-n-6 rounded-xl hover:bg-n-6 transition-colors"
                    aria-label="Swap currencies"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-n-1 sm:w-6 sm:h-6"
                    >
                      <path
                        d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Amount Input */}
                <div className="mb-4 sm:mb-6">
                    <label className="block body-2 text-n-1 mb-2 sm:mb-3 text-sm sm:text-base">
                      Amount
                    </label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                      min="0"
                      step="0.01"
                      className="w-full h-12 sm:h-14 px-3 sm:px-4 bg-n-7 border border-n-6 rounded-xl text-n-1 body-1 focus:outline-none focus:border-color-1 transition-colors text-sm sm:text-base"
                      placeholder="Enter amount"
                    />
                </div>

                {/* Convert Button */}
                <div className="mb-4 sm:mb-6">
                  <Button
                    onClick={fetchExchangeRate}
                    className="w-full text-sm sm:text-base"
                    disabled={loading}
                  >
                    {loading ? "Fetching rates..." : "Get Live Rate"}
                  </Button>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-color-3/10 border border-color-3 rounded-xl">
                    <p className="body-2 text-color-3 text-sm sm:text-base">{error}</p>
                  </div>
                )}

                {/* Conversion Result */}
                {convertedAmount !== null && !error && (
                  <div className="bg-gradient-to-br from-color-1/10 to-color-2/10 border border-color-1/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center">
                    <p className="body-2 text-n-2 mb-2 text-sm sm:text-base">Exchange Rate</p>
                    <p className="h3 mb-3 sm:mb-4 text-color-1 text-lg sm:text-xl md:text-2xl lg:text-3xl break-words">
                      1 {fromCurrency} = {exchangeRate?.toFixed(4)} {toCurrency}
                    </p>
                    <div className="h-px bg-n-6 my-4 sm:my-6"></div>
                    <p className="body-2 text-n-2 mb-2 text-sm sm:text-base">Converted Amount</p>
                    <p className="h2 text-n-1 text-xl sm:text-2xl md:text-3xl break-words">
                      {amount.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      {fromCurrency} ={" "}
                      <span className="text-color-1">
                        {parseFloat(convertedAmount).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}{" "}
                        {toCurrency}
                      </span>
                    </p>
                    {lastUpdated && (
                      <p className="caption text-n-2 mt-3 sm:mt-4 text-xs sm:text-sm">
                        Last updated: {lastUpdated}
                      </p>
                    )}
                  </div>
                )}

                {/* Info Note */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-n-7/50 border border-n-6 rounded-xl">
                  <p className="body-2 text-n-2 text-xs sm:text-sm md:text-base">
                    <strong className="text-n-1">Note:</strong> Exchange rates
                    are updated in real-time from market data. Rates may vary
                    slightly from actual transaction rates. For accurate rates
                    for your transaction, please{" "}
                    <a
                      href={
                        "https://wa.me/919599516159?text=" +
                        encodeURIComponent(
                          "Hi Shivalix Forex, I need accurate forex rates for my transaction from the Currency Converter page."
                        )
                      }
                      className="text-color-1 hover:underline break-all sm:break-normal"
                    >
                      contact our sales team on WhatsApp
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default CurrencyConverter;

