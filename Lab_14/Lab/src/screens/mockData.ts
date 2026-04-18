import { Contact } from "../types";

const COLORS = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33'];

export const generateContacts = (count: number): Contact[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: `contact_${i}_${Date.now()}`,
        firstName: 'User',
        lastName: `Number ${i + 1}`,
        email: `student${i}@almau.edu.kz`,
        avatarColor: COLORS[i % COLORS.length],
}));
};