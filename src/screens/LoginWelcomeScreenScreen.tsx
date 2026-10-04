import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * ==============================================================
 * Screen: Login & Welcome Screen
 * Assigned Developer: Salabadeshwaran S
 * Priority: Must Have
 * Purpose: The entry screen where users sign in or create an account to start using the app.
 *
 * Responsibilities:
 * - Build the email and password login form
 * - Add buttons for signing up or resetting forgotten passwords
 * - Make sure users stay logged in after closing the browser
 *
 * TODO:
 * - Implement Native UI components
 * - Wire navigation transitions and gesture handlers
 * - Connect mobile API queries and offline caching
 * ==============================================================
 */

export default function LoginWelcomeScreenScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login & Welcome Screen</Text>
      <Text style={styles.subtitle}>Assigned: Salabadeshwaran S</Text>
      <Text style={styles.purpose}>The entry screen where users sign in or create an account to start using the app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#666', marginTop: 8 },
  purpose: { fontSize: 14, color: '#888', marginTop: 6 },
});
