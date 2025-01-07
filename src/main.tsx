import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MSWgateway from "./custom/MSWgateway/MSWgateway.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MSWgateway>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MSWgateway>
  </StrictMode>
);
