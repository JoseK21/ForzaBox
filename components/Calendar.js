// React Native Date Picker – To Pick the Date using Native Calendar
// https://aboutreact.com/react-native-datepicker/

// import React in our code
import React, {useState} from 'react';
import moment from 'moment';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

import { Text, theme } from 'galio-framework';

//import DatePicker from the package we installed
import DatePicker from 'react-native-datepicker';

const Calendar = () => {
  const dateTo = moment().format('DD-MM-YYYY');
  const [date, setDate] = useState(dateTo);

  const dateFrom = moment().add(15,'d').format('DD-MM-YYYY');
  
  return (
    <>
    <Text h6 style={{ marginBottom: theme.SIZES.BASE / 2, marginTop: 10 }}>Fecha</Text>
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate={dateTo}
          maxDate={dateFrom}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: 'none',
            //   position: 'absolute',
            //   left: 0,
            //   top: 4,
            //   marginLeft: 0,
            },
            dateInput: {
            //   marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
    </SafeAreaView>
    </>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    // textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    // padding: 20,
  },
  datePickerStyle: {
    width: '100%',
    // marginTop: 20,
    borderRadius: 6,
  },
});