import OpenAI from 'openai';
import { NextResponse } from 'next/server';
export async function POST(req:Request){
 try{
  const {message,history=[]}=await req.json();
  if(!process.env.OPENAI_API_KEY)return NextResponse.json({error:'OPENAI_API_KEY அமைக்கப்படவில்லை.'},{status:503});
  const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});
  const response=await client.chat.completions.create({model:process.env.OPENAI_MODEL||'gpt-4.1-mini',messages:[{role:'system',content:'நீங்கள் VR AI என்ற பயனரின் தனிப்பட்ட உதவியாளர். தமிழில் தெளிவாகப் பதிலளிக்கவும். தேதி, நேரம், வேலைகளைச் சேமிக்கச் சொன்னால் இந்த chat மட்டும் போதாது; Dashboard-இல் Task அல்லது Reminder சேர்க்கச் சொல்லவும். நீங்கள் உண்மையில் database-ல் எதையும் சேர்த்ததாகக் கூற வேண்டாம்.'},...history.slice(-8),{role:'user',content:message}]});
  return NextResponse.json({answer:response.choices[0]?.message?.content||'பதில் கிடைக்கவில்லை.'});
 }catch(e){return NextResponse.json({error:'AI பதில் பெற முடியவில்லை. API அமைப்பைச் சரிபார்க்கவும்.'},{status:500});}
}
