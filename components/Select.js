import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Block, Text } from 'galio-framework';

import Icon from './Icon';
import { argonTheme } from '../constants';

const Select = ({ options, ...others }) => {
  const parentRef = useRef(null);
  const childrenRef = useRef(null);

  const [state, setState] = useState(options[0])

  const { onSelect, iconName, iconFamily, iconSize, iconColor, color, textStyle, style, ...props } = others;

  const modalStyles = [
    styles.qty,
    color && { backgroundColor: color },
    style
  ];

  const textStyles = [
    styles.text,
    textStyle,
  ];

  const handleOnSelect = (index, value) => {
    setState( value );
    onSelect && onSelect(index, value);
  }

  const [wi, setWi] = useState('auto')

  useEffect(() => console.log('<wi>', wi), [wi])

  return (
    <ModalDropdown
      ref={parentRef}
      style={modalStyles}
      onSelect={handleOnSelect}
      dropdownStyle={toWidth(wi)}
      dropdownTextStyle={{ paddingLeft: 16, fontSize: 12 }}
      options={options}
      {...others}
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        setWi(width)
      }} 
      >
      <Block flex row middle space="between" ref={childrenRef}>
        <Text size={12} style={textStyles}>{state}</Text>
        <Icon name={iconName || "nav-down"} family={iconFamily || "ArgonExtra"} size={iconSize || 10} color={iconColor || argonTheme.COLORS.WHITE} />
      </Block>
    </ModalDropdown>
  )
}

const styles = StyleSheet.create({
  qty: {
    width: '100%',
    paddingTop: 10,
    borderRadius: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    paddingBottom: 9.5,
    paddingHorizontal: 16,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: argonTheme.COLORS.DEFAULT,
  },
  text: {
    paddingRight: 10,
    fontWeight: '600',
    color: argonTheme.COLORS.WHITE,
  },
  dropdown: {
    marginTop: 8,
    height: 'auto',
    marginLeft: -16,
  },
});

export const toWidth = (newWidth) => StyleSheet.flatten([
  styles.dropdown,
  { width: newWidth },
])

export default Select;

