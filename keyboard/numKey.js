'use strict'
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,

} from 'react-native';

const {height, width} = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;

export default class NumKey extends Component{
    constructor(props){
        super(props)
        this.state={
          text:""
        }
    }
    _renderKeys(typingCVV){

      var allKeys=[];
      for(var i = 0; i < 9; i++){
        const value = i+1;
        allKeys.push(
            <TouchableHighlight key={i} style={styles.keyStyle} underlayColor="#f2f2f2" onPress={()=>{this.props.inputFunc(value)}}>
              <Text style={styles.keyFont}>{i+1}</Text>
            </TouchableHighlight>
        );
      }
      allKeys.push(
        <View key={i} style={styles.keyStyle}>
        </View>
      );
      allKeys.push(
        <TouchableHighlight key={10} style={styles.keyStyle} underlayColor="#f2f2f2" onPress={()=>{this.props.inputFunc(0)}}>
          <Text style={styles.keyFont}>0</Text>
        </TouchableHighlight>
      );
      allKeys.push(
        <TouchableHighlight key={11} style={styles.keyStyle} underlayColor="#f2f2f2" onPress={()=>{this.props.deleteFunc()}}>
              <Image source={require('../icon/icon_delete.png')} style={{height:20,width:27}}/>
        </TouchableHighlight>

      );
      return allKeys;
    }
    render(){

        return(
          <View style={styles.modalContent}>
              {this._renderKeys(this.state.isCVVOpen)}
          </View>

        )
    }


}

const styles = StyleSheet.create({

  modalContent:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',

  },
  keyStyle:{
    borderWidth:1,
    borderColor:'#d9d9d9',
    alignItems:'center',
    justifyContent:'center',
    width:deviceWidth/3,
    height:60,

  },
  keyFont: {
    fontSize:28,

  },

});
