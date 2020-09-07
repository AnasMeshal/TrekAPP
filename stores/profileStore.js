// React
import { decorate, observable } from "mobx";
import instance from "./instance";
import authStore from "./authStore";

class ProfileStore {
  whoIsShowing = "SignIn";

  // TODO SET LOADING TO FALSE ONCE YOU OPEN THE PROFILE
  // TODO: IF SIGNED IN FOR TOO LONG DELETE TOKEN OR ELSE ERRORS

  profileUpdate = async (updatedProfile, updatedFE) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);
      await instance.put("/profiles", formData);
      if (updatedFE) {
        authStore.user.profile = updatedFE;
        // await authStore.setUser(authStore.user);
      } else {
        authStore.user.profile = updatedProfile;
        // await authStore.setUser(authStore.user);
        console.log(
          "ProfileStore -> profileUpdate -> authStore.user",
          authStore.user
        );
      }
    } catch (error) {
      console.error("ProfileStore -> profileUpdate -> error", error);
    }
  };

  fetchProfile = async (profileId) => {
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
