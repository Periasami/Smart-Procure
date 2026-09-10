import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, LogIn } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Temporary frontend navigation.
    // Real JWT authentication will be connected later.
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-green-700"
          >
            SmartProcure
          </button>

          <button
            onClick={() => navigate("/register")}
            className="text-sm font-medium text-slate-600 hover:text-green-700"
          >
            New farmer? Register
          </button>
        </div>
      </header>

      {/* Login form */}
      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-10">
        <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
          <button
            onClick={() => navigate("/")}
            className="mb-6 flex items-center gap-2 text-sm text-slate-500 hover:text-green-700"
          >
            <ArrowLeft size={17} />
            Back to Home
          </button>

          <div className="mb-7">
            <div className="mb-4 inline-flex rounded-xl bg-green-100 p-3">
              <LogIn className="text-green-700" size={24} />
            </div>

            <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>

            <p className="mt-2 text-slate-500">
              Login to manage your procurement visits.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Mobile Number
              </label>

              <input
                type="tel"
                required
                placeholder="Enter mobile number"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                required
                placeholder="Enter password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-green-600 px-5 py-3.5 font-semibold text-white transition hover:bg-green-700"
            >
              Login & Continue
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="font-semibold text-green-700 hover:underline"
            >
              Create one
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
