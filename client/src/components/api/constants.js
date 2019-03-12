import { Platform } from 'react-native';

export const SERVER_API_URI = Platform.OS === 'android' ? 'http://10.0.2.2:8550/items' : 'http://localhost:8550/items';

export const headers = { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' };