import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Select from "./screens/select";
import Confirm from "./screens/confirm";
import Services from "./screens/services";
import Home from "./screens/home";
import NavBarFooterLayout from "./components/navBarFooterLayout";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import About from "./screens/about";
// import Volunteer from "./screens/volunteer";
import Faq from "./screens/faq";
import Calendar from "./screens/calendar";
import GroupHealthCheck from "./screens/groupHealthCheck";
import GroupConfirm from "./screens/groupConfirm";
import NotFound from "./screens/notFound";

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
              <Route path="/about" element={<About />} />
              {/* <Route path="/volunteer" element={<Volunteer />} /> */}
              <Route path="/faq" element={<Faq />} />
              <Route path="/booking/group" element={<GroupHealthCheck />} />
              <Route
                path="/booking/group/confirmation"
                element={<GroupConfirm />}
              />
              <Route path="/booking/:service/select" element={<Select />} />
              <Route path="/booking/:service/calendar" element={<Calendar />} />
              <Route
                path="/booking/:service/confirmation"
                element={<Confirm />}
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
