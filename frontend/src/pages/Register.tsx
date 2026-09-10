import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, UserPlus } from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Temporary frontend navigation.
    // Backend registration will replace this later.
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-green-700"
          >
            SmartProcure
          </button>

          <button
            onClick={() => navigate("/login")}
            className="text-sm font-medium text-slate-600 hover:text-green-700"
          >
            Already have an account? Login
          </button>
        </div>
      </header>

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
              <UserPlus className="text-green-700" size={24} />
            </div>

            <h1 className="text-3xl font-bold text-slate-900">
              Create Farmer Account
            </h1>

            <p className="mt-2 text-slate-500">
              Register to book procurement tokens and track your queue.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-500"
              />
            </div>

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
                placeholder="Create a password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-green-600 px-5 py-3.5 font-semibold text-white transition hover:bg-green-700"
            >
              Create Account & Continue
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Register;
