# UFOs

## Overview
This project aims to compile various UFO sightings across different areas around the world using a combination of HTML and JavaScript. We are to create an HTML website which contains a JavaScript table which can be filtered with various entries.

## Results
With the given dataset, each entry is detailed in these categroies - __Date, City, State, Country, Shape, Duration & Comments__. Since only the first five categories have static entries, we chose to limit our JS table filters with these categories. 

To search for a UFO sighting, we simply have to enter queries in provided __Filter Search Boxes__. At default, the webpage will show all entries of our UFO Sightings dataset. If we want to start filtering through the dataset, we can start looking up entries with the Search Boxes. We can opt to search using one or multiple parameters. See images below for reference.

<div align='center'>


<p float='left'>

<img src = 'https://raw.githubusercontent.com/RobC30/UFOs/main/Resources/no_filter.png' width='600'>
<img src = 'https://raw.githubusercontent.com/RobC30/UFOs/main/Resources/multiple.png' width='600'>

</p>

_Default (No Entered Search Parameter) vs. Multiple Search Parameters_

</div>


## Summary
One major drawback of the search criteria is that has to be an exact match with the dataset. It is case-sensitive therefore entering an uppercase of any letter or misspelling a city will yield zero results. If we are to __include REGEX into our script__, this will potentially solve the problem.

Another recommendation is to create a date range search criteria for a future-proof of this table. If we are to increase our dataset, it will provide search maneuverability. We can also create a database of all known State/Country abbreviations with its full name, then cross-reference it to the JS table for everyone's easier readability.