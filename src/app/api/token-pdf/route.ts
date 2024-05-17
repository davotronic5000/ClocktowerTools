import { jsonPrinting } from "../json-printing";

const jsonPrintingHandler = jsonPrinting("token");

export async function POST(request: Request) {
    return await jsonPrintingHandler(request);
}
