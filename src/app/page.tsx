"use client"
import Header from './components/Header';
import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import BankingOperations from './components/BankingOperations';
import Speed from './components/Speed';
import PaymentsAndCards from './components/PaymentsAndCards';
import FinancialFeature from './components/FinancialFeature';
import InvoiceFeature from './components/InvoiceFeature';
import AccountingFeature from './components/AccountingFeature';
import ExpensesFeature from './components/ExpensesFeature';
import IndustryFeature from './components/IndustryFeature';
import Footer from './components/footer';



export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImageSection />
        <BankingOperations />
        <Speed />
        <PaymentsAndCards />
        <FinancialFeature />
        <InvoiceFeature />
        <ExpensesFeature />
        <AccountingFeature />
        <IndustryFeature />
        <Footer />
      </main>
    </>
  );
}
