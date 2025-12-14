import { Image, Text, TouchableOpacity, View } from "react-native"
import { images } from "../constants/index.d"

const CartButton = ()=>{
    const totalItems = 10
    return (
        <TouchableOpacity className=" cart-btn" onPress={()=>{}}>
<Image source={images.bag} className=" size-5" resizeMode="contain"/>
        {totalItems > 0 && (
<View className="carte-badge">
    <Text className="samll-bold text-white">
        {totalItems}
    </Text>
</View>
        )}
        
        
        </TouchableOpacity>
    )
}

export default CartButton