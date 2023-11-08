import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import QuotesDisplayFunction from './quotes_one/quotesDisplay';
import Quotes from "./quotes_two/quotes";

function Routing() {
  return (
    <div className="App">
        <BrowserRouter>
				<Routes>
					<Route path="/" element={<Quotes />} />
					<Route path="/second" element={<QuotesDisplayFunction/>} />
      
                </Routes>
	    </BrowserRouter>
    </div>
  );
}

export default Routing;