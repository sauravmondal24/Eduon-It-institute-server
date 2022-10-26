const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/dataList/categories.json');
const course = require('./data/dataList/courseDetails.json');

app.get('/', (req, res) => {
	res.send('Server App running');
});

app.get('/course-category', (req, res) => {
	res.send(categories);
});

app.get('/category/:id', (req, res) => {
	const id = req.params.id;

	if (id === '07') {
		res.send(course);
	} else {
		const categoryCourse = course.filter((n) => n.category_id === id);
		res.send(categoryCourse);
	}
});

app.get('/course', (req, res) => {
	res.send(course);
});

app.get('/course/:id', (req, res) => {
	const id = req.params.id;
	const selectedCourse = course.find((n) => n._id === id);
	res.send(selectedCourse);
});

app.listen(port, () => {
	console.log('EduOn Server App Running');
});
