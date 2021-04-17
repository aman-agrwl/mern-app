import React, { Component } from 'react';
import CollapsibleTable from '../../components/CollapsibleTable/CollapsibleTable';
import styles from './Home.module.css';
import Card from '@material-ui/core/Card';

import API from '../../utils/API';



class Home extends Component {
	state = {
		books: [],
		title: '',
		author: ''
	};

	componentDidMount() {
		this.loadBooks();
	}

	loadBooks = () => {
		API.getBooks()
			.then(res => this.setState({ books: res.data, title: '', author: '' }))
			.catch(err => console.log(err));
	};

	deleteBook = id => {
		API.deleteBook(id)
			.then(res => this.loadBooks())
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.title && this.state.author) {
			API.saveBook({
				title: this.state.title,
				author: this.state.author
			})
				.then(res => this.loadBooks())
				.catch(err => console.log(err));
		}
	};


	render() {


		return (
			<div>
				<Card className={styles.custom} variant="outlined">
					<div>
					<h2 className={styles.center}>Analyze real time data</h2>
					<CollapsibleTable />
					</div>
				</Card>
			</div>
		);
	}
}

export default Home;