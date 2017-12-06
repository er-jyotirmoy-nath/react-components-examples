/*
 * The code on this file is licensed to NSF International
 * All rights reserved
 */

//$this->row["MAT_LAB"].'@'.$this->row["SAMPLE_NUMBER"]
class Step4form extends React.Component {
    constructor(props){
        super(props);
        let recv = '';
        recv = this.props.fromdata;
        let datapush = recv.split('@');
        this.state = {
            sample_number:datapush[1],
            comments:'',
            oldcomments:'',
            step_type:'step4',
            matlab:datapush[0],
            raised_issue:'',
            responsetext:''

        };
        this.submitStep4Form = this.submitStep4Form.bind(this);
        this.updateComments = this.updateComments.bind(this);
    }
    componentWillMount(){
        let send_data = {"sample_await_notes": "get", sample: this.state.sample_number};let response_test = '';var self = this;
        const request = window.superagent;
        request.post('model/bs6920_dashboard/bs6920Step4Class.php')
            .send(JSON.stringify(send_data))
            .end(function(err,response){
                if(err){console.error(err);}else{

                 response = JSON.parse(response.text);
                    if (response.length === 0) {
                        response_test = 'No Comments';
                    }
                    for (var i = 0; i < response.length; i++) {
                        response_test += response[i];
                    }
                    self.setState({oldcomments:response_test});
                }
            });
    }
    updateComments(e){
        this.setState({comments:e.target.value});
    }
    submitStep4Form(e){
        e.preventDefault();const request = window.superagent;var self = this;

        self.setState({raised_issue:e.target.name},()=>{
          request.post('model/bs6920_dashboard/bs6920Step4Class.php')
          .type('form')
          .send(self.state)
          .end(function(err,resp){
              if(err){console.error(err);}
              else{
                var newresponse = JSON.parse(resp.text);
                if(newresponse.status == "success"){
                    self.props.getReportingData();
                }
              }
          });
        });
    }
    render(){

        return (<div>
        {this.state.responsetext}
        <form method="post" >
                            <div className="form-group">
                                <label for="recipient-name" className="form-control-label">Project Number:</label>
                                <input type="text" className="form-control" ref="sample_name" value={this.state.sample_number}  readonly="readonly" />
                            </div>
                            <div className="form-group">
                                <label for="recipient-name" className="form-control-label">Notes:</label>
                                <p  style={{'overflow-y': 'scroll', 'max-height': '100px'}}>
                                    <div dangerouslySetInnerHTML={{__html: this.state.oldcomments}} />

                                </p>
                            </div>

                            <div className="form-group">
                                <label for="message-text" className="form-control-label">Message:</label>
                                <textarea className="form-control" ref="stepreason" onChange={this.updateComments}></textarea>
                            </div>
                            <button type="submit" name="sample_ok" className="btn btn-primary" onClick={this.submitStep4Form}>Sample & Date Ok</button>
                            <button type="submit" name="sample_issue" className="btn btn-primary" onClick={this.submitStep4Form}>Sample Issues</button>
                            <button type="submit" name="date_issue" className="btn btn-primary" onClick={this.submitStep4Form}>Date Issues</button>
                            <button type="submit" name="file_issue" className="btn btn-primary" onClick={this.submitStep4Form}>File Issues</button>

                        </form>
                        </div>);
    }
}
