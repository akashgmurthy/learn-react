import ProfileGalleryComponent from "./gallerycomps";

export default function Gallery() {
  const scientists = [
    {
      name: "Maria Skłodowska-Curie",
      imgUrl: 'https://i.imgur.com/szV5sdGs.jpg',
      profession: 'physicist and chemist',
      awardCount: 4,
      awards: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
      discovered: 'polonium (element)'
    },
    {
      name: "Katsuko Saruhashi",
      imgUrl: 'https://i.imgur.com/YfeOqp2s.jpg',
      profession: 'geochemistt',
      awardCount: 2,
      awards: 'Miyake Prize for geochemistry, Tanaka Prize',
      discovered: 'a method for measuring carbon dioxide in seawater'
    }
  ]
  const scientistComponents = scientists.map((scientist, index) => (
    <ProfileGalleryComponent key={index} props={scientist} />
  ));
  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientistComponents}
    </div>
  );
}
