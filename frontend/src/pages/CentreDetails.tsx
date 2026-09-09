import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Users,
  Wheat,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function CentreDetails() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/find-centre"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-green-600"
        >
          <ArrowLeft size={17} />
          Back to centres
        </Link>

        {/* Centre heading */}
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                <CheckCircle2 size={14} />
                Currently accepting farmers
              </div>

              <h1 className="text-3xl font-bold text-slate-900">
                Greenfield Procurement Centre
              </h1>

              <div className="mt-3 flex items-center gap-2 text-slate-500">
                <MapPin size={18} className="text-green-600" />
                Poonamallee • 4.2 km away
              </div>
            </div>

            <div className="rounded-2xl bg-green-50 px-5 py-4">
              <p className="text-sm text-slate-500">Current status</p>

              <p className="mt-1 font-bold text-green-700">Low congestion</p>
            </div>
          </div>

          {/* Prediction cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-green-50 p-5">
              <Clock3 size={23} className="text-green-600" />

              <p className="mt-4 text-3xl font-bold text-slate-900">18 min</p>

              <p className="mt-1 text-sm text-slate-500">
                AI predicted waiting time
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <Users size={23} className="text-slate-600" />

              <p className="mt-4 text-3xl font-bold text-slate-900">12</p>

              <p className="mt-1 text-sm text-slate-500">
                Farmers currently ahead
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="h-6 w-6 rounded-full border-4 border-green-500" />

              <p className="mt-4 text-3xl font-bold text-slate-900">42%</p>

              <p className="mt-1 text-sm text-slate-500">
                Current centre capacity
              </p>
            </div>
          </div>
        </section>

        {/* Information */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Main information */}
          <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Centre information
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <InfoItem
                icon={<Wheat size={19} />}
                title="Supported crops"
                value="Rice, Wheat, Maize"
              />

              <InfoItem
                icon={<Users size={19} />}
                title="Processing capacity"
                value="120 farmers / day"
              />

              <InfoItem
                icon={<Clock3 size={19} />}
                title="Average processing rate"
                value="6 farmers / hour"
              />

              <InfoItem
                icon={<MapPin size={19} />}
                title="Operating hours"
                value="8:00 AM – 6:00 PM"
              />
            </div>

            {/* AI recommendation */}
            <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5">
              <p className="font-bold text-green-800">
                SmartProcure recommendation
              </p>

              <p className="mt-2 text-sm leading-6 text-green-700">
                This centre currently has a lower predicted waiting time
                compared with nearby centres. Booking a token here may help
                reduce your waiting time.
              </p>
            </div>
          </div>

          {/* Booking card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Best available option
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-900">
              Book your procurement slot
            </h2>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Next available slot</p>

              <p className="mt-2 text-2xl font-bold text-slate-900">10:30 AM</p>

              <p className="mt-1 text-sm text-green-600">Available</p>
            </div>

            <Link
              to="/booking"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3.5 font-semibold text-white hover:bg-green-700"
            >
              Book Digital Token
              <ArrowRight size={18} />
            </Link>

            <p className="mt-3 text-center text-xs text-slate-400">
              Token availability will be connected to the backend later.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function InfoItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <div className="rounded-xl bg-white p-2 text-green-600 shadow-sm">
        {icon}
      </div>

      <div>
        <p className="text-xs text-slate-500">{title}</p>

        <p className="mt-1 font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

export default CentreDetails;
