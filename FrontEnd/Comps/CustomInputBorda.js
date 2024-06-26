import { TextInput, StyleSheet, View, Image } from 'react-native';

const CustomTextInputBorda = ({ placeholder, textColor, fontSize, iconSource }) => {
  return (
    <View style={[styles.container]}>
      <Image source={iconSource} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={[styles.textinput, { color: textColor, fontSize: fontSize }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor:'#FFFF',
    width:300,
    height:54,
    marginBottom:20
  },
  textinput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,

  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: "#4B187D",
  },
});

export { CustomTextInputBorda };