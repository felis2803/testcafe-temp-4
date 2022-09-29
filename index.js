import { Selector, ClientFunction } from 'testcafe';

fixture('Fixture').page('file:///C:/projects/testcafe-temp-4/index.html');

const setStyle = ClientFunction((selector, key, value) => {
    document.querySelector(selector).style[key] = value;
})

const divE = Selector('#e');
const btnE = Selector('#e-btn');

test('Change style and scroll (should fail in Firefox)', async t => {
    await t
        .click(divE)
        .expect(btnE.exists).ok();
});

test('Change style and scroll (should success in Firefox)', async t => {
    await setStyle('#container', 'overflow-y', 'auto');
    
    await t
        .click(divE)
        .expect(btnE.exists).ok();
});
