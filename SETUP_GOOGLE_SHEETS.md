# Google Sheets Integration Setup Guide

This guide will help you set up the waitlist form to automatically add submissions to a Google Sheet.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "ASRobotix Waitlist Submissions"
4. Copy the spreadsheet ID from the URL (it's the long string between `/d/` and `/edit`)

## Step 2: Set up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script.js`
4. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID
5. Save the project with a name like "ASRobotix Waitlist Handler"

## Step 3: Deploy the Google Apps Script

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following:
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click "Deploy"
5. Copy the Web App URL (you'll need this for the environment variable)

## Step 4: Set up Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following line:
   ```
   GOOGLE_APPS_SCRIPT_URL=YOUR_WEB_APP_URL_HERE
   ```
3. Replace `YOUR_WEB_APP_URL_HERE` with the URL from Step 3

## Step 5: Initialize the Google Sheet

1. In Google Apps Script, run the `setupSpreadsheet()` function once manually
2. This will create the headers and format the sheet properly

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Go to `/waitlist`
3. Fill out and submit the form
4. Check your Google Sheet to see if the data was added

## Troubleshooting

### Common Issues:

1. **"Server configuration error"**
   - Make sure `GOOGLE_APPS_SCRIPT_URL` is set in your `.env.local` file
   - Restart your development server after adding the environment variable

2. **"Google Apps Script responded with status: 403"**
   - Make sure the Google Apps Script is deployed as a web app
   - Ensure "Who has access" is set to "Anyone"

3. **"Error processing request"**
   - Check the Google Apps Script logs in the Apps Script editor
   - Verify the spreadsheet ID is correct
   - Make sure you have edit permissions on the spreadsheet

### Security Notes:

- The Google Apps Script URL will be public, but it only accepts POST requests with proper JSON data
- Consider adding additional validation or rate limiting if needed
- The spreadsheet will be accessible to anyone with the link (you can change this in Google Sheets settings)

## File Structure

```
ASRobotix/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # API route handler
│   └── waitlist/
│       └── page.tsx              # Updated waitlist form
├── google-apps-script.js         # Google Apps Script code
├── .env.local                    # Environment variables (create this)
└── SETUP_GOOGLE_SHEETS.md        # This guide
```

## Environment Variables

Create a `.env.local` file in your project root:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Production Deployment

When deploying to production:

1. Make sure to set the environment variable in your hosting platform
2. Update the Google Apps Script to use a production spreadsheet if needed
3. Consider adding rate limiting and additional security measures
4. Test the form thoroughly in the production environment 