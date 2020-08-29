//React
import { decorate, observable } from "mobx";
import instance from "./instance";

class ProfileStore {
  loading = true;
  profile = [];
  notMyProfile = [];
  //TODO SET LOADING TO FALSE ONCE YOU OPEN THE PROFILE
  //TODO: IF SIGNED IN FOR TOO LONG DELETE TOKEN OR ELSE ERRORS
  fetchProfile = async (user) => {
    try {
      const res = await instance.get("/profiles", user);
      this.profile = res.data;
    } catch (error) {
      console.error("ProfileStore -> fetchProfile -> error", error);
    }
  };

  profileUpdate = async (updatedProfile) => {
    try {
      await instance.put("/profiles", updatedProfile);
      this.profile = updatedProfile;
    } catch (error) {
      console.error("ProfileStore -> profileUpdate -> error", error);
    }
  };

  findNotMyProfile = async (userId) => {
    try {
      const res = await instance.post("/profiles", userId);
      this.notMyProfile = res.data;
      this.loading = false;
      return this.notMyProfile;
    } catch (error) {
      console.error("ProfileStore -> notMyProfile -> error", error);
    }
  };
}

decorate(ProfileStore, {
  profile: observable,
  notMyProfile: observable,
  loading: observable,
});

const profileStore = new ProfileStore();
export default profileStore;
