import Post from "../../components/Post";

export default function EECS16A() {
  return (
    <Post
      title="EECS 16A"
      date="Dec 24, 2020"
      tags={[<div className="text-yellow-500 text-xl">Course Review</div>]}
    >
      <div className="w-max grid grid-cols-2 gap-x-4 gap-y-1">
        <div className="font-medium">Semester</div><div>Fall 2020</div>
        <div className="font-medium">Rating</div><div>★★★☆☆ (3/5)</div>
        <div className="font-medium">Difficulty</div><div>★★★★☆ (4/5)</div>
        <div className="font-medium">Time Commitment</div><div>★★★★★ (5/5)</div>
      </div>
      <br /><br />

      <h1 className="text-3xl">Introduction</h1>
      <br />

      <p>
        This class is a combination of linear algebra and electrical engineering/circuits, with the course split into approximately three equal parts in this order:
      </p>
      <br />
      <p>
        &nbsp;&nbsp;1. basics of linear algebra
      </p>
      <p>
        &nbsp;&nbsp;2. basics of circuits
      </p>
      <p>
        &nbsp;&nbsp;3. op-amps, least squares, signals
      </p>
      <br />
      <p>
        Two midterms cover the first two parts, respectively, and the final is cumulative, but has more emphasis on the last part.
      </p>
      <br />
      <p>
        There is a pretty clear separation between the EE and the math parts of the course, with some, but rare intersection between the two in terms of course material and problems you'd get on the tests.
      </p>
      <br /><br />
      <h1 className="text-3xl">Difficulty</h1>
      <br />
      <p>
        This is the most difficult class I have ever taken. Granted I am a first semester freshman so there aren't many points of comparison here.
      </p>
      <br />
      <p>
        Although the linear algebra problems we had were probably harder on average than those of circuits, I was more comfortable with the former, and most of the points I missed on tests were in the latter category.
      </p>
      <br />
      <p>
        I attribute this to the fact that I have reached mathematical maturity, being accustomed to difficult math curriculum from high school. Electrical engineering, on the other hand, was a whole new beast, one that was less intuitive, yet, in a sense, required more intuition. You couldn't solve these problems by simply plugging in memorized formulas and applying definitions and theorems. Things like circuit design required you to not only know what the individual parts do, but why they work and how they interact with each other.
      </p>
      <br />
      <p>
        Overall though, this class is not that much different than other EECS courses in difficulty. They all are quite hard, and this one was only a good deal harder for me because it was the first course where I came in with almost no prior knowledge.
      </p>
      <br />
      <p>
        The only major difference is that if you are aiming for an A+, you will probably have to give up on that dream if you lose even three points on all of your exams combined. There is no official A+ bin, but it is still possible to get it; you will just need to practically ace every exam, and you might also want to be an active contributor on Piazza.
      </p>
      <br /><br />
      <h1 className="text-3xl">Studying</h1>
      <br />
      <p>
        My lack of comfort in circuits isn't entirely my fault either. This class is simply not taught the best it could be. The course material is written in a way that, if you were already familiar with the concepts taught in this class, it was pretty much understandable, but if you were not, it was often difficult to fully grasp what was being taught.
      </p>
      <br />
      <p>
        For some of the theorems and formulas, the course resorted to ridiculous complex derivations or simply voodoo to conjure them. For a person like me who only feels comfortable with a concept if I can intuitively derive it, that caused me a lot of pain. I will note that I learned the entire curriculum through the official course notes instead of watching any recorded or live lectures, as that is my preferred way to learn. Perhaps these concepts were explained better on the lectures, although I am doubtful.
      </p>
      <br />
      <p>
        For those unintuitive parts of linear algebra, the YouTube channel 3Blue1Brown came in clutch. I likely would have gotten one grade bin lower in this class if not for him. He explained linear algebra concepts geometrically, which made a lot more visual and intuitive sense than the cryptic formulas from the course. I don't have a circuits analog to 3Blue1Brown, but there likely are some if you know where to find them.
      </p>
      <br /><br />
      <h1 className="text-3xl">Conclusion</h1>
      <br />
      <p>
        This class is the first of a two part course meant to introduce you to electrical engineering and math applicable to sensors, machine learning algorithms, and other information systems. I suppose it did it's job, but I came out of this course less enthused about continuing down any of those subjects related to this course, especially electrical engineering.
      </p>
    </Post>
  )
}