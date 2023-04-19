import React from "react";

import { Text, View, SafeAreaView } from "react-native";

import SignInWithOAuth from "../components/SignInWithOAuth";

export const SignInSignUpScreen = () => {
  return (
    <SafeAreaView className="bg-black">
      <View className="h-full w-full p-16">
        <Text className="text-7xl text-center text-white mb-10">Sign In</Text>
        <SignInWithOAuth />
      </View>
    </SafeAreaView>
  );
};
