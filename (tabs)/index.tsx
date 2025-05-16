import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function Curriculo() {
  const profile = {
    photo: require("../../assets/images/kau.jpg"),
    name: "Kauany Vitória",
    age: 17,
    email: "kauany.vitoria@escola.pr.gov.br",
    phone: "(42) 99960-4275",
    location: "Ponta Grossa / PR"
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerConteudo} showsVerticalScrollIndicator={false}>
        <View style={styles.containerPhoto}>
          <Image source={profile.photo} style={styles.photo} />
        </View>
        <View style={styles.containerNome}>
          <Text style={styles.nome}>{profile.name}</Text>
        </View>
        <Text style={styles.linha}>
          _______________________________________
        </Text>
        <View style={styles.containerDados}>
          <Ionicons name="person" size={22} color="#FF1493" accessibilityLabel="Idade" />
          <Text style={styles.textoDados}>{profile.age} anos</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="mail" size={22} color="#FF1493" accessibilityLabel="Email" />
          <Text style={styles.textoDados}>{profile.email}</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="call" size={22} color="#FF1493" accessibilityLabel="Telefone" />
          <Text style={styles.textoDados}>{profile.phone}</Text>
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="home" size={22} color="#FF1493" accessibilityLabel="Localização" />
          <Text style={styles.textoDados}>{profile.location}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 15,
  },
  containerConteudo: {
    padding: 20,
    backgroundColor: "#1C1C1C",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#FF1493",
    alignItems: "center",
  },
  containerPhoto: {
    marginBottom: 15,
    alignItems: "center",
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#FF1493",
  },
  containerNome: {
    alignItems: "center",
    marginBottom: 10,
  },
  nome: {
    fontSize: 34,
    color: "#FF1493",
    fontWeight: "bold",
    textAlign: "center",
  },
  linha: {
    color: "#FF69B4",
    fontSize: 18,
    marginVertical: 15,
    textAlign: "center",
  },
  containerDados: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  textoDados: {
    marginLeft: 10,
    color: "#FFC0CB",
    fontSize: 20,
    flexShrink: 1,
  },
});
