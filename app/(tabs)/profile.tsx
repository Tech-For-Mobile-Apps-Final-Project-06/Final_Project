import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons"; // Import Feather icons
import { Stack } from "expo-router";

const Page = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "Profile",
        }}
      />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileBackground}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{
                  uri: "https://banner2.cleanpng.com/20180703/zri/kisspng-university-of-cincinnati-academic-health-center-ca-study-logo-5b3c0d2e569642.6477315815306621903547.jpg",
                }} // Replace with your image URL
                style={styles.profileImage}
              />
            </View>
          </View>
          <Text style={styles.username}>John Doe</Text>
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <Feather name="help-circle" size={24} color="black" />
          <Text style={styles.menuText}>Help and Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Feather name="log-out" size={24} color="black" />
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120, // Add some gap on top
    alignItems: "center", // Center items horizontally
    backgroundColor: "#fff", // Light-colored background
    paddingHorizontal: 20, // Add horizontal padding
  },
  profileHeader: {
    marginTop: 20, // Add gap between header and profile
    alignItems: "center",
  },
  profileHeaderText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileBackground: {
    backgroundColor: "#f0f0f0", // Light-colored background behind the image
    borderRadius: 50, // Make it circular
    overflow: "hidden", // Clip the image to the border radius
    marginBottom: 20, // Add margin bottom to separate from buttons
  },
  profileImageContainer: {
    borderRadius: 50, // Make it circular
    overflow: "hidden", // Clip the image to the border radius
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  username: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fc7b6b", // Button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: "stretch", // Make buttons left-aligned
  },
  menuText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#fff", // Button text color
  },
});
