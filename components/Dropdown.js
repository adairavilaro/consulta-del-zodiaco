import { useState, useEffect, useRef } from "react";
import { Animated, StyleSheet, FlatList, View, Text, TouchableWithoutFeedback, SafeAreaView, Button } from "react-native";
import Material from 'react-native-vector-icons/MaterialIcons';

export default () => {
    return (
        <View style={styles.dropdownContainer}>
            <TouchableWithoutFeedback>
                <View style={styles.button}>
                    <View style={styles.leftIcon}>
                        <Material name= "calendar-today" size={18} color="#2f7ebf" />
                    </View>
                    <View style={styles.titleBox}>
                        <Text style={{fontSize: 14, color: "#343434", fontWeight: "300"}}>Selecciona tu mes</Text>
                    </View>

                    <View style={styles.arrowRight}>
                        <Material name="chevron-right" size={20} color="#2f7ebf" />
                        <View style={styles.circle} />
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.list}>
                <View style={[styles.searchContainer, {opacity: 1}]}>
                    <View style={styles.searchBar}>

                    </View>
                </View>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create ({
    dropdownContainer: {
        height: "auto",
        alignSelf: "stretch", 
    },
    button:{
        height: 50,
        alignSelf: "stretch",
        backgroundColor: "#fcfcf7",
        justifyContent: "center",
        alignItems: "flex-start",
        borderWidth: 1.8,
        borderColor: "#2f7ebf",
        borderRadius: 4,
        zIndex: 10
    },
    leftIcon: {
        height: 30,
        width:30,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 5,
        zIndex: 10

    },
    titleBox: {
        position: "absolute",
        left: 37,
        backgroundColor: "#fdf8eb",
        paddingHorizontal: 4,
        zIndex: 0,
        borderRadius: 8
    },
    arrowRight: {
        height: 50,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 0,
        zIndex: 10
    },
    circle: {
        height: 35,
        width: 35,
        backgroundColor: "rgba(64, 122, 195, 0. 08",
        borderRadius: 50,
        position: "absolute",
        zIndex: 0
    },
    list: {
        height: 215,
        width: "100%",
        backgroundColor: "fff",
        position: "absolute",
        left: 0,
        borderRadius: 4,
        borderWidth: 1.8,
        borderColor: "#2f7ebf",
        paddingLeft: 8,
        paddingTop: 8,
        zIndex: 0
    },
    searchContainer: {
        flex: 1
    },
    searchBar: {
        height: 43,
        alignSelf: "stretch",
        flexDirection: "row",
        backgroundColor: "#f9f9f9"
    }
})