class Appcomponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="panel panel-primary" >
                    <div className="panel-heading" >
                        <h3 className="panel-title">
                            <span className="glyphicon glyphicon-stats"></span> {this.props.title}
                        </h3>
                    </div>
                    <div className="panel-body" style={{ 'overflow-y': 'scroll', 'height': '500px', 'font-size': 'large' }}>
                        <Viewobjectives />
                    </div>
                </div></div>);
    }
}

ReactDOM.render(<Appcomponent title="Employee Report" />,document.getElementById('emp_root'));
