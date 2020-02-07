const chromeOptions = {
    headless: true,
    slowMo: 10,
    devtools: true,
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
    ],
}

export default chromeOptions