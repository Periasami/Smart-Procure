import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Users,
  Clock,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

export default function LiveQueue() {
  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state?.booking;

  const centre = booking?.centre || {
    name: "Greenfield Procurement Centre",
    location: "Chennai, Tamil Nadu",
  };

  const token = booking?.token || "A104";
  const crop = booking?.crop || "Paddy";
  const date = booking?.date || "Today";
  const time = booking?.time || "10:00 AM";

  const peopleAhead = 8;
  const estimatedWait = 32;
  const completed = 24;
  const total = 32;

  const progress = Math.round((completed / total) * 100);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => navigate("/my-bookings")}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft size={18} />
            My Bookings
          </button>

          <div className="text-xl font-bold text-emerald-700">SmartProcure</div>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium hover:bg-slate-50"
          >
            <RefreshCw size={16} />
            Refresh
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold text-emerald-600">
            LIVE QUEUE
          </p>

          <h1 className="text-3xl font-bold">Track Your Procurement Queue</h1>

          <p className="mt-2 text-slate-500">
            Real-time queue status for your procurement booking.
          </p>
        </div>

        {/* Token Card */}
        <section className="rounded-2xl bg-emerald-700 p-8 text-white shadow-lg">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-emerald-100">YOUR TOKEN</p>

              <div className="mt-2 text-5xl font-bold tracking-tight">
                {token}
              </div>

              <p className="mt-3 text-emerald-100">
                {crop} • {date} • {time}
              </p>
            </div>

            <div className="rounded-xl bg-white/10 px-6 py-5 text-center">
              <CheckCircle2 className="mx-auto mb-2" size={28} />

              <p className="text-sm text-emerald-100">Booking Status</p>

              <p className="mt-1 text-lg font-bold">Confirmed</p>
            </div>
          </div>
        </section>

        {/* Centre */}
        <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-emerald-50 p-3">
              <MapPin className="text-emerald-600" size={24} />
            </div>

            <div>
              <h2 className="font-bold text-lg">{centre.name}</h2>

              <p className="mt-1 text-sm text-slate-500">{centre.location}</p>
            </div>
          </div>
        </section>

        {/* Queue Stats */}
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <Users className="text-blue-600" size={24} />

            <p className="mt-4 text-sm text-slate-500">People Ahead</p>

            <p className="mt-1 text-3xl font-bold">{peopleAhead}</p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <Clock className="text-orange-500" size={24} />

            <p className="mt-4 text-sm text-slate-500">Estimated Waiting</p>

            <p className="mt-1 text-3xl font-bold">{estimatedWait} min</p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <CheckCircle2 className="text-emerald-600" size={24} />

            <p className="mt-4 text-sm text-slate-500">Tokens Completed</p>

            <p className="mt-1 text-3xl font-bold">{completed}</p>
          </div>
        </section>

        {/* Queue Progress */}
        <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-lg">Centre Queue Progress</h2>

              <p className="mt-1 text-sm text-slate-500">
                {completed} of {total} tokens processed
              </p>
            </div>

            <span className="font-bold text-emerald-600">{progress}%</span>
          </div>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-emerald-600 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

        {/* Current Status */}
        <section className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <div className="flex gap-4">
            <div className="rounded-full bg-emerald-100 p-3">
              <CheckCircle2 className="text-emerald-600" size={22} />
            </div>

            <div>
              <h2 className="font-bold text-emerald-900">
                Your booking is in the queue
              </h2>

              <p className="mt-1 text-sm text-emerald-700">
                Please arrive at the procurement centre before your estimated
                processing time. The live queue will update as tokens are
                processed.
              </p>
            </div>
          </div>
        </section>

        {/* Back */}
        <div className="mt-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800"
          >
            Back to Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}
