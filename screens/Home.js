import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { Card, Select, Button } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block column space="evenly">
          <Block flex left style={{marginTop: 8}}>
            <Text h6 style={{ marginBottom: theme.SIZES.BASE / 2 }}>
              Programa
            </Text>
            <Select
              defaultIndex={1}
              options={["01", "02", "03", "04", "05"]}
            />
          </Block>
          <Block>
            <Button center color="default" style={styles.optionsButton}>
              SAVE FOR LATER
            </Button>
          </Block>
        </Block>
        <Block flex>
          <Card item={articles[0]} horizontal  />
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]} />
          </Block>
          <Card item={articles[3]} horizontal />
          <Card item={articles[4]} full />
        </Block>
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
});

export default Home;
