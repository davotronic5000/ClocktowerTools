import * as puppeteer from "puppeteer";
import { createClient } from "redis";

export async function POST(request: Request) {
    const scriptJSON = await request.json();
    const client = createClient();
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();
    const id = crypto.randomUUID();
    await client.set(id, JSON.stringify(scriptJSON));
    // Send Puppeteer to URL
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000/pdf/script/${id}`, {
        waitUntil: "networkidle0",
    });
    const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
    });
    await browser.close();
    await client.del(id);
    await client.disconnect();

    return new Response(pdf, {
        headers: {
            "Content-Disposition": `attachment; filename=${scriptJSON.name}.pdf`,
        },
    });
}
