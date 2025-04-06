// app/api/chatbot/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
    const body = await request.json();
    const { messages } = body;

    if (!messages || messages.length === 0) {
        return NextResponse.json({ error: 'No messages provided' }, { status: 400 });
    }

    const apiKey = "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";

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({ model: 'gpt-4o', messages })
        });
        if (!response.ok) {
            const errorText = await response.text(); // می‌توان به صورت text یا json خطا رو نمایش داد
            console.error('OpenAI API Error Response:', errorText);  // نمایش محتوای کامل خطا
            throw new Error(`API request failed: ${errorText}`);
        }

        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
