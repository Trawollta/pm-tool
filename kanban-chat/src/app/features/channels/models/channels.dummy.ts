import { Channel } from "./channels.model";


export const DUMMY_CHANNELS: Channel[] = [
  { id: 1, name: 'General', description: 'Allgemeiner Chat', members: [1, 2, 3] },
  { id: 2, name: 'Development', description: 'Technischer Chat', members: [2, 3, 4] },
  { id: 3, name: 'Design', description: 'Designs und Ideen', members: [1, 4] }
];
