import { CustomInputProps } from "@/type"
import cn from "clsx"
import { useState } from "react"
import { TextInput, View } from "react-native"
const CostomInput = ({
    placeholder ="Enter text",
    value,
    onChangeText ,
    label,
    secureTextEntry =false,
    keyboardType= "default",
}:CustomInputProps)=>{
    const [isFocus , setIsFocused] = useState(false)
    return (

<View className="w-full">
<TextInput
autoCapitalize="none"
autoCorrect={false}
value={value}
onChangeText={onChangeText}
keyboardType={keyboardType}
onFocus={()=> setIsFocused(true)}
onBlur={()=> setIsFocused(false)}
placeholder={placeholder}
placeholderTextColor="#888"
className={cn('input' , isFocus ? "border-primary" :"border-gray-300")}
/>
</View>
    )
}

export default CostomInput