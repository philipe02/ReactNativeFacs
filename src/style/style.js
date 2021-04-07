import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#D16E0B",
    fontSize: 25,
    paddingTop: 7,
    fontWeight: "bold",
  },
  bgImage: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: "center",
  },
  form: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  formText: {
    color: "#fff",
    fontSize: 20,
    paddingLeft: 5,
  },
  formSave: {
    position: "absolute",
    width: 100,
    right: 25,
    bottom: 30,
  },
  formSaveBtn: {
    backgroundColor: "#1281AB",
  },
});
