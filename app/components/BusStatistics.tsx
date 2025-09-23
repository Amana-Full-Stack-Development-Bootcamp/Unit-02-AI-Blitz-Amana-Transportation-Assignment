"use client";

import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BusLine, OperationalSummary } from "../data/amanaData";

interface BusStatisticsProps {
  busLines: BusLine[];
  operationalSummary: OperationalSummary;
}

const COLORS = ["#10B981", "#FBBF24", "#EF4444"]; // green, yellow, red

const BusStatistics: React.FC<BusStatisticsProps> = ({
  busLines,
  operationalSummary,
}) => {
  // Data for bar chart
  const barData = busLines.map((bus: BusLine) => ({
    name: bus.name,
    occupancy: bus.passengers.utilization_percentage,
  }));

  // Data for pie chart
  const pieData = [
    {
      name: "Occupied Seats",
      value: operationalSummary.current_passengers,
    },
    {
      name: "Available Seats",
      value:
        operationalSummary.total_capacity -
        operationalSummary.current_passengers,
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-10 px-4 mt-8 rounded-lg shadow-md">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">
          Bus Occupancy Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Occupancy per Bus Line (%)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={barData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar
                  dataKey="occupancy"
                  fill="#10B981"
                  radius={[5, 5, 0, 0]}
                  label={{ position: "top", fontSize: 12 }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Seat Availability
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, percent }) =>
                    `${name}: ${((percent as number) * 100).toFixed(0)}%`
                  }
                >
                  <Cell fill="#EF4444" />
                  <Cell fill="#10B981" />
                </Pie>
                <Legend verticalAlign="bottom" />
                <Tooltip formatter={(value: number) => `${value} seats`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusStatistics;
