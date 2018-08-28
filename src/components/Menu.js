import Component, {Config} from 'metal-jsx';
import Edit from './Edit';
import Delete from './Delete';

class Menu extends Component {
    render() {
        return (
            <ol>
                {this.props.items.map((item, index) => (
                    <li key={index}>

                        {item.link ? <a href={item.link}>{item.title}</a> : item.title }<Edit/><Delete/>

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