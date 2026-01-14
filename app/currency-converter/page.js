"use client";
import React, { useState, useEffect, useCallback } from "react";
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

  // Currencies to display in live rates - reordered to match screenshot
  const topCountries = [
    { code: "USD", name: "USA", flag: "🇺🇸" },
    { code: "EUR", name: "Eurozone", flag: "🇪🇺" },
    { code: "GBP", name: "UK", flag: "🇬🇧" },
    { code: "THB", name: "Thailand", flag: "🇹🇭" },
    { code: "SGD", name: "Singapore", flag: "🇸🇬" },
    { code: "AED", name: "UAE", flag: "🇦🇪" },
    { code: "CAD", name: "Canada", flag: "🇨🇦" },
    { code: "AUD", name: "Australia", flag: "🇦🇺" },
    { code: "SAR", name: "Saudi Arabia", flag: "🇸🇦" },
    { code: "HKD", name: "Hong Kong", flag: "🇭🇰" },
    { code: "CNY", name: "China", flag: "🇨🇳" },
  ];

  const fetchExchangeRate = useCallback(async () => {
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
  }, [fromCurrency, toCurrency, amount]);

  const fetchLiveRates = useCallback(async () => {
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

      // Maintain order of topCountries
      topCountries.forEach((country) => {
        const rate = data.rates[country.code];
        if (rate) {
          rates.push({
            code: country.code,
            name: country.name,
            flag: country.flag,
            rate: (1 / rate).toFixed(4), // Convert from INR to foreign currency
            inrRate: (1 / rate).toFixed(2), // 1 foreign currency = X INR
          });
        }
      });

      setLiveRates(rates);
    } catch (err) {
      console.error("Live rates error:", err);
    } finally {
      setRatesLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExchangeRate();
    fetchLiveRates();
  }, [fetchExchangeRate, fetchLiveRates]);

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
      <div className="pt-[4.5rem] sm:pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden min-h-screen bg-n-8">
        <Header />
        <Section className="py-12 sm:py-16 lg:py-20">
          <div className="container relative z-2 px-4 sm:px-5">
            <Heading
              title="Live Exchange Rates"
              text="Real-time exchange rates for major currencies"
              className="mb-8 sm:mb-12"
            />

            {/* Live Rates Digital Board */}
            <div className="mb-16 max-w-5xl mx-auto">
              <div className="relative bg-[#0d0d0d] border-4 border-n-6 rounded-3xl overflow-hidden shadow-2xl">
                {/* Board Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />

                <div className="p-6 sm:p-10">
                  <div className="flex justify-between items-center mb-10 border-b border-n-6 pb-6">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-n-1 tracking-tight">EXCHANGE BOARD</h2>
                      <p className="text-color-1 font-mono text-sm sm:text-base mt-1">REAL-TIME MARKET DATA</p>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-n-3 text-xs uppercase tracking-widest">Last Update</p>
                      <p className="text-n-1 font-mono">{lastUpdated || "Updating..."}</p>
                    </div>
                  </div>

                  {ratesLoading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-color-1 mb-4"></div>
                      <p className="text-n-2 font-mono">SYNCHRONIZING RATES...</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                      {liveRates.map((rate, index) => (
                        <div
                          key={index}
                          className="flex items-center group hover:scale-[1.02] transition-transform duration-200"
                        >
                          {/* The "White Box" from screenshot */}
                          <div className="flex flex-1 items-center bg-white rounded-lg overflow-hidden shadow-lg h-16 sm:h-20">
                            <div className="flex items-center justify-center w-20 sm:w-24 h-full bg-n-2/10 border-r border-n-6/20">
                              <span className="text-4xl sm:text-5xl">{rate.flag}</span>
                            </div>
                            <div className="flex flex-1 items-center justify-between px-6 sm:px-8">
                              <span className="text-2xl sm:text-3xl font-black text-black tracking-tighter">{rate.code}</span>
                              <div className="text-right">
                                <span className="text-xs sm:text-sm font-bold text-n-3 uppercase block leading-none mb-1">INR RATE</span>
                                <span className="text-xl sm:text-2xl font-mono font-black text-black">₹{rate.inrRate}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-12 pt-6 border-t border-n-6/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-n-3 text-[10px] sm:text-xs font-mono uppercase tracking-tighter text-center sm:text-left">
                      RATES ARE SUBJECT TO CHANGE & GOVERNMENT TAXES AS APPLICABLE
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-n-1 text-xs font-mono uppercase tracking-widest">Live Connection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <Heading
                title="Convert Currency"
                text="Quickly calculate exchange values for your transactions"
                className="mb-8"
              />
              <div className="bg-n-8 border border-n-6 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl hover:border-n-5 transition-colors">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {/* From Currency */}
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-n-3 uppercase tracking-wider">
                      From Currency
                    </label>
                    <div className="relative group">
                      <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="w-full h-14 px-5 bg-n-7 border border-n-6 rounded-2xl text-n-1 font-semibold focus:outline-none focus:border-color-1 transition-all appearance-none cursor-pointer group-hover:bg-n-6"
                      >
                        {currencies.map((currency) => (
                          <option key={currency.code} value={currency.code} className="bg-n-7 text-n-1">
                            {currency.code} - {currency.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-n-3">
                        <svg width="12" height="12" viewBox="0 0 10 6" fill="none">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* To Currency */}
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-n-3 uppercase tracking-wider">
                      To Currency
                    </label>
                    <div className="relative group">
                      <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="w-full h-14 px-5 bg-n-7 border border-n-6 rounded-2xl text-n-1 font-semibold focus:outline-none focus:border-color-1 transition-all appearance-none cursor-pointer group-hover:bg-n-6"
                      >
                        {currencies.map((currency) => (
                          <option key={currency.code} value={currency.code} className="bg-n-7 text-n-1">
                            {currency.code} - {currency.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-n-3">
                        <svg width="12" height="12" viewBox="0 0 10 6" fill="none">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center -mt-12 mb-4 relative z-10">
                  <button
                    onClick={handleSwap}
                    className="group bg-color-1 hover:bg-color-1/90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform transition-all active:scale-90"
                    aria-label="Swap currencies"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transform group-hover:rotate-180 transition-transform duration-500"
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
                <div className="mb-8 space-y-3">
                  <label className="block text-sm font-bold text-n-3 uppercase tracking-wider">
                    Amount to Convert
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                      min="0"
                      step="0.01"
                      className="w-full h-16 px-6 bg-n-7 border border-n-6 rounded-2xl text-n-1 text-2xl font-mono focus:outline-none focus:border-color-1 transition-all"
                      placeholder="0.00"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-color-1 font-bold">
                      {fromCurrency}
                    </div>
                  </div>
                </div>

                {/* Convert Button */}
                <div className="mb-10">
                  <Button
                    onClick={fetchExchangeRate}
                    className="w-full h-16 rounded-2xl text-lg uppercase tracking-widest font-bold"
                    disabled={loading}
                  >
                    {loading ? "FETCHING LIVE RATES..." : "GET LIVE QUOTE"}
                  </Button>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-2xl flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">!</div>
                    <p className="text-red-500 font-medium">{error}</p>
                  </div>
                )}

                {/* Conversion Result */}
                {convertedAmount !== null && !error && (
                  <div className="bg-gradient-to-br from-n-7 to-n-8 border border-n-6 rounded-3xl p-8 mb-10 shadow-inner">
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-n-3 font-mono text-sm tracking-widest uppercase">
                        Current Market Rate
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-n-1">
                        1 {fromCurrency} = <span className="text-color-1">{exchangeRate?.toFixed(4)}</span> {toCurrency}
                      </div>
                      <div className="w-full h-px bg-n-6 my-4"></div>
                      <div className="text-n-3 font-mono text-sm tracking-widest uppercase">
                        Estimated Value
                      </div>
                      <div className="text-4xl sm:text-5xl md:text-6xl font-black text-n-1 tracking-tighter">
                        {parseFloat(convertedAmount).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}{" "}
                        <span className="text-color-1">{toCurrency}</span>
                      </div>
                      {lastUpdated && (
                        <div className="mt-4 flex items-center gap-2 px-4 py-2 bg-n-6/30 rounded-full border border-n-6">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-n-3 text-[10px] font-mono tracking-widest uppercase">
                            Updated: {lastUpdated}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Info Note */}
                <div className="p-4 sm:p-6 bg-color-4/5 border border-color-4/20 rounded-2xl">
                  <p className="text-n-3 text-xs sm:text-sm leading-relaxed text-center italic">
                    <strong className="text-n-1 not-italic uppercase tracking-widest text-[10px] mr-2">Disclaimer:</strong>
                    Rates shown are mid-market indices and for informational purposes only. Actual transaction rates may include service fees and taxes.
                    For a confirmed booking rate, {" "}
                    <a
                      href={
                        "https://wa.me/919599516159?text=" +
                        encodeURIComponent(
                          "Hi Shivalix Forex, I need accurate forex rates for my transaction from the Currency Converter page."
                        )
                      }
                      className="text-color-1 font-bold hover:underline"
                    >
                      WhatsApp our trading desk
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

