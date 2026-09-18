
import {
  FaStar,
  FaClock,
  FaCalendarAlt,
  FaLanguage,
  FaTv,
} from "react-icons/fa";

const MovieModal = ({ modalMovie }) => {

  return (
    <dialog id={`my_modal_${modalMovie?.id}`} className="modal">
      <div
        className="modal-box relative max-w-4xl p-0 overflow-hidden bg-black"
        style={{
          backgroundImage: `url(${modalMovie?.image?.original})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Close Button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 z-20 text-white hover:bg-white/20">
            ✕
          </button>
        </form>

        {/* Actual contents */}
        <div className="relative z-10 p-6 sm:p-8 md:p-10 text-white">
          {/* Movie Title */}
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 pr-8">
            {modalMovie?.name}
          </h3>

          {/* Basic Information */}
          <div className="flex flex-wrap items-center gap-3 text-sm mb-5">
            {/* Rating */}
            {modalMovie?.rating?.average && (
              <span className="flex items-center gap-1 bg-yellow-400/20 border border-yellow-400/40 px-3 py-1 rounded-full">
                <FaStar className="text-yellow-400" />
                {modalMovie.rating.average}
              </span>
            )}

            {/* Runtime */}
            {modalMovie?.runtime && (
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
                <FaClock />
                {modalMovie.runtime} min
              </span>
            )}

            {/* Genres */}
            {modalMovie?.genres?.length > 0 && (
              <span className="bg-white/10 px-3 py-1 rounded-full">
                {modalMovie.genres.join(" • ")}
              </span>
            )}
          </div>

          {/* Summary */}
          <div className="max-w-3xl text-gray-200 leading-relaxed mb-8">
            <h4 className="text-lg font-semibold text-white mb-2">
              About the Show
            </h4>

            <div
              dangerouslySetInnerHTML={{
                __html: modalMovie?.summary || "No summary available.",
              }}
            />
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 mb-6"></div>

          {/* Additional Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {/* Status */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                Status
              </p>
              <p className="font-medium">{modalMovie?.status || "N/A"}</p>
            </div>

            {/* Premiered */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1 flex items-center gap-1">
                <FaCalendarAlt />
                Premiered
              </p>
              <p className="font-medium">{modalMovie?.premiered || "N/A"}</p>
            </div>

            {/* Language */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1 flex items-center gap-1">
                <FaLanguage />
                Language
              </p>
              <p className="font-medium">{modalMovie?.language || "N/A"}</p>
            </div>

            {/* Network */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1 flex items-center gap-1">
                <FaTv />
                Network
              </p>
              <p className="font-medium">
                {modalMovie?.network?.name ||
                  modalMovie?.webChannel?.name ||
                  "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default MovieModal;
