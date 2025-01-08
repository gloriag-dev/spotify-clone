import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MSWgateway from "./custom/MSWgateway/MSWgateway.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Wrapper } from "./auth/Auth0Wrapper/Auth0Wrapper.tsx";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Wrapper>
        <MSWgateway>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </MSWgateway>
      </Auth0Wrapper>
    </BrowserRouter>
  </StrictMode>
);
