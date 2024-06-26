import { jsonPrinting } from "../json-printing";

const jsonPrintingHandler = jsonPrinting("script");

export async function POST(request: Request) {
    return await jsonPrintingHandler(request);
}
