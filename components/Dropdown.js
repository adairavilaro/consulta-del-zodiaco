import { useState, useEffect, useRef } from "react";
import { Animated, StyleSheet, FlatList, View, Text, TouchableWithoutFeedback, SafeAreaView, Button, TextInput } from "react-native";
import Material from 'react-native-vector-icons/MaterialIcons';
import { signos } from "../Data/signos del zodiaco";
import { TouchableOpacity } from "react-native";



export default () => {
    const data = [
        {
        Id: 1,
        title: "Enero", 
        },
        {
        Id: 2,
        title: "Febrero", 
        },
        {
        Id: 3,
        title: "Marzo", 
        },
        {
        Id: 4,
        title: "Abril", 
        },
        {
        Id: 5,
        title: "Mayo", 
        },
        {
        Id: 6,
        title: "Junio", 
        },
        {
        Id: 7,
        title: "Julio", 
        },
        {
        Id: 8,
        title: "Agosto", 
        },
        {
        Id: 9,
        title: "Septiembre", 
        },
        {
        Id: 10,
        title: "Octubre", 
        },
        {
        Id: 11,
        title: "Noviembre", 
        },
        {
        Id: 12,
        title: "Diciembre",
        }       
    ];

    const [dropdown, setDropdown] = useState({ itemId: null, itemTitle: null });

    const [toggle, setToggle] = useState(0);
    const [toggleLong, setToggleLong] = useState(0);


    const animation = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        handleAnimatedLong();
    }, [toggleLong]);

    const handleAnimatedLong = () => {
        Animated.spring(scale, {
            toValue: toggleLong ? 1 : 0,
            friction: 5,
            useNativeDriver: false
        }).start();
    }

    useEffect(() => {
        handleAnimated();
    }, [toggle]);

    const handleAnimated = () => {
        Animated.spring(scale, {
            toValue: toggle ? 1 : 0,
            duration: 200,
            friction: 5,
            useNativeDriver: false
        }).start();
    }

    const arrowStyle = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "90deg"],
                    extrapolate: "clamp"
                })
            }
        ]
    }

    const translate = {
        transform: [
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [itemId ? -40 : 0, 40], // Adjust these values as needed
              extrapolate: "clamp",
            }),
          },
      
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [itemId ? -25 : 0, 25], // Adjust these values as needed
              extrapolate: "clamp",
            }),
          },
            {
                scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [itemId ? 0.8 : 1, 0.8],
                    extrapolate: "clamp"
                })
            }
        ]
    }

    const listStyle = {
        height: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 215],
            extrapolate: "clamp"
        }),
        transform: [
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 60],
                    extrapolate: "clamp"
                })
            }
        ]
    }

    const scaleStyle = {
        transform: [
            {
                scale: scale
            }
        ]
    }
    const handleInputChange = (text) => {
        if (text) {
        const temporal = data.filter((item) => {
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
         setDate(temporal);       
    } else setDate (new Date());
    setText(text);
    };

    const [date, setDate] = useState(new Date());

    const [text, setText] = useState("");

    const Item = ({ itemId, title }) => (
        <TouchableOpacity
          onPress={() => {
            setDropdown({
            itemId: item.Id,
            itemTitle: title,
            });
            setData(data);
            setToggle(false);
            setText("");
          }}
          style={styles.item}
        >
          <View style={styles.titleContainer}>
            <Text style={{ fontSize: 15, fontWeight: "300", color: itemId === Id ? "#2f7ebf" : "#33838383" }}>
              {title} // Use title here
            </Text>
          </View>
          {itemId === Id && ( // Use Id for check visibility
            <View style={styles.checkContainer}>
              <Material name="check" size={18} color="#2f7ebf" />
            </View>
          )}
        </TouchableOpacity>
      );
      
    

    return (
        <View style={styles.dropdownContainer}>
            <TouchableWithoutFeedback>
                onPressIn {() => setToggleLong(true)}
                onPressOut {() => setToggleLong(false)}
                onPress {() => setToggle(!toggle)}

                <View style={styles.button}>
                    <View style={styles.leftIcon}>
                        <Material name= "calendar-today" size={18} color="#2f7ebf" />
                    </View>
                    <Animated.View style={[styles.titleBox, translate]}>
                        <Text style={{fontSize: 14, color: "#343434", fontWeight: "300"}}>Selecciona tu mes</Text>
                    </Animated.View>

                    {
                        itemId === Id 
                        && 
                        <View style={[styles.titleBox, {zIndex: 0}]}>
                            <Text style={{fontSize: 14, color: "#2f7ebf", fontWeight: "300", color: primary}}> {itemTitle}
                            </Text>
                        </View>
                    }

                    <Animated.View style={[styles.arrowRight, arrowStyle]}>
                        <Material name="chevron-right" size={20} color="#2f7ebf" />
                        <Animated.View style={[styles.circle, scaleStyle]} />
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>

            <Animated.View style={[styles.container, listStyle]}>
                <View style={[styles.listContainer, {opacity: 1}]}>

                    {/* Searchbar*/}
                    <View style={styles.searchBar}>
                        <View style={styles.magnify}>
                            <Material  name={"magnify"} size={22} color={"#2f7ebf"} />
                        </View>
                        <TextInput
                            Id={text}
                            onChangeText={handleInputChange}
                            style={styles.input}
                            placeholder="Buscar mes"
                            placeholderTextColor={"#adadad"}
                         />
                    </View>

                    {/* List */}
                    <View style={styles.list}>
                    <FlatList
                        data={data} // Use the data constant here
                        keyExtractor={(item) => item.Id}
                        renderItem={({ item }) => (
                         <Item Id={item.title} title={item.title} /> // Pass title for both Id and title
  )}
                    />

                    </View>
                </View>
            </Animated.View>
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
        borderWIdth: 1.8,
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
    container: {
        height: 215,
        width: "100%",
        backgroundColor: "fff",
        position: "absolute",
        left: 0,
        top: 50,
        borderRadius: 4,
        borderWidth: 1.8,
        borderColor: "#2f7ebf",
        paddingHorizontal: 8,
        paddingTop: 8,
        zIndex: 0
    },
    listContainer: {
        flex: 1
    },
    searchBar: {
        height: 43,
        alignSelf: "stretch",
        flexDirection: "row",
        backgroundColor: "#f9f9f9"
    },
    magnify: {
        height: "100%" ,
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingRight: 8,
        fontWeight: 300,
        fontSize: 15
    },
    list: {
        flex: 1,
        alignSelf: "stretch"
    },
    item: {
        height: 40,
        alignSelf: "stretch",
        flexDirection: "row",
        paddingHorizontal: 8
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    checkContainer: {
        height: "100%",
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    }
})