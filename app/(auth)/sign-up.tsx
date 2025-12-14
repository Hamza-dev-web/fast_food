import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";
import CostomInput from "../../components/CostomInput";
import CostomButton from "../../components/costomButton";

export default function SignIn(){
const [isSubmitting , setISubmitting] =useState(false)
const [form , setForm ] =useState({email : '' , password : '', name :""})
const Submit = async ()=>{
    if(!form.name || !form.email ||!form.password) Alert.alert("Error" , 'Please enter valid email Address ')
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
    <View className=" gap-10 bg-white rounded-lg    p-16 ">
        <CostomInput
placeholder="Enter your name"
value={form.name}
onChangeText={(text)=>setForm( (prev)=>({...prev , name :text}))}
label="Name"
/>
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
style=" mb-7"
/>
<View className=" flex  justify-center flex-row gap-2 " >
<Text className=" base-regular text-gray-100 font-quicksand-medium">
Do you  have an Account ?
</Text>
<Link  href="/sign-in" className=" text-[20px] text-primary font-quicksand-medium">
Sign In
</Link>
</View>
    </View>
)
}