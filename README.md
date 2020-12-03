# Go
[Play now!](https://herndal.github.io/go)

This introductory rendition for two players was made with vanilla JavaScript and webpack.

## Background of Go
Go is an ancient board game of Chinese origin. Characterized by extremely simple rules on a large playing field, two players battle to cover a majority of the board. In 2016, Go became the last board game for AI to best humans at. The brute-force search and analysis algorithms that worked for games like Chess were impossible in a game of so many possibilities. The project that made the champion program created great advances in AI, and was filmed for a fantastic 90-minute documentary that you can watch on YouTube [here](https://www.youtube.com/watch?v=WXuK6gekU1Y). This documentary and a good friend inspired me to learn to play Go, and to try to replicate the game for myself - not nearly as difficult a challenge as making an AI player, but it has been a great project for sharpening my JavaScript skills and deepening my mastery of object relations.

The premise of Go is this: compounding simple relationships creates incredibly complex structures. This lesson is influencing the cutting edge of computer science and physics theory today; read Stephen Wolfram's [introduction to the Wolfram Physics Project](https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/).

How amazing that the research and modeling our geniuses are conducting today with supercomputers is continuous with concepts that humans have been exploring since before written language! Go is so old that its origin is not known for certain, but told with myths and legends. In China and in Korea, playing Go is revered as a fine art, with the same level of respect.

If you have not heard of or played Go before, [my game](https://herndal.github.io/go) has basic instructions and options for a small board. Play with a friend, watch [the AlphaGo documentary](https://www.youtube.com/watch?v=WXuK6gekU1Y), and appreciate the history and genius of Go!

## My Game

### Design

Go is an ancient game that is treated as sacred and played ritually. I wanted to evoke that reverent feeling without overdoing it or appropriating Eastern cultures. Additionally, Go is a very difficult game that often takes a long time and requires deep thought for each move. I settled on three goals for my design:

1. To carry a calm feeling
2. To encourage a methodical approach
3. To create a distraction-free environment for focused play

This led to a design scheme that is one of absolute simplicity, using gentle red and brown tones, with all immediately relevant information presented directly to the user front and center and extra or optional information 

### Navigation

![Main navigation menu](/images/go-nav-demonstration.gif)

A simple menu with dropdowns under About and Author tags welcomes the user to my game.


### Gameplay

Gameplay highlights include beautiful styling, embedded instructions, error messages for illegal moves, and responsive design for any device, including a landscape mode!

![Gameplay](/images/go-gameplay-demonstration.gif)

### Technology and Things I Learned

1. The Power of JavaScript
  The HTML of this document is minimal, less than 25 lines long and mostly concerned with meta information. Beyond that, nothing but JavaScript and CSS power this game, from the dynamic menu with dropdowns to the gameplay itself. Images like the woodgrain board background are hosted on Amazon Web Services S3 for easy access and to trim weight. In conjunction with Webpack, this approach makes for a game that is effortlessly lightweight and quick.

2. Mobile-First Responsive Design

![Mobile-First Responsive Design](/images/go-responsive-demonstration.gif)

  Using vanilla JavaScript and CSS, I was able to make this game play beautifully on any sized screen, with touchscreens, and with mobile devices in landscape mode, based on a flexbox grid design. Of everything I did for this project, making flawless responsive design with limited technologies required the most work by far. I am so happy with the result and the techniques I learned along the way.

## Credits and References
Thank you to Fontawesome and Flaticon!