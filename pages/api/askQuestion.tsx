
import type { NextApiRequest,NextApiResponse } from "next";
import query from "@/lib/queryApi";
import admin from 'firebase-admin'
import { adminDb } from "@/firebaseAdmin";
type Data={
    name:string
}

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse<Data>
){
    const {prompt,chatId,model,session}=req.body
    if(!prompt){
        res.status(400).json({name:"Please provide a prompt"})
        return
    }
    if(!chatId){
        res.status(400).json({name:"Please provide a valid chat ID"})

    }
    //ChatGPT Query

    const response = await query(prompt,chatId,model)
    

    const message: Message={
        text:response || "ChatGPT was unable to find a answer for that",
        createdAt:admin.firestore.Timestamp.now(),
        user:{
            _id:'ChatGPT',
            name:'ChatGPT',
            avatar:'https://static.vecteezy.com/system/resources/thumbnails/006/017/842/small_2x/customer-service-icon-user-with-laptop-computer-and-headphone-illustration-free-vector.jpg'
        }
    }

    await adminDb.collection('users').doc(session)
    .collection('chats').doc(chatId)
    .collection('messages').add(message)

    res.status(200).json({name:message.text})
}