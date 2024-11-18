import "./App.css";
import ContactForm from "./components/ContactForm";
import HomePage from "./pages/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      {/* <ContactForm /> */}
      <main className="w-full max-w-[1350px] bg-black container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4 ">Disclosure:</h2>
        <div className="bg-black shadow-md rounded-lg p-6 space-y-4">
          <p>
            <strong>Virtual/Demo Accounts and Educational Purposes:</strong> Our
            Website service utilizes virtual/demo accounts, and all information
            provided on this site is intended solely for educational purposes
            related to trading on the financial markets. It does not serve as
            specific investment advice, business recommendation, investment
            analysis, or a general recommendation regarding the trading of any
            investment instruments.
          </p>
          <p>
            <strong>Simulated or Hypothetical Performance:</strong> Simulated
            results and trading do not represent actual trading as they have not
            been executed. Therefore, they may not accurately reflect the impact
            of certain market factors, such as lack of liquidity, slippage, and
            similar conditions.
          </p>
          <p>
            <strong>High Risk of CFD Trading:</strong> CFD trading involves a
            high degree of risk and may not be suitable for all investors. You
            must consider your personal objectives, financial situation, and
            needs, and seek independent advice if necessary. You should not
            engage in CFD trading unless you fully understand the nature of the
            contract and the extent of your exposure to risk.
          </p>
          <p>
            <strong>Magnified Gains and Losses:</strong> Trading CFDs with
            leverage means that gains and losses can be magnified. Even a small
            market movement can result in a proportionately larger movement in
            the value of your investment. This can work against you as well as
            for you. A small initial margin payment can potentially lead to
            significant losses.
          </p>
          <p>
            <strong>Volatility of Derivative Markets:</strong> Derivative
            markets, including securities, currencies, commodities, financial
            instruments, or indices, can be highly volatile. Prices may
            fluctuate rapidly over wide ranges, influenced by unforeseen events,
            changes in conditions, and factors beyond your control. These
            include changing supply and demand relationships, governmental
            policies, political and economic events, and prevailing market
            psychology.
          </p>
          <p>
            <strong>Risks in Foreign Markets:</strong> Trading CFDs related to
            foreign markets or denominated in foreign currencies carries
            additional risks due to fluctuations in foreign exchange rates. Even
            if the price of the underlying instrument remains unchanged, you may
            incur losses if exchange rates change to your detriment.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
