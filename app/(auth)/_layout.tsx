import { Slot } from "expo-router";
import { Dimensions, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { images } from "../../constants/index.d";

export default function Layout(){
return (
    <KeyboardAvoidingView behavior={
        Platform.OS === "ios" ? "padding" : "height"
    }>
        <ScrollView className=" bg-white h-screen" keyboardShouldPersistTaps="handled">
<View className=" w-full relative" style={{height : Dimensions.get('screen').height/2.25}}>
<ImageBackground 
source={images.loginGraphic}
className=" size-full  rounded-b-lg"
resizeMode="stretch"
/>
<ImageBackground 
source={images.logo}
className=" size-centre size-48 absolute  -bottom-16 z-10"
resizeMode="stretch"
/>
</View>
        <Slot/>
        </ScrollView>
    </KeyboardAvoidingView >
)
}