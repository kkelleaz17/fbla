// Google Sheets API configuration
let SHEET_ID = '1qbcaNrKfrVluU-2zbHObhNv6TLbSDt1zDrqfq4TUMG4'; // ID of the Google Sheet
let SHEET_TITLE = 'Job Position Availability'; // Title of the sheet containing the data
let SHEET_RANGE = 'B2:B8'; // Range of cells containing the data

// Full URL to fetch the data from Google Sheets
let FULL_URL = 'https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE;

// This function fetches positions data from a remote server.
// It uses an array 'Positions' to map positions to their index.
// The data is retrieved from a JSON object in the response, and the positions are extracted.
// The positions are then mapped to the 'Positions' array to create a list of positions with availability.
async function getPositions(){
    // Array of positions
    const Positions = ["Cashier", "Store Clerk", "Sales Associate", "Shift Supervisor", "Food Service Worker", "Security Personnel", "Maintenance Staff"];

    try {
        // Fetch data from server
        let res = await fetch(FULL_URL);
        // Get response text
        let data = await res.text();
        
        // Parse JSON data from response text
        let table = JSON.parse(data.substring(47).slice(0, -2)).table;
        // Map positions to availability data
        let result = await table.rows.map((e, i) => {
            return { Position: Positions[i], available: e.c[0].v };
        });

        // Return the result
        return await result;

    } catch (err) {
        // Log and return null if there's an error
        console.log(err);
        return null;
    }
}   

// Export the getPositions function
export default getPositions;
