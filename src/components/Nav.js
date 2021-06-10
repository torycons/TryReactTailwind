import React from 'react';

function Nav() {
  return (
    <header className="flex justify-between px-5 pt-4 pb-4">
        <div>logo</div>
        <nav>
        <a href="#" className="mr-5">Main</a>
        <a href="#" className="mr-5">Catalog</a>
        <a href="#" className="mr-5">Contact</a>
        <a href="#" className="mr-5">FAQ</a>
        </nav>
    </header>
  );
}

export default Nav;
