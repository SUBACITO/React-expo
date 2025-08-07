import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function AccountScreen() {
  const LogOut = () => {
    // Handle logout logic here
    router.push('/sign-in');
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.profileContainer}>
        <Image
          source={require('@/assets/images/avt.jpg')}
          resizeMode="cover"
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Vỹ Đẹp Chai</Text>
          <Text style={styles.email}>vydc@example.com</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Option List */}
      <View style={styles.optionList}>
        <OptionItem icon="person-outline" label="Profile" />
        <OptionItem icon="wallet-outline" label="My Wallet" />
        <OptionItem icon="settings-outline" label="Settings" />
        <OptionItem icon="help-circle-outline" label="Help Center" />
        <OptionItem
          icon="log-out-outline"
          label="Logout"
          isDanger
          onPress={LogOut}
        />
      </View>
    </View>
  );
}

// Component for each option item
function OptionItem({
  icon,
  label,
  isDanger = false,
  onPress,
}: {
  icon: any;
  label: string;
  isDanger?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.optionItem} onPress={onPress}>
      <Ionicons name={icon} size={20} color={isDanger ? '#d00' : '#555'} />
      <Text style={[styles.optionLabel, isDanger && { color: '#d00' }]}>{label}</Text>
      <Ionicons
        name="chevron-forward"
        size={18}
        color="#999"
        style={{ marginLeft: 'auto' }}
      />
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f6',
    padding: 16,
    borderRadius: 12,
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  profileInfo: {
    backgroundColor: '#f1f3f6',
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  optionList: {
    gap: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9fb',
    padding: 14,
    borderRadius: 10,
  },
  optionLabel: {
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
  },
});
