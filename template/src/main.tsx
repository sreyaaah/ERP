import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { PrimeReactProvider } from "primereact/api";
import store from "./core/redux/store";
import AppRouter from "./app.router";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/icons/tabler-icons/tabler-icons.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./assets/icons/feather/css/iconfont.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/assets/css/feather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customStyle.scss";
import { LazyWrapper } from "./components/lazy-loading";
import "../src/assets/icons/boxicons/css/boxicons.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <PrimeReactProvider
          value={{
            unstyled: false,
            ripple: true,
            hideOverlaysOnDocumentScrolling: true,
          }}
        >
          <LazyWrapper>
            <AppRouter />
          </LazyWrapper>
        </PrimeReactProvider>
      </Provider>
  </StrictMode>,
)
