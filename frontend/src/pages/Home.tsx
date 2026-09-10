import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Clock,
  Brain,
  Bell,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-green-700"
          >
            SmartProcure
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => navigate("/find-centre")}
              className="font-medium text-slate-600 transition hover:text-green-700"
            >
              Find Centre
            </button>

            <button
              onClick={() => navigate("/login")}
              className="font-medium text-slate-600 transition hover:text-green-700"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white transition hover:bg-green-700"
            >
              Register
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              <CheckCircle size={17} />
              Smarter Crop Procurement
            </div>

            <h1 className="text-5xl font-bold leading-tight text-slate-900">
              Skip the uncertainty.
              <span className="block text-green-600">Procure smarter.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              SmartProcure helps farmers find nearby procurement centres,
              reserve digital tokens, track live queues and receive AI-powered
              waiting-time predictions.
            </p>

            {/* Main buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/find-centre")}
                className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                Find Procurement Centre
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => navigate("/register")}
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-green-500 hover:text-green-700"
              >
                Create Farmer Account
              </button>
            </div>
          </div>

          {/* Hero information card */}
          <div className="rounded-3xl border bg-white p-6 shadow-lg">
            <div className="mb-6">
              <p className="text-sm font-medium text-green-600">
                LIVE PROCUREMENT INTELLIGENCE
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Greenfield Procurement Centre
              </h2>

              <div className="mt-2 flex items-center gap-2 text-slate-500">
                <MapPin size={18} />
                Kanchipuram, Tamil Nadu
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-green-50 p-4">
                <Brain className="text-green-600" size={22} />
                <p className="mt-3 text-2xl font-bold text-slate-900">32 min</p>
                <p className="text-sm text-slate-500">AI predicted wait</p>
              </div>

              <div className="rounded-xl bg-blue-50 p-4">
                <Clock className="text-blue-600" size={22} />
                <p className="mt-3 text-2xl font-bold text-slate-900">18</p>
                <p className="text-sm text-slate-500">Farmers ahead</p>
              </div>

              <div className="rounded-xl bg-orange-50 p-4">
                <MapPin className="text-orange-600" size={22} />
                <p className="mt-3 text-2xl font-bold text-slate-900">4.2 km</p>
                <p className="text-sm text-slate-500">Distance</p>
              </div>

              <div className="rounded-xl bg-purple-50 p-4">
                <Bell className="text-purple-600" size={22} />
                <p className="mt-3 text-2xl font-bold text-slate-900">Alerts</p>
                <p className="text-sm text-slate-500">Queue notifications</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-y bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-slate-900">
                Procurement made predictable
              </h2>

              <p className="mt-3 text-slate-500">
                Everything a farmer needs before reaching the procurement
                centre.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border p-6">
                <MapPin className="text-green-600" size={28} />

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  Find Nearby Centres
                </h3>

                <p className="mt-2 text-slate-500">
                  Discover procurement centres based on distance, capacity and
                  current demand.
                </p>
              </div>

              <div className="rounded-2xl border p-6">
                <Brain className="text-green-600" size={28} />

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  AI Waiting Prediction
                </h3>

                <p className="mt-2 text-slate-500">
                  Get an estimated waiting time using live queue and centre
                  conditions.
                </p>
              </div>

              <div className="rounded-2xl border p-6">
                <Clock className="text-green-600" size={28} />

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  Digital Token
                </h3>

                <p className="mt-2 text-slate-500">
                  Reserve a procurement slot and monitor your position in the
                  queue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl bg-green-700 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold">
              Ready to plan your procurement visit?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-green-100">
              Find a centre, check the queue and reserve your digital token
              before you travel.
            </p>

            <button
              onClick={() => navigate("/find-centre")}
              className="mt-7 rounded-xl bg-white px-7 py-3.5 font-semibold text-green-700 transition hover:bg-green-50"
            >
              Find a Centre
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
