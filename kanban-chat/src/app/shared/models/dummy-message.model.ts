import { Message } from "./message.model";

export const DUMMY_MESSAGES: Message[] = [
    {
      id: 1,
      senderId: 2,
      content: 'Hallo, willkommen im Channel!',
      conversationType: 'channel',
      conversationId: 1,
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      senderId: 1,
      content: 'Hi, wie geht es dir?',
      conversationType: 'channel',
      conversationId: 1,
      timestamp: new Date().toISOString()
    },
    {
      id: 3,
      senderId: 3,
      content: 'Hey, alles klar?',
      conversationType: 'direct',
      conversationId: 101,
      timestamp: new Date().toISOString()
    }
  ];
  