const fs = require('fs').promises
const Parser = require('rss-parser')
const parser = new Parser()

const LATEST_NEWS_PLACEHOLDER = '%{{latest_news}}%'

async function readReadmeFile() {
    const filedata = await fs.readFile('./README.md.tpl', { encoding: 'utf-8' })    
    // const items = await parser.parseURL('https://www.timeanddate.com/index.xml')
    //console.log(items)
    const markdownReplaced = filedata.replace(LATEST_NEWS_PLACEHOLDER, 'yii')
    await fs.writeFile('./README.md', markdownReplaced)
}

readReadmeFile()
