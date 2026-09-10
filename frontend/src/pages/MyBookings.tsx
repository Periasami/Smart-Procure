import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  Ticket,
  CheckCircle,
} from "lucide-react";

export default function MyBookings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center gap-2 text-green-700 hover:text-green-900"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        {/* Header */}
        <div>
          <p className="text-sm font-semibold text-green-700">SMARTPROCURE</p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">My Bookings</h1>

          <p className="mt-2 text-gray-600">
            View and manage your procurement tokens.
          </p>
        </div>

        {/* Booking Card */}
        <div className="mt-8 rounded-2xl bg-white p-7 shadow-lg">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Ticket className="text-green-600" />

                <h2 className="text-xl font-bold text-gray-900">Token #A124</h2>
              </div>

              <div className="mt-4 flex items-center gap-2 text-gray-600">
                <MapPin size={17} />
                Greenfield Procurement Centre
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              <CheckCircle size={16} />
              Confirmed
            </div>
          </div>

          {/* Details */}
          <div className="mt-7 grid gap-5 border-t pt-6 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-1 text-green-600" size={20} />

              <div>
                <p className="text-sm text-gray-500">Date</p>

                <p className="font-semibold text-gray-900">Tomorrow</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-1 text-green-600" size={20} />

              <div>
                <p className="text-sm text-gray-500">Time Slot</p>

                <p className="font-semibold text-gray-900">
                  10:00 AM – 11:00 AM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Ticket className="mt-1 text-green-600" size={20} />

              <div>
                <p className="text-sm text-gray-500">Queue Position</p>

                <p className="font-semibold text-gray-900">19</p>
              </div>
            </div>
          </div>

          {/* AI Prediction */}
          <div className="mt-7 rounded-xl bg-green-50 p-5">
            <p className="text-sm font-medium text-gray-600">
              AI Estimated Waiting Time
            </p>

            <div className="mt-1 flex items-end gap-2">
              <span className="text-3xl font-bold text-green-700">32</span>

              <span className="mb-1 text-gray-600">minutes</span>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Prediction based on current queue, processing rate and centre
              capacity.
            </p>
          </div>

          {/* Live Queue */}
          <button
            onClick={() => navigate("/live-queue")}
            className="mt-7 w-full rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white hover:bg-green-700"
          >
            View Live Queue
          </button>
        </div>

        {/* New Booking */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/find-centre")}
            className="font-semibold text-green-700 hover:text-green-900"
          >
            + Book another procurement visit
          </button>
        </div>
      </div>
    </div>
  );
}
