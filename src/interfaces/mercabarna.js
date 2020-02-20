import puppeteer from 'puppeteer'
import Product from 'models/Product.model'
import fs from 'fs'
import path from 'path'
import chromeOptions from '../../browserConfig'
import csvtojson from 'csvtojson'
const url = 'https://www.mercabarna.es/serveis/es_estadistiques-diaries'

const getData = async () => {
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
        const data = await page.evaluate(() => {
            const tbody = Array.from(document.querySelector('tbody').children)
            const caption = document.querySelector('caption').innerHTML
            const date = caption.slice(caption.match(/[0-9]/).index, caption.length)
            const products = tbody.map(child => ({
                    name: child.children[0].innerHTML,
                    dominant: parseFloat(child.children[1].innerHTML.replace(/,/g, '.')),
                    max: parseFloat(child.children[2].innerHTML.replace(/,/g, '.')),
                    min: parseFloat(child.children[3].innerHTML.replace(/,/g, '.')),
                })
            )
            return {
                date,
                products,
            }
        })
        await browser.close()
        return data
    } catch (err) {
        console.log(err)
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

const checkDate = (dataDate) => {
    const date = new Date()
    const maxPeriod = new Date().setDate(date.getDate() - 3)
    const dataDateOnTime = new Date(ISO(dataDate)).getTime()
    return maxPeriod < dataDateOnTime 
}

const mercabarna = async () => {
    const data = await getData()
    const isValidDate = checkDate(data.date)
    if (isValidDate) {
        fs.writeFileSync(path.resolve(__dirname, `../assets/output/${data.date}.json`), JSON.stringify(data, null, 2))
        console.log('Saved as file')
        data.products.forEach(async ({ name, min, max, dominant }) => {
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



