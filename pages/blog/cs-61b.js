import Post from "../../components/Post";

export default function CS61B() {
  return (
    <Post
      title="CS 61B"
      date="Dec 25, 2020"
      tags={[<div className="text-yellow-500 text-xl">Course Review</div>]}
    >
      <div className="w-max grid grid-cols-2 gap-x-4 gap-y-1">
        <div className="font-medium">Semester</div><div>Fall 2020</div>
        <div className="font-medium">Rating</div><div>★★★★★ (5/5)</div>
        <div className="font-medium">Difficulty</div><div>★★★☆☆ (3/5)</div>
        <div className="font-medium">Time Commitment</div><div>★★★☆☆ (3/5)</div>
      </div>
      <br /><br />

      <h1 className="text-3xl">Introduction</h1>
      <br />

      <p>
        This class covers various data structures and algorithms with those data structures, using Java. Basically everything commonly used in the <span className="font-mono bg-gray-200 px-1 rounded">java.util</span> (ArrayList, HashMap, PriorityQueue) you will learn to implement from scratch, along with numerous trees, graphs, and tree/graph traversal algorithms, as well as sorts and determining time complexity.
    </p>
      <br />
      <p>
        I don't have much to say about this class. If you did well in 61A, you'll do well in this class. Projects and labs are interesting and fun, exams are hard but not harder than 61A, you still have the same resources as you did (discussions, office hours, CSM, etc).
      </p>
    </Post>
  )
}