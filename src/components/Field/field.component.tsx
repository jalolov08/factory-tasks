import { View } from 'react-native';
import { Text, Divider } from 'react-native-paper';

export const Field = ({ label, value }: { label: string; value: string }) => (
  <View style={{ marginBottom: 12 }}>
    <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>{label}</Text>
    <Text>{value}</Text>
    <Divider style={{ marginTop: 8 }} />
  </View>
);
