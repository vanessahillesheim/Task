import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./style"
import { FontAwesome } from "@expo/vector-icons";
import { collection, onSnapshot } from "firebase/firestore"; // Importando funções necessárias
import { doc, deleteDoc } from "firebase/firestore";



export default function Task({ navigation }) {

    const [task, setTask] = useState([])

    function deleteTask(id) {
        // Usando a nova API do Firestore
        const taskDocRef = doc(database, "Tasks", id);
        deleteDoc(taskDocRef);
    }


    useEffect(() => {
        // Acessando a coleção "Tasks"
        const tasksCollection = collection(database, "Tasks");
        const unsubscribe = onSnapshot(tasksCollection, (querySnapshot) => {
            const list = [];
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setTask(list);
        });

        // Cleanup ao desmontar o componente
        return () => unsubscribe();
    },
        [])


    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.Tasks}>
                            <TouchableOpacity
                                style={styles.deleteTask}
                                onPress={() => deleteTask(item.id)}
                            >
                                <FontAwesome
                                    name="star"
                                    size={23}
                                    color="#f92e6a">
                                </FontAwesome>
                            </TouchableOpacity>
                            <Text style={styles.DescriptionTask}
                                onPress={() =>
                                    navigation.navigate("Details", {
                                        id: item.id,
                                        description: item.description
                                    })

                                }
                            >{item.description}</Text>

                        </View>
                    )
                }}
            />

            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("NewTask")}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>


        </View>
    )

}