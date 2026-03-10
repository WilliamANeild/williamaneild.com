"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vscDarkPlus from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import PageWrapper from "../PageWrapper";

const researchCode = `# Healthcare / Biotech Comparable Companies Analysis
# Emory Economics Investment Forum — EEIF Equity Research
import pandas as pd
import numpy as np

def build_comps_table(tickers: list[str], metrics: list[str]) -> pd.DataFrame:
    """
    Build a comparable companies table for healthcare/biotech coverage.
    Pulls key valuation multiples and operating metrics for peer benchmarking.
    """
    import yfinance as yf
    rows = []
    for ticker in tickers:
        info = yf.Ticker(ticker).info
        row = {
            "Ticker": ticker,
            "Market Cap ($B)": round(info.get("marketCap", 0) / 1e9, 2),
            "EV/Revenue": info.get("enterpriseToRevenue"),
            "EV/EBITDA": info.get("enterpriseToEbitda"),
            "P/E (TTM)": info.get("trailingPE"),
            "Rev Growth YoY": info.get("revenueGrowth"),
            "Gross Margin": info.get("grossMargins"),
        }
        rows.append(row)
    df = pd.DataFrame(rows).set_index("Ticker")
    return df

def dcf_stub(
    fcf_base: float,
    growth_rates: list[float],
    terminal_growth: float = 0.03,
    wacc: float = 0.10,
) -> dict:
    """
    Simple DCF model stub for early-stage biotech.
    Projects free cash flows, applies terminal value, discounts to PV.
    """
    fcfs = []
    fcf = fcf_base
    for g in growth_rates:
        fcf *= (1 + g)
        fcfs.append(fcf)

    terminal_value = fcfs[-1] * (1 + terminal_growth) / (wacc - terminal_growth)
    pv_fcfs = sum(f / (1 + wacc) ** (i + 1) for i, f in enumerate(fcfs))
    pv_terminal = terminal_value / (1 + wacc) ** len(fcfs)

    return {
        "PV of FCFs": round(pv_fcfs, 2),
        "PV of Terminal Value": round(pv_terminal, 2),
        "Enterprise Value": round(pv_fcfs + pv_terminal, 2),
    }

# Example: EEIF Healthcare coverage universe
healthcare_peers = ["UNH", "CVS", "HCA", "MOH", "CNC"]
comps = build_comps_table(healthcare_peers, [])
print(comps.to_string())

# DCF stub for a biotech with negative FCF turning positive
result = dcf_stub(
    fcf_base=-50e6,
    growth_rates=[0.5, 0.4, 0.3, 0.25, 0.2],
    terminal_growth=0.03,
    wacc=0.12,
)
print(result)
`;

const focusAreas = [
  {
    heading: "Investment Research",
    bullets: [
      "Sourcing public and private market opportunities across asset classes",
      "Financial and operational diligence on fund managers and direct deals",
      "Building valuation models (DCF, comparable companies, LBO stubs)",
    ],
  },
  {
    heading: "Portfolio Monitoring",
    bullets: [
      "Evaluating fund managers and tracking portfolio performance",
      "Monitoring market themes via structured investment memos",
      "Identifying concentration risk and rebalancing opportunities",
    ],
  },
  {
    heading: "Capital Allocation",
    bullets: [
      "Supporting long-term deployment decisions with independent research",
      "Communicating investment conviction clearly to senior stakeholders",
      "Balancing risk-adjusted return targets with liquidity constraints",
    ],
  },
];

export default function McCamishContent() {
  return (
    <PageWrapper>
      <main className="min-h-screen p-6 bg-gradient-to-b from-gray-900 to-black text-white space-y-12">
        {/* Back Link */}
        <Link href="/#experience" className="block mb-6 text-gray-400 hover:text-white">
          ← Back
        </Link>

        {/* Header & Intro */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative flex-shrink-0">
            <Image src="/McCamish2.png" alt="McCamish Group Logo" fill className="object-contain" />
          </div>
          <div className="md:ml-6 lg:ml-8 flex-1">
            <h1 className="text-4xl font-bold">The McCamish Group</h1>
            <p className="text-gray-500 mt-1 mb-4">2025</p>
            <div className="text-lg leading-relaxed">
              At The McCamish Group, I work as an Investment Analyst focused on public and private market opportunities across asset classes.
              My role involves sourcing investment ideas, conducting financial and operational diligence, and building models to support long-term capital allocation decisions.
              I contribute to portfolio monitoring and help evaluate fund managers, direct deals, and market themes through structured memos and deep research.
              The environment is lean and entrepreneurial, which has pushed me to work independently, think critically, and communicate clearly with senior stakeholders.
              This experience has deepened my understanding of how capital is deployed at the family office level and strengthened my ability to balance conviction with discipline.
            </div>
          </div>
        </div>

        {/* Role Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Investment Analyst (Aug 2025 – Nov 2025)</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Research Code Panel */}
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-gray-900 border-b border-gray-700">
                <h3 className="text-xl font-bold">Equity Research Code (EEIF Healthcare)</h3>
              </div>
              <div className="p-4 overflow-auto max-h-[520px] bg-gray-800">
                <SyntaxHighlighter
                  language="python"
                  style={vscDarkPlus}
                  showLineNumbers
                  wrapLongLines
                >
                  {researchCode}
                </SyntaxHighlighter>
              </div>
            </div>

            {/* Focus Areas Card */}
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-gray-900 border-b border-gray-700">
                <h3 className="text-xl font-bold">Focus Areas</h3>
              </div>
              <div className="p-6 space-y-6">
                {focusAreas.map(({ heading, bullets }) => (
                  <div key={heading}>
                    <h4 className="text-lg font-semibold text-white mb-2">{heading}</h4>
                    <ul className="space-y-1">
                      {bullets.map(b => (
                        <li key={b} className="text-gray-300 text-sm flex gap-2">
                          <span className="text-gray-500 mt-0.5">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
