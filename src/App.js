import Component from 'metal-jsx';
import './style/main.scss';
import Menu from './components/Menu';

const data = [
	{
	  title: 'Marketing:',
	  itemList: [
		{
		  title: 'Guidelines',
		  link: 'https://blueprints.liferay.design/'
		},
		{
		  title: 'Resources',
		  link: 'https://blueprints.liferay.design/docs/resources/color/digital.html'
		}
	  ]
	},
	{
	  title: 'Product Test Servers:',
	  itemList: [
		{
		  title: 'DXP',
		  itemList: [
			{
			  title: 'Web:',
			  itemList: [
				{
				  title: 'Master',
				  link: 'https://master.lfr.io/'
				},
				{
				  title: 'Forms',
				  link: 'https://forms.liferay.com/'
				}
			  ]
			},
			{
			  title: 'Local:',
			  itemList: [
				{
				  title: 'Community Edition',
				  link: 'http://192.168.109.41:8181/'
				},
				{
				  title: 'Enterprise Edition',
				  link: 'http://192.168.109.41:7100/'
				}
			  ]
			}
		  ]
		},
		{
		  title: 'Analytics Cloud',
		  link: 'https://analytics-dev.liferay.com/'
		},
		{
		  title: 'Commerce',
		  link: 'https://pxy-commerceinternal.wedeploy.io'
		},
		{
		  title: 'Loop',
		  link: 'https://loop-uat.liferay.com'
		}
	  ]
	},
	{
	  title: 'Design Team:',
	  itemList: [
		{
		  title: 'Team Site',
		  link: 'https://design.liferay.com/'
		},
		{
		  title: 'Github',
		  link: 'https://github.com/liferay-design'
		},
		{
		  title: 'Dribbble',
		  link: 'https://dribbble.com/liferay'
		},
		{
		  title: 'Twitter',
		  link: 'https://twitter.com/Liferay_UX'
		},
		{
		  title: 'Instagram',
		  itemList: [
			{
			  title: 'LATAM',
			  link: 'https://www.instagram.com/liferaydesignlatam/'
			},
			{
			  title: 'Global',
			  link: 'https://www.instagram.com/liferay_ux/'
			}
		  ]
		}
	  ]
	}
  ]

class App extends Component {
	render() {
		return (
			<Menu items={data}/>
		);
	}
}

export { App };
export default App;
