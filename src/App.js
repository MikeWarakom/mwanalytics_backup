import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./Components/Page-routes/Page-routes";
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <PageRoutes />
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
