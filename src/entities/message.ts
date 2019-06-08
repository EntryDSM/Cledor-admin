export interface Message {
  id: string;
  writer: string;
  content?: string;
  sendedAt: number;
  isAdmin: boolean;
  encodedImageData?: string;
  room: string;
}
