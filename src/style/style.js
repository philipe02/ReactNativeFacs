import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

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
    height,
    width,
  },
  body: {
    flex: 1,
    justifyContent: "center",
  },

  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginLogo: {
    height: 160,
    width: 160,
    borderRadius: 100,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  loginBtn: { backgroundColor: "#293241", height: 45 },
  loginBtnContainer: { width: "75%" },
  registerBtn: { color: "#E37B09", fontSize: 18 },
  registerBtnContainer: { margin: 20, marginTop: 30 },
  input: { backgroundColor: "#fff", height: 45, width: "80%", paddingLeft: 15 },
  inputContainer: { width: "80%", padding: 10 },
  form: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
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
