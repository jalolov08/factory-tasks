import { grayLight, white } from "@constants/colors.constant";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: white,
    padding: 20,
  },
  heading: {
    marginTop: 80,
  },
  formContainer: {
    marginTop: 80,
    width: "100%",
    padding: 20,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: grayLight,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});
