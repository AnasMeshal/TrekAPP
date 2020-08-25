//React
import { decorate, observable } from "mobx";
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  fetchTrips = async () => {
    try {
      const res = await instance.get("/trips");
      this.trips = res.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  tripCreate = async (newTrip) => {
    try {
      const res = await instance.post("/trips", newTrip);
      this.trips.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  tripDelete = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip.id !== tripId);
    } catch (error) {
      console.log(error);
    }
  };

  tripUpdate = async (updatedTrip) => {
    try {
      await instance.put(`/trips/${updatedTrip.id}`, updatedTrip);
      const trip = this.trips.find((trip) => trip.id === updatedTrip.id);
      for (const key in updatedTrip) trip[key] = updatedTrip[key];
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(TripStore, {
  trips: observable,
  loading: observable,
});

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
