import 'should';
const puppeteer = require('puppeteer');

describe('landing', function() {
    it('should have the correct page title', function(done) {
        var pageTitle;
        (async () => {
            const browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();
            await page.goto('http://google.com');
            pageTitle = await page.title();
            await browser.close();
        })().then(x => {
            pageTitle.should.equal('Not Google');
            done(x);
        }).catch(e => {
            done(e);
        });
    });
});
