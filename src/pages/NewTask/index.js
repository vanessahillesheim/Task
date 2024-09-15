import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./style";
import { collection, addDoc } from "firebase/firestore";

export default function NewTask({ navigation }) { // Recebendo navigation como prop
    const [description, setDescription] = useState("");

    async function addTask() {
        if (!description.trim()) {
            alert("Description cannot be empty!");
            return;
        }

        try {
            await addDoc(collection(database, "Tasks"), {
                description,
                status: false
            });
            console.log("Task added successfully!"); // Log para depuração
            navigation.navigate("Task");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Failed to add task. Please try again.");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description </Text>
            <TextInput
                style={styles.inputText}
                placeholder="Ex: estudar javascript"
                onChangeText={setDescription}
                value={description}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={addTask} // Chamando a função para adicionar tarefa
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}
