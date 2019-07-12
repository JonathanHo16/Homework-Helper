import React from "react";
import {getData} from "./DataHandler";
export default class DataTable extends React.Component {
    componentDidMount() {
        var data = getData();
        console.log(data);
    }

    render() {

        return <div className='DataTable'>
        </div>
    }
}