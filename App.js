
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Dropdown } from "./components";

//# 2f7ebf

export default () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#2f7ebf'}}>
            <View style= {styles.container}>
                <Dropdown />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fefffa',
        paddingHorizontal: 22
    }
})

