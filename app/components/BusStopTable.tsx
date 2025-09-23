import { useState } from "react";
import { BusLine } from "../data/amanaData";

interface BusStopTableProps {
  busLines: BusLine[];
}
const BusStopTable = ({ busLines }: BusStopTableProps) => {
  const [selectedBusId, setSelectedBusId] = useState(busLines?.[0]?.id || null);

  // Get the selected bus and its stops
  const selectedBus = busLines.find((bus) => bus.id === selectedBusId);
  const busStops = selectedBus?.bus_stops || [];

  return (
    <div className="container mx-auto p-4 sm:p-6 mt-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-6 bg-emerald-800 py-4 rounded-lg shadow-lg">
        Bus Schedule
      </h2>

      {/* Bus Line Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {busLines.map((bus) => (
          <button
            key={bus.id}
            onClick={() => setSelectedBusId(bus.id)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
              selectedBusId === bus.id
                ? "bg-emerald-900 text-white"
                : "bg-emerald-700 text-white hover:bg-emerald-800"
            }`}
          >
            {bus.route_number} - {bus.name}
          </button>
        ))}
      </div>

      {/* Bus Stops Table */}
      <div className="overflow-x-auto rounded-xl shadow-lg border border-emerald-700">
        <table className="min-w-full table-fixed text-left border-collapse">
          <thead className="bg-emerald-900">
            <tr>
              <th className="w-1/2 py-3 px-4 uppercase font-bold text-white tracking-wide">
                Bus Stop
              </th>
              <th className="w-1/2 py-3 px-4 uppercase font-bold text-white tracking-wide">
                Estimated Arrival
              </th>
            </tr>
          </thead>
          <tbody>
            {busStops.length > 0 ? (
              busStops.map((stop, index) => (
                <tr
                  key={stop.id}
                  className={`transition-colors duration-200 ${
                    stop.is_next_stop
                      ? "bg-emerald-700 font-bold text-white"
                      : index % 2 === 0
                      ? "bg-emerald-800 text-white"
                      : "bg-emerald-700 text-white"
                  } hover:bg-emerald-600`}
                >
                  <td className="py-3 px-4 truncate">{stop.name}</td>
                  <td className="py-3 px-4 truncate">
                    {stop.estimated_arrival}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={2}
                  className="text-center py-4 text-white font-semibold"
                >
                  No stops available for this route.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusStopTable;
