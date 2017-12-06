class Bs6920Awaiting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: []
        };
    }
    componentDidMount() {
    }
    render() {
        var products = this.props.awaitreport;var self= this;
        const fetchInfo = {dataTotalSize: this.state.reports.length};
        function dataFormater(cell, row) {
            return  cell;
        }
        function bdataFormater(cell, row){

            return (<Actionmodal componentname={"Step6form"} fromdata={cell} getReportingData={self.props.getReportingData}/>);
        }
        return (<div className="row" id="ar_tab">
                    <div className="col-lg-12">
                        <div className="panel panel-primary" style={{"border-color": "#67ad69"}} >
                            <div className="panel-heading" style={{"background-color": "#67ad69","border-color": "#67ad69"}}>
                                <h3 className="panel-title">
                                    <span className="glyphicon glyphicon-signal"></span> Awaiting Report
                                </h3>
                            </div>
                            <div className="panel-body">
                            <BootstrapTable data={products} striped={true} hover={true}   hover={true}  condensed={true}  pagination={true} search={true} exportCSV={true} fetchInfo={fetchInfo}>
                                <TableHeaderColumn dataField="samplenumber" dataFormat={dataFormater} isKey={true}  dataSort={true}>Sample Number</TableHeaderColumn>
                                <TableHeaderColumn dataField="planneddate" dataFormat={dataFormater} dataSort={true}>Planned Dates</TableHeaderColumn>
                                <TableHeaderColumn dataField="company" dataFormat={dataFormater} dataSort={true} >Company</TableHeaderColumn>
                                <TableHeaderColumn dataField="material" dataFormat={dataFormater} dataSort={true} >Material</TableHeaderColumn>
                                <TableHeaderColumn dataField="matlab" dataFormat={dataFormater} dataSort={true} >MAT LAB</TableHeaderColumn>
                                <TableHeaderColumn dataField="odour" dataFormat={dataFormater} dataSort={true} >Odour & Flavour</TableHeaderColumn>
                                <TableHeaderColumn dataField="appearance" dataFormat={dataFormater} dataSort={true} >Appearance</TableHeaderColumn>
                                <TableHeaderColumn dataField="gmo" dataFormat={dataFormater}  >G.M.O.</TableHeaderColumn>
                                <TableHeaderColumn dataField="cyto" dataFormat={dataFormater}  >Cytotoxity</TableHeaderColumn>
                                <TableHeaderColumn dataField="extraction" dataFormat={dataFormater}  >Extraction of Materials</TableHeaderColumn>
                                <TableHeaderColumn dataField="pah" dataFormat={dataFormater}  >PAH</TableHeaderColumn>
                                <TableHeaderColumn dataField="temperature" dataFormat={dataFormater}  >Temperature</TableHeaderColumn>
                                <TableHeaderColumn dataField="edit" hidden={this.props.hideedit} dataFormat={bdataFormater}  >Edit</TableHeaderColumn>
                            </BootstrapTable>
                            </div>
                        </div>
                    </div>
                </div>);

    }
}
