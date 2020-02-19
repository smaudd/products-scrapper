import puppeteer from 'puppeteer'
import Product from 'models/Product.model'
import fs from 'fs'
import path from 'path'
import chromeOptions from '../../browserConfig'
import csvtojson from 'csvtojson'
const url = 'https://www.mercabarna.es/serveis/es_estadistiques-diaries'

const getCSV = async () => {
    console.log('Attempting to download CSV')
    try {
        const browser = await puppeteer.launch({ ...chromeOptions, executablePath: process.env.CHROME_EXECUTABLE_PATH })
        const page = await browser.newPage()
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        await page._client.send('Page.setDownloadBehavior', {
            behavior: 'allow',

            downloadPath: path.resolve(__dirname, '../'),
        });
        await page.goto(url)
        const element = await page.$('[name="generar"]');
        element.click()
        await page.waitForNavigation({ waitUntil: 'networkidle0' })
        await page.goto(url + '?export')
        await browser.close()
    } catch (err) {
        // console.log(err)
    }
}

const stringToFloat = (input) => {
    if (!input) {
        return null
    }
    const slices = input.split(',')
    return parseFloat(slices[0]) + parseFloat(`0.${slices[1]}`)
}

const ISO = (fileDate) => {
    const fragments = fileDate.split('-')
    return `${fragments[2]}-${fragments[1]}-${fragments[0]}`
}

const checkDate = (json) => {
    let fileDate = json.find(row => row.name.includes('Fecha')).name.split(' ')[1]
    const date = new Date()
    const maxPeriod = new Date().setDate(date.getDate() - 2)
    console.log('File date', new Date(ISO(fileDate)))
    console.log('Current date', date)
    fileDate = new Date(ISO(fileDate)).getTime()
    return maxPeriod < fileDate
}

const mercabarna = async () => {
    await getCSV()
    console.log('Ready to parse')
    const file = fs.readFileSync(path.resolve(__dirname, '../export.csv'), { encoding: 'latin1' })
    const json = await csvtojson({
        delimiter: ';',
        trim: true,
        noheader: true,
        headers: ['name', 'dominant', 'max', 'min']
    }).fromString(file)

    if (checkDate(json)) {
        console.log('Ready to write DB')
        const filteredHeader = json.slice(3, json.length)
        console.log(json.slice(0, 3)[1].name)
        const results = filteredHeader.map(({ name, dominant, min, max }) => {
            return {
                name,
                dominant: stringToFloat(dominant),
                min: stringToFloat(min),
                max: stringToFloat(max),
            }
        })
        results.forEach(async ({ name, min, max, dominant }) => {
            try {
                const result = await Product.findOneAndUpdate(
                    { name },
                    { '$push': { min: { value: min }, max: { value: max }, dominant: { value: dominant } } },
                    { upsert: true, new: true }
                )
            } catch (err) {
                console.log(err)
            }
        })
        console.log('Did DB write')
        return
    }
    console.log('Invalid date')
}

export default mercabarna



