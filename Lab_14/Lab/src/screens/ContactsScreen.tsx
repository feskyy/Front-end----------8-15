import React, { useState, useCallback } from 'react';

import { View, Text, FlatList, StyleSheet, TouchableOpacity, RefreshControl, Alert } from 'react-native';
import { generateContacts } from './mockData';
import { Contact } from '../types';


const IETM_HEIGHT = 90;

export default function ContactsScreen() {
    const [contacts, setContacts] = useState<Contact[]>(() => generateContacts(1000));
    const [refreshing, setRefreshing] = useState(false);

    const renderItem = useCallback(({ item }: { item: Contact }) => {
        return (
        )
    }, []);
}


