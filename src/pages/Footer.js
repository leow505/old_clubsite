import React from 'react'

function Footer() {
    const curYear = new Date().getFullYear();
  return (
    <footer>
        <div className="footer-container">
            <div className="left-wrap">
                <h3>CS CLUB</h3>
                <p>&copy; {curYear}</p>
            </div>
            <div className="right-wrap">
                <div className="footer--col">
                    <h5>Products</h5>
                    <ul>
                        <li>Prod 1</li>
                        <li>Prod 2</li>
                        <li>Prod 3</li>
                    </ul>
                </div>
                <div className="footer--col">
                    <h5>Features</h5>
                    <ul>
                        <li>Features 1</li>
                        <li>Features 2</li>
                        <li>Features 3</li>
                    </ul>
                </div>
                <div className="footer--col">
                    
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer