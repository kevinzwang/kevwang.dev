import React from "react"
import anime from "animejs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faBinoculars, faCommentDots, faTasks, faGlobeAmericas, faBalanceScale } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Layout from "../components/Layout"
import Anime from "../components/Anime"
import styles  from "../styles/styles.module.scss"
import indexStyles from "./index.module.scss"

const Project = ({ icon, color, name, description}) => {
  return (
    <div className={`flex items-center flex-row justify-start h-24 space-x-6 ${indexStyles.project}`}>
      <FontAwesomeIcon size="lg" icon={icon} color={color} className={indexStyles.project_logo}/>
      <div className={`font-medium text-2xl md:text-lg ${indexStyles.project_name}`}>
        <p>{name}</p>
      </div>
      <p className="text-gray-600 hidden md:block flex-shrink">{description}</p>
    </div>
  )
}

const Section = ({ title, children }) => (
  <div className="flex items-center justify-center">
    <div className={`max-w-screen-md w-full px-12 md:px-6 mb-12 ${styles.divider}`}>
      <h1 className="text-5xl mb-3 mt-12 font-medium inline-block">{title}</h1>
      {children}
    </div>
  </div>
)

const IndexPage = () => {
  return (
    <Layout home>
      <div className={`flex flex-col md:flex-row mb-8 md:mb-0 ${indexStyles.front_page}`}>
        <div className="h-6/12 md:h-auto md:w-6/12 py-12 md:p-0 flex justify-center items-center">
          <svg className={`w-7/12 ${styles.drawing}`} viewBox="0 0 129 132">
            <Anime
              easing="linear"
              duration={2000}
              delay={(el, index) => index * 2000}
              strokeDashoffset={[anime.setDashoffset, 0]}
            >
              <path d="m 4.6496993,36.20123 c 0,0 13.1741477,-8.856569 15.4989977,-21.255768 C 22.473546,2.5462639 13.616976,-4.9818207 7.7494989,15.166876 1.8820211,35.315572 4.5389921,56.460635 4.5389921,56.460635 c 0,0 5.4050296,-20.532495 14.2812199,-22.805668 9.077985,-2.324852 7.195961,8.303033 4.317577,10.295761 -2.878386,1.992728 -7.970913,4.6497 -7.970913,4.6497 0,0 1.992729,7.970914 8.85657,7.970914 6.863843,0 12.399198,-7.195965 12.399198,-7.195965 0,0 17.381019,-3.431921 15.166877,-12.288491 -2.214144,-8.85657 -16.163242,-3.764042 -15.609704,7.306673 0.553534,11.070711 8.524448,13.506267 16.052532,10.517176 7.528084,-2.989093 10.738591,-6.642428 10.738591,-6.642428 L 62.106698,32.880016 c 0,0 0.221414,10.849298 0.774949,15.498998 0.553537,4.6497 2.989093,8.85657 2.989093,8.85657 0,0 6.753135,-6.421014 9.852935,-12.620612 3.099797,-6.1996 4.53899,-11.513542 4.53899,-11.513542" />
              <path d="m 3.5031294,75.422284 c 0,0 0.3924218,8.294622 0.8352518,12.390788 0.44283,4.096162 1.8074747,11.877055 1.8074747,11.877055 0,0 6.3875191,-5.342928 9.0444891,-11.542528 2.65697,-6.199597 4.363058,-12.397702 4.363058,-12.397702 0,0 0.542407,10.900057 1.095947,14.442687 0.55354,3.542628 1.22439,9.420335 1.22439,9.420335 0,0 6.093698,-3.963538 9.857738,-10.605964 3.76404,-6.642428 6.618022,-15.612017 2.521852,-13.287168 -4.09616,2.324852 -1.30887,10.82969 3.0087,11.27252 4.31758,0.442828 7.89463,-0.883507 7.89463,-0.883507 0,0 3.337012,-5.851934 6.119166,-7.758045 4.73425,-3.243533 8.624454,-3.396149 8.624454,-3.396149 0,0 -7.579859,1.263878 -11.200938,5.551579 -2.794007,3.30837 -5.650421,9.473062 -2.439911,15.229834 3.21051,5.756781 11.262009,4.873261 14.583219,-6.640277 3.32122,-11.513542 3.32122,-12.177783 3.32122,-12.177783 0,0 -3.21051,12.067076 -1.4392,17.491725 1.77132,5.424649 5.42465,5.756766 8.96728,2.435556 3.54263,-3.321214 5.64606,-5.978184 5.64606,-5.978184 0,0 -0.1107,-5.092528 0.33212,-8.413742 0.44283,-3.321214 1.66061,-6.753135 1.66061,-6.753135 0,0 -2.32485,9.299398 -2.10343,15.277584 0.22141,5.978184 0.77495,8.303035 0.77495,8.303035 0,0 5.3338,-12.651853 7.10512,-14.976704 1.200965,-2.462147 12.60075,-17.128363 8.61529,-0.07947 -3.98546,17.048906 2.166955,15.975346 7.48089,12.322013 5.31395,-3.65334 4.75028,-3.57615 4.75028,-3.57615 0,0 -0.63131,-6.942449 4.91362,-12.352589 3.8312,-3.73807 10.60585,-5.633072 10.60585,-5.633072 0,0 -15.75772,2.920703 -14.65065,16.316266 1.10707,13.395588 11.5877,5.765558 13.02689,4.437074 1.43919,-1.328486 2.87839,-2.878386 2.87839,-2.878386 l 2.76767,-15.166877 c 0,0 -4.20687,33.322867 -7.8602,41.625907 -3.65334,8.30303 -9.63152,10.73859 -11.51354,7.41738 -1.88203,-3.32122 -0.3134,-8.74284 0.75508,-10.60802 4.3972,-7.67595 15.07603,-14.1904 15.07603,-14.1904" />
            </Anime>
          </svg>
        </div>
        <div className="h-6/12 md:h-auto md:w-6/12 font-sans lg:text-3xl text-2xl lg:p-40 md:px-20 px-10 flex justify-center content-center flex-col space-y-6">
          <p>Hi there!</p>
          <p>I'm Kev, a <span className="bg-yellow">software developer</span> currently studying EE/CS at 🐻 <span className="bg-yellow">UC Berkeley</span>.</p>

          <div className="space-y-3 flex flex-col">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kevinzhiwang/">
              <div className={`flex content-center space-x-3 float-left ${styles.highlight}`}>
                <FontAwesomeIcon icon={faLinkedin} className={indexStyles.contact_logo} />
                <span className="text-xl">kevinzhiwang</span>
              </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/kevinzwang">
              <div className={`flex content-center space-x-3 float-left ${styles.highlight}`}>
                <FontAwesomeIcon icon={faGithub} className={indexStyles.contact_logo} />
                <span className="text-xl">kevinzwang</span>
              </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:kev@kevwang.dev">
              <div className={`flex content-center space-x-3 float-left ${styles.highlight}`}>
                <FontAwesomeIcon icon={faAt} className={indexStyles.contact_logo} />
                <span className="text-xl">kev@kevwang.dev</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Section title="Latest Articles">
        <p>I don't have any blog posts yet. Check back later, I'll start writing stuff soon!</p>
      </Section>
      <Section title="Projects">
       <div className=" border-gray-300 divide-y-2 divide-gray-300">
        <Project 
          icon={faBinoculars} 
          name="CabbageScout" 
          description="An intuitive and platform agnostic scouting app for the 2020/21 FIRST Robotics game."
        />
        <Project 
          icon={faCommentDots} 
          name="Nano" 
          description="Personal multi-purpose Discord chat bot."
        />
        <Project 
          icon={faTasks} 
          name="GoGoGrader" 
          description="Kumon workbook grading tool with Google Sheets integration."
        />
        <Project 
          icon={faGlobeAmericas} 
          name="Kiva Translator Tooltip"
          description="Browser extension for assisting with language translation. My 2018 internship project."
        />
        <Project
          icon={faBalanceScale}
          name="Robot Code 2018"
          description="FRC Team 199 robot code for the 2018 game: Power Up."
        />
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage