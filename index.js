// Importing react
import React from 'react';
import ReactDOM from 'react-dom';

// Importing components
import Footer from './footer/footer.js';
import Header from './header/header.js';
import MainContent from './maincontent/main-content.js';

// Importing css
import mainStyle from './styles/mainStyle.css';

class Layout extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <MainContent />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <Layout />,
    document.getElementById('root')
);
  