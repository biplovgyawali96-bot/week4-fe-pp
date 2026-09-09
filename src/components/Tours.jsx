import { useState } from "react";
import { tours } from "../data";
import Tour from "./Tour";

function Tours() {
  // Step 1: Move tours array into component state
  const [toursData, setToursData] = useState(tours);

  // Step 2: Remove a tour
  function removeTour(id) {
    setToursData((prevTours) =>
      prevTours.filter((tour) => tour.id !== id)
    );
  }

  // Step 3: Restore all tours
  function restoreTours() {
    setToursData(tours);
  }

  return (
    <section className="tours">
      {toursData.map((tour) => (
        <div key={tour.id}>
          <Tour {...tour} />

          {/* Remove button for Iteration 5 */}
          <button
            className="btn"
            onClick={() => removeTour(tour.id)}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Restore button when all tours are removed */}
      {toursData.length === 0 && (
        <button className="btn" onClick={restoreTours}>
          Restore Tours
        </button>
      )}
    </section>
  );
}

export default Tours;
