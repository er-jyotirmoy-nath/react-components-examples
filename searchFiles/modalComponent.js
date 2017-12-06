/*
 * The code on this file is licensed to NSF International
 * All rights reserved
 */
 //Progress Bar Component
 var ProgressBar = ReactBootstrap.ProgressBar;


//Sample Search Component
class Samplesearchcomp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      company:'',
      contact:'',
      progress:'',
      pm:'',
      passcode:'',
      wdth:''
      };
  }
  componentWillMount(){
    const request = window.superagent;var self = this;
		let send_data = {"sample":this.props.sample_number};
		request.post("model/dashboard/searchFile.php")
				.send(JSON.stringify(send_data))
				.end(function(err,resp){
					if(err){console.error(err);}
					else{
            var newresponse = JSON.parse(resp.text);
            console.info(newresponse);
            if(newresponse.status == "success"){
              self.setState({company:newresponse.data.company,contact:newresponse.data.contact_name,progress:newresponse.data.next_step,
                            pm:newresponse.data.pm,passcode:newresponse.data.passcode,wdth:newresponse.data.wdth});
            }
					}
				});
  }
  render(){
    return(
      <div>
      <div className="row">
      <div className="col-sm-12"><h5>Details for: {this.props.sample_number}</h5></div>
      </div>
    <div className="row">
      <div className="col-sm-6"><label>Company:</label></div>
      <div className="col-sm-6">{this.state.company}</div>
      </div>
    <div className="row">
      <div className="col-sm-6"><label>Contact Name:</label></div>
      <div className="col-sm-6">{this.state.contact}</div>
      </div>
    <div className="row">
      <div className="col-sm-6"><label>Progress:</label></div>
      <div className="col-sm-6">{this.state.progress}</div>
      </div>
    <div className="row">
      <div className="col-sm-6"><label>Project Manager:</label></div>
      <div className="col-sm-6">{this.state.pm}</div>
      </div>
      <br/>
      <a href="file_update7.php?sample_number=&passcode=" target="_blank"><span className="glyphicon glyphicon-ok-sign" style={{'font-size':'20px'}}></span>  Click to view Details for {this.props.sample_number}</a>
      <ProgressBar bsStyle="success" now={this.state.wdth} />
      </div>
    );
  }
}

 class Actionmodal extends React.Component {
  constructor(props){
            super(props);
            this.state = { showModal: false };
            this.close = this.close.bind(this);
            this.open = this.open.bind(this);
        }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    var Button = window.ReactBootstrap.Button;
     var Modal = window.ReactBootstrap.Modal;
     var Modalbody;
     switch(this.props.searchtype){
         case"sample":
            Modalbody = Samplesearchcomp;
             break;

     }
    return (
      <div>
         <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.open.bind(this)}
        >
          <span className="glyphicon glyphicon-search"></span> Search File
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>File Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Modalbody  sample_number={this.props.sample_number} />
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};
