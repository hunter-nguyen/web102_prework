# WEB102 Prework - *Sea Monster Crowdfunding*

Submitted by: **Hunter Nguyen**

**Sea Monster Crowdfunding** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **2.5-3** hours spent in total

## Required Features

The following **required** functionality is completed:

* [✅] The introduction section explains the background of the company and how many games remain unfunded.
* [✅] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [✅] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [✅] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented: 

- In the future, I hope to add new filters based on other properties of the games, such as the sorted number of backers, alphabetical sort, etc..
- I hope to also add some features that would allow the user to contribute to the game itself, and that data being reflected in real time.

## Video Walkthrough

Here's a walkthrough of implemented features:

![hn_web102_submission](https://github.com/user-attachments/assets/1602e69f-f95c-410d-b764-1d97f8ab6902)


<!-- Replace this with whatever GIF tool you used! -->
GIF created with [LiceCap]([url](https://www.cockos.com/licecap/))  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
- Looping through each game card and dynamically creating and appending elements to the DOM was challenging because it required careful handling of both the data and the HTML structure. Each game card needed to be created with specific attributes, such as image source and text content, which meant I had to ensure that each property of the game object was correctly mapped
- Integrating filtering with DOM updates was another chalenging area. Handling this correctly required understanding how to manipulate the DOM efficiently, using functions like deleteChildElements to clear out old content and then appending the filtered results.

## License

    Copyright [2024] [Hunter Nguyen]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
