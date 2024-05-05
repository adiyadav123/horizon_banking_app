'use client'

import React from "react";
import { formatAmount } from "@/lib/utils";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance font-inter">
      <div className="total-balance-chart">{/* Doughnut Chart */}</div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2 font-inter">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>

          <p className="total-balance-amount">
            {formatAmount(totalCurrentBalance)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
