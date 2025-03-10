export interface Message {
    id: number;
    senderId: number;
    content: string;
    conversationType: 'channel' | 'direct';
    conversationId: number;
    timestamp: string;
  }