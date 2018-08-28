import Component, {Config} from 'metal-jsx';

class Input extends Component {
    render() {
        return (
            <div>
                {this.props.showInput && <div><input type='text' value={this.props.title}/><input type='submit' value='save'/></div>}
            </div>
            
        );
    }

}

Input.PROPS = {

    title: Config.string(),
    showInput: Config.bool().value(false)
}

export default Input;