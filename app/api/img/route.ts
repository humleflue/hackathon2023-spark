import { NextRequest, NextResponse } from "next/server";
import { completion } from "../../service/openai";

enum Priority {
  LOW,
  MEDIUM,
  HIGH
}

enum Category {
  CRACK,
  SCRATCH,
  DENT,
  BURN,
  OTHER
}

interface ReportData {
  panelId: string
  location: { lat: number, lng: number }
  priority: Priority
  category: Category
  description: string
}

// Endpoint for receiving an image from the client
export async function POST(req: NextRequest, res: NextResponse) {
  const blob = await req.blob()

  // TODO: Lasse extract data from blob

  // TODO: Jens use data from blob to call OpenAI API


  return NextResponse.json({
    panelId: "123",
    location: { lat: 0, lng: 0 },
    priority: Priority.HIGH,
    category: Category.CRACK,
    description: "Big crack. Doesn't work."
  })
}

// TODO Remove stupid impl.
export async function GET(req: NextRequest): Promise<any> {
    const prompt = req.nextUrl.searchParams.get('p') as string;
    const text = await completion(prompt, Math.ceil(prompt.length / 4) + 100);

    return NextResponse.json(text);
}
