# Google Apps Script Setup for CorrentFlow Job Applications

## Step 1: Create Google Sheets

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "CorrentFlow Job Applications"
4. In the first row, add these headers (exactly as shown):
   ```
   A1: Timestamp
   B1: Full Name
   C1: Email
   D1: Phone
   E1: LinkedIn
   F1: Position
   G1: Experience
   H1: Skills
   I1: Education
   J1: Portfolio
   K1: Cover Letter
   L1: References
   M1: Additional Info
   N1: Resume File Name
   ```

## Step 2: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the spreadsheet by ID (replace with your actual spreadsheet ID)
    const SPREADSHEET_ID = '18AdGHlF9taoGkb453mAdBVVCSPXfEoleKkYK4YGTYzs';
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    let data;
    
    // Handle both JSON and FormData submissions
    if (e.postData.type === 'application/json') {
      // Handle JSON data
      data = JSON.parse(e.postData.contents);
    } else {
      // Handle FormData
      data = e.parameter;
    }
    
    // Log the received data for debugging
    console.log('Received data:', data);
    
    // Create array of values in the same order as headers
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.linkedin || '',
      data.position || '',
      data.experience || '',
      data.skills || '',
      data.education || '',
      data.portfolio || '',
      data.coverLetter || '',
      data.references || '',
      data.additionalInfo || '',
      data.resumeFileName || 'No file uploaded'
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Application submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error for debugging
    console.error('Error in doPost:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('CorrentFlow Job Application Handler is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## Step 3: Deploy the Script

1. Click "Deploy" > "New deployment"
2. Choose type: "Web app"
3. Description: "CorrentFlow Job Application Handler"
4. Execute as: "Me"
5. Who has access: "Anyone"
6. Click "Deploy"
7. Copy the Web App URL (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

## Step 4: Update Your React Code

1. Open `ApplicationForm.js`
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
3. Replace `YOUR_SCRIPT_ID` with your actual script ID from the Web App URL

## Step 5: Get Your Spreadsheet ID

1. Open your Google Sheets document
2. Look at the URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
3. Copy the SPREADSHEET_ID part
4. In your Google Apps Script, replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID

## Step 6: Test the Setup

1. Deploy your React app with the updated code
2. Fill out a test application
3. Check your Google Sheets - the data should appear automatically!

## Important Notes:

- **File uploads**: The current setup saves the file name only. To handle actual file uploads, you'd need additional Google Drive API integration.
- **Email notifications**: You can add email notifications in the Google Apps Script using `MailApp.sendEmail()`.
- **Data validation**: The script includes basic error handling, but you can add more validation as needed.

## Optional: Add Email Notifications

Add this to your Google Apps Script to get notified of new applications:

```javascript
// Add this inside the doPost function after sheet.appendRow(rowData):

// Send email notification
MailApp.sendEmail({
  to: 'correntflow@gmail.com',
  subject: `New Job Application: ${data.position} - ${data.fullName}`,
  body: `
New job application received:

Name: ${data.fullName}
Email: ${data.email}
Position: ${data.position}
Experience: ${data.experience}

View all applications: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}
  `
});
```

This setup will automatically save all job applications to your Google Sheets in real-time!
