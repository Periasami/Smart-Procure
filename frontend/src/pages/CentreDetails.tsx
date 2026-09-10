import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Users,
  Clock,
  Star,
  BrainCircuit,
  CheckCircle2,
  Navigation,
  CalendarDays,
  Ticket,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

type Centre = {
  id?: number;
  name: string;
  location: string;
  distance?: string;
  status?: "Available" | "Moderate" | "Busy";
  queue?: number;
  wait?: number;
  rating?: number;
  recommended?: boolean;
  crops?: string[];
};

export default function CentreDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const centre: Centre = location.state?.centre || {
    name: "Greenfield Procurement Centre",
    location: "Chennai, Tamil Nadu",
    distance: "2.4 km",
    status: "Available",
    queue: 8,
    wait: 32,
    rating: 4.7,
    recommended: true,
    crops: ["Paddy", "Wheat", "Maize"],
  };

  const queue = centre.queue ?? 8;
  const wait = centre.wait ?? 32;
  const distance = centre.distance ?? "2.4 km";
  const rating = centre.rating ?? 4.7;
  const status = centre.status ?? "Available";
  const crops = centre.crops ?? ["Paddy", "Wheat", "Maize"];

  const slots = [
    {
      time: "09:00 AM",
      available: true,
      load: "Low",
    },
    {
      time: "10:00 AM",
      available: true,
      load: "Moderate",
    },
    {
      time: "11:30 AM",
      available: true,
      load: "Moderate",
    },
    {
      time: "01:00 PM",
      available: false,
      load: "Full",
    },
  ];

  const handleBooking = () => {
    navigate("/booking", {
      state: {
        centre,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => navigate("/find-centre")}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft size={18} />
            Find Centre
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="text-xl font-bold text-emerald-700"
          >
            SmartProcure
          </button>

          <button
            onClick={() => navigate("/my-bookings")}
            className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-slate-50"
          >
            <Ticket size={16} />
            My Bookings
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Page heading */}
        <section>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                status === "Available"
                  ? "bg-emerald-100 text-emerald-700"
                  : status === "Moderate"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
              }`}
            >
              {status}
            </span>

            {centre.recommended && (
              <span className="flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                <BrainCircuit size={13} />
                AI Recommended
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-bold md:text-4xl">{centre.name}</h1>

          <div className="mt-3 flex flex-wrap gap-5 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <MapPin size={17} />
              {centre.location}
            </span>

            <span className="flex items-center gap-2">
              <Navigation size={17} />
              {distance} away
            </span>

            <span className="flex items-center gap-2">
              <Star size={17} className="text-yellow-500" fill="currentColor" />
              {rating} rating
            </span>
          </div>
        </section>

        {/* Main status */}
        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3">
                <Users className="text-blue-600" size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Current Queue</p>

                <p className="text-2xl font-bold">{queue}</p>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Farmers currently waiting
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-orange-50 p-3">
                <Clock className="text-orange-500" size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500">AI Estimated Wait</p>

                <p className="text-2xl font-bold">{wait} min</p>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Predicted from current queue conditions
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-3">
                <CheckCircle2 className="text-emerald-600" size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Centre Status</p>

                <p className="text-2xl font-bold">{status}</p>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Current procurement availability
            </p>
          </div>
        </section>

        {/* AI Recommendation */}
        <section className="mt-6 rounded-2xl border border-indigo-100 bg-white shadow-sm">
          <div className="p-6 md:p-7">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-indigo-50 p-3">
                <BrainCircuit size={27} className="text-indigo-600" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-bold">SmartProcure AI Insight</h2>

                  <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-bold text-indigo-700">
                    AI POWERED
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  This centre is currently a good choice based on queue length,
                  estimated processing time and availability. The current
                  predicted waiting time is{" "}
                  <span className="font-bold text-slate-800">
                    {wait} minutes
                  </span>
                  .
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-xl bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
                    Shorter Queue
                  </span>

                  <span className="rounded-xl bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    Centre Available
                  </span>

                  <span className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                    {distance} Distance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accepted crops */}
        <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-50 p-3">
              <CheckCircle2 className="text-emerald-600" size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold">Accepted Crops</h2>

              <p className="text-sm text-slate-500">
                Crops currently accepted at this centre
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {crops.map((crop) => (
              <span
                key={crop}
                className="rounded-xl border bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                🌾 {crop}
              </span>
            ))}
          </div>
        </section>

        {/* Procurement slots */}
        <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-3">
              <CalendarDays className="text-blue-600" size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold">Today's Procurement Slots</h2>

              <p className="text-sm text-slate-500">
                Choose an available slot for your token.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {slots.map((slot) => (
              <div
                key={slot.time}
                className={`rounded-xl border p-4 ${
                  slot.available
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-slate-200 bg-slate-100 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold">{slot.time}</span>

                  {slot.available ? (
                    <CheckCircle2 size={18} className="text-emerald-600" />
                  ) : (
                    <span className="text-xs font-bold text-red-600">FULL</span>
                  )}
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Queue load: {slot.load}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-red-50 p-3">
                <MapPin className="text-red-500" size={24} />
              </div>

              <div>
                <h2 className="font-bold">Centre Location</h2>

                <p className="mt-1 text-sm text-slate-500">{centre.location}</p>

                <p className="mt-2 text-xs font-semibold text-emerald-600">
                  {distance} from your selected location
                </p>
              </div>
            </div>

            <button
              onClick={() => alert("Map integration will be connected later.")}
              className="flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-slate-50"
            >
              <Navigation size={17} />
              View Route
            </button>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="mt-8 rounded-2xl bg-slate-900 p-7 text-white shadow-lg">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={21} className="text-emerald-400" />

                <span className="text-sm font-semibold text-emerald-400">
                  DIGITAL TOKEN BOOKING
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                Ready to book this centre?
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                Select your crop, preferred date and available time slot to
                generate your digital procurement token.
              </p>
            </div>

            <button
              onClick={handleBooking}
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white hover:bg-emerald-500"
            >
              <Ticket size={19} />
              Continue to Digital Token
              <ChevronRight size={18} />
            </button>
          </div>
        </section>

        {/* Back button */}
        <div className="mt-6">
          <button
            onClick={() => navigate("/find-centre")}
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft size={16} />
            Back to Procurement Centres
          </button>
        </div>
      </main>
    </div>
  );
}
