import * as puppeteer from "puppeteer";

export async function POST(request: Request) {
    const scriptJSON = await request.json();
    // Save JSON to Database
    const id = "blah";
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

    return new Response(pdf, {
        headers: {
            "Content-Disposition": `attachment; filename=${scriptJSON.name}.pdf`,
        },
    });
}
