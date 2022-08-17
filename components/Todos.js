import react from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
export default function Todos({ todos, deleteItem, editItem }) {
  let len = todos.length;
  return len > 0 ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      {todos.map((todos) => {
        return (
          <TouchableOpacity style={styles.todos} key={todos.id}>
            <Text style={styles.todosName}>{todos.name}</Text>
            <View style={styles.icons}>
              <Pressable onPress={() => deleteItem(todos.id)}>
                <AntDesign
                  name="delete"
                  size={22}
                  color="coral"
                  style={styles.deleteIcon}
                />
              </Pressable>
              <Pressable onPress={() => editItem(todos.id)}>
                <FontAwesome name="pencil" size={22} color="#545452" />
              </Pressable>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  ) : (
    <View style={styles.noTodos}>
      <Text style={styles.noTodosText}>
        Once you add your todos, you'll see it listed
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  todos: {
    elevation: 2,
    borderRadius: 4,
    width: "100%",
    padding: 12,
    marginTop: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todosName: {
    fontSize: 16,
  },
  noTodosText: {
    fontSize: 14,
    color: "#ddd",
  },
  noTodos: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    marginRight: 12,
  },
  icons: {
    flexDirection: "row",
    padding: 2,
  },
});
