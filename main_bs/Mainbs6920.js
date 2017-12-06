
class Mainbs6920 extends React.Component {
constructor(props){
	super(props);
	this.state = {
    sampleawait:[],
    sampleawaitcount:'',
    sampleontest:[],
    sampleontestcount:'',
    awatingreport:[],
    awaitreportcount:'',
    reportingnotified:[],
    reportnotnotifiedcount:'',
    showloader:true
  };
	this.hideLoader = this.hideLoader.bind(this);
  this.getReportingData = this.getReportingData.bind(this);
}
componentWillMount() {
	console.log(window);
  this.getReportingData();
}

getReportingData(){
  let sampleawait = [];let sampleawaitcount = '';var self = this;
  const request = window.superagent;
  let valuenew = 0;
  //Get Sample Awaiting data
  let send_data = {load_step4: "get_step4_data"};
  request.post("model/bs6920_dashboard/bs6920Step4Class.php")
          .send(send_data)
          .end(function (err, resp) {
              if (err) {
                  console.error(err);
              } else {
                  const newresponse = JSON.parse(resp.text);
                  sampleawait = newresponse[0];
                  sampleawaitcount = newresponse[1];
                  self.setState({sampleawait:sampleawait,sampleawaitcount:sampleawaitcount},()=>{

                  });
              }
          });
  //Get Sample on Test data
  let send_data1 = {load_step5: "load_step5"};
  request.post("model/bs6920_dashboard/bs6920Step5Class.php")
          .send(send_data1)
          .end(function (err, resp) {
              if (err) {
                  console.error(err);
              } else {
                  const newresponse = JSON.parse(resp.text);
                  self.setState({sampleontest: newresponse[0],sampleontestcount:newresponse[1]},()=>{

                  });
              }
          });
  //Get Awaiting Report data
  let send_data3 = {load_step6: "get_step6_data"};
  request.post("model/bs6920_dashboard/bs6920Step6Class_1.php")
          .send(send_data3)
          .end(function (err, resp) {
              if (err) {
                  console.error(err);
              } else {
                  const newresponse = JSON.parse(resp.text);
                  self.setState({awaitreport: newresponse[0],awaitreportcount:newresponse[1]});
              }
          });
  //Get Reporting Notified data
  let send_data4 = {load_step7_2: "get_step7_data"};
  request.post("model/bs6920_dashboard/bs6920Step7Class.php")
          .send(send_data4)
          .end(function (err, resp) {
              if (err) {
                  console.error(err);
              } else {
                  const newresponse = JSON.parse(resp.text);
                  self.setState({reportnotnotified: newresponse[0],reportnotnotifiedcount:newresponse[1]},()=>{

                  });
              }
          });

}
hideLoader(){
	this.setState({showloader:false});
}
render() {
return (
          <div className="class-name">
            {this.state.showloader==true?<span><Loader /></span>:""}
              <div >
                  <Appheader title={this.props.title} sampleawaitcount={this.state.sampleawaitcount} sampleontestcount={this.state.sampleontestcount} awaitreportcount={this.state.awaitreportcount} reportnotnotifiedcount={this.state.reportnotnotifiedcount} />
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <div id="container-fluid">
                          <div className="row" style={{'border-color': '#d64c67', 'overflow': 'visible !important'}}>
                              <div className="col-lg-12">
                                  <div className="panel panel-primary" style={{"border-color": "#d64c67"}} >
                                      <div className="panel-heading"    style={{"background-color": "#d64c67"}} >
                                          <h3 className="panel-title">
                                              <span className="glyphicon glyphicon-signal"></span> Samples Awaiting Checks
                                          </h3>
                                      </div>
                                      <div className="panel-body" >
                                          <Bs6920Sampleawait sampleawait={this.state.sampleawait} getReportingData={this.getReportingData}/>
                                      </div>

                                  </div>

                              </div>
                          </div>
                          <hr/><br/><br/>
                          <SampleTest sampleontest={this.state.sampleontest} getReportingData={this.getReportingData} />
                          <hr/><br/><br/>
                          <Bs6920Awaiting awaitreport={this.state.awaitreport} getReportingData={this.getReportingData} />
                          <hr/><br/><br/>
                          <Bs6920Reporting reportnotnotified={this.state.reportnotnotified} getReportingData={this.getReportingData} hideLoader={this.hideLoader} />
                      </div>
                  </div>


              </div>
          </div>
                );
        }
        }
        ReactDOM.render(<Mainbs6920 title="BS Lab Dashboard" />, document.getElementById('app'));
