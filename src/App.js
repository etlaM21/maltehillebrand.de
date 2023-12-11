import React, { useState, lazy, Suspense } from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Loader from "./Loader";

import WorkData from "./components/work/WorkData";
import GalleryData from "./components/work/gallery/GalleryData";

const Reel = lazy(() => import( "./components/Reel"));

const Work = lazy(() => import( "./components/work/Work"));

const Gallery  = lazy(() => import( "./components/work/gallery/Gallery"));

const About = lazy(() => import( "./components/About"));

const Projects = lazy(() => import( "./components/projects/Projects"));

const Contact = lazy(() => import( "./components/Contact"));

const Imprint = lazy(() => import( "./components/Imprint"));
const Privacy = lazy(() => import( "./components/Privacy"));


const App = () => {
  return (
    <>
    <ParallaxProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" 
        element={<WorkPage />} />

        <Route path="/gallery/:name/:index"
        // the matching param will be available to the loader
        loader={({ params }) => {
          // console.log(params.name);
        }}
        // and the action
        action={({ params }) => {}}
        element={<GalleryPage />} />

        <Route path="/projects"
        element={<ProjectPage />} />
        <Route path="/contact"
        element={<ContactPage />} />
        <Route path="/Imprint"
        element={<ImprintPage />} />
        <Route path="/Privacy"
        element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
    </ParallaxProvider>
    </>
  );
};

function WorkPage(){
  
  const categories = [...new Set(WorkData.map((Val) => Val.tags.map(Tag => Tag)).flat())];

  const shuffle = (array) => { // https://stackoverflow.com/a/2450976
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const [item] = useState(shuffle(WorkData));

  return (
    <>
      <Header pages={["work", "projects", "contact"]} activePage={"work"}/>
      <Suspense fallback={<Loader />}>
        <Reel />
        <Work elements={item} categories={categories}/>
        <About />
      </Suspense>
      <Footer />
    </>
  )
}

function GalleryPage(){
  let params = useParams();
  let galleryObject;
  for(let i = 0; i < GalleryData.length; i++){
    if(params.name === GalleryData[i].id) galleryObject = GalleryData[i];
  }
  return (
    <Suspense fallback={<Loader />}>
      <Gallery object={galleryObject} index={params.index}/>
    </Suspense>
  )
}

function ProjectPage(props){
  return (
    <>
      <Header pages={["work", "projects", "contact"]} activePage={"projects"}/>
      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>
      <Footer />
    </>
  )
}

function ContactPage(props){
  return (
    <>
      <Header pages={["work", "projects","contact"]} activePage={"contact"}/>
      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>
      <Footer />
    </>
  )
}

function ImprintPage(props){
  return (
    <>
      <Header pages={["work", "projects", "contact"]}/>
      <Suspense fallback={<Loader />}>
        <Imprint />
      </Suspense>
      <Footer />
    </>
  )
}

function PrivacyPage(props){
  return (
    <>
      <Header pages={["work", "projects", "contact"]}/>
      <Suspense fallback={<Loader />}>
        <Privacy />
      </Suspense>
      <Footer />
    </>
  )
}

export default App;
