import React, { useState } from 'react';
import './routes.css';
import StoryItem from '../components/StoryItem/StoryItem';

function Stories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('a-z');
  const [filterCourse, setFilterCourse] = useState('');

  const stories = [
    {
      title: 'Swan Point Cemetery: Reflections in Time',
      description: 'A personal essay reflecting on a visit to Swan Point Cemetery in Providence, RI.',
      courseTitle: 'LITR 1151Q: Great Adventure',
      link: '/SwanPoint',
      date: '10-16-2023'
    },
    {
      title: 'Thayer Street',
      description: 'Part one of a three-part movement on traversing Thayer Street in Providence, RI.',
      courseTitle: 'LITR 1151Q: Great Adventure',
      link: '/Thayer',
      date: '9-20-2023'
    },
    {
      title: 'On to Ireland',
      description: 'A short film treatment exploring my fictional life as an expat in Ireland.',
      courseTitle: 'LITR 1151Q: Great Adventure',
      link: '/Ireland',
      date: '10-25-2023'
    },
    {
      title: 'UCLA Film & Television Summer Institute',
      description: 'A compilation of my work from the Introduction to TV Writing course I took in the summer of 2023.',
      courseTitle: 'Introduction to TV Writing',
      link: '/UCLA',
      date: '8-15-2023'
    },
    {
      title: 'Kiwi',
      description: 'The origin story of my Dungeons & Dragons character, Kiwi.',
      courseTitle: 'Personal Project',
      link: '/Kiwi',
      date: '2-10-2022'
    },
    {
      title: 'Hillel',
      description: 'A short story and relection following the death of a teammate.',
      courseTitle: 'Personal Project',
      link: '/Hillel',
      date: '12-6-2022'
    },
    {
      title: 'The Bear and the Maiden Fair',
      description: 'A heart-warming story of a girl and her new best friend.',
      courseTitle: 'LITR 0110H: Digital & Cross-Disciplinary',
      link: '/BearMaiden',
      date: '6-20-2022'
    },
    {
      title: 'Landscape Assignment',
      description: 'A piece dedicated to the beauty of the Mt. Rose wilderness.',
      courseTitle: 'LITR 0110H: Digital & Cross-Disciplinary',
      link: '/Landscape',
      date: '9-6-2023'
    },
    {
      title: 'Re Memory',
      description: 'Inspired by the sweetest friend anyone could ever ask for.',
      courseTitle: 'LITR 0110H: Digital & Cross-Disciplinary',
      link: '/Clark',
      date: '2-1-2022'
    },
    {
      title: 'Myth from a Minor Character Perspective',
      description: 'A short story based on The Children of Lir, written from the perspective of a Water Spirit who helps the swans in the icy waters of the Straits of Moyle.',
      courseTitle: 'LITR 0210: Fiction Writing II',
      link: '/Myths',
      date: '10-30-2022'
    },
    {
      title: 'Kin',
      description: 'An adaption of the myth my own mother told me when I was younger.',
      courseTitle: 'LITR 0210: Fiction Writing II',
      link: '/Kin',
      date: '10-4-2022'
    },
    {
      title: 'Worm Questions',
      description: 'A silly assignment done with the gracious collaboration of a lovely computer science neighbor.',
      courseTitle: 'LITR 0210: Fiction Writing II',
      link: '/Worm',
      date: '9-28-2022'
    },
    {
      title: 'The Dual Meet',
      description: 'A mythical exploration of the perils contained in a high school dual swim meet.',
      courseTitle: 'LITR 0110A: Fiction I',
      link: '/Dual',
      date: '12-21-2021'
    },
    {
      title: 'Butterfly',
      description: 'A bus ride caught between different slices of time.',
      courseTitle: 'LITR 0110A: Fiction I',
      link: '/Butterfly',
      date: '9-1-2022'
    },
  ];

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCourse === '' || story.courseTitle === filterCourse)
  );

  const sortedStories = filteredStories.sort((a, b) => {
    if (sortOption === 'a-z') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'z-a') {
      return b.title.localeCompare(a.title);
    } else if (sortOption === 'date-asc') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortOption === 'date-desc') {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  return (
    <div className="explainer-page2">
      <div className="content-container">
        <div className="content3">
          <h3>Publications</h3>
          <div className="imgs">
            <div className="link-item">
              <a href="https://a.co/d/7dQm5YF" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://i.imgur.com/VbTbBLv.png"
                  height="100px"
                  alt="Galactica Book Cover"
                ></img>
              </a>
            </div>
            <div className="link-item">
              <a
                href="https://www.scdsoctagon.com/author/rebecca-waterson/"
                target="_blank" rel="noopener noreferrer"
              >
                <img
                  src="https://i0.wp.com/www.scdsoctagon.com/wp-content/uploads/2020/06/cropped-octagon-round-logo.png?fit=512%2C512&ssl=1"
                  width="100px"
                  alt="SCDS Octagon Logo"
                ></img>
              </a>
            </div>
            <div className="link-item">
              <a
                href="http://www.theribofbrown.com/classics-concentrator-teaches-tinder-date-about-oedipus/"
                target="_blank" rel="noopener noreferrer"
              >
                <img
                  src="https://i0.wp.com/www.theribofbrown.com/wp-content/uploads/2021/10/cropped-logo.png?w=300"
                  width="100px"
                  alt="RIB @ Brown Logo"
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className="controls">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <select onChange={e => setSortOption(e.target.value)} value={sortOption}>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="date-asc">Date (Oldest to Newest)</option>
            <option value="date-desc">Date (Newest to Oldest)</option>
          </select>
          <select onChange={e => setFilterCourse(e.target.value)} value={filterCourse}>
            <option value="">All Courses</option>
            {Array.from(new Set(stories.map(story => story.courseTitle))).map(course => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>


        <div className="content2">
          {sortedStories.map((story, index) => (
            <StoryItem
              key={index}
              title={story.title}
              description={story.description}
              courseTitle={story.courseTitle}
              link={story.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stories;