// Google Apps Script for ASRobotix Waitlist Form
// Deploy this as a web app to handle form submissions

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (you'll need to replace this with your actual spreadsheet ID)
    const spreadsheetId = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your actual spreadsheet ID
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Get current timestamp
    const timestamp = new Date().toISOString();
    
    // Prepare the row data
    const rowData = [
        timestamp,
        data.name || '',
        data.email || '',
    -   data.phone || '',
    +   data.phone ? "'" + data.phone : '',
        data.company || '',
        data.role || '',
        data.interest || '',
        data.message || ''
      ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: 'Error processing request',
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput('ASRobotix Waitlist Form Handler is running')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Function to set up the spreadsheet headers (run this once manually)
function setupSpreadsheet() {
  const spreadsheetId = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your actual spreadsheet ID
  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Name',
    'Email', 
    'Phone',
    'Company',
    'Role',
    'Interest Area',
    'Message'
  ];
  
  // Clear existing data and set headers
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#f3f4f6');
  
  // Auto-resize columns
  for (let i = 1; i <= headers.length; i++) {
    sheet.autoResizeColumn(i);
  }
} 