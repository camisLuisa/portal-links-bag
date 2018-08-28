import Component, {Config} from 'metal-jsx';
import Edit from './Edit';
import Delete from './Delete';

class Item extends Component {
    render(){
        return (
            <div>

                {this.props.link ? <a href={this.props.link}>{this.props.title}</a> : this.props.title }<Edit title={this.props.title}/><Delete/>
            </div>
        );
    }
}

Item.PROPS = {
    title: Config.string(),
    link: Config.string(),
    itemList: Config.array() 

}

export default Item;