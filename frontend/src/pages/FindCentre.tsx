import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  MapPin,
  Search,
  Users,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";

type Centre = {
  id: number;
  name: string;
  location: string;
  distance: string;
  waitTime: number;
  farmersAhead: number;
  status: "Low" | "Moderate" | "High";
  capacity: number;
  recommended?: boolean;
};

const centres: Centre[] = [
  {
    id: 1,
    name: "Greenfield Procurement Centre",
    location: "Poonamallee",
    distance: "4.2 km",
    waitTime: 18,
    farmersAhead: 12,
    status: "Low",
    capacity: 42,
    recommended: true,
  },
  {
    id: 2,
    name: "Kaveri Agro Centre",
    location: "Avadi",
    distance: "7.8 km",
    waitTime: 31,
    farmersAhead: 21,
    status: "Moderate",
    capacity: 68,
  },
  {
    id: 3,
    name: "Uzhavar Procurement Hub",
    location: "Thiruvallur",
    distance: "11.4 km",
    waitTime: 47,
    farmersAhead: 36,
    status: "High",
    capacity: 87,
  },
];

function FindCentre() {
  const [search, setSearch] = useState("");

  const filteredCentres = centres.filter(
    (centre) =>
      centre.name.toLowerCase().includes(search.toLowerCase()) ||
      centre.location.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-green-600"
          >
            <ArrowLeft size={17} />
            Back
          </button>

          <p className="font-semibold text-green-600">SMART CENTRE FINDER</p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Find the best procurement centre
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Compare nearby centres using predicted waiting time, queue size,
            distance and current capacity.
          </p>
        </div>

        {/* Search + Location */}
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search by centre or village..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 font-medium text-slate-700 hover:bg-slate-50">
            <MapPin size={19} className="text-green-600" />
            Use my location
          </button>
        </div>

        {/* Recommendation */}
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Recommended for you
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Based on predicted waiting time, distance and centre capacity.
              </p>
            </div>
          </div>

          {filteredCentres
            .filter((centre) => centre.recommended)
            .map((centre) => (
              <CentreCard key={centre.id} centre={centre} featured />
            ))}
        </section>

        {/* Nearby centres */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">
            Nearby procurement centres
          </h2>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {filteredCentres
              .filter((centre) => !centre.recommended)
              .map((centre) => (
                <CentreCard key={centre.id} centre={centre} />
              ))}
          </div>

          {filteredCentres.length === 0 && (
            <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <MapPin className="mx-auto text-slate-400" size={30} />

              <h3 className="mt-3 font-semibold text-slate-900">
                No centres found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Try searching for another centre or village.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

function CentreCard({
  centre,
  featured = false,
}: {
  centre: Centre;
  featured?: boolean;
}) {
  const statusClasses = {
    Low: "bg-green-100 text-green-700",
    Moderate: "bg-yellow-100 text-yellow-700",
    High: "bg-red-100 text-red-700",
  };

  return (
    <div
      className={`rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        featured ? "border-green-200 ring-1 ring-green-100" : "border-slate-200"
      }`}
    >
      {featured && (
        <div className="mb-4 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
          ⭐ SmartProcure Recommendation
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{centre.name}</h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={16} />
            {centre.location}
            <span>•</span>
            {centre.distance}
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[centre.status]}`}
        >
          {centre.status}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-green-50 p-3">
          <Clock3 size={18} className="text-green-600" />

          <p className="mt-2 text-xl font-bold text-slate-900">
            {centre.waitTime} min
          </p>

          <p className="text-xs text-slate-500">Predicted wait</p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <Users size={18} className="text-slate-600" />

          <p className="mt-2 text-xl font-bold text-slate-900">
            {centre.farmersAhead}
          </p>

          <p className="text-xs text-slate-500">Farmers ahead</p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-sm font-semibold text-slate-700">Capacity</p>

          <p className="mt-2 text-xl font-bold text-slate-900">
            {centre.capacity}%
          </p>

          <p className="text-xs text-slate-500">Current load</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button className="flex-1 rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50">
          View Centre
        </button>

        <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700">
          Book Token
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}

export default FindCentre;
