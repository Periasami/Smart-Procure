import { useNavigate } from "react-router-dom";
import {
  MapPin,
  CalendarDays,
  Clock,
  Users,
  Bell,
  ChevronRight,
  LogOut,
  Sprout,
  BrainCircuit,
  Ticket,
  Activity,
} from "lucide-react";

export default function FarmerDashboard() {
  const navigate = useNavigate();

  const activeToken = {
    token: "A104",
    centre: "Greenfield Procurement Centre",
    crop: "Paddy",
    date: "Today",
    time: "10:00 AM",
    peopleAhead: 8,
    waitTime: 32,
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600">
              <Sprout className="text-white" size={22} />
            </div>

            <div className="text-left">
              <div className="text-lg font-bold text-emerald-700">
                SmartProcure
              </div>
              <div className="text-xs text-slate-500">Farmer Portal</div>
            </div>
          </button>

          <div className="flex items-center gap-3">
            <button
              className="relative rounded-xl p-3 hover:bg-slate-100"
              title="Notifications"
            >
              <Bell size={20} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium hover:bg-slate-50"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Welcome */}
        <section className="mb-8">
          <p className="text-sm font-semibold text-emerald-600">
            FARMER DASHBOARD
          </p>

          <h1 className="mt-2 text-3xl font-bold">Welcome back, Farmer 👋</h1>

          <p className="mt-2 text-slate-500">
            Manage your procurement bookings and track your queue from one
            place.
          </p>
        </section>

        {/* Quick Actions */}
        <section className="grid gap-4 md:grid-cols-3">
          <button
            onClick={() => navigate("/find-centre")}
            className="group rounded-2xl bg-emerald-600 p-6 text-left text-white shadow-sm transition hover:-translate-y-1 hover:bg-emerald-700"
          >
            <MapPin size={28} />

            <h2 className="mt-5 text-xl font-bold">Find Procurement Centre</h2>

            <p className="mt-2 text-sm text-emerald-100">
              Find nearby centres and check their availability.
            </p>

            <div className="mt-5 flex items-center gap-1 text-sm font-semibold">
              Find Centre
              <ChevronRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </button>

          <button
            onClick={() => navigate("/my-bookings")}
            className="group rounded-2xl border bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-200"
          >
            <Ticket className="text-emerald-600" size={28} />

            <h2 className="mt-5 text-xl font-bold">My Bookings</h2>

            <p className="mt-2 text-sm text-slate-500">
              View your tokens, schedules and procurement status.
            </p>

            <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-emerald-700">
              View Bookings
              <ChevronRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </button>

          <button
            onClick={() => navigate("/live-queue")}
            className="group rounded-2xl border bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-200"
          >
            <Activity className="text-blue-600" size={28} />

            <h2 className="mt-5 text-xl font-bold">Live Queue</h2>

            <p className="mt-2 text-sm text-slate-500">
              Track your position and estimated waiting time.
            </p>

            <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-blue-700">
              Track Queue
              <ChevronRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </button>
        </section>

        {/* Active Token */}
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                  ACTIVE TOKEN
                </span>

                <span className="text-sm text-slate-500">
                  {activeToken.date}
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                Token {activeToken.token}
              </h2>

              <p className="mt-1 text-slate-500">{activeToken.centre}</p>
            </div>

            <button
              onClick={() => navigate("/live-queue")}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Track Live Queue
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mt-6 grid gap-4 border-t pt-6 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <CalendarDays className="text-emerald-600" size={21} />

              <p className="mt-3 text-sm text-slate-500">Procurement Time</p>

              <p className="mt-1 font-bold">{activeToken.time}</p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <Users className="text-blue-600" size={21} />

              <p className="mt-3 text-sm text-slate-500">People Ahead</p>

              <p className="mt-1 font-bold">{activeToken.peopleAhead}</p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <Clock className="text-orange-500" size={21} />

              <p className="mt-3 text-sm text-slate-500">Estimated Waiting</p>

              <p className="mt-1 font-bold">{activeToken.waitTime} minutes</p>
            </div>
          </div>
        </section>

        {/* AI Recommendation */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-indigo-50 p-3">
                <BrainCircuit className="text-indigo-600" size={25} />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-bold">
                    SmartProcure AI Recommendation
                  </h2>

                  <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-bold text-indigo-700">
                    AI POWERED
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Based on current queue conditions, centre capacity and
                  historical processing patterns, your estimated waiting time is
                  approximately{" "}
                  <span className="font-bold text-slate-800">
                    {activeToken.waitTime} minutes
                  </span>
                  .
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl bg-indigo-50 p-4">
                    <p className="text-xs font-semibold text-indigo-600">
                      CURRENT RECOMMENDATION
                    </p>

                    <p className="mt-1 font-bold text-indigo-900">
                      Keep your current token
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold text-slate-500">
                      QUEUE CONDITION
                    </p>

                    <p className="mt-1 font-bold">Moderate waiting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Bell className="text-orange-500" size={22} />

              <h2 className="text-lg font-bold">Recent Notification</h2>
            </div>

            <div className="mt-5 rounded-xl bg-orange-50 p-4">
              <p className="font-semibold text-orange-900">Queue Update</p>

              <p className="mt-1 text-sm text-orange-800">
                Your token is confirmed. Keep checking the live queue for the
                latest position.
              </p>

              <p className="mt-3 text-xs text-orange-600">Just now</p>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Quick Information</h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Current Crop</span>

                <span className="font-semibold">{activeToken.crop}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Token Status</span>

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                  Confirmed
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Queue Position</span>

                <span className="font-semibold">
                  #{activeToken.peopleAhead + 1}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-8 rounded-2xl bg-slate-900 p-8 text-white">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Need another procurement slot?
              </h2>

              <p className="mt-2 text-slate-300">
                Find a centre, compare availability and book a new digital
                token.
              </p>
            </div>

            <button
              onClick={() => navigate("/find-centre")}
              className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold hover:bg-emerald-500"
            >
              Find a Centre
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
