# WhatsApp Web Automation Script

## Description

This script automates sending messages to specific members of a WhatsApp group using WhatsApp Web. Please use this script responsibly and ensure you comply with WhatsApp's terms of service and policies.

## Prerequisites

- Node.js installed on your system. You can download it from [Node.js](https://nodejs.org/).

## Installation

1. Clone this repository or download the script file.
2. Open your terminal and navigate to the script's directory.
3. Run the following command to install the required dependencies:

   ```bash
   npm install puppeteer
   ```

## Usage

1. Configure the script:
   - Replace `'YOUR_GROUP_NAME'` with the name of your WhatsApp group.
   - Replace `'YOUR_MESSAGE'` with the message you want to send.
   - Modify the `membersToSend` array to include the names of the group members you want to send messages to.

2. Run the script:

   ```bash
   node whatsapp-automation.js
   ```

3. The script will open a browser window, navigate to WhatsApp Web, and send messages to the specified group members one by one.

## Important Notes

- Ensure you are logged into WhatsApp Web by scanning the QR code with your phone before running the script.
- The script is set to run with a non-headless browser (`headless: false`) by default. You can change this to `true` in the script if you prefer a headless browser.
- The script includes a delay of 1000ms (1 second) between sending messages to avoid rate limiting. You can adjust this delay if necessary.

## Disclaimer

- This script is for educational and informational purposes only.
- Be aware that WhatsApp's interface and security mechanisms may change over time, and using automation scripts may violate WhatsApp's terms of service.
- Use this script responsibly and respect WhatsApp's policies and terms of service.

## License

This project is licensed under the [MIT License](LICENSE).

---

Make sure to create a `LICENSE` file in your project directory if you choose to specify a license. Additionally, you may want to include any acknowledgments or credits to libraries or sources you used.
