export interface Message {
  _id: string;
  writer: string;
  content?: string;
  sendedAt: number;
  isAdmin: boolean;
  encodedImageData?: string;
  room: string;
}
