import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Priority = "Low" | "Middle" | "High";

export default function HomeScreen() {
  const [isDone, setIsDone] = useState(false);
  const [count, setCount] = useState(0);
  const [priority, setPriority] = useState<Priority>("High");

  const taskTitle = "Learn mobile development";
  const createdAt = "17.03.2026";

  const handlePress = () => {
    setIsDone((prev) => !prev);
    setCount((prev) => prev + 1);
  };

  const priorityColors: Record<Priority, string> = {
    Low: "#4CAF50",
    Middle: "#FF9800",
    High: "#F44336",
  };

  const priorityColor = priorityColors[priority];

  return (
    <View style={styles.container}>
      <View style={[styles.card, isDone && styles.cardDone]}>
        <View style={styles.topRow}>
          <Text style={styles.statusIcon}>{isDone ? "✅" : "🔴"}</Text>

          <View style={[styles.priorityBadge, { backgroundColor: priorityColor }]}>
            <Text style={styles.priorityText}>{priority}</Text>
          </View>
        </View>

        <Text style={[styles.title, isDone && styles.titleDone]}>
          {taskTitle}
        </Text>

        <Text style={styles.label}>Priority: {priority}</Text>
        <Text style={[styles.statusText, isDone ? styles.doneText : styles.notDoneText]}>
          Status: {isDone ? "Done" : "Not done"}
        </Text>
        <Text style={styles.dateText}>Created: {createdAt}</Text>

        <View style={styles.prioritySwitcher}>
          <TouchableOpacity
            style={[
              styles.smallButton,
              priority === "Low" && { backgroundColor: priorityColors.Low },
            ]}
            onPress={() => setPriority("Low")}
          >
            <Text style={styles.smallButtonText}>Low</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.smallButton,
              priority === "Middle" && { backgroundColor: priorityColors.Middle },
            ]}
            onPress={() => setPriority("Middle")}
          >
            <Text style={styles.smallButtonText}>Middle</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.smallButton,
              priority === "High" && { backgroundColor: priorityColors.High },
            ]}
            onPress={() => setPriority("High")}
          >
            <Text style={styles.smallButtonText}>High</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>
            {isDone ? "Cancel" : "Mark as done"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.counter}>Clicked {count} time(s)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  cardDone: {
    borderWidth: 2,
    borderColor: "#B7E4C7",
    backgroundColor: "#F6FFF8",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  statusIcon: {
    fontSize: 28,
  },
  priorityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  priorityText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
    marginBottom: 10,
  },
  titleDone: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 6,
  },
  statusText: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "600",
  },
  doneText: {
    color: "#2E7D32",
  },
  notDoneText: {
    color: "#C62828",
  },
  dateText: {
    fontSize: 14,
    color: "#777",
    marginBottom: 18,
  },
  prioritySwitcher: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 8,
  },
  smallButton: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  smallButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },
  button: {
    backgroundColor: "#2F80ED",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  counter: {
    marginTop: 16,
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});
