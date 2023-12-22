// import logo from './logo.svg';
import './App.css';
import Header from './components/pages/Header';
// import Main from './components/pages/Main';

import Footer from './components/pages/Footer';
import { BillingMain } from './components/pages/BillingMain';


function App() {
  return (
    <div className="App">
      <Header heading="Client Company" />
      {/* <Main mainContent="Creation of the content is in the main" masterValue="The analysis of the fusion" /> */}
      <BillingMain />
      <Footer footerContent="The final content of the creation" />
    </div >
  );
}

export default App;
