'use client';
import React, { useState } from 'react';
import styles from './Fullpage.module.css';
import ReactFullpage, { fullpageOptions } from '@fullpage/react-fullpage';
import Service from '../Main/service/Service';
import Ability from '../Main/ability/Ability';
import Footer from '../Footer/Footer';

interface Section {
  id?: number;
  content: React.ReactNode;
}

const originalColors = ['#ff5f45', '#003366', '#0066cc', '#0099ff', '#66b3ff'];

type Credits = {
  enabled?: boolean;
  label?: string;
  position?: 'left' | 'right';
};

const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const Fullpage = () => {
  const [sectionsColor, setSectionsColor] = useState([...originalColors]);
  const [fullpages, setFullpages] = useState<Section[]>([
    {
      id: 1,
      content: (
        <div className={styles.section1}>
          <h1 className={styles.title}>aDDoS</h1>
          <div className={styles.intro}>DDoS 공격 감지 및 알림 시스템</div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className={styles.section2}>
          <Service />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className={styles.section3}>
          <Ability
            src="/assets/ab1.png"
            alt="ab1 img"
            description="DDOS공격 패턴을 식별하고, 새로운 공격 유형에도 효과적으로 대응"
          />
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className={styles.section4}>
          <Ability
            src="/assets/ab2.png"
            alt="ab2 img"
            description="공격이 감지되면 사용자에게 SNS로 알림"
          />
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className={styles.section5}>
          <Ability
            src="/assets/ab3.png"
            alt="ab3 img"
            description="공격 시도와 시스템 반응에 대한 상세한 로그를 제공"
          />
        </div>
      ),
    },
    // {
    //  id: 6,
    //   content: (
    //     <div className={styles.section6}>
    //       <YoutubeVideo videoId="0d8RS7xSXA0"></YoutubeVideo>
    //     </div>
    //   ),
    // },
  ]);

  const onLeave = (origin: any, destination: any, direction: any) => {
    console.log('onLeave', { origin, destination, direction });
  };

  // const handleChangeColors = () => {
  //   const newColors =
  //     sectionsColor[0] === 'yellow'
  //       ? [...originalColors]
  //       : ['yellow', 'blue', 'white'];
  //   setSectionsColor(newColors);
  // };

  // const handleAddSection = () => {
  //   setFullpages((prevFullpages) => [
  //     ...prevFullpages,
  //     {
  //       text: `section ${prevFullpages.length + 1}`,
  //       id: Math.random(),
  //       content: <></>,
  //     },
  //   ]);
  // };

  // const handleRemoveSection = () => {
  //   setFullpages((prevFullpages) => {
  //     const newPages = [...prevFullpages];
  //     newPages.pop();
  //     return newPages;
  //   });
  // };

  if (!fullpages.length) {
    return null;
  }

  // const Menu = () => (
  //   <Navbar bg="light" expand="lg" fixed="top">
  //     <Navbar.Brand href="#home" className="mx-2">
  //       Fullpage.js + Next.js + Typescript
  //     </Navbar.Brand>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="mr-auto">
  //         <Nav.Item>
  //           <Button onClick={handleAddSection} className="mr-2, mx-1">
  //             ADD SECTION
  //           </Button>
  //         </Nav.Item>
  //         <Nav.Item>
  //           <Button onClick={handleRemoveSection} className="mr-2, mx-1">
  //             REMOVE SECTION
  //           </Button>
  //         </Nav.Item>
  //         <Nav.Item>
  //           <Button onClick={handleChangeColors}>CHANGE SECTION</Button>
  //         </Nav.Item>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>
  // );

  const credits: Credits = {
    enabled: true,
    label: 'my custom',
    position: 'left',
  };

  return (
    <div className="App">
      {/* <Menu /> */}
      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        navigation
        onLeave={onLeave}
        sectionsColor={sectionsColor}
        pluginWrapper={pluginWrapper}
        debug={false}
        credits={credits}
        render={(comp: any) => (
          <ReactFullpage.Wrapper>
            {fullpages.map(({ id, content }) => (
              <div key={id} className="section">
                {content}
              </div>
            ))}
            <div className="section fp-auto-height">
              <div className={styles.section6}>
                <Footer />
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Fullpage;
