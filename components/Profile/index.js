import React, { useState } from "react";
import { observer } from "mobx-react";

//Components

//Stores
import profileStore from "../../stores/profileStore";

//Styles
import { ProfileImage, ProfileName, ProfileBio } from "./styles";
import { ScrollView } from "react-native";
import MyTripList from "../MyTripList";
import authStore from "../../stores/authStore";
import { Text } from "native-base";
import Markdown from "react-native-simple-markdown";

const Profile = ({ navigation }) => {
  const { profile } = profileStore;

  const [updatedProfile, setUpdatedProfile] = useState({
    // name: profile.title,
    image: profile.image,
    bio: profile.bio,
    id: profile.id,
  });

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
        />
        {/* <Markdown>
          #Markdown in react-native is so cool! {"\n\n"}
          You can **emphasize** what you want, or just _suggest it_ 😏…{"\n"}
          You can even [**link your
          website**](https://twitter.com/Charles_Mangwa) or if you prefer:
          [email somebody](mailto:email@somebody.com){"\n"}
          Spice it up with some GIFs 💃: ![Some
          GIF](https://media.giphy.com/media/dkGhBWE3SyzXW/giphy.gif){"\n"}
          And even add a cool video 😎!{"\n"}
          [![A cool video from
          YT](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](http://www.youtube.com/watch?v=dQw4w9WgXcQ)
          [![Another one from
          Vimeo](https://i.vimeocdn.com/video/399486266_640.jpg)](https://vimeo.com/57580368)
        </Markdown> */}
        <MyTripList isProfile navigation={navigation} />
      </ScrollView>
    );
  } else {
    return <Text>Sign in</Text>;
  }
};

export default observer(Profile);
