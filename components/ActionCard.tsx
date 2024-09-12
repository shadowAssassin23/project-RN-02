import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ActionCard() {
  function OpenWebsite(website: string) {
    Linking.openURL(website);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.ElevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What is the special power of JS?
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContaier}>
          <Text style={styles.bodyText} numberOfLines={3}>
            JavaScript is used to create interactive content like sliders,
            drop-down menus, and pop-up windows. It also enables developers to
            manipulate webpage elements, such as text, images, and forms
          </Text>
        </View>
        <View style={styles.FooterContainer}>
          <TouchableOpacity
            onPress={() => {
              OpenWebsite(
                'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
              );
            }}>
            <Text style={styles.socialLinks}>Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              OpenWebsite(
                'https://unsplash.com/photos/a-couple-of-signs-that-are-in-the-dirt-S4jenPe2-m0',
              );
            }}>
            <Text style={[styles.socialLinks, styles.nonBorder]}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  ElevatedCard: {
    elevation: 6,
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowColor: '#616C6F',
  },
  headingContainer: {
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center',
    color: '#000000',
  },
  cardImage: {
    height: 250,
  },
  bodyContaier: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  bodyText: {
    color: '#616C6F',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'justify',
  },
  FooterContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  socialLinks: {
    color: '#FFFFFF',
    fontSize: 16,
    backgroundColor: '#E5B143',
    paddingHorizontal: 24,
    paddingVertical: 8,

    borderRadius: 4,
  },
  nonBorder: {
    borderStyle: 'solid',
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
});
