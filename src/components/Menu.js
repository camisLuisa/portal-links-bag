import Component, {Config} from 'metal-jsx';
import Item from './Item';

class Menu extends Component {
    render() {
        return (
            <ol>
                {this.props.items.map((item, index) => (
                    <li key={index}>

                        {item.link ? <Item title={item.title} link={item.link}/> : <Item title={item.title}/> }
                        
                        {item.itemList && <Menu items={item.itemList} />}

                    </li>
                ))}
            </ol>
        );
    }
}



Menu.PROPS = {
    items: Config.array()
};

export default Menu;