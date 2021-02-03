import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, DatePickerAndroid} from 'react-native';
import DatePicker from 'react-native-date-picker';

export default class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: new Date(),
    }
  }
  render() {
    return (
        <View  style={styles.container}>
              <TouchableOpacity 
                style={styles.background}
                activeOpacity={1}
                onPress={this.props.modalHandler}/>

              <View style={styles.modal}>
              <Text style={styles.titleText}>설정</Text>


              <TextInput
                style={styles.ddayInput}
                value={this.state.title}
                onChangeText={(changedText)=>{this.setState({title: changedText})}}
                placeholder={"디데이 제목을 입력해주세요."}/>
              
              
              <DatePicker
                date = {this.state.date}
                onDateChange={(date)=>{this.setState({date:date})}}
                mode = "date"/>


                
              <TouchableOpacity onPress={()=>this.props.settingHandler(this.state.title, this.state.date)}>
                <Text style={styles.doneText}>
                   완료
                </Text>
              </TouchableOpacity> 
                {/*외부영역클릭시 빠져나옴*/}
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent' /*세팅 눌렀을때 뒷배경화면*/
      },
      background: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      ddayInput: {
        backgroundColor: 'white',
        marginBottom: 20,
        width: '75%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#a5a5a5'  /*디데이 제목 입력 */
      },
      modal: {
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: '50%',
        backgroundColor: 'white',     /* 하얀창 */
      },
      doneText: {
        color: 'rgb(1,123,255)',
        fontSize: 15,
        margin: 10                    /*완료 */
      },
      titleText: {
        fontSize: 18,
        margin: 10                    /*설정 */
      }
});