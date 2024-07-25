import { NextRequest, NextResponse } from 'next/server';
import { google } from "googleapis";

type SheetForm = {
    firstname: string;
    lastname: string;
    company: string;
    email: string;
    phone: string;
    lookingfor: string;
    message: string;
};

export async function POST(req: NextRequest) {
    if (req.method !== "POST") {
        return NextResponse.json({ message: 'Only POST requests allowed' }, { status: 405 });
    }

    try {
        const body = await req.json() as SheetForm;

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:G1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.firstname, body.lastname, body.company, body.email, body.phone, body.lookingfor, body.message]
                ]
            }
        });

        console.log(response.data);
        
        return NextResponse.json({
            data: response.data
        }, { status: 201 });
    } catch (e) {
        const error = e as { code: number; message: string };
        return NextResponse.json({ error: error.message }, { status: error.code });
    }
}
