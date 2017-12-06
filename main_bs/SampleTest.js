/*
 * The code on this file is licensed to NSF International
 * All rights reserved
 */
const DayPickerInput = window.DayPicker.Input;

//Sample on Test
class SampleTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [],
            matlab:'',
            section:'',
            newdate:'',
            showfinaldate:false,
            showAlert:'false'
        };
        this.showFileAlert = this.showFileAlert.bind(this);
    }
    showFileAlert(){
      this.setState({showAlert:'true'},()=>{
        setTimeout(()=>{
          this.setState({showAlert:'false'});
        },2500);
      });
    }
    render() {

        var products = this.props.sampleontest;var self = this;
        //const fetchInfo = {dataTotalSize: this.state.reports.length};
        function dataFormater(cell, row) {
            return  cell;
        }
        function sdataFormater(cell, row) {
            var setData = cell;
            if(cell != ''){
                return (<Performtesting setData={setData} getReportingData={self.props.getReportingData} showFileAlert={self.showFileAlert} />);
              }
            else{
              return(<span></span>);
            }
        }
        function bdataFormater(cell, row){

            return (<Actionmodal componentname={"Step5form"} fromdata={cell} getReportingData={self.props.getReportingData}/>);
        }
            return(
              <div className="row" id="sot_tab" style={{"border-color": "#d64c67"}}>
                    <div className="col-lg-12">
                        <div className="panel panel-primary" style={{"border-color": "#67ad69"}} >
                            <div className="panel-heading" style={{"background-color": "#67ad69", "border-color": "#67ad69"}}>
                                <h3 className="panel-title">
                                    <span className="glyphicon glyphicon-signal"></span> Samples on Test
                                </h3>
                            </div>
                            <div className="panel-body">
                            <div>
                            {this.state.showAlert=="true"?<Showalert />:""}
                            <BootstrapTable data={products} striped={true} hover={true}   hover={true}    pagination={true} search={true} exportCSV={true} expandComponent={ this.expandComponent }  bodyStyle={{'z-index': '-1 !important','overflow':'visible'}}>
                                  <TableHeaderColumn dataField="target" dataFormat={dataFormater} isKey={true}  dataSort={true}>Target Completetion Date</TableHeaderColumn>
                                  <TableHeaderColumn dataField="company" dataFormat={dataFormater} dataSort={true}>Company</TableHeaderColumn>
                                  <TableHeaderColumn dataField="sample" dataFormat={dataFormater} dataSort={true} >Sample Number</TableHeaderColumn>
                                  <TableHeaderColumn dataField="material" dataFormat={dataFormater} dataSort={true} >Material</TableHeaderColumn>
                                  <TableHeaderColumn dataField="matlab" dataFormat={dataFormater} dataSort={true} >MAT LAB</TableHeaderColumn>
                                  <TableHeaderColumn dataField="odour" dataFormat={sdataFormater} dataSort={true} tdStyle={{ 'z-index': '-1 !important','overflow':'visible'}}>Odur</TableHeaderColumn>
                                  <TableHeaderColumn dataField="appearance" dataFormat={sdataFormater} dataSort={true} tdStyle={{ 'z-index': '-1 !important','overflow':'visible'}}>Appearance</TableHeaderColumn>
                                  <TableHeaderColumn dataField="gmo" dataFormat={sdataFormater} dataSort={true} tdStyle={{ 'z-index': '-1 !important','overflow':'visible'}}>GMO</TableHeaderColumn>
                                  <TableHeaderColumn dataField="cyto" dataFormat={sdataFormater}  tdStyle={{ 'z-index': '-1 !important','overflow':'visible'}}>Cytotoxicity</TableHeaderColumn>
                                   <TableHeaderColumn dataField="extraction" dataFormat={sdataFormater}  tdStyle={{ 'z-index': '-1 !important','overflow':'visible'}}>Extraction</TableHeaderColumn>
                                    <TableHeaderColumn dataField="pah" dataFormat={sdataFormater}  tdStyle={{ 'z-index': '-1 !important','overflow':'visible'}}>PAH</TableHeaderColumn>
                                     <TableHeaderColumn dataField="temperature" dataFormat={dataFormater}  >Temperature</TableHeaderColumn>
                                  <TableHeaderColumn dataField="edit" hidden={this.props.hideedit} dataFormat={bdataFormater}  >Edit</TableHeaderColumn>
                              </BootstrapTable></div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }
    }
