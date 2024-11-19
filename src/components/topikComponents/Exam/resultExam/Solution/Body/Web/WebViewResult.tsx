import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import {Light} from '../../../../../../../util/Theme/ThemeGlobal';

let baseUrl = 'file:///android_asset/';
if (Platform.OS === 'ios') {
  baseUrl = 'web/';
}
interface WebViewResultProps {
  html: string;
}
const WebViewResult = (props: WebViewResultProps) => {
  const {html} = props;

  return <WebView source={{html, baseUrl}} />;
};

export default WebViewResult;

const styles = StyleSheet.create({});
