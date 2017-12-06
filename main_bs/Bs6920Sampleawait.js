
const DayPickerInput = window.DayPicker.Input;
class Bs6920Sampleawait extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [],
            matlab:'',
            section:'',
            newdate:''
        };

        this.setFinishDate  = this.setFinishDate.bind(this);

    }
    setFinishDate(send_data){
        var send_data = JSON.stringify(send_data);var self = this;
         const request = window.superagent;
        request.post("model/bs6920_dashboard/bs6920_testing.php")
                .set('Content-Type','application/json')
        		.send(send_data)
        		.end(function(err,resp){
        			if(err){console.log(err);}
        			else{
        				console.log(resp);
                        self.props.getReportingData();
        			}
        		});
      }

    render() {

        var products = this.props.sampleawait;var self = this;
        //const fetchInfo = {dataTotalSize: this.state.reports.length};
        function dataFormater(cell, row) {
            return  cell;
        }

        function sdataFormater(cell, row) {
            var oldData = cell;var send_data={};
            var setData = oldData.split('@');

            return  ((cell != '')?<span>
                <i className="fa fa-check" aria-hidden="true"></i>
            <br/>
            <DayPickerInput className="form-control"
            onDayChange={function(day){send_data={startdate:window.moment(day._d).format(),matlab:setData[1],id:setData[2]};self.setFinishDate(send_data);}}
            placeholder="MM/DD/YYYY"
            value={setData[0]}
            />
            </span>:"");
        }

        function bdataFormater(cell, row){

            return (<Actionmodal componentname={"Step4form"} fromdata={cell} getReportingData={self.props.getReportingData}/>);
        }
            return (                 <BootstrapTable data={products} striped={true} hover={true}   hover={true}    pagination={true} search={true} exportCSV={true} expandComponent={ this.expandComponent }  bodyStyle={{'z-index': '-1 !important','overflow':'visible'}}>
                                        <TableHeaderColumn dataField="target" dataFormat={dataFormater} isKey={true}  dataSort={true}>Target Completetion Date</TableHeaderColumn>
                                        <TableHeaderColumn dataField="company" dataFormat={dataFormater} dataSort={true}>Company</TableHeaderColumn>
                                        <TableHeaderColumn dataField="pressure" dataFormat={dataFormater} dataSort={true} >Sample Number</TableHeaderColumn>
                                        <TableHeaderColumn dataField="material" dataFormat={dataFormater} dataSort={true} >Material</TableHeaderColumn>
                                        <TableHeaderColumn dataField="matlab" dataFormat={dataFormater} dataSort={true} >MAT LAB</TableHeaderColumn>
                                        <TableHeaderColumn dataField="odour" dataFormat={sdataFormater} dataSort={true} tdStyle={{ 'z-index': '-1 !important','overflow':'visible'}}>Odur</TableHeaderColumn>
                                        <TableHeaderColumn dataField="appearance" dataFormat={sdataFormater} dataSort={true} tdStyle={{ 'z-index': '-1 !important','overflow':'visible'}}>Appearance</TableHeaderColumn>
                                        <TableHeaderColumn dataField="gmo" dataFormat={sdataFormater}  tdStyle={{ 'z-index': '-1 !important','overflow':'visible'}}>GMO</TableHeaderColumn>
                                         <TableHeaderColumn dataField="cyto" dataFormat={sdataFormater}  tdStyle={{ 'z-index': '-1 !important','overflow':'visible'}}>Cytotoxicity</TableHeaderColumn>
                                          <TableHeaderColumn dataField="extraction" dataFormat={sdataFormater}  tdStyle={{ 'z-index': '-1 !important','overflow':'visible'}}>Extraction</TableHeaderColumn>
                                           <TableHeaderColumn dataField="pah" dataFormat={sdataFormater}  tdStyle={{ 'z-index': '-1 !important','overflow':'visible'}}>PAH</TableHeaderColumn>
                                           <TableHeaderColumn dataField="temperature" dataFormat={dataFormater}  >Temperature</TableHeaderColumn>
                                        <TableHeaderColumn dataField="edit" hidden={this.props.hideedit} dataFormat={bdataFormater}  >Edit</TableHeaderColumn>
                                    </BootstrapTable>

            );

        }
    }
