//React
import { decorate, observable } from "mobx";
import instance from "./instance";
import authStore from "./authStore";

class ProfileStore {
  whoIsShowing = "SignIn";

  //TODO SET LOADING TO FALSE ONCE YOU OPEN THE PROFILE
  //TODO: IF SIGNED IN FOR TOO LONG DELETE TOKEN OR ELSE ERRORS

  profileUpdate = async (updatedProfile) => {
    try {
      await instance.put("/profiles", updatedProfile);
      authStore.user.profile = updatedProfile;
    } catch (error) {
      console.error("ProfileStore -> profileUpdate -> error", error);
    }
  };

  findProfile = async (profileId) => {
    try {
      const res = await instance.get(`/profiles/${profileId}`);
      return res.data;
    } catch (error) {
      console.error("profileStore -> profile -> error", error);
    }
  };
}

decorate(ProfileStore, {
  whoIsShowing: observable,
});

const profileStore = new ProfileStore();
export default profileStore;
