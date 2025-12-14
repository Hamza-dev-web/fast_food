import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";
import CostomInput from "../../components/CostomInput";
import CostomButton from "../../components/costomButton";

export default function SignIn(){
const [isSubmitting , setISubmitting] =useState(false)
const [form , setForm ] =useState({email : '' , password : ''})
const Submit = async ()=>{
    if(!form.email ||!form.password) Alert.alert("Error" , 'Please enter valid email Address ')
       setISubmitting(true)
   try {

 Alert.alert("Success" , 'User signed in successfully')
 router.replace("/")

   }
   catch (err :any) {
     Alert.alert("Error" , err.message)
   } finally{
    setISubmitting(false)
   }

}    


return (
    <View className=" gap-10 bg-white rounded-lg mt-6 p-16 ">
<CostomInput
placeholder="Enter your Email"
value={form.email}
onChangeText={(text)=>setForm( (prev)=>({...prev , email :text}))}
label="Email"
keyboardType="email-address"
/>
<CostomInput
placeholder="Enter your Password"
value={form.password}
onChangeText={(text)=>setForm( (prev)=>({...prev , password :text}))}
label="Password"
secureTextEntry={true}
/>
<CostomButton 
title="Sign In"
isLoading={isSubmitting}
onPress={Submit}
/>
<View className=" flex w-full  justify-center flex-row gap-2" >
<Text className=" base-regular text-gray-100 font-quicksand-medium">
Don't have an Account ?
</Text>
<Link  href="/sign-up" className=" text-[20px]  text-primary  font-quicksand-medium">
Sign Up
</Link>
</View>
    </View>
)
}