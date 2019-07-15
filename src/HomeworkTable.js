import React from "react";
import {getData} from "./DataHandler";

export default class DataTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            records : "Placeholder"
        }
    }
    async componentDidMount() {
        try {
            const [data] = await getData();
            this.setState({records: data});
        } catch (error)
        {
            console.error(error);
        }
    }

    render() {
        return (<div className='DataTable'>
                    <ul>{this.state.records}</ul>
                    <p>TEST</p>
        </div> )
    }
}