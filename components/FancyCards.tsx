import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.cardContainer, styles.elevateCard]}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/626429848/photo/northern-lights-green-aurora-borealis-over-alesund-norway.webp?a=1&b=1&s=612x612&w=0&k=20&c=r64NXY_Exbwkx5r2MHBbVf2UKQYCd2vXrR7DW_ZaLTw=',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Green Aurora</Text>
          <Text style={styles.cardLabel}>Alesund, Norway</Text>
          <Text style={styles.cardDescription}>
            Green Aurora borealis over Alesund, Norway. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Commodi modi earum deserunt quae
            impedit ex? Rem veritatis dolores itaque sequi.
          </Text>
          <Text style={styles.cardFooter}>12 min away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  cardImage: {
    height: 250,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  elevateCard: {
    elevation: 6,
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowColor: '#616C6F',
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 6,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '400',
  },
  cardDescription: {
    color: '#616C6F',
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 6,
  },
  cardFooter: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '400',
    marginVertical: 8,
  },
});
