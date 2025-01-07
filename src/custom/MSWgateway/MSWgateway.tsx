import { useEffect, useState } from "react";

const MSWgateway: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [started, setStarted] = useState<boolean>(false);

  async function enableMocking() {
    /*if (process.env.NODE_ENV !== "development") {
            setStarted(true)
            return
        }*/
    const { worker }: any = await import("../../msw/browser");
    await worker.start({
      waitUntilReady: true,
      serviceWorker: {
        url: import.meta.env.BASE_URL + "../../mockServiceWorker.js",
      },
    });
    setStarted(true);
  }

  useEffect(() => {
    enableMocking();
  }, []);

  if (started) {
    return <>{children}</>;
  } else {
    return <></>;
  }
};

export default MSWgateway;
