export interface User {
  _id: string;
  fullName: string;
  email: string;
  profileImageUrl?: string;
  lastSeen?: string; // Add lastSeen field
}

export interface Message {
  _id: string;
  conversationId: string;
  sender: User;
  text: string;
  timestamp: string;
}

export interface Conversation {
  _id: string;
  participants: User[];
  lastMessage: Message | null;
}