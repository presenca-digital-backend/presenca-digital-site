export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import path from 'path';
import fs from 'fs';

export async function GET(
  request: NextRequest,
  { params }: { params: { token: string } }
) {
  try {
    const token = params?.token;
    if (!token) {
      return NextResponse.json({ error: 'Token inválido' }, { status: 400 });
    }

    const purchase = await prisma.purchase.findUnique({
      where: { downloadToken: token },
    });

    if (!purchase || purchase?.status !== 'completed') {
      return NextResponse.json({ error: 'Compra não encontrada ou não confirmada' }, { status: 403 });
    }

    // Update download count
    await prisma.purchase.update({
      where: { id: purchase.id },
      data: { downloadCount: (purchase?.downloadCount ?? 0) + 1 },
    });

    // Serve the PDF
    const filePath = path.join(process.cwd(), 'uploads', 'ebook.dat');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Arquivo não encontrado no servidor' }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="PresencaDigital_Pro_eBook.pdf"',
        'Content-Length': String(fileBuffer?.length ?? 0),
      },
    });
  } catch (err: any) {
    console.error('Download error:', err);
    return NextResponse.json({ error: 'Erro ao processar download' }, { status: 500 });
  }
}
