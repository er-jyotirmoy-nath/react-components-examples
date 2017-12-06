

class Step6form extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        let oldData = this.props.fromdata;
        let datapush = oldData.split('@');
        this.state = {
            sample_number: datapush[1],
            mat_lab: datapush[4],
            person: datapush[3],
            time: datapush[2],
            key: datapush[0],
            not_send: "no",
            permission: '2',
            raised_issue: '',
            comments: '',
            file: [],
            test_status: '',
            validateForm: false,
            responsetext:''

        };
        this.updateComments = this.updateComments.bind(this);
    }
    updateComments(e) {
        this.setState({comments: e.target.value});
    }
    handleFileSubmit(e) {
        e.preventDefault();var self = this;
        var request = window.superagent;
        console.log(this.state.validateForm);

        if (this.state.validateForm) {
            request.post('bs_step6_upload.php')
                    .send(new FormData(document.getElementById('myForm')))
                    .end((err, resp) => {
                        if (err) {
                            console.error(err);
                        } else {
                            self.setState({responsetext:resp.text},()=>{
                              setTimeout(()=>{
                                self.props.getReportingData();
                                self.props.closemodal();
                              },2500);
                            });
                        }
                    });
        } else {
            alert("Please select all files!!");
        }
    }
    handleUpload(e) {
        this.setState({file: e.target.files});
    }
    updateValue(e) {
        if (this.state.file.length > 0) {
            this.setState({validateForm: true});
        }
    }
    render() {
        return (
                <div>

                    <div dangerouslySetInnerHTML={{__html: this.state.responsetext}} />
                    <form id="myForm" onSubmit={this.handleFileSubmit.bind(this)}>
                        <input type="hidden" name="sample_number" value={this.state.sample_number}  />
                        <input type="hidden" name="mat_lab" value={this.state.mat_lab} />
                        <input type="hidden" name="person" value={this.state.person} />
                        <input type="hidden" name="time" value={this.state.time} />
                        <input type="hidden" name="key" value={this.state.key}  />
                        <input type="hidden" name="not_send" value={this.state.not_send} />
                        <input type="hidden" name="permission" value={this.state.permission}  />
                        <input type="hidden" name="raised_issue" value={this.state.raised_issue} />
                        <label>Select Report to upload</label>
                        <input name="uploaded[]" ref="uploaded" type="file" multiple="multiple" accesskey="U" onChange={this.handleUpload.bind(this)}  /><br />
                        <input type="radio" value="1" name="test_status" ref="test_status" onChange={this.updateValue.bind(this)}/><label className="text-success" >Testing Passed</label><br />
                        <input type="radio" value="2" name="test_status" ref="test_status" onChange={this.updateValue.bind(this)}/><label className="text-danger">Testing Failed</label><br />
                        <input type="radio" value="3" name="test_status" ref="test_status" onChange={this.updateValue.bind(this)}/><label className="text-warning">Testing Failed and Retest Available</label><br />
                        <label>Comments:</label>
                        <textarea name="comments" className="form-control" rows="4" ></textarea>
                        <br/>

                        <input  type="submit"  accesskey="S"   className="btn btn-default" value="Save to Application" />
                    </form>
                </div>
                );
    }
}
