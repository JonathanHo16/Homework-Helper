import React from 'react'

var Airtable = require('airtable');
const base = require('airtable').base('app59oQ64IMRgG7b3');


Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyDVpXpc4SF4Xtte'
});
function getElementsByDate() {

    base('SYDE1B Homework').select({
        // Selecting the first 3 records in All content by section:
        sort:[{field: "Date Due", direction: "desc"}]
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {
            console.log('Retrieved', record.get('Headline'));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });

}
export default class DataTable extends React.Component {


    render () {
        getElementsByDate();
        return <div className='DataTable'>
                <p>Test Call on Render</p>
        </div>
    }


}
