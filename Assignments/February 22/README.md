
# Generative Art and Data Visualization 

![showcase](https://user-images.githubusercontent.com/31856059/155204539-5427138c-1a52-4ab1-ade8-a81549c57f81.png)
## Generative Art 
I played with the vertex of the text and created a aesthetic looking effect by drawing a line from the points of the text outline and transforming it



## Data Visualization 
This application visualizes the annual electricity consumption in the UAE from the year 2010.
I imported data from the CSV file and visualized it in the bar graph 
[Dataset can be found here:](https://addata.gov.ae/dataset/electricity-consumption)







### Process 
````loadtoTable()```` function minimized my work on splitting the strings as this function automatically converts csv to a 2D array.I iterated through that array and mapped the values from the rows and colums to the rectangle as seen in the image.For the generative text part, I used ````textToFont()```` to gather the points from the text outline and manipulate those points from lines using simple repeating transformation.


### Things that I learned 
1. I learned how to get the points from the text using ````textToFont()```` function and learned to resample the points according to my need 
2. I discovered that when i want to draw the height of the rectangle in the opposition direction , I can simply put a negative sign in the height argument  
3. I learned how to use ````loadtoTable()```` function which automatically converts the csv file into a 2D array like data type 
4. I learned to use````resetMatrix()```` function



### Challenges 
1.  Challenges Loading Font 
2.  The ````textToFont()```` function only works on the externally loaded fonts 
3.  Challenges drawing bar graph over the generative text because of the transformation 
4.  Challenges in properly manipulating the lines from the point to create a aesthetic effect

