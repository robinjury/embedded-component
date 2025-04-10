import { useState } from "react";
import "./App.css";

function App() {
  const [guests, setGuests] = useState(100);
  const [duration, setDuration] = useState(1); // in days
  const [mealsPerGuest, setMealsPerGuest] = useState(2);

  // Estimated impact per guest per day (mock values)
  const co2PerGuestPerMeal = 2.0; // kg CO2e
  const wastePerGuestPerMeal = 0.5; // kg

  const totalMeals = guests * mealsPerGuest;
  const totalCO2 = totalMeals * co2PerGuestPerMeal;
  const totalWaste = totalMeals * wastePerGuestPerMeal;

  const vendorSuggestions = [
    {
      type: "Caterer",
      name: "GreenFork Weddings",
      co2Saved: totalMeals * 0.8, // assuming 40% reduction
      wasteSaved: totalMeals * 0.3,
      reason: "Offers seasonal, plant-based menus with compostable packaging.",
    },
    {
      type: "Florist",
      name: "EcoBloom Florals",
      co2Saved: guests * 0.3,
      wasteSaved: guests * 0.1,
      reason: "Uses locally sourced, foam-free, seasonal flowers.",
    },
    {
      type: "Decor",
      name: "ReLove Rentals",
      co2Saved: guests * 0.5,
      wasteSaved: guests * 0.4,
      reason: "Provides reusable decor and furniture, reducing single-use waste.",
    },
  ];

  return (
    <div className="bg-green-900 min-h-screen text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-6">🌿 Wedding Impact Calculator</h1>

      <div className="bg-white text-black rounded-lg shadow-md p-6 max-w-xl mx-auto mb-6">
        <label className="block mb-4">
          Number of Guests:
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="ml-2 p-1 border rounded"
          />
        </label>

        <label className="block mb-4">
          Event Duration (days):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="ml-2 p-1 border rounded"
          />
        </label>

        <label className="block mb-4">
          Meals per Guest:
          <input
            type="number"
            value={mealsPerGuest}
            onChange={(e) => setMealsPerGuest(parseInt(e.target.value))}
            className="ml-2 p-1 border rounded"
          />
        </label>
      </div>

      <div className="bg-white text-black rounded-lg shadow-md p-6 max-w-xl mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-2">🌎 Estimated Impact</h2>
        <p><strong>Total CO₂ Emissions:</strong> {totalCO2.toFixed(1)} kg</p>
        <p><strong>Total Waste:</strong> {totalWaste.toFixed(1)} kg</p>
      </div>

      <div className="bg-white text-black rounded-lg shadow-md p-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">💡 Sustainable Vendor Suggestions</h2>
        {vendorSuggestions.map((vendor, index) => (
          <div key={index} className="mb-4 border-b pb-2">
            <h3 className="font-bold">{vendor.name} ({vendor.type})</h3>
            <p><strong>Estimated CO₂ Saved:</strong> {vendor.co2Saved.toFixed(1)} kg</p>
            <p><strong>Estimated Waste Saved:</strong> {vendor.wasteSaved.toFixed(1)} kg</p>
            <p><em>{vendor.reason}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
