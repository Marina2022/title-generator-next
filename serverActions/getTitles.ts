'use server'

import axios from "axios";
import {OpenAI} from "openai";
import {MyData} from "@/types";

interface OpenAIError {
    error: {
        message: string;
        type?: string;
        param?: string | null;
        code?: string | null;
    };
}

export const getTitles = async (
    myData: MyData | null
): Promise<
    | { success: true; result: string[] }
    | { success: false; error: string }
> => {

    if (!myData) return {success: false, error: 'No data'}
    const openai = new OpenAI({
        apiKey: process.env.OPEN_AI_API_KEY,
    });


    try {

        const prompt = `
        Generate an array of catchy blog titles (3 variants) in "${myData.headlineStyle}" style and "${myData.contentFormat}" format. 
        Use the following keywords: ${myData.keywords}. 
        Description: ${myData.description}.
        `;

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "system", content: "You are a helpful assistant."},
                {role: "user", content: prompt}
            ]

        });

        const raw = completion.choices[0].message.content

        if (raw) {
            const titles = raw
                .split(/\d+\.\s+/)       // Разбиваем по числам с точкой (1. , 2. , ...)
                .filter(Boolean)         // Убираем пустую строку в начале
                .map(str => str.trim().replace(/^"|"$/g, '')); // Убираем кавычки по краям


            return {success: true, result: titles}
        } else {
            return {success: false, error: 'No result'}
        }


    } catch (err) {
        if (
            typeof err === 'object' &&
            err !== null &&
            'error' in err &&
            typeof (err as OpenAIError).error?.message === 'string'
        ) {
            return {success: false, error: (err as OpenAIError).error.message};
        }

        return {success: false, error: 'all bad'};
    }
}