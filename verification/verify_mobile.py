from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # iPhone 12 viewport
        context = browser.new_context(
            viewport={'width': 375, 'height': 812},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1"
        )
        page = context.new_page()
        page.goto('http://localhost:8000')
        # Wait for some content to be visible to ensure main.js has run and data is loaded
        page.wait_for_selector('.anime-card', timeout=10000)
        # Take a screenshot
        page.screenshot(path='verification/mobile_screenshot.png', full_page=True)
        browser.close()

if __name__ == '__main__':
    run()
