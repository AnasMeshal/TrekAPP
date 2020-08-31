import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
// so many components imported here they need a bigger header comment

//Stores
import profileStore from "../../stores/profileStore";

//Styles
import { ProfileImage, ProfileName, ProfileBio } from "./styles";
import { ScrollView } from "react-native";
import MyTripList from "../MyTripList";
import authStore from "../../stores/authStore";
import { Text } from "native-base";

// organize the imports

const Profile = ({ navigation }) => {
  const { profile } = profileStore;

  const [updatedProfile, setUpdatedProfile] = useState({
    // the Profile doesn't have a name
    // so in this screen, just display the user's username, or first/last name
    // but it's not editable
    // name: profile.title,
    image: profile.image,
    bio: profile.bio,
    id: profile.id,
    // if this is all the fields in the profile object,
    // no need to write them one by one like this
  });

  /**
   * In a case like this, where the if-statement is really long and the else is really short, 
   * reverse the condition and put the else on top. like this:
   * if (!authStore.user) return <Text>Sign in</Text>
   * then here, without the else, write the larger main return.
   */

  if (authStore.user) {
    return (
      <ScrollView>
        <ProfileImage
          source={{
            uri:
              "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png",
          }}
        />

        {/* TODO profile name
       <ProfileName
        maxLength={40}
        blurOnSubmit={true}
        multiline={true}
        placeholder={trip.title}
        placeholderTextColor="black"
        onChangeText={(title) =>
          setUpdatedProfile({ ...updatedProfile, title })
        }
        onEndEditing={async () => {
          await tripStore.tripUpdate(updatedProfile);
        }}
      /> */}
        <ProfileBio
          multiline={true}
          placeholder={profile.bio}
          placeholderTextColor="grey"
          onChangeText={(bio) => setUpdatedProfile({ ...updatedProfile, bio })}
          onEndEditing={async () => {
            await profileStore.profileUpdate(updatedProfile);
          }}
          // just realized, should probably display a toast or something to inform the user that their profile has been updated.
        />
        <MyTripList isProfile navigation={navigation} />
      </ScrollView>
    );
  } else {
    // shouldn't this be a button that takes the user to the signin page?
    return <Text>Sign in</Text>;
  }
};

export default observer(Profile);
