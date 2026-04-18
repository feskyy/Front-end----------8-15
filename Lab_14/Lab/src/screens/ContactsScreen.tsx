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
            <TouchableOpacity 
                style = {styles.contsctItem}
                onPress = {() => Alert.alert('Selected', item.email)}
                activeOpacity = {0.7}
            >
                <View style = {[styles.avatar, { backgroundColor: item.avatarColor }]}>
                    <Text style = {styles.avatarText}>{item.firstName[0]}{item.lastName[0]}</Text>
                </View>

                <View style = {styles.contactDetails}>
                    <Text style = {styles.contactName}>{item.firstName} {item.lastName}</Text>
                    <Text style = {styles.contactEmail}>{item.email}</Text>
                </View>
            </TouchableOpacity>
        );
    }, []);


    const keyExtractor = useCallback((item: Contact) => item.id, []);


    const getItemLayout = useCallback((data: any, index: number) => ({
        length: IETM_HEIGHT,
        offset: IETM_HEIGHT * index,
        index,
    }), []);
};


