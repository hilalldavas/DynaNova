import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Expo kullanıyorsanız bu şekilde Ionicons bileşenini alabilirsiniz

const RatingComponent = ({ onSaveRating }) => {
  const [rating, setRating] = useState(0); // Başlangıçta hiçbir yıldız seçilmemiş

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating); // Seçilen değeri state'e ayarla
    onSaveRating(selectedRating); // Değerlendirmeyi kaydetmek için ana bileşene geri gönder
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Değerlendir: </Text>
      {[1, 2, 3, 4, 5].map((value) => (
        <TouchableOpacity key={value} onPress={() => handleStarPress(value)}>
          <Ionicons
            name={rating >= value ? 'ios-star' : 'ios-star-outline'} // Seçilen veya seçilmemiş yıldızı göster
            size={32}
            color="#FFD700" // Yıldız rengi
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  label: {
    marginRight: 5,
    fontSize: 16,
  },
});

export default RatingComponent;
