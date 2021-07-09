import React, { useState } from 'react';

import { StyleSheet, View, Text as T, Button, Platform } from 'react-native';

// import all the components we are going to use
import { Text, theme } from 'galio-framework';

import DateTimePicker from '@react-native-community/datetimepicker';

const Calendar = () => {
  var today = new Date(Date.now())

  return (
    <>
      <Text h6 style={{ marginBottom: theme.SIZES.BASE / 2, marginTop: 10 }}>Fecha</Text>
      <DateTimePicker
        value={today}
        mode={'date'}
        minimumDate={today}
        // onChange={onChange}
        textColor="#5522AA"
        style={styles.datePicker}
        display={Platform.OS === 'ios' ? 'calendar' : 'default'}
      />
    </>
  );
};

// Defines the visual display of the picker (“default”, “spinner”, “calendar” – Android, “clock” – Android, “compact” – iOS, “inline” – iOS)

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // This only works on iOS
  datePicker: {
    height: 35,
    display: 'flex',
    justifyContent: 'center',
  },
});