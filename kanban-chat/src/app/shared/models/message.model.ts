export interface Message {
  id: number;
  sender_id: number; // ⬅️ statt senderId
  content: string;
  conversation_type: 'channel' | 'direct'; // ⬅️ statt conversationType
  conversation_id: number; // ⬅️ statt conversationId
  timestamp: string;
}