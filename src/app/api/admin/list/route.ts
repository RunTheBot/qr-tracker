import {NextResponse} from "next/server";
import getQrCodesModel from "@/database/qr-codes";

export async function GET(request: Request) {
    const QrCodeModel = await getQrCodesModel();
    const all = await QrCodeModel.find();
    return NextResponse.json({all}, {
        status: 200,
        headers: {
            "cache-control": "no-cache"
        }
    })
}