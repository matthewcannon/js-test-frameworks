import 'should';
const puppeteer = require('puppeteer');

describe('landing', function() {
    it('should have the correct page title', function(done) {
        var pageTitle;
        (async () => {
            const browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();
            await page.goto('http://localhost:8000');
            pageTitle = await page.title();
            await browser.close();
        })().then(x => {
            pageTitle.should.equal('Title.');
            done(x);
        }).catch(e => {
            done(e);
        });
    });
});
