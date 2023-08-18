import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Show from "./pages/Show";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/:id'} element={<Show/>}/>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
