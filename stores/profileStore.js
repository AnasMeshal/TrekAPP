//React
import { decorate, observable } from "mobx";
import instance from "./instance";

class ProfileStore {
  profile = [];
  // call this userProfile
  // Ask Laila if she thinks this is a good name or if she has a better one in mind.
  notMyProfile = [];

  //TODO SET LOADING TO FALSE ONCE YOU OPEN THE PROFILE
  //TODO: IF SIGNED IN FOR TOO LONG DELETE TOKEN OR ELSE ERRORS

  fetchProfile = async (user) => {
    try {
      // Delete this method, you won't need it, youll pass the profile in the token payload
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
      // call this fetchProfile
      const res = await instance.post("/profiles", userId);
      this.notMyProfile = res.data;
      return this.notMyProfile; // no need to return
    } catch (error) {
      console.error("ProfileStore -> notMyProfile -> error", error);
    }
  };
}

decorate(ProfileStore, {
  profile: observable,
  notMyProfile: observable,
});

const profileStore = new ProfileStore();
export default profileStore;
