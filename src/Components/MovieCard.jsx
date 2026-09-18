/* 
_links: Object { self: {…}, previousepisode: {…} }

averageRuntime: 30

dvdCountry: null

ended: "2015-07-11"

externals: Object { tvrage: 34589, thetvdb: 281625, imdb: "tt3434378" }

genres: Array [ "Comedy", "Family" ]

id: 136

image: Object { medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/1900.jpg", original: "https://static.tvmaze.com/uploads/images/original_untouched/0/1900.jpg" }

language: "English"

name: "The McCarthys"

network: Object { id: 2, name: "CBS", officialSite: "https://www.cbs.com/", … }

officialSite: null

premiered: "2014-10-30"

rating: Object { average: 6.8 }

runtime: 30

schedule: Object { time: "21:00", days: (1) […] }

status:"Ended"

summary: "<p><b>The McCarthys</b> is a multi-camera comedy about a close-knit, sports-crazed Boston family whose somewhat athletically challenged son, Ronny, is chosen by his father to be his assistant high school basketball coach, much to the surprise of his more qualified siblings. Ronny wants nothing more than to move away, join the singles scene and find a partner. His distraught mother, Marjorie is not upset that her favorite son is gay, but that he wants to leave Boston and his family.</p><p>Ronny's plans change, however, when his politically incorrect and outspoken father, Arthur stuns everyone with his choice for an assistant. Touched by his father's offer, Ronny embarks on a completely different future and he can be sure that his loving family, including his twin brothers Sean and Gerard and his sister Jackie, are going to have a very vocal opinion about it.</p>"

type: "Scripted"

updated: 1704793890

url: "https://www.tvmaze.com/shows/136/the-mccarthys"

webChannel: null

weight: 94
*/

import { FaArrowRight } from "react-icons/fa";
import MovieModal from "./MovieModal";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [modalMovie, setModalMovie] = useState(null);

  const { name, rating, schedule, image } = movie;
  //   console.log();

  const handleButton = () => {
    setModalMovie(movie)
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 rounded-xl border border-gray-200 shadow-lg">
      <img className="rounded-base mx-auto" src={image.medium} alt={name} />

      <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
        {name}
      </h5>

      <p className="flex justify-between mb-3">
        {rating.average && (
          <span className="inline-flex items-center px-2 py-1 ring-1 ring-inset ring-brand-subtle text-fg-brand-strong text-sm font-medium bg-primary-content rounded bg-brand-softer">
            {" "}
            {`${rating.average}`}
          </span>
        )}

        {schedule.time && <span>{`🕐 ${schedule.time}`}</span>}

        {Boolean(schedule.days[0]) && <span>{`📅 ${schedule.days[0]}`}</span>}
      </p>
      <button href="#" className="btn btn-outline group" onClick={()=>handleButton()}>
        View Details{" "}
        <span className="group-hover:translate-x-2 transition-translate duration-200">
          {" "}
          <FaArrowRight />{" "}
        </span>
      </button>
      <MovieModal modalMovie={modalMovie} />
    </div>
  );
};

export default MovieCard;
