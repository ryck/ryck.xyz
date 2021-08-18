import { useState } from 'react';

export default function Home() {
  const [logo, setLogo] = useState('');

  const play = () => {
    setTimeout(function () {
      // modify this one line below, and see the result !
      var logoTitle = { logo };
      var logoRandom = '';
      var possible = '-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}';

      for (var i = 0; i < logoTitle.length + 1; i++) {
        logoRandom = logoTitle.substr(0, i);
        for (var j = i; j < logoTitle.length; j++) {
          logoRandom += possible.charAt(
            Math.floor(Math.random() * possible.length)
          );
        }
        console.log(logoRandom);
        setLogo(logoRandom);
        logoRandom = '';
      }
    }, 500);
  };

  play();

  return (
    <div className="container p-4 sm:mx-auto sm:mt-16 sm:max-w-7xl">
      <header className="flex justify-between align-middle">
        <div id="logo" className="text-gray-900">
          {logo}
        </div>
        <div id="navigation">
          <nav className="text-gray-900">
            <ul className="flex space-x-3">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
