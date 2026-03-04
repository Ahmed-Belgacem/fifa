import logo from './logo.svg';
import './App.css';
import Playerlist from './component/Playerlist';


function App() {
let players = [
  { 
  name: "Ronaldinho",
  team: "FC Barcelona",
  img: "https://cdn.futbin.com/content/fifa21/img/players/p246472.png",
  rating: 91,
  position: "LW",
  pac: 88,
  sho: 90,
  pas: 87,
  dri: 95,
  def: 35,
  phy: 78,
  flag: "https://flagcdn.com/w40/br.png"
},
  { name: "Marc-André ter Stegen", team: "FC Barcelona", img: "https://cdn.futwiz.com/assets/img/fifa23/faces/67301312.png", rating: 90, position: "GK", pac: 52, sho: 15, pas: 75, dri: 72, def: 15, phy: 78, flag: "https://flagcdn.com/w40/de.png" },
  { name: "Ronald Araújo",         team: "FC Barcelona", img: "https://cdn.futwiz.com/assets/img/fifa22/faces/50584811.png", rating: 87, position: "CB", pac: 79, sho: 45, pas: 68, dri: 72, def: 87, phy: 88, flag: "https://flagcdn.com/w40/uy.png" },
  { name: "Jules Koundé",          team: "FC Barcelona", img: "https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250096309.webp", rating: 86, position: "RB", pac: 85, sho: 55, pas: 74, dri: 80, def: 85, phy: 76, flag: "https://flagcdn.com/w40/fr.png" },
  { name: "Pedri",                 team: "FC Barcelona", img: "https://cdn.futwiz.com/assets/img/fifa23/faces/168024014.png", rating: 88, position: "CM", pac: 74, sho: 76, pas: 88, dri: 90, def: 65, phy: 66, flag: "https://flagcdn.com/w40/es.png" },
  { name: "Gavi",                  team: "FC Barcelona", img: "https://cdn.futwiz.com/assets/img/fifa23/faces/100927536.png", rating: 87, position: "CM", pac: 78, sho: 74, pas: 86, dri: 88, def: 68, phy: 73, flag: "https://flagcdn.com/w40/es.png" },
  { name: "Frenkie de Jong",       team: "FC Barcelona", img: "https://cdn.futbin.com/content/fifa20/img/players/p134446430.png", rating: 87, position: "CM", pac: 76, sho: 72, pas: 85, dri: 87, def: 78, phy: 77, flag: "https://flagcdn.com/w40/nl.png" },
  { name: "Robert Lewandowski",    team: "FC Barcelona", img: "https://cdn.futwiz.com/assets/img/fifa23/faces/167960705.png", rating: 91, position: "ST", pac: 78, sho: 92, pas: 79, dri: 86, def: 44, phy: 82, flag: "https://flagcdn.com/w40/pl.png" },
  { name: "Raphinha",              team: "FC Barcelona", img: "https://cdn.futwiz.com/assets/img/fifa23/faces/117673931.png", rating: 86, position: "RW", pac: 90, sho: 83, pas: 78, dri: 88, def: 42, phy: 71, flag: "https://flagcdn.com/w40/br.png" },
  { name: "Lamine Yamal",          team: "FC Barcelona", img: "https://www.fifarosters.com/assets/players/fifa25/dynamic/67386507.png", rating: 88, position: "RW", pac: 93, sho: 82, pas: 82, dri: 92, def: 30, phy: 65, flag: "https://flagcdn.com/w40/es.png" },
    { 
  name: "Lionel Messi",
  team: "FC Barcelona",
  img: "https://www.fifarosters.com/assets/players/fifa23/dynamic/117598535.png",
  rating: 100,
  position: "RW",
  pac: 100,
  sho: 100,
  pas: 100,
  dri: 100,
  def: 100,
  phy: 100,
  flag: "https://flagcdn.com/w40/ar.png"
}
];



  return <div className="App">   <Playerlist players={players}/> </div>;

}


export default App;
