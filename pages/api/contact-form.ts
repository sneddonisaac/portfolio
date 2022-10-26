import { notion } from '../../lib/notion'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res
            .status(405)
            .json({ message: `${req.method} requests are not allowed` })
    }
    try {
        const { name, email, phone, message, created } = JSON.parse(req.body)
        await notion.pages.create({
            parent: {
                database_id: process.env.NOTION_DATABASE_ID || '',
            },
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                content: name,
                            },
                        },
                    ],
                },
                Email: {
                    email: email,
                },
                Phone: {
                    phone_number: phone,
                },
                Message: {
                    rich_text: [
                        {
                            type: 'text',
                            text: {
                                content: message,
                            },
                        },
                    ],
                },
                Date: {
                    date: { start: created },
                },
            },
        })
        res.status(201).json({ msg: 'Success' })
    } catch (error) {
        res.status(500).json({ msg: 'There was an error' })
    }
}
