
import './App.css';
import AddNewTransaction from './components/AddNewTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExp from './components/IncomeExp';
import TransactionHistory from './components/TransactionHistory';
import { GlobalProvider } from './context/Context';

function App() {
  return (
    
    <GlobalProvider>
      
      <div className="app-container">
      <Header/>
        <Balance/>
        <IncomeExp/>
        <TransactionHistory/>
        <AddNewTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
