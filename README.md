# TV Show Search
Hi everyone!


This is my Desktop version of ***Search for tv Shows*** aplication.
This app allows you to search for cover images of movies or TV series.


Every time you search, you'll get some specific cover images from TV shows or movies.
All further responses to the user's request will be published on the same page without reload. If you want to prevent this, please reload the page and make the next request.


App is written on **JavaScript**, **Axios**, **HTML**, **CSS**  and using `preventDefault()` method applied on `eventListner`. 
Also you can find some   styles here.
Here's the [link](https://yevgenpanchenko.github.io/tvShowSearch/) do deployed app!


Aplication uses tvMaze's API.  After the user makes a request to the server, the app receives a response, and then the `makeImages()` function is called with the response data as a parameter. This function iterates over the received data and creates HTML image elements for each TV show found inside the response. 
