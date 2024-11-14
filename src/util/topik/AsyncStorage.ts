import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageData = async (
  key: string,
  currentQ: number,
  currentTime?: number,
) => {
  try {
    const data = {currentQ, currentTime};
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

export const clearData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};
