 class Deletefilebutton extends React.Component {
   constructor(props){
   	super(props);
   	this.state = {};
    console.log(this.props);
    this.unlinkFile = this.unlinkFile.bind(this);
   }
   unlinkFile(e){
     console.log(e);
     e.preventDefault();
     const request = window.superagent;var self = this;var filelisting = '';
     let send_data = {delete_file: "delete",unique_id:self.props.uniqueid,linkstr:self.props.linkstr};
     request.post("model/bs6920_dashboard/bs6920Step7Class.php")
             .send(send_data)
             .end((err,resp)=>{
               if(err){console.log(err);}
               else{
                 console.log(resp);
                 self.props.getFileDetails();
               }
             });
   }
    render() {
        return (
            <button className="btn btn-default" ><i className="fa fa-trash" aria-hidden="true" onClick={this.unlinkFile}></i></button>
        );
    }
}
//Step 7 Uploaded Files Details
class Step7form extends React.Component {
  constructor(props) {
    super(props);
    let propsdata = this.props.fromdata;
    let datapush = propsdata.split('@');

    this.state = {
      sample:datapush[0],
      filelisting:''
    };

    this.getFileDetails = this.getFileDetails.bind(this);

  }
  componentWillMount() {
    this.getFileDetails();
  }
  getFileDetails() {
    const request = window.superagent;var self = this;var filelisting = '';
    let send_data = {get_files: "get_sample_files",sample_number:this.state.sample};
    request.post("model/bs6920_dashboard/bs6920Step7Class.php")
            .send(send_data)
            .end(function (err, resp) {
                if (err) {
                    console.error(err);
                } else {
                    const newresponse = JSON.parse(resp.text);
                    console.log(newresponse);
                    filelisting = newresponse.map((item) => {
                        return (<div className="bs-callout bs-callout-primary">
                        <h5>{item.person} on {item.time}</h5>
                            <span><Deletefilebutton linkstr={item.str} uniqueid={item.uniqueid} getFileDetails={self.getFileDetails}/></span>
                            <a  href={item.href} className="file-link" target="_blank">{item.anchorText} </a>                            
                            <br/>{item.issues!=""?<span>Issues: {item.issues}</span>:""}
                    </div>);
                    });
                    self.setState({filelistings:filelisting});
                }
            });
  }
  render() {
    return ( <div className = "class-name" >
      <span > {this.state.filelistings} < /span>

      </div>
    );
  }
}
