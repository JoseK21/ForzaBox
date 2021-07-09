import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { Card, Button, Calendar, Select } from '../components';
// import { Select } from '../components/Select';

// import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block column>
          <Block flex left style={{ marginTop: 8 }}>
            <Text h6 style={{ marginBottom: theme.SIZES.BASE / 2 }}>
              Programa
            </Text>
            <Select
              options={["Entrenamiento Funcional", "Masaje de Descarga", "Fisioterapia"]}
            />
          </Block>

          <Calendar />

          <Block flex left style={{ marginTop: 18 }}>
            <Text h6 style={{ marginBottom: theme.SIZES.BASE / 2 }}>
              Clase
            </Text>
            <Select
              options={["06:00 AM", "07:30 AM", "08:30 AM", "09:30 AM", "03:00 AM", "04:30 AM", "05:30 AM", "06:30 AM", "07:30 AM"]}
            />
          </Block>

          <Button style={styles.optionsButton}>
            RESERVAR
          </Button>
        </Block>
        {/* <Block flex>
          <Card item={articles[0]} horizontal />
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]} />
          </Block>
          <Card item={articles[3]} horizontal />
          <Card item={articles[4]} full />
        </Block> */}
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  optionsButton: {
    width: "auto",
    height: 40,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
});

export default Home;
