import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * ==============================================================
 * Screen: Account & Settings Screen
 * Assigned Developer: Monisha
 * Priority: Nice to Have
 * Purpose: Where users adjust their account preferences, theme, passwords, and notification alerts.
 *
 * Responsibilities:
 * - Build user profile settings (name, avatar, email)
 * - Add toggle switches for email and push notifications
 * - Provide a secure "Log Out" button
 *
 * TODO:
 * - Implement Native UI components
 * - Wire navigation transitions and gesture handlers
 * - Connect mobile API queries and offline caching
 * ==============================================================
 */

export default function AccountSettingsScreenScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account & Settings Screen</Text>
      <Text style={styles.subtitle}>Assigned: Monisha</Text>
      <Text style={styles.purpose}>Where users adjust their account preferences, theme, passwords, and notification alerts.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#666', marginTop: 8 },
  purpose: { fontSize: 14, color: '#888', marginTop: 6 },
});
