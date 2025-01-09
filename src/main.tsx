import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MSWgateway from "./msw/MSWgateway/MSWgateway.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Wrapper } from "./auth/Auth0Wrapper/Auth0Wrapper.tsx";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing/Routing.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Wrapper>
        <MSWgateway>
          <QueryClientProvider client={queryClient}>
            <Routing />
          </QueryClientProvider>
        </MSWgateway>
      </Auth0Wrapper>
    </BrowserRouter>
  </StrictMode>
);
