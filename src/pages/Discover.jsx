import {Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

const Discover = () => {
    const genreTitle = "Pop";
const songs = [
    { id: 1, title: "Song One", artist: "Artist A" },
    { id: 2, title: "Song Two", artist: "Artist B" },]

    return ( 
    <div className = "flex flex-col">
        <div className = "w-full flex justiy-between items-center sm: flex-row flex-col mt-4 mb-10">
            <h2 className = "font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
            <select 
            onChange = { () => {}}
            value = ""
            className = "bg-black text-gray-300 p-2 text-sm rounded-lg outline-none sm:mt-0 mb-5">
                {genres.map((genre) => <option key = {genre.value} value = {genre.value}>{genre.title}</option> )}
            </select>
        </div>
        <div className = "flex flex-wrap sm:justify-start justify-center gap-8 ">
            
        </div>

    </div>
    );
};

export default Discover;
