import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";

export default function App() {
  const [todos, settodos] = useState([]);
  const [newItem, setnewItem] = useState("");
  const [indexValue, setindexValue] = useState();
  let Present = false;
  const inputValueSet = (val) => {
    setnewItem(val);
  };
  const present = () => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].name == newItem) {
        Present = true;
        break;
      }
    }
  };
  const addItem = () => {
    present();
    if (newItem != "" && Present != true) {
      settodos((allTodos) => {
        return [
          {
            id: Math.random().toString(),
            name: newItem,
          },
          ...allTodos,
        ];
      });
      setnewItem("");
    } else if (newItem == "") {
      alert("You Are Adding Null Item");
    } else {
      alert("You Are Adding Same Item");
    }
  };
  const deleteItem = (id) => {
    settodos((remainTodos) => {
      return remainTodos.filter((todos) => todos.id != id);
    });
  };
  const editItem = (index) => {
    {
      todos.map((item, key) => {
        return item.id === index
          ? (setnewItem(item.name), setindexValue(key))
          : null;
      });
    }
  };
  const updateTodos = () => {
    {
      todos.map((item, key) => {
        return key === indexValue
          ? ((item.name = newItem), alert("Item Updated"))
          : null;
      });
    }
    setnewItem("");
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Header />
        <View style={styles.inputBoxCon}>
          <TextInput
            placeholder="Add Todos"
            style={styles.inputBox}
            value={newItem}
            onChangeText={inputValueSet}
          />
          <TouchableOpacity style={styles.addButton} onPress={addItem}>
            <Text style={styles.addButtonText}>Add Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.updateButton} onPress={updateTodos}>
            <Text style={styles.addButtonText}>Update Todos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todosCon}>
          <Todos todos={todos} deleteItem={deleteItem} editItem={editItem} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todosCon: {
    flex: 1,
    padding: 24,
    paddingTop: 0,
  },
  inputBoxCon: {
    alignItems: "center",
    padding: 24,
  },
  inputBox: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    width: "100%",
    padding: 2,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "coral",
    width: "100%",
    padding: 8,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  updateButton: {
    backgroundColor: "#545452",
    marginTop: 10,
    width: "100%",
    padding: 8,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
