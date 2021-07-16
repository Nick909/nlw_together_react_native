import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    color: theme.colors.highlight,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    paddingTop: 16,
    paddingHorizontal: 16,
    textAlignVertical: 'top',
  },
});