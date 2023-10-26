const puppeteer = require('puppeteer');

async function sendMessages() {
  const browser = await puppeteer.launch({ headless: false }); // You can run headless: true for a headless browser
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com');
  
  // Replace 'YOUR_GROUP_NAME' with your group's name
  const groupName = 'YOUR_GROUP_NAME';

  // Wait for the group to appear in the chat list
  await page.waitForXPath(`//span[@title="${groupName}"]`);
  const [groupElement] = await page.$x(`//span[@title="${groupName}"]`);
  await groupElement.click();

  // Replace 'YOUR_MESSAGE' with the message you want to send
  const messageToSend = 'YOUR_MESSAGE';

  // Replace with the names of the group members you want to send messages to
  const membersToSend = ['Member1', 'Member2', 'Member3'];

  for (const member of membersToSend) {
    await page.waitForSelector('div[data-tab="6"]');
    const messageBox = await page.$('div[data-tab="6"]');
    await messageBox.click();
    await page.keyboard.type(`${member}, ${messageToSend}`);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000); // Add a delay to avoid rate limiting
  }

  await browser.close();
}

sendMessages();
