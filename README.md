# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Naime Marseille**


## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[No outside resources were used.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The section of the code for handling guesses was initially challenging due to the complexity of nested conditional statements. While I understood the overall flow, implementing proved to be a struggle. Particularly,  the concept of "turn" in the context of the game. I wasn't sure if it referred to the computer's turn, a full gameplay cycle or the user's turn. To resolve this, I revisited the coding instruction to get some clarity on it. While doing that, I made sure to write down comments for each variable I created so far, realizing they would be used frequently in the guess function. Even though this procedure helped, I still found myself a bit lost because the meaning of "turn" was still confusing me. I realized that while coding, I had already made my own definition of what "turn" meant, and now struggled to accept a new one. When I noticed how much this detail hindered my understanding of the overall code, I decided to go old fashioned. I rewrote the map on paper broken down further with my own annotations to help me undertand the function of each conditional. From that point on, the actual coding became a breeze since I now had my own notes to refer to. Writing everything down also helped me renounce the old definition I had made and accept the new one.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[After completing my submission, I have a few questions and curiosities about web development. When it came to the design, I wanted to know how to implement a better layout. One that is more dynamic and eye catching for a game website. On the other hand I also had a lot of questions about what affects a website's response time. More specifically, knowing how games can get more complicated, what are some good practices for reducing load time? While coding, I noticed most of my mistakes were made because of the back and forth between the different files. This made me question how teams building a website work to avoid these misunderstandings efficiently. Especially since often times groups work on different files and bring it all togetehr at the end. How do they keep track of what's going on in each file? How do they avoid confusion?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[With a few more hours to work on this project I would add to the game some additional functionality, better the design and most definitely search on the internet some cool things to implement. While coding, I found myself wanting to add more difficulty to the simple game. One of those functionalities would be making the clue sequence faster after each new clue is revealed. This would require modifying the timing variables and ensuring the player still has ample time to react. In addition, a point system would be an easy add-on that can be developed by adding different functions for the points amassed. For example, bonus points can be rewarded when the user has a winning streak or the points can be used to bypass a loss by giving up a certain amount. In terms of UI, I love getting creative with my websites by importing dynamic fonts and color schemes. Additionally, I'd add interactive game graphics, such as animations for a win or loss, or visual effects for streaks. Finally, I would look up some modern JavaScript libraries or game resources and incorporate them into the project to enhance the experience. ]

## Video Walkthrough 

Add your screen recordings for specified implemented features here:
[losing screen recording](https://www.loom.com/share/06a52ef11f4445abb2c7f37a29b1e476?sid=79ab2d7b-ddee-403d-a245-22f95db0fa26)
[winning screen recording](https://www.loom.com/share/366ed6f566d540249b6149058ebf8337?sid=b5c3e359-fc1b-4a7f-a74f-1ecdf970d644)

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/64c8f3d7aff242ec8b8b8c8207bdc6cc?sid=b8a0255a-e04a-4dff-8c3d-343b0edf5310e)


## License

    Copyright [Naima Marseille]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
