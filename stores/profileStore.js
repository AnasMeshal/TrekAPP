//React
import { decorate, observable } from "mobx";
import instance from "./instance";
import authStore from "./authStore";

class ProfileStore {
  profile = [];

  fetchProfile = async (user) => {
    try {
      const res = await instance.get("/profiles", user);
      this.profile = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  profileUpdate = async (updatedProfile) => {
    try {
      await instance.put("/profiles", updatedProfile);
      this.profile = updatedProfile;
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(ProfileStore, {
  profile: observable,
});

const profileStore = new ProfileStore();
export default profileStore;
