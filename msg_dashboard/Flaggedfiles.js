

 class Flaggedfiles extends React.Component {
   constructor(props){
   	super(props);
   	this.state = {
      flaggedfiledetails:'',
      unassignedfilesdetails:'',
      newfilesdetails:'',
      peerreviewfiles:'',
      mypeerreviewfiles:''
    };
   }
   componentWillMount() {

   }
    render() {
        return (
            <div>
                <label>My Files</label><hr/>
                <p>
                {this.state.flaggedfiledetails}
                </p>
                <br/>
                <label>Unassigned New Files</label><hr/>
                <p>
                {this.state.unassignedfilesdetails}
                </p>
                <br/>
                <label>New Files for - Alexander Green</label></hr>
                <p>
                  {this.state.newfilesdetails}
                </p>
                <br/>
                <label>Peer Review Files</label><hr/>
                <p>
                  {this.state.peerreviewfiles}
                </p>
                <br/>
                <label>My (Alexander Green) Review Files</label>
                <p>
                {this.state.mypeerreviewfiles}
                </p>
            </div>
        );
    }
}
