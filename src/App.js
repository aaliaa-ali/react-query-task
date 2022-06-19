import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SuperHeros from "./components/SuperHeros";
import RqSuperHeros from "./components/RqSuperHeros";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/hero">superHeros</Link>
              </li>
              <li>
                <Link to="/RqHeros">RqSuperheros</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hero" element={<SuperHeros />} />
              <Route path="/RqHeros" element={<RqSuperHeros />} />
            </Routes>
          </BrowserRouter>
        <ReactQueryDevtools position='bottom-right' initialIsOpen={false}/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
