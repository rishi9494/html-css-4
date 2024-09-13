import './App.css';
function Navbar()  {
    return ( 
        <nav ClassName="navbar">
            <h1 className='h1'>Blog App</h1>
            <div className="menu">
                <a href='/'>Home</a>
                <a href='contact'>Contact</a>
                <a href='/create'>Create Blog</a>
            </div>
        </nav>
    );

}

export default Navbar;