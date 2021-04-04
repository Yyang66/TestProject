import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';

export default class App extends React.Component {
  render() {
    const me = {
      name: 'Yang',
      age: 25,
      interest: ['睡觉', '上网', '篮球'],
      property: {
        appearance: '帅气',
        character: '温和',
        ability: '出众',
      },
      func: function () {
        Alert.alert('我能做很多事情哦!');
      },
    };
    return (
      <View style={styles.container}>
        <Text style={styles.myText} testID="stepOne">
          HelloWorld RN!
        </Text>
        <People {...me} />
      </View>
    );
  }
}

class People extends Component {
  render() {
    const {name, age, interest, property, func} = this.props;
    return (
      <View>
        <Text>姓名:{name}</Text>
        <Text>年龄:{age}</Text>
        <Text>兴趣:{interest[0]}</Text>
        <Text>属性:{property.appearance}</Text>
        <Text onPress={func}>能做什么?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
