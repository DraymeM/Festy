import RonnieRadkeSample from './assets/samples/Ronnie_Radke.mp3';
import BlackVeilBridesSample from './assets/samples/Black_Veil_Brides_sample.mp3';
import BringMeTheHorizonSample from'./assets/samples/Bring_Me_The_Horizon.mp3';
import BabyMetalSample from'./assets/samples/Baby_Metal.mp3';
import MotionlessInWhiteSample from'./assets/samples/Motionless_In_White.mp3';
import ElectricCallboySample from './assets/samples/Electric_Callboy.mp3'
import DixonDallasSample from'./assets/samples/Dixon_Dallas.mp3';
import LittleVSample from'./assets/samples/LittleV.mp3';

const performers = [
    {
        id: 0,
        name: "Black Veil Brides",
        imageUrl: "https://pbs.twimg.com/media/GJ8Um2OWkAAEquN?format=jpg&name=large",
        description: "Black Veil Brides is an American rock band that formed in 2006 in Cincinnati, Ohio. Known for their theatrical image and blend of glam metal, hard rock, and post-hardcore influences, they have built a reputation for both their music and their visual style, which often incorporates elements of glam rock, gothic, and punk aesthetics.",
        days: ["2nd day"],
        sample: BlackVeilBridesSample, 
    },
    {
        id: 1,
        name: "Falling in Reverse",
        imageUrl: "https://townsquare.media/site/366/files/2023/08/attachment-ronnie_radke_throws_up_the_horns_yo.jpg?w=780&q=75",
        description: "Falling in Reverse is an American post-hardcore band formed in 2008, led by former Escape the Fate vocalist Ronnie Radke. The band blends elements of post-hardcore, metalcore, and pop-punk, with a mix of aggressive breakdowns and melodic hooks. Known for their high-energy performances and controversial lyrics, they have developed a unique sound that often incorporates electronic elements, rap influences, and emotional depth.",
        days: ["1st day"],
        sample: RonnieRadkeSample,
    },
    {
        id: 2,
        name: 'Bring Me the Horizon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/2023_Rock_im_Park_-_Bring_Me_The_Horizon_-_Oliver_Sykes_-_by_2eight_-_ZSC5724.jpg',
        description: 'Bring Me the Horizon are a British rock band, formed in Sheffield in 2004. The group currently consists of lead vocalist Oli Sykes, drummer Matt Nicholls, guitarist Lee Malia and bassist Matt Kean. They are signed to RCA Records globally and Columbia Records exclusively in the United States. ',
        days: ['2nd day'],
        sample: BringMeTheHorizonSample, 
    },
    {
        id: 3,
        name: 'Baby Metal',
        imageUrl: 'https://cdns-images.dzcdn.net/images/artist/2df86b455e87992af899a45c79f973f3/1900x1900-000000-80-0-0.jpg',
        description: 'Babymetal is a Japanese metal band that uniquely combines elements of heavy metal with J-pop, creating a genre they’ve coined as "Kawaii Metal". The band is known for its eclectic mix of high-energy metal riffs, intense drumming, and catchy, upbeat J-pop vocals, performed by young female singers. Babymetal has become a global phenomenon, known for their energetic live performances and the blending of two seemingly opposite genres: metal and idol pop.',
        days: ['2nd day'],
        sample: BabyMetalSample, 
    },
    {
        id: 4,
        name: 'Motionless in White',
        imageUrl: 'https://alreadyheard.com/wp-content/uploads/2018/02/MIW.jpg',
        description: 'Motionless in White is an American metalcore band from Scranton, Pennsylvania. Formed in 2004, the band consists of lead vocalist Chris "Motionless" Cerulli, guitarists Ryan Sitkowski and Ricky "Horror" Olson, drummer Vinny Mauro and bassist Justin Morrow. Cerulli is the only member of the original line-up that remains in the band. The group has stated that their band name derived from the Eighteen Visions song "Motionless and White"',
        days: ['2nd day', '3rd day'],
        sample: MotionlessInWhiteSample,
    },
    {
        id: 5,
        name: 'Electric Callboy',
        imageUrl: 'https://resources.tidal.com/images/9aebe42e/5876/4aee/a96f/27d8dd5698ee/750x750.jpg',
        description: 'Electric Callboy (formerly known as Eskimo Callboy) is a German electronicore band formed in Castrop-Rauxel in 2010. They take a more relaxed approach to the genre, and are known for their comedic songs, live shows and videos.',
        days: ['1st day', '3rd day'],
        sample: ElectricCallboySample, 
    },
    {
        id: 6,
        name: 'LittleVMills',
        imageUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_lCuGv4YvecopjEbNlRlF3Te5eLrVRO87oGXkGBdQKD9is=s900-c-k-c0x00ffffff-no-rj',
        description: 'James "Little V" Mills is an American musician, best known as a member of the band Little V & the Rollin’ Bones, a blues and rock group. He’s primarily recognized for his skills as a guitarist and vocalist, blending elements of blues, rock, and soul into his music.',
        days: ['1st day', '3rd day'],
        sample: LittleVSample, 
    },
    {
        id: 7,
        name: "Dixon Dallas",
        imageUrl: "https://lastfm.freetls.fastly.net/i/u/ar0/6930db7d4b3c6c62732a7d742837564f.jpg",
        description: 'Daniel Jacob Hill (born 1991) is an American singer, rapper and metal vocalist. He has recorded under numerous names, including Jake Hill (or iamjakehill), Lil Tra$h, ur pretty, and Dixon Dallas, crossing into different genres with each personality.',
        days: ["3rd day"],
        sample: DixonDallasSample, 
    },


];

export default performers;
