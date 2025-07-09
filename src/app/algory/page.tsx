"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// Import Prism highlighted syntax from react-syntax-highlighter
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// Import the specific VS Code Dark+ theme
import vscDarkPlus from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";

const pythonCode = `# Volatility Indicator Analysis
import yfinance as yf
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Realized volatility: how much a stock’s price moves around
# this function computes annualized volatility based on rolling log returns
def compute_realized_volatility(prices: pd.Series, window: int = 20) -> pd.Series:
    """Compute annualized realized volatility over a rolling window."""
    log_returns = np.log(prices / prices.shift(1))
    volatility = log_returns.rolling(window=window).std() * np.sqrt(252)
    return volatility

# ATR: captures intraday range
# true range is the max of high-low, high-previous close, low-previous close
def compute_atr(high: pd.Series, low: pd.Series, close: pd.Series, window: int = 14) -> pd.Series:
    tr1 = high - low
    tr2 = (high - close.shift(1)).abs()
    tr3 = (low - close.shift(1)).abs()
    true_range = pd.concat([tr1, tr2, tr3], axis=1).max(axis=1)
    atr = true_range.rolling(window=window).mean()
    return atr

# IQR Volatility: robust measure ignoring outliers
# calculates difference between 75th and 25th percentile of log returns
def compute_iqr_volatility(prices: pd.Series, window: int = 20) -> pd.Series:
    log_returns = np.log(prices / prices.shift(1))
    rolling_q75 = log_returns.rolling(window).quantile(0.75)
    rolling_q25 = log_returns.rolling(window).quantile(0.25)
    return (rolling_q75 - rolling_q25) * np.sqrt(252)
`;

export default function AlgoryPage() {
  const [pageNumber] = useState(1);

  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-gray-900 to-black text-white space-y-12">
      {/* Back Link */}
      <Link href="/#experience" className="block mb-6 text-gray-400 hover:text-white">
        ← Back
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Logo container enlarged to match DeepFile */}
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative flex-shrink-0">
          <Image
            src="/AlgoryLogo.jpg"
            alt="Algory Capital Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 224px"
          />
        </div>
        {/* Text shifted right to align with larger logo */}
        <div className="md:ml-6 lg:ml-8">
          <h1 className="text-4xl font-mono font-bold mb-2">Algory Capital</h1>
          <p className="text-gray-500 mb-4">2025</p>
          <p className="text-lg leading-relaxed">
            At Algory Capital, I progressed from Quantitative Researcher to Portfolio Manager, where I led research and trading for volatility-based equity and options strategies. I developed and executed cointegration-driven pair trading models, using statistical relationships to identify relative value opportunities across sectors. My work involved systematic backtesting, risk management, and performance attribution, all grounded in clean code and disciplined research. As I took on more responsibility, I focused on refining execution logic, improving signal durability, and managing capital allocation with a structured approach. The experience deepened my understanding of market structure, data-driven alpha generation, and the practical edge of quantitative decision-making.
          </p>
        </div>
      </div>

      {/* Analyst Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">
          Quantitative Investment Analyst (Jan 2025 – May 2025)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code Block */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gray-900 border-b border-gray-700">
              <h3 className="text-xl font-bold">Volatility Analysis Code</h3>
            </div>
            <div className="p-4 overflow-auto max-h-[500px] bg-gray-800">
              <SyntaxHighlighter
                language="python"
                style={vscDarkPlus}
                showLineNumbers
                wrapLongLines
              >
                {pythonCode}
              </SyntaxHighlighter>
            </div>
          </div>

          {/* Embedded PDF Slides */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gray-900 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white">Presentation Slides</h3>
            </div>
            <div className="bg-white h-[500px]">
              <embed
                src={`/algory-quant-analysis.pdf#page=${pageNumber}&toolbar=0&navpanes=0&scrollbar=0`}
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </div>
            <p className="text-center text-gray-400 py-2">
              Viewing slide {pageNumber}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
