import React, { useState } from "react";

import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@acme/api";



import { trpc } from "../utils/trpc";

const SignOut = () => {
  const { signOut } = useAuth();
  return (
    <View className="absolute bottom-4 mx-4 w-full rounded-lg border-2 border-gray-500 p-4">
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

// const PostCard: React.FC<{
//   post: inferProcedureOutput<AppRouter["post"]["all"]>[number];
// }> = ({ post }) => {
//   return (
//     <View className="rounded-lg border-2 border-gray-500 p-4">
//       <Text className="text-xl font-semibold text-[#cc66ff]">{post.title}</Text>
//       <Text className="text-white">{post.content}</Text>
//     </View>
//   );
// };

export const HomeScreen = () => {
  const [name, setName] = useState("");
  console.log(name);
  const colleges = trpc.colleges.byName.useQuery(name);

  return (
    <SafeAreaView className="bg-[#181E29]">
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold mt-4 text-white">
         CollegeGuru
        </Text>

        <View className="py-8">
          <TextInput 
            className="mb-8 rounded border-2 border-gray-500 p-2 text-black bg-gray-100"
            placeholder="Search for a college"
            onChangeText={(text) => setName(text)}
          />
          <Text className="text-white font-medium mb-2 text-center">
            Name: {colleges.data?.name}
          </Text>
          <Text className="text-white font-medium mb-2 text-center">
            Website: {colleges.data?.website}
          </Text>
          <Text className="text-white font-medium mb-2 text-center">
            Percent Admitted: {colleges.data?.percentAdmitted}%
          </Text>
          <Text className="text-white font-medium mb-2 text-center">
            Tuition and Fees: {colleges.data?.tuitionAndFees}$
          </Text>
          <Text className="text-white font-medium mb-2 text-center">
            Application Fee: {colleges.data?.undergradApplicationFee}$
          </Text>
          <Text className="text-white font-medium mb-2 text-center">
            Total Applicants: {colleges.data?.applicantsTotal}
          </Text>
          <Text className="text-white font-medium mb-2 text-center">
            Percent SAT Submits: {colleges.data?.percentSatSubmits}%
          </Text>
          <Text className="text-white font-medium mb-2 text-center">
            Percent ACT Submits: {colleges.data?.percentActSubmits}%
          </Text>
          <Text className="text-white font-medium mb-2 text-center">
            Student Faculty Ratio: (1:{colleges.data?.studentToFaculty})
          </Text>
        </View>
        <SignOut />
      </View>
    </SafeAreaView>
  );
};
