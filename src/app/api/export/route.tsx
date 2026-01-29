import { renderToStream } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';
import { MyDocument } from '@/components/pdf/PDFDocument';
import React from 'react';

export async function POST(req: Request) {
    try {
        const { responses } = await req.json();
        const stream = await renderToStream(<MyDocument responses={responses} />);

        // Convert stream to Web Response
        // NextJS App Router prefers standard Response/NextResponse
        return new NextResponse(stream as any, {
            headers: { 'Content-Type': 'application/pdf' }
        });
    } catch (e) {
        console.error("PDF Error", e);
        return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
    }
}
