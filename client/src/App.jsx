import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Services from "./screens/services";
import Home from "./screens/home";
import NavBarFooterLayout from "./components/navBarFooterLayout";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route element={<NavBarFooterLayout />}>
              <Route path="/" element={<Home />} exact />
              <Route path="/services" element={<Services />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
