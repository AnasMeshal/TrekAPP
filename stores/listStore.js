// React
import { decorate, observable } from "mobx";
import instance from "./instance";
import tripStore from "./tripStore";
import authStore from "./authStore";

// TODO: SCROLL UP TO REFRESG

class ListStore {
  lists = [];
  loading = true;

  fetchLists = async () => {
    try {
      const res = await instance.get("/lists");
      this.lists = res.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  listCreate = async (newList) => {
    try {
      const res = await instance.post("/lists", newList);
      this.lists.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  listUpdate = async (updatedList) => {
    try {
      await instance.put(`/lists/${updatedList.id}`, updatedList);
      const list = this.lists.find((list) => list.id === updatedList.id);
      for (const key in updatedList) list[key] = updatedList[key];
    } catch (error) {
      console.log(error);
    }
  };

  listDelete = async (listId) => {
    try {
      await instance.delete(`/lists/${listId}`);
      this.lists = this.lists.filter((list) => list.id !== listId);
    } catch (error) {
      console.log(error);
    }
  };

  removeFromList = async (listId, tripId) => {
    try {
      const foundList = await this.lists.find((list) => list.id === listId);
      await instance.delete(`/lists/${listId}/trips/${tripId}`);
      const listTrip = foundList.trips.filter((trip) => trip.id !== tripId);
      foundList.trips = listTrip;
    } catch (error) {
      console.log(error);
    }
  };

  addTripToList = async (listId, tripId) => {
    try {
      const foundList = await this.lists.find((list) => list.id === listId);
      const res = await instance.post(`/lists/${listId}/trips`, {
        tripId: tripId,
      });
      const newTrip = tripStore.getTripById(res.data.tripId);
      foundList.trips.push(newTrip);
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(ListStore, {
  lists: observable,
  loading: observable,
});

const listStore = new ListStore();
listStore.fetchLists();
export default listStore;
