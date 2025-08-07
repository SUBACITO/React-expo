import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Text } from '@/components/Themed';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good Morning, <Text style={styles.name}>SUBACITO!</Text></Text>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceLabel}>Balance</Text>
            <Text style={styles.balanceValue}>125.50 VND </Text>
          </View>
          <View style={styles.balanceActions}>
            <ActionIcon name="card" label="Pay" />
            <ActionIcon name="cash" label="Request" />
            <ActionIcon name="upload" label="Top-Up" />
            <ActionIcon name="gift" label="Rewards" />
          </View>
        </View>

        {/* Services */}
        <View style={styles.services}>
          {services.map((item, index) => (
            <View key={index} style={styles.serviceItem}>
              <Ionicons name={item.icon} size={24} color="#00b386" />
              <Text style={styles.serviceLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          {['All', 'Deals', 'Food', 'Near Me'].map((tab, idx) => (
            <TouchableOpacity key={idx} style={styles.tabItem}>
              <Text style={styles.tabLabel}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Best Restaurants */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Best Restaurants Nearby</Text>
          <View style={styles.restaurantPlaceholder}></View>
        </View>
      </ScrollView>

    </View>
  );
}

const ActionIcon = ({ name, label }: { name: any, label: string }) => (
  <TouchableOpacity style={styles.actionItem}>
    <MaterialCommunityIcons name={name} size={20} color="#007AFF" />
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const services = [
  { icon: 'car', label: 'Car' },
  { icon: 'bicycle', label: 'Bike' },
  { icon: 'fast-food', label: 'Food' },
  { icon: 'cart', label: 'Groceries' },
  { icon: 'map', label: 'Trip' },
  { icon: 'bed', label: 'Hotels' },
  { icon: 'videocam', label: 'Videos' },
  { icon: 'scooter', label: 'eScooter' },
];



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
  },
  scrollContent: {
    paddingBottom: 80,
  },
  header: {
    padding: 20,
    backgroundColor: '#c9f1dd',
    alignItems: 'flex-start',
  },
  greeting: {
    fontSize: 18,
    color: '#444',
  },
  name: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  balanceCard: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#666',
  },
  balanceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  balanceActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionItem: {
    alignItems: 'center',
    flex: 1,
  },
  actionLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#333',
  },
  services: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  serviceItem: {
    alignItems: 'center',
    width: '22%',
    marginBottom: 20,
  },
  serviceLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#333',
    textAlign: 'center',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  tabItem: {
    backgroundColor: '#eef3f7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  tabLabel: {
    fontSize: 12,
    color: '#333',
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  restaurantPlaceholder: {
    height: 100,
    backgroundColor: '#e6e6e6',
    borderRadius: 12,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 10,
    color: '#007AFF',
    marginTop: 2,
  },
});
