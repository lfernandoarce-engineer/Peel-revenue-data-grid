<img src="https://app.peelinsights.com/cdn/img/peel_black.svg" width=200>

## Instruction for completing and submitting the challenge:

Thanks for applying to Peel! 
Welcome to our coding challenge, this is a space for you to share with us how you work and reason about the problem presented, what things you care about when doing coding work, and how you approach problem solving. As such, through this challenge we are not expecting to check if you know the finest algorithms, have all the right answers to a given situation or if you are the best coder in the world. We believe there are no right or wrong answers, so please make yourself comfortable and focus on what you know best.

Luckily we have done some work before hand of setting up this project with the structure and boiler plate react/redux, so you can focus on the actual solution.

**Please submit your ideas to us in 1 week (max).** This will give us enough time to review your challenge with the rest of the team before the next interview. During this interview we will take some time to explore together your coding challenge submission, and will ask you any clarifying questions we might have.

Based on previous candidate experiences, we believe **it will take you between 8 and 10 hours to complete the challenge.** 

## Objective

Most times at Peel our web app has to deal with incredible big amounts of data that needs to be handled smoothly without compromising the user interaction, you are tasked to build a list component that can display revenue stats sorted by date and that it lets the user scroll through the content seemlessly while you are app handles in the background pagination, thottling and any other issues that the API could return.


### API
http://app.peelinsights.com/api/test_stats/

This API calculates revenue for our demo project and it returns maximum the last 10 days, although it allows pagination through `?=cursor` so you can keep getting previous days. The response also includes the `next_cursor` you should use.
Beware this API is been throttled to 20 requests per minute, consider that and any other bugs within your implementation. If you app gets throtlled you can look for the hold time in the headers with `Retry-After`.

Note: For extra bonus work, you can attach `group_by` with either `week`, `month` or `quarter`. Consider adding a UI for this if you plan to do the bonus work.

JSON Response Example
```
{
	"count": 10,
	"results": {
		"all": [{
			"ds": "2020-06-07",
			"y": 31623.22
		}, {
			"ds": "2020-06-06",
			"y": 31260.77
		}, {
			"ds": "2020-06-05",
			"y": 27953.93
		}, {
			"ds": "2020-06-04",
			"y": 25717.45
		}, {
			"ds": "2020-06-03",
			"y": 28496.04
		}, {
			"ds": "2020-06-02",
			"y": 28634.9
		}, {
			"ds": "2020-06-01",
			"y": 30592.73
		}, {
			"ds": "2020-05-31",
			"y": 30815.36
		}, {
			"ds": "2020-05-30",
			"y": 28315.92
		}, {
			"ds": "2020-05-29",
			"y": 25794.78
		}]
	},
	"next_cursor": 10
}
```


### DESIGNS
Designs are stored in Figma. You should create an account to be able to see them.

- [Figma - Table View](https://www.figma.com/file/m2Zgd0gxDoHlFFq0zaKTKb/JS-Challenge?node-id=1%3A6)


Font: [Open Sans](https://fonts.google.com/specimen/Open+Sans)


## Technical requirements
There are a few rules that we would like you to follow during your code challenge:
  - Use the React library to demonstrate component-oriented architecture.
  - Style your components, use an approach that you see fit.
  - Take care of mobile devices and make sure that your project works on smaller resolution screens.
  - Work closely with the design, try to implement it as accurately as possible.

For sharing purposes please create a **new GitHub repo**, deploy your project to the **GitHub pages** and provide the link to the repo.

Your submission should also include a readme file, where you can document your work, describe the features and the architectural decisions that you made. Feel free to share there your thoughts about the challenges that you faced implementing this code.


## What’s next?
Once you submit your solution, our team will review your code challenge, taking your experience level into account. The sample code provided by you should be in a state considered as a "production" ready - where each requested element is prepared and potentially ready to review with your colleagues.


Good luck!

**“The Challenge” has been created with the sole intention of being used as a guiding document for the current recruitment process. This means we won't be using it (all or parts of it) within our projects.**
