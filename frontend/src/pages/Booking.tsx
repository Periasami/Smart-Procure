import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  Ticket,
  CheckCircle,
} from "lucide-react";

interface Centre {
  id: number;
  name: string;
  location: string;
  distance: string;
  status: "Low" | "Moderate" | "High";
  capacity: number;
  waitTime: number;
  farmersAhead: number;
  processingRate: number;
}

function Booking() {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedCentre = location.state?.centre as Centre | undefined;

  const centre: Centre = selectedCentre || {
    id: 1,
    name: "Greenfield Procurement Centre",
    location: "Kanchipuram, Tamil Nadu",
    distance: "4.2 km",
    status: "Moderate",
    capacity: 72,
    waitTime: 32,
    farmersAhead: 18,
    processingRate: 18,
  };

  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState("10:00 AM – 12:00 PM");
  const [crop, setCrop] = useState("Paddy");

  const handleConfirmBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate("/my-bookings", {
      state: {
        booking: {
          centre,
          date: selectedDate,
          time: selectedTime,
          crop,
          token: "A104",
          status: "Confirmed",
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => navigate("/centre-details", { state: { centre } })}
            className="flex items-center gap-2 text-slate-600 hover:text-green-700"
          >
            <ArrowLeft size={19} />
            Back to Centre
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="text-2xl font-bold text-green-700"
          >
            SmartProcure
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-green-600">DIGITAL TOKEN</p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Book Your Procurement Slot
          </h1>

          <p className="mt-2 text-slate-500">
            Choose your crop and preferred procurement time.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {/* Booking form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleConfirmBooking}
              className="rounded-2xl border bg-white p-7 shadow-sm"
            >
              {/* Centre */}
              <div className="rounded-xl bg-green-50 p-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-green-100 p-3">
                    <MapPin className="text-green-700" size={23} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-green-700">
                      Selected Procurement Centre
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      {centre.name}
                    </h2>

                    <p className="mt-1 text-sm text-slate-600">
                      {centre.location} • {centre.distance}
                    </p>
                  </div>
                </div>
              </div>

              {/* Crop */}
              <div className="mt-7">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Select Crop
                </label>

                <select
                  value={crop}
                  onChange={(event) => setCrop(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-500"
                >
                  <option value="Paddy">Paddy</option>
                  <option value="Wheat">Wheat</option>
                  <option value="Maize">Maize</option>
                  <option value="Groundnut">Groundnut</option>
                  <option value="Cotton">Cotton</option>
                </select>
              </div>

              {/* Date */}
              <div className="mt-7">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Select Date
                </label>

                <div className="grid gap-3 sm:grid-cols-3">
                  {["Today", "Tomorrow", "Day After Tomorrow"].map((date) => (
                    <button
                      key={date}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                        selectedDate === date
                          ? "border-green-600 bg-green-50 text-green-700"
                          : "border-slate-300 text-slate-600 hover:border-green-400"
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time */}
              <div className="mt-7">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Select Time Slot
                </label>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "10:00 AM – 12:00 PM",
                    "12:00 PM – 02:00 PM",
                    "02:00 PM – 04:00 PM",
                    "04:00 PM – 06:00 PM",
                  ].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-4 text-left transition ${
                        selectedTime === time
                          ? "border-green-600 bg-green-50"
                          : "border-slate-300 hover:border-green-400"
                      }`}
                    >
                      <Clock
                        size={19}
                        className={
                          selectedTime === time
                            ? "text-green-600"
                            : "text-slate-400"
                        }
                      />

                      <span
                        className={
                          selectedTime === time
                            ? "font-semibold text-green-700"
                            : "text-slate-700"
                        }
                      >
                        {time}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Confirm */}
              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700"
              >
                <Ticket size={20} />
                Confirm Digital Token
              </button>
            </form>
          </div>

          {/* Summary */}
          <aside>
            <div className="sticky top-6 rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                Booking Summary
              </h2>

              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-xs font-medium uppercase text-slate-400">
                    Centre
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {centre.name}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase text-slate-400">
                    Crop
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">{crop}</p>
                </div>

                <div className="flex gap-3">
                  <CalendarDays size={19} className="mt-0.5 text-green-600" />

                  <div>
                    <p className="text-xs text-slate-400">Date</p>
                    <p className="font-semibold text-slate-900">
                      {selectedDate}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock size={19} className="mt-0.5 text-green-600" />

                  <div>
                    <p className="text-xs text-slate-400">Time</p>
                    <p className="font-semibold text-slate-900">
                      {selectedTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t pt-5">
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <CheckCircle size={18} />
                  <span>AI predicted wait: {centre.waitTime} min</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Booking;
