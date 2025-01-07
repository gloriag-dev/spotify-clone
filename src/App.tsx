import LoginCard from "./custom/LoginCard";
import RegisterCard from "./custom/RegisterCard";

function App() {
  const isLoginPage = true;
  return isLoginPage ? (
    <div className="bg-gradient-to-b from-neutral-700  to-black h-screen ">
      <main className="flex justify-center ">
        <LoginCard className="mt-6 bg-primary min-w-[734px] mb-6 h-2/3" />
      </main>
    </div>
  ) : (
    <div className="bg-black h-screen ">
      <main className="flex justify-center ">
        <RegisterCard className="mt-6 bg-black min-w-[734px] mb-6 h-2/3" />
      </main>
    </div>
  );
}

export default App;
