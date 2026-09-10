import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  MapPin,
  Users,
  Clock,
  Navigation,
  Star,
  BrainCircuit,
  Ticket,
  ChevronRight,
} from "lucide-react";

type Centre = {
  id: number;
  name: string;
  location: string;
  distance: string;
  status: "Available" | "Moderate" | "Busy";
  queue: number;
  wait: number;
  rating: number;
  recommended?: boolean;
  crops: string[];
};

const centres: Centre[] = [
  {
    id: 1,
    name: "Greenfield Procurement Centre",
    location: "Chennai, Tamil Nadu",
    distance: "2.4 km",
    status: "Available",
    queue: 8,
    wait: 32,
    rating: 4.7,
    recommended: true,
    crops: ["Paddy", "Wheat", "Maize"],
  },
  {
    id: 2,
    name: "Kaveri Farmers Centre",
    location: "Tambaram, Chennai",
    distance: "5.1 km",
    status: "Moderate",
    queue: 17,
    wait: 58,
    rating: 4.5,
    crops: ["Paddy", "Sugarcane", "Groundnut"],
  },
  {
    id: 3,
    name: "Anna Nagar Procurement Hub",
    location: "Anna Nagar, Chennai",
    distance: "7.8 km",
    status: "Busy",
    queue: 29,
    wait: 96,
    rating: 4.3,
    crops: ["Paddy", "Maize"],
  },
  {
    id: 4,
    name: "Thiruvallur Farmers Centre",
    location: "Thiruvallur, Tamil Nadu",
    distance: "11.2 km",
    status: "Available",
    queue: 6,
    wait: 24,
    rating: 4.6,
    crops: ["Paddy", "Wheat", "Maize"],
  },
];

export default function FindCentre() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("All Crops");

  const filteredCentres = useMemo(() => {
    return centres.filter((centre) => {
      const matchesSearch =
        centre.name.toLowerCase().includes(search.toLowerCase()) ||
        centre.location.toLowerCase().includes(search.toLowerCase());

      const matchesCrop =
        selectedCrop === "All Crops" || centre.crops.includes(selectedCrop);

      return matchesSearch && matchesCrop;
    });
  }, [search, selectedCrop]);

  const openCentreDetails = (centre: Centre) => {
    navigate("/centre-details", {
      state: { centre },
    });
  };

  const bookToken = (centre: Centre) => {
    navigate("/centre-details", {
      state: { centre },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft size={18} />
            Dashboard
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

      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Page heading */}
        <section>
          <p className="text-sm font-bold tracking-wide text-emerald-600">
            SMART CENTRE FINDER
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Find a Procurement Centre
          </h1>

          <p className="mt-3 max-w-2xl text-slate-500">
            Find nearby procurement centres, compare queue conditions, check
            estimated waiting time and book your digital token.
          </p>
        </section>

        {/* Search area */}
        <section className="mt-8 rounded-2xl border bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-[1fr_220px_auto]">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search centre or location..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:bg-white"
              />
            </div>

            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-500"
            >
              <option>All Crops</option>
              <option>Paddy</option>
              <option>Wheat</option>
              <option>Maize</option>
              <option>Sugarcane</option>
              <option>Groundnut</option>
            </select>

            <button
              onClick={() => setSearch("Chennai")}
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              <Navigation size={17} />
              Use Location
            </button>
          </div>
        </section>

        {/* AI recommendation */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm">
          <div className="flex flex-col gap-5 p-6 md:flex-row md:items-center">
            <div className="rounded-xl bg-indigo-50 p-3">
              <BrainCircuit size={28} className="text-indigo-600" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-bold">AI Recommended Centre</h2>

                <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-bold text-indigo-700">
                  SMART RECOMMENDATION
                </span>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Greenfield Procurement Centre currently has a shorter estimated
                waiting time and lower queue load than the other nearby centres.
              </p>
            </div>

            <button
              onClick={() => openCentreDetails(centres[0])}
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              View Recommendation
              <ChevronRight size={17} />
            </button>
          </div>
        </section>

        {/* Results header */}
        <div className="mt-10 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Nearby Procurement Centres</h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredCentres.length} centre
              {filteredCentres.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="hidden items-center gap-2 text-sm text-slate-500 md:flex">
            <MapPin size={16} />
            Chennai region
          </div>
        </div>

        {/* Centre cards */}
        <section className="mt-5 grid gap-5 lg:grid-cols-2">
          {filteredCentres.map((centre) => (
            <article
              key={centre.id}
              className="relative rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Recommendation badge */}
              {centre.recommended && (
                <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                  <BrainCircuit size={13} />
                  AI Recommended
                </div>
              )}

              {/* Centre title */}
              <div className="pr-32">
                <h3 className="text-xl font-bold">{centre.name}</h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} />
                  {centre.location}
                </div>
              </div>

              {/* Distance + rating */}
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                  {centre.distance} away
                </span>

                <span className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-semibold text-yellow-700">
                  <Star size={13} fill="currentColor" />
                  {centre.rating}
                </span>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                    centre.status === "Available"
                      ? "bg-emerald-100 text-emerald-700"
                      : centre.status === "Moderate"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {centre.status}
                </span>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users size={17} />
                    <span className="text-xs font-medium">Queue</span>
                  </div>

                  <p className="mt-2 text-xl font-bold">{centre.queue}</p>

                  <p className="text-xs text-slate-500">people waiting</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock size={17} />
                    <span className="text-xs font-medium">Estimated Wait</span>
                  </div>

                  <p className="mt-2 text-xl font-bold">{centre.wait} min</p>

                  <p className="text-xs text-slate-500">current estimate</p>
                </div>
              </div>

              {/* Crops */}
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Accepted Crops
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {centre.crops.map((crop) => (
                    <span
                      key={crop}
                      className="rounded-lg border bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => openCentreDetails(centre)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 font-semibold hover:bg-slate-50"
                >
                  View Centre
                  <ChevronRight size={17} />
                </button>

                <button
                  onClick={() => bookToken(centre)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700"
                >
                  <Ticket size={17} />
                  Book Token
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* No results */}
        {filteredCentres.length === 0 && (
          <div className="mt-6 rounded-2xl border bg-white p-10 text-center">
            <MapPin size={35} className="mx-auto text-slate-300" />

            <h3 className="mt-4 text-lg font-bold">
              No procurement centres found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another centre name, location or crop.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCrop("All Crops");
              }}
              className="mt-5 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Bottom information */}
        <section className="mt-10 rounded-2xl bg-slate-900 p-7 text-white">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-bold">
                Smarter procurement, less waiting.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                SmartProcure combines centre availability, queue conditions and
                AI-based waiting-time predictions to help farmers choose a
                better procurement slot.
              </p>
            </div>

            <button
              onClick={() => navigate("/live-queue")}
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100"
            >
              View Live Queue
              <ChevronRight size={17} />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
