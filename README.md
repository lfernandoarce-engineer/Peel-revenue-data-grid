## Features:

This solution provide components that get information about dialy revenue data from PeelInsight APIs. With the options at the top of the grid, you can group this information by week, month or quarter.
The user can scroll down in order to navigate and visualize the whole data. 

## Architectural decisions

The solution was divided in two principal components groups: company-brand and dataGrid.
For the company-grand, the component use a couple of sub-components, in order to pass parameters with information to be display like Author name. In order to make it responsive, I used Flex box layout.

For the dataGrid, the component use other components like filters and gridHeaders. For the layout, in order to make it responsible, I used Flex box layout, with that we saved a lot of responsibe logic and CSS rules that would make the solution more complex. The DataGrid contains all logic related to API calls and paginations. For Pagination or infinity scroll down I did not use any especial library, I detect when scroll is at the bottom and if there is a next page, the component request that information to the API, making it a Lazy loading solution. For the Filters, the DataGrid provided as a property the reference to the method that is going to be call with the appropiate parameteres and perform the GroupBy at the API.  

In order to take advantage to the React-Redux library, two actions were created: setPage (this one replace totally the information) and appenPage (this one append new information to the state - necesary for the scroll down action). A Connection was created between dataGrid component and the store, this made able to get any state update into the revData property and to trigger the actions, these were mapped to setPageDispatch and appendPageDispath functions.
