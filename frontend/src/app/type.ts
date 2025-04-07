export interface User {
  _id: string;
  fullName: string;
  email: string;
  profileImageUrl: string | null;
  lastSeen?: string; // Optional, ISO date string
  createdAt?: string;
  updatedAt?: string;
}

export interface Message {
  _id: string;
  conversationId: string;
  sender: User; // Nested user object
  text: string;
  timestamp: string; // ISO date string
}

export interface Conversation {
  _id: string;
  participants: User[]; // Array of user objects
  lastMessage: Message | null; // Nullable if no messages yet
}