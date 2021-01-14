import Image from "next/image";
import Post from "../../components/Post";

export default function CS61A() {
  return (
    <Post
      title="CS 61A"
      date="Aug 21, 2020"
      tags={[<div className="text-yellow-500 text-xl">Course Review</div>]}
    >
      <div className="w-max grid grid-cols-2 gap-x-4 gap-y-1">
        <div className="font-medium">Semester</div><div>Summer 2020</div>
        <div className="font-medium">Rating</div><div>★★★★★ (5/5)</div>
        <div className="font-medium">Difficulty</div><div>★★★★☆ (4/5)</div>
        <div className="font-medium">Time Commitment</div><div>★★★☆☆ (3/5)</div>
      </div>
      <br /><br />

      <h1 className="text-3xl">Introduction</h1>
      <br />

      <p>
        CS 61A. The famous, perhaps notorious, "intro" computer science class. Taken by (according to my calculations) around 1/3 of the undergraduate student population at UC Berkeley at one point or another. So what is it really like?
      </p>
      <br />
      <p>
        Well, I'd say it very much depends on the experience you have coming into the class. The class starts off quite different for a person with "programming experience" and a person who lacks that experience. When I say "programming experience", I have a very specific definition in mind. I'm not talking about experience in Python or Scheme or SQL, which may help, but honestly, the syntax is the easiest thing to learn in this class. What I mean is knowledge and experience and especially <span className="font-medium italic">comfort</span> with using code to read and manipulate data structures (such as numbers, trees, lists) using various programmatic methods (loops, recursion, higher order functions), because essentially, that is what this course is trying to do, to make you feel comfortable writing code at a high level.
      </p>
      <br />
      <p>
        Personally, I did not have to watch a single lecture in this course, not because I was familiar with every language that was taught (Scheme was alien to me), but because I had that "programming experience" and the rest I could fill in by just by doing assignments and attending discussions. Some people who haven't taken this class might assume, because of what I said above, that for them, this will be an easy class that's just re-teaching you what you already learned. That is not at all what I am saying. I believe practically every student will find this class challenging and engaging. The homeworks, labs, and tests were by no means a cakewalk for me, and if you want more, there are plenty of optional and extra credit problems to scratch that itch. Even though I knew a lot of the material beforehand, I still learned a lot and I could definitely tell that my skills had improved.
      </p>
      <br />
      <p>
        If you do not have that experience, then the truth is this class is not going to be as smooth of an entry. Frankly, I am very impressed by everyone who succeeds in this class with little or no prior programming experience, since it goes super fast, barely enough time to digest the content before moving onto the next topic. That being said, I think it is very possible for a person with no programming experience to succeed in this class. You just need to put a lot of time and effort into making sure you understand the topics that are presented. Use Piazza, office hours, discussions, tutoring, etc. to your advantage. The 61 series serves as essentially a way to get everyone to a level playing field before taking upper divs, so know that your struggles now will bring you the strength to tackle courses in the future.
      </p>
      <br /><br />
      <h1 className="text-3xl">
        Exceptions during Summer 2020
      </h1>
      <br />
      <p>
        Another thing that I will note is that CS 61A during the summer of 2020 was quite unusual as far as 61A goes, so my experiences may not correspond with those taking the course during other semesters, even when online, because the course staff is still adjusting to online learning.
      </p>
      <br />
      <p>
        The main difference manifested in the midterm and final. Because of the online nature of the course, the format of the tests were quite different. Instead of 3 hours to complete a variety of styles of questions, we had the same 3 hours to complete 7 questions, each 25 minutes long, of free response fill-in-the-blank code writing. You were given the documentation for a function or class, doc tests, template code with blanks, and were asked to fill those blanks. These types of problems were present in past tests as well, but in much smaller proportions. In addition, one advantage that online test takers had was the ability to run their code and check if they passed the doc tests.
      </p>
      <br />
      <p>
        Course staff tried to tune the difficulty of the tests, taking these things into account, so that they would match up against the typical midterm (~65%) and final (~55%) grade averages, but they had some difficulty. The midterm was a bit too hard, so they gave everyone 3 points for free, and the final was significantly easier than the past, so on average the course was, to many people's luck, easier than other semesters. The midterm distribution had a pretty large standard deviation and the final distribution was completely out of wack, so I expect a lot more people to get A's and A+'s from this summer. I'm sure course staff are still working on tuning the difficulty of these tests, and we'll likely see a more typical distribution come fall.
      </p>
      <br />
      <p>
        Midterm distribution:
      </p>
      <Image src="/blog/cs-61a/midterm.png" alt="Midterm distribution" width="640" height="178" />
      <br /><br />
      <p>
        Final distribution:
      </p>
      <Image src="/blog/cs-61a/final.png" alt="Final distribution" width="640" height="216" />
      <br /><br /><br />
      <h1 className="text-3xl">
        The Berkeley Environment
      </h1>
      <br />
      <p>
        The thing that most stood out to me when taking this class was the environment at Berkeley. Even taking a class fully online, I could sense the tone that this class and the students taking it set. I'm sure the students of CS 61A are not a perfect representation of the school, but I met a very diverse group of people through the class and my experience is likely reflective of how Berkeley EECS will generally be like for the four years I'll study here, so I just wanted to talk a little about it.
      </p>
      <br />
      <p>
        First of all, people at Berkeley come from so many different backgrounds and experiences and regions of the world. It absolutely astounded me. I was taught that to get into Berkeley CS, I needed to win this award, or do this extracurricular, or have these grades, but the interactions I've had with lots of the people taking this class has proven otherwise. There's no one path to Berkeley, so if you are a high school student, don't feel pressured to have to do math competitions, programming competitions, robotics, science fair, etc to get in. The majority of students I met here never qualified for the AIME, didn't do USACO, were not the captains of their robotics teams. However, it was clear that they were all intelligent, passionate, and curious. There is an incredible diversity of backgrounds here and I am very appreciative of that. I'm looking forward to meeting more of these incredible people here at Cal.
      </p>
      <br />
      <p>
        However, that is not to say this place is not competitive. I found the students in the class to be generally both willing and open to helping others and very motivated to achieving their own goals. This duality was present in Piazza, where people's questions would be answered within minutes any hour of the day by students motivated both by their desire to assist others and the possibly of getting extra credit for EPA (Effort, Participation, Altruism).
      </p>
      <br />
      <p>
        The competitive yet cooperative environment at Berkeley affected me the most during Hog contest, where we were tasked with writing an algorithm to play a two-player game, called Hog, against each other. I poured days of analysis and research and writing code to create a strategy utilizing an interesting algorithm called the Monte Carlo tree search, and I proudly submitted it, only to land in 4th place, where the top 3 got prizes. (I was beat by, among other people, an alleged high school sophomore, but that's another story.)  That was a sobering moment for me, realizing that I was no longer, by far, the best CS student at my school. Yet it was also an exciting moment, with the realization that now I am amongst a very large group of highly motivated and highly intelligent peers that I will have the opportunity to work with and learn from. To those in the top 3 who embraced the collaborative side and were gracious enough to write up an explanation of their strategy, I enjoyed reading your write-ups and finding out how exactly I was outsmarted.
      </p>
      <br /><br />
      <h1 className="text-3xl">
        Conclusion
      </h1>
      <br />
      <p>
        Taking CS 61A has been a great introduction not only to programming, but to academics at UC Berkeley and the environment of the school. This class has made me feel more confident in facing the challenges ahead of me and more excited about the opportunities that lie in the future for me.
      </p>
    </Post>
  )
}