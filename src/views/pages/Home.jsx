import React from 'react'; 

function Home() {
    return (
      <>
        <Navbar />
            <div className="container-carrossel">
              <div className="carrossel"></div>
            </div>
            <Servises />
              <Order />
            <Products />
            <div className="container-card">
              < Cards />
            </div>
        <Footer />
      </>
    );
  }
  
  export default Home;