import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * ==============================================================
 * Screen: Team & Collaboration Hub
 * Assigned Developer: Salabadeshwaran S
 * Priority: Should Have
 * Purpose: Allows users to invite teammates, assign work, and see who is doing what.
 *
 * Responsibilities:
 * - Build a list of team members with their roles and photos
 * - Add an "Invite Teammate" button with email form
 * - Show recent activity log so everyone knows what changed
 *
 * TODO:
 * - Implement Native UI components
 * - Wire navigation transitions and gesture handlers
 * - Connect mobile API queries and offline caching
 * ==============================================================
 */

export default function TeamCollaborationHubScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Team & Collaboration Hub</Text>
      <Text style={styles.subtitle}>Assigned: Salabadeshwaran S</Text>
      <Text style={styles.purpose}>Allows users to invite teammates, assign work, and see who is doing what.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#666', marginTop: 8 },
  purpose: { fontSize: 14, color: '#888', marginTop: 6 },
});
