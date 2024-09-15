import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./style";
import { doc, updateDoc } from "firebase/firestore";

export default function Details({ navigation, route }) {
    const [descriptionEdit, setDescriptionEdit] = useState("");
    const [idTask, setIdTask] = useState(null);

    useEffect(() => {
        if (route.params) {
            const { description, id } = route.params;
            if (description) {
                setDescriptionEdit(description);
            }
            if (id) {
                setIdTask(id);
            }
        }
    }, [route.params]);

    async function editTask(description, id) {
        if (!id) {
            alert("Invalid task ID.");
            return;
        }

        try {
            const taskDocRef = doc(database, "Tasks", id);
            await updateDoc(taskDocRef, {
                description: description
            });
            console.log("Task updated successfully!");
            navigation.navigate("Task");
        } catch (error) {
            console.error("Error updating document: ", error);
            alert("Failed to update task. Please try again.");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Ex: estudar javascript"
                onChangeText={setDescriptionEdit}
                value={descriptionEdit} // Corrigido para descriptionEdit
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => idTask && editTask(descriptionEdit, idTask)} // Verifica se idTask está definido
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}
