import {User} from "./user";
export interface Message {
  id: number,
  private_conversation_id: number,
  author_id: number,
  author: User,
  content: string,
  created_at: string
}
