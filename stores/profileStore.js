//React
import { decorate, observable } from "mobx";
import instance from "./instance";
import authStore from "./authStore";

class ProfileStore {
  profile = [];
  notMyProfile = [];
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

  findNotMyProfile = async (userId) => {
    try {
      console.log("profileStore -> profile", profile);
      const res = await instance.post("/profiles", userId);
      console.log("profileStore -> profile", profile);
      this.profile = res.data;
      console.log("profileStore -> profile", profile);
      return this.profile;
    } catch (error) {
      console.error("profileStore -> profile -> error", error);
    }
  };
}

decorate(ProfileStore, {
  profile: observable,
  notMyProfile: observable,
  whoIsShowing: observable,
});

const profileStore = new ProfileStore();
export default profileStore;
