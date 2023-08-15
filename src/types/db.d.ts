interface User{
    name:string
    email:string
    image:string
    id:string
}
interface Chat{
    id:string
    messages:Message[]
}
interface Message{
    id:string
    text:string
    senderId:string
    receiverId:string
    timestamp:number
}

interface FriendRequest {
    id: string
    senderId: string
    receiverId: string
  }