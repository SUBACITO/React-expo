import { StyleSheet, TextInput, TouchableOpacity, FlatList, View } from 'react-native';
import { Text } from '@/components/Themed';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const recentSearches = ['Pizza', 'Coffee', 'GrabCar', 'Hotel'];
const popularSearches = ['Sushi', 'Milk Tea', 'Electric Bike', 'Burger'];

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  const handleClear = () => {
    setQuery('');
  };

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#aaa"
          style={styles.input}
          value={query}
          onChangeText={setQuery}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={handleClear}>
            <Ionicons name="close-circle" size={20} color="#aaa" />
          </TouchableOpacity>
        )}
      </View>

      {/* Recent */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent</Text>
        {recentSearches.map((item, index) => (
          <Text key={index} style={styles.tag}>
            {item}
          </Text>
        ))}
      </View>

      {/* Popular */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Searches</Text>
        <FlatList
          data={popularSearches}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.tagList}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tagButton}>
              <Text style={styles.tagText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Search Results (optional) */}
      {query.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Results for “{query}”</Text>
          <Text style={{ color: '#999' }}>No results found (demo)</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f6',
    paddingHorizontal: 12,
    borderRadius: 10,
    height: 44,
    marginBottom: 20,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  tag: {
    fontSize: 14,
    paddingVertical: 4,
    color: '#666',
  },
  tagList: {
    flexDirection: 'row',
  },
  tagButton: {
    backgroundColor: '#f1f3f6',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginRight: 10,
  },
  tagText: {
    fontSize: 14,
    color: '#444',
  },
});
