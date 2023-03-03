import { StyleSheet, Button, TextInput, View, Text } from "react-native";

export default function App() {
  return (
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Item de lista" style={styles.input} />
          <Button title="Agregar" />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Item A</Text>
          <Text style={styles.item}>Item B</Text>
          <Text style={styles.item}>Item C</Text>
        </View>
        <View style={styles.moreInfo}>
          <Text>Descripción del Producto</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  itemContainer: {
    marginTop: 30,
  },
  item: {
    padding: 10,
    textAlign: "left",
  },
  moreInfo:{
    marginTop: 50,
  }
});
