import AsyncStorage from "@react-native-async-storage/async-storage";

export async function salveUsuarios(usuarios) {
  await AsyncStorage.setItem("@usuarios", JSON.stringify(usuarios));
}

export async function salveUsuarioAtual(usuarioAtual) {
  await AsyncStorage.setItem("@usuarioAtual", JSON.stringify(usuarioAtual));
}

export async function salveIdeia(ideias) {
  await AsyncStorage.setItem("@idea", JSON.stringify(ideias));
}
