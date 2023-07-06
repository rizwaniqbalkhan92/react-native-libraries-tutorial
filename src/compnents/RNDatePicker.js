import {StyleSheet, Button, Text, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const RNDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text>{`Month ${date.getMonth()} - Day ${date.getDate()} - Year ${date.getFullYear()} `}</Text>
      <Text style={styles.textLib}>react-native-date-time-picker</Text>
      <View style={styles.innerContainer}>
        <Button title="Open" onPress={() => setOpen(!open)} />
        <DatePicker
          
          mode='datetime'
          open={open}
          date={date}
          // onConfirm={date => {
          //   setOpen(!open);
          //   setDate(date);
          // }}
          onDateChange={setDate}
          maximumDate={new Date('2023-7-8')}
          minimumDate={new Date('2023-7-1')}
          theme="dark"
          textColor="red"
          onCancel={() => {
            setOpen(!open);
          }}
        />
      </View>
    </View>
  );
};

export default RNDatePicker;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#90CAF9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLib: {
    color: '#fff',
    fontSize: 27,
  },
  innerContainer: {
    height: 300,
  },
});
