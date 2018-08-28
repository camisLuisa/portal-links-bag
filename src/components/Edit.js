import Component, {Config} from 'metal-jsx';
import Input from './Input';

class Edit extends Component {
    render() {
        return (
            <div>
                <button type="button" data-onclick= {this.myFunction.bind(this)}>edit</button>
                <Input showInput={this.props.isActive}/>
                
            </div>
            
        );
    }

    myFunction(event) {
        this.props.isActive = true;
    }
    
}

Edit.PROPS = {

    isActive: Config.bool().value(false),
    title: Config.string(),
}

export default Edit;