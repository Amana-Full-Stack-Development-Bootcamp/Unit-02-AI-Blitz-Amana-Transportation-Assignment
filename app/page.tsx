"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import BusStatistics from "./components/BusStatistics";
import BusStopTable from "./components/BusStopTable";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { amanaData } from "./data/amanaData";

const MapComponent = dynamic(() => import("./components/MapComponent"), {
  ssr: false, // ensures this component only loads on the client
});

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans antialiased space-y-15">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />

        {/* Section for Map and Route Selection */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-12">
          <MapComponent busLines={amanaData.bus_lines} />
        </section>

        {/* Section for Bus Schedule Table */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Bus Schedule 🕒
          </h2>
          <BusStopTable busLines={amanaData.bus_lines} />
        </section>
        <BusStatistics
          busLines={amanaData.bus_lines}
          operationalSummary={amanaData.operational_summary}
        />
      </main>
      <Footer />
    </div>
  );
}
