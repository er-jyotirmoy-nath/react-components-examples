class Performtesting extends React.Component{
  constructor(props){
    super(props);
  }
  setStartDate(send_data){
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
  render(){
    var setData = [];
    var oldData = this.props.setData;
    setData = oldData.split('@');var self = this;
    return(
      <span>
      <i className="fa fa-check" aria-hidden="true"></i>
      <Checkfinaldate mat_lab={setData[2]} section={setData[3]} checked={setData[1]} disabled={(setData[1]!=''?'disabled':'')} getReportingData={self.props.getReportingData} showFileAlert={self.props.showFileAlert} />
      <br/>
      {setData[1] == ''?<DayPickerInput className="form-control"
      onDayChange={function(day){var send_data={startdate:window.moment(day._d).format(),matlab:setData[2],id:setData[3]};self.setStartDate(send_data);}}
      placeholder="MM/DD/YYYY"
      value={setData[0]}
      />:<span>{setData[1]}</span>}
      </span>
    );
  }
}
