import { decorate, observable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation, NavigationActions } from "@react-navigation/native";

class AuthStore {
  user = null;
  error = "";
  loading = false;

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      this.loading = true;
      const res = await instance.post("/signup", userData);
      await this.setUser(res.data.token);
      this.loading = false;
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      this.loading = true;
      const res = await instance.post("/signin", userData);
      this.error = "";
      await this.setUser(res.data.token);
      this.loading = false;
    } catch (error) {
      if (error.message.includes("401")) {
        this.error = "Login info incorrect";
      }
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signout = async () => {
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
    this.user = null;
    this.loading = false;
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable,
  error: observable,
  loading: observable,
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
