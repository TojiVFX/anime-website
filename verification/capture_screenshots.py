import asyncio
from playwright.async_api import async_playwright
import os

async def capture_screenshots():
    # Ensure verification directory exists
    os.makedirs('verification', exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # Capture Mobile Screenshot
        mobile_device = p.devices['iPhone 12']
        mobile_context = await browser.new_context(**mobile_device)
        mobile_page = await mobile_context.new_page()
        await mobile_page.goto('http://localhost:8000', wait_until='networkidle')
        await asyncio.sleep(1) # Allow for animations
        await mobile_page.screenshot(path='verification/mobile_screenshot.png', full_page=True)
        print("Mobile screenshot saved to verification/mobile_screenshot.png")
        await mobile_context.close()

        # Capture Desktop Screenshot
        desktop_context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        desktop_page = await desktop_context.new_page()
        await desktop_page.goto('http://localhost:8000', wait_until='networkidle')
        await asyncio.sleep(1) # Allow for animations
        await desktop_page.screenshot(path='verification/desktop_screenshot.png', full_page=True)
        print("Desktop screenshot saved to verification/desktop_screenshot.png")
        await desktop_context.close()

        await browser.close()

if __name__ == "__main__":
    asyncio.run(capture_screenshots())
