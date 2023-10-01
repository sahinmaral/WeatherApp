import AsyncStorage from "@react-native-async-storage/async-storage";

const storeString = async (key,value) => {
  await AsyncStorage.setItem(key, value);
};

const storeData = async (key,value) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
};

const getString = async (key) => {
  return await AsyncStorage.getItem(key);
};

const getData = async (key) => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export { storeString, storeData, getString, getData };
