
//Finish date checkbox component
class Checkfinaldate extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state={
      matlab:this.props.mat_lab,
      id:this.props.section,
      checked:(this.props.checked!=''?true:false),
      enddate:'setenddate',
      disabled:this.props.disabled,

    }

  }
  setInvoiceReminder(){
    const request = window.superagent;var self = this;
    this.setState({"checked":true,disabled:"disabled"},()=>{
      var send_data = this.state;
      request.post("model/bs6920_dashboard/bs6920_testing.php")
              .send(send_data)
              .end(function (err, resp) {
                  if (err) {
                      console.error(err);
                  } else {

                      const newresponse = JSON.parse(resp.text);
                      console.log(newresponse);
                      if(newresponse.status.indexOf('moved') != -1){
                        self.props.showFileAlert();
                      }
                      self.props.getReportingData();


                  }
              });
    })
  }
  render(){
    return(
      <span>
      Finish Test    <input type="checkbox"  onChange={this.setInvoiceReminder.bind(this)} disabled={this.state.disabled}  checked={this.state.checked} />

      </span>
    );
  }
}
