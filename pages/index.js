import { useRef, useState } from 'react';
import { motion } from "framer-motion"

import ArticleCard from '../components/ArticleCard';
import Layout from "../components/Layout";
import ScrollLink from '../components/ScrollLink';
import styles from './index.module.css'

const Section = ({ id, title, children, visible }) => (
  <div id={id} className={`flex items-center justify-center ${styles.anchor}`} style={visible === false ? {display: "none"} : {}}>
    <div className={`max-w-screen-md w-full px-8 mb-12 ${styles.divider}`}>
      <h1 className="text-5xl mb-8 mt-12 font-medium inline-block">{title}</h1>
      {children}
    </div>
  </div>
)

const ProjectCard = ({ icon, name, description, languages, tools, more }) => {
  const [height, setHeight] = useState(null)
  const ref = useRef(null)
  const toggleCard = () => setHeight(height ? null : ref.current.scrollHeight)

  return (
    <div ref={ref} className="h-20 md:h-24 transition-all duration-300 overflow-hidden" style={{height: height}}>
      <div onClick={toggleCard} className="flex items-center flex-row justify-start h-20 md:h-24 space-x-6 hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
        <div className="text-2xl">{icon}</div>
        <h2 className={`font-medium text-xl ${styles.project_name}`}>
          {name}
        </h2>
        <p className="text-gray-600 hidden md:block flex-shrink">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-8">
        <p className="text-gray-600 md:hidden flex-shrink pb-4">{description}</p>
        <div className="flex flex-wrap flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-auto">
            <h2 className="font-medium text-lg">Languages</h2>
            <p>{languages}</p>
          </div>
          <div className="flex-auto">
            <h2 className="font-medium text-lg">Tools &amp; Frameworks</h2>
            <p>{tools}</p>
          </div>
          <div className="flex-auto">
            <h2 className="font-medium text-lg">More</h2>
            <p>
              {Object.keys(more)
                .map((key) => <a className="hover:underline" href={more[key]} target="_blank">{key}</a>)
                .reduce((prev, curr) => [prev, ', ', curr])}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [showFriends, setShowFriends] = useState(false);

  return (
    <Layout title="Home">
      <motion.div 
        exit={{opacity:0}}>
        <div className="h-screen flex flex-col md:flex-row">
          <div className="h-2/5 md:h-auto md:w-1/2 flex justify-center pt-16 md:p-4">
            <svg className={`w-7/12 ${styles.name}`} viewBox="0 -1 129 133">
              <path className={styles.kev} d="m 4.6496993,36.20123 c 0,0 13.1741477,-8.856569 15.4989977,-21.255768 C 22.473546,2.5462639 13.616976,-4.9818207 7.7494989,15.166876 1.8820211,35.315572 4.5389921,56.460635 4.5389921,56.460635 c 0,0 5.4050296,-20.532495 14.2812199,-22.805668 9.077985,-2.324852 7.195961,8.303033 4.317577,10.295761 -2.878386,1.992728 -7.970913,4.6497 -7.970913,4.6497 0,0 1.992729,7.970914 8.85657,7.970914 6.863843,0 12.399198,-7.195965 12.399198,-7.195965 0,0 17.381019,-3.431921 15.166877,-12.288491 -2.214144,-8.85657 -16.163242,-3.764042 -15.609704,7.306673 0.553534,11.070711 8.524448,13.506267 16.052532,10.517176 7.528084,-2.989093 10.738591,-6.642428 10.738591,-6.642428 L 62.106698,32.880016 c 0,0 0.221414,10.849298 0.774949,15.498998 0.553537,4.6497 2.989093,8.85657 2.989093,8.85657 0,0 6.753135,-6.421014 9.852935,-12.620612 3.099797,-6.1996 4.53899,-11.513542 4.53899,-11.513542" />
              <path className={styles.wang} d="m 3.5031294,75.422284 c 0,0 0.3924218,8.294622 0.8352518,12.390788 0.44283,4.096162 1.8074747,11.877055 1.8074747,11.877055 0,0 6.3875191,-5.342928 9.0444891,-11.542528 2.65697,-6.199597 4.363058,-12.397702 4.363058,-12.397702 0,0 0.542407,10.900057 1.095947,14.442687 0.55354,3.542628 1.22439,9.420335 1.22439,9.420335 0,0 6.093698,-3.963538 9.857738,-10.605964 3.76404,-6.642428 6.618022,-15.612017 2.521852,-13.287168 -4.09616,2.324852 -1.30887,10.82969 3.0087,11.27252 4.31758,0.442828 7.89463,-0.883507 7.89463,-0.883507 0,0 3.337012,-5.851934 6.119166,-7.758045 4.73425,-3.243533 8.624454,-3.396149 8.624454,-3.396149 0,0 -7.579859,1.263878 -11.200938,5.551579 -2.794007,3.30837 -5.650421,9.473062 -2.439911,15.229834 3.21051,5.756781 11.262009,4.873261 14.583219,-6.640277 3.32122,-11.513542 3.32122,-12.177783 3.32122,-12.177783 0,0 -3.21051,12.067076 -1.4392,17.491725 1.77132,5.424649 5.42465,5.756766 8.96728,2.435556 3.54263,-3.321214 5.64606,-5.978184 5.64606,-5.978184 0,0 -0.1107,-5.092528 0.33212,-8.413742 0.44283,-3.321214 1.66061,-6.753135 1.66061,-6.753135 0,0 -2.32485,9.299398 -2.10343,15.277584 0.22141,5.978184 0.77495,8.303035 0.77495,8.303035 0,0 5.3338,-12.651853 7.10512,-14.976704 1.200965,-2.462147 12.60075,-17.128363 8.61529,-0.07947 -3.98546,17.048906 2.166955,15.975346 7.48089,12.322013 5.31395,-3.65334 4.75028,-3.57615 4.75028,-3.57615 0,0 -0.63131,-6.942449 4.91362,-12.352589 3.8312,-3.73807 10.60585,-5.633072 10.60585,-5.633072 0,0 -15.75772,2.920703 -14.65065,16.316266 1.10707,13.395588 11.5877,5.765558 13.02689,4.437074 1.43919,-1.328486 2.87839,-2.878386 2.87839,-2.878386 l 2.76767,-15.166877 c 0,0 -4.20687,33.322867 -7.8602,41.625907 -3.65334,8.30303 -9.63152,10.73859 -11.51354,7.41738 -1.88203,-3.32122 -0.3134,-8.74284 0.75508,-10.60802 4.3972,-7.67595 15.07603,-14.1904 15.07603,-14.1904" />
            </svg>
          </div>
          <div className="h-3/5 md:h-auto md:w-1/2 flex flex-col justify-center content-center px-12 lg:px-24 xl:px-40 space-y-8 text-2xl lg:text-3xl font-sans">
            <p>Hi there!</p>
            <p>I'm Kev, a <span className="font-bold">software developer</span> currently studying EE/CS at 🐻 <span className="font-bold">UC Berkeley</span>.</p>
            <div className="font-light flex flex-row space-x-6 text-xl lg:text-2xl">
              <ScrollLink href="/#posts"><a className="hover:underline cursor-pointer">Blog</a></ScrollLink>
              <ScrollLink href="/#projects"><a className="hover:underline cursor-pointer">Projects</a></ScrollLink>
              <ScrollLink href="/#contact"><a className="hover:underline cursor-pointer">Contact</a></ScrollLink>
              <ScrollLink href="/#friends"><a className={"hover:underline cursor-pointer " + styles.visible_on_hover} onMouseDown={() => setShowFriends(true)}>Friends</a></ScrollLink>
            </div>
            <ScrollLink href="/#posts">
              <img 
                src="../chevron-down-outline.svg" 
                className={`md:absolute inset-x-0 mx-auto w-12 lg:w-16 cursor-pointer pt-6 ${styles.down_arrow}` }
              />
            </ScrollLink>
          </div>
        </div>
        <Section id="posts" title="Featured Posts">
          <div className="flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-200">
            <ArticleCard
              href="/blog/cs-61a"
              title="CS 61A"
              description="An extraordinary summer, taking an extraordinary class."
              date="Aug 21, 2020"
              tags={[<div className="text-yellow-500">Course Review</div>]}
            />
            <ArticleCard
              href="/blog/eecs-16a"
              title="EECS 16A"
              description="The hardest class I've taken yet (granted I am a first semester freshman)."
              date="Dec 24, 2020"
              tags={[<div className="text-yellow-500">Course Review</div>]}
            />
            <ArticleCard
              href="/blog/cs-61b"
              title="CS 61B"
              description="Data structures in Java!"
              date="Dec 25, 2020"
              tags={[<div className="text-yellow-500">Course Review</div>]}
            />
          </div>
        </Section>
        <Section id="projects" title="Projects">
          <div className="border-gray-300 divide-y-2 divide-gray-200">
            <ProjectCard 
              icon="🤔"
              name="kevwang.dev" 
              description="Personal website. What you're on right now. (2020-21)"
              languages="Javascript"
              tools="React, Next.js"
              more={{
                "Website": "https://kevwang.dev/",
                "Github": "https://github.com/kevinzwang/kevwang.dev"
              }}
            />
            <ProjectCard 
              icon="🥬"
              name="CabbageScout" 
              description="Intuitive, web-based scouting app for the 2020/21 FIRST Robotics game. (2020)"
              languages="Javascript, Python"
              tools="React, Docker"
              more={{"Github": "https://github.com/CabbageAlliance/CabbageScout"}}
            />
            <ProjectCard 
              icon="💬"
              name="Nano" 
              description="Fun, multi-functional Discord chat bot. (2017-20)"
              languages="Python, Javascript, Go, Rust, Kotlin"
              tools="GraphQL"
              more={{"Github": "https://github.com/kevinzwang/nano-py"}}
            />
            <ProjectCard 
              icon="📖"
              name="Deep Blue Training"
              description="Comprehensive programming training for the FIRST Robotics Competition. (2019-20)"
              languages="Java"
              tools="Markdown"
              more={{
                "Website": "https://deep-blue-training.readthedocs.io/en/latest/", 
                "Github": "https://github.com/DeepBlueRobotics/training/"
              }}
            />
            <ProjectCard 
              icon="💯"
              name="GoGoGrader" 
              description="Kumon workbook grading tool with Google Sheets integration. (2018-19)"
              languages="Javascript, Go"
              tools="React, AWS S3"
              more={{"Github": "https://github.com/KumonCrystalSprings/gogograder-website"}}
            />
            <ProjectCard 
              icon="🗣️"
              name="Kiva Translator Tooltip"
              description="Browser extension for assisting Kiva translators with local dialect translation. (2018)"
              languages="Javascript"
              tools="jQuery, WebExtensions"
              more={{"Github": "https://github.com/kiva/viva_glossary_tool"}}
            />
            <ProjectCard 
              icon="🤖"
              name="RobotCode2018"
              description="Where I invented a new programming language for efficient autonomous path development. (2018)"
              languages="Java, Javascript"
              tools="jQuery, Two.js"
              more={{
                "Github": "https://github.com/DeepBlueRobotics/RobotCode2018",
                "Language Docs": "https://github.com/DeepBlueRobotics/RobotCode2018/blob/master/Robot2018/src/main/java/org/usfirst/frc/team199/Robot2018/autonomous/aaa-reference.md",
                "Visualizer": "https://github.com/kevinzwang/auto-script-visualizer",
              }}
            />
          </div>
        </Section>
        <Section id="contact" title="Contact">
          <div className="flex flex-col space-y-5 text-lg">
            <p>📧 kev [at] kevwang [dot] dev</p>
            <p>🖥️ <a className="hover:underline" href="https://github.com/kevinzwang" target="_blank">github.com/kevinzwang</a></p>
            <p>ℹ️ <a className="hover:underline" href="https://www.linkedin.com/in/kevinzhiwang/" target="_blank">linkedin.com/in/kevinzhiwang</a></p>
          </div>
        </Section>
        <Section id="friends" title="Friends" visible={showFriends}>
          <ul className="list-none">
            <li><b>Nikhil</b>: <a className="hover:underline" href="https://nikhiljha.com/" target="_blank">nikhiljha.com</a></li>
            <li><b>Sebi</b>: <a className="hover:underline" href="https://sebiszafir.com/" target="_blank">sebiszafir.com</a></li>
            <li><b>Gabe</b>: <a className="hover:underline" href="https://gabe-mitnick.github.io/" target="_blank">gabe-mitnick.github.io</a></li>
          </ul>
        </Section>
        </motion.div>
    </Layout>
  )
}
