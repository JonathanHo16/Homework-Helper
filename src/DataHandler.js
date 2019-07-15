import React from 'react'
import jQuery from 'jquery'
const Airtable = require('airtable');
const base = new Airtable({ apiKey: 'keyDVpXpc4SF4Xtte' }).base('app59oQ64IMRgG7b3');
const headlineIndex = 0;
const dueDateIndex= 1;
const subjectIndex = 2;
const authorIndex = 3;


function getDataFromAirTable() {
    return new Promise((resolve, reject) => {
        var record = [];
        base('SYDE1B Homework').select({
            // Selecting the first 3 records in All content by section:
            sort:[{field: "Date_Due", direction: "asc"}],
            filterByFormula: "{Due_In_Future} =  1"
        }).eachPage(function page(currentPageRecords, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            record = record.concat(currentPageRecords);

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();

        }, function done(err) {
            if (err) {
                reject(err);
            } else {
                resolve(record);
            }
        });
    });
}
function handleData(response) {
    var recordsObjs = response;
    var responseArray = [];

    for ( var i = 0; i < recordsObjs.length; i ++)
    {
        var recordFields = recordsObjs[i].fields;
        var tempArray = [recordFields.Headline, recordFields.Date_Due, recordFields.Section, recordFields.Author.name ];
        responseArray.push(tempArray);
    }
    //console.log("Computed array");
    //console.log(responseArray);
    return responseArray;
}
export function getData(options) {
    options = options || 0;
    var dataArray = "DataArray was not set";
   return getDataFromAirTable().then(result => {
        dataArray = handleData(result)
        return dataArray;
    }).catch(error =>
        console.error(error));


}
