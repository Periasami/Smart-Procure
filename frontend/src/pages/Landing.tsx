import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Mic,
  ShieldCheck,
  Ticket,
  TrendingDown,
} from "lucide-react";
import Navbar from "../components/Navbar";

function Landing() {
  return (
    <div id="home" className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            {/* Hero content */}
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700">
                <ShieldCheck size={16} />
                Smart digital crop procurement
              </div>

              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Spend less time
                <span className="block text-green-600">waiting in queues.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Find nearby procurement centres, check live queue conditions,
                get a digital token and plan your visit using intelligent
                waiting-time predictions.
              </p>

              {/* Main actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/find-centre"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-700"
                >
                  <MapPin size={19} />
                  Find a Centre
                  <ArrowRight size={18} />
                </Link>

                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50">
                  <Ticket size={19} />
                  Get Digital Token
                </button>
              </div>

              {/* Voice support */}
              <button className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-600 hover:text-green-700">
                <Mic size={17} />
                Voice-assisted support available
              </button>
            </div>

            {/* Dashboard preview */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Nearby procurement centre
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-slate-900">
                      Greenfield Centre
                    </h3>
                  </div>

                  <div className="rounded-xl bg-green-50 p-3 text-green-600">
                    <MapPin size={22} />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-green-50 p-4">
                    <Clock3 className="text-green-600" size={20} />
                    <p className="mt-3 text-2xl font-bold text-slate-900">
                      32 min
                    </p>
                    <p className="text-sm text-slate-500">Estimated wait</p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <Ticket className="text-slate-700" size={20} />
                    <p className="mt-3 text-2xl font-bold text-slate-900">18</p>
                    <p className="text-sm text-slate-500">Farmers ahead</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">
                      Queue status
                    </span>

                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                      Moderate
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[58%] rounded-full bg-green-500" />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                  <div className="rounded-xl bg-white p-2 shadow-sm">
                    <TrendingDown size={18} className="text-green-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Better time to visit
                    </p>
                    <p className="text-xs text-slate-500">
                      AI-assisted queue prediction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value proposition */}
        <section id="how-it-works" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="font-semibold text-green-600">
                HOW SMARTPROCURE WORKS
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                From planning to procurement in a few simple steps.
              </h3>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <MapPin className="text-green-600" size={26} />
                <h4 className="mt-5 text-lg font-bold text-slate-900">
                  1. Find the right centre
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Discover nearby procurement centres and compare their current
                  queue conditions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <Ticket className="text-green-600" size={26} />
                <h4 className="mt-5 text-lg font-bold text-slate-900">
                  2. Book your token
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Select an available schedule and receive a digital token for
                  your procurement visit.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <Clock3 className="text-green-600" size={26} />
                <h4 className="mt-5 text-lg font-bold text-slate-900">
                  3. Track your queue
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Monitor your position and estimated waiting time instead of
                  waiting blindly at the centre.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
