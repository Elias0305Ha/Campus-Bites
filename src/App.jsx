import './App.css';
import './Card.css';
import Card from "./Card.jsx"


const App = () => {

    const handleViewMenu = (name) => {
      alert(`View Menu clicked for ${name}`);

    };

  return (
    <div>
      <h1 className='header'>Campus Bites</h1>     
      
      <Card          
          image="starbucks.jpg" 
          name="Starbucks"
          location="Trafton Center"
          onViewMenu={() => handleViewMenu("Starbucks")}
      />

      
      <Card          
          image="burgerking.jpg" 
          name="Burger King"
          location="Dinning Center"
          onViewMenu={() => handleViewMenu("Burger King")}
      />

      <Card          
          image="chipotle.jpg" 
          name="Chipotle"
          location="Trafton Center"
          onViewMenu={() => handleViewMenu("Chipotle")}
      />
      <Card   
          image="firehouse.jpg" 
          name="Fire House"
          location="Moris Hall"
          onViewMenu={() => handleViewMenu("Fire House")}
      />
      <Card          
          image="garbanzo.jpg" 
          name="Garbanzo"
          location="CSU"
          onViewMenu={() => handleViewMenu("Garbanzo")}
      />
      <Card   
          image="insomnia.jpg" 
          name="Insomnia"
          location="Moris Hall"
          onViewMenu={() => handleViewMenu("Insomnia")}
      />
      <Card          
          image="mcdonalnds.jpg" 
          name="Mcdonalds"
          location="Campus Launge"
          onViewMenu={() => handleViewMenu("Mcdonalds")}
      />
      <Card   
          image="pandaexpress.jpg" 
          name="Panda Express"
          location="Dining Center"
          onViewMenu={() => handleViewMenu("Panda Express")}
      />
      
     
      <Card   
          image="chickfila.jpg" 
          name="Chickfil-A"
          location="Moris Hall"
          onViewMenu={() => handleViewMenu("Chickfil-A")}
      />
      <Card   
          image="subway.jpg" 
          name="Subway"
          location="Moris Hall"
          onViewMenu={() => handleViewMenu("Subway")}
      />

      <Card   
          image="tacobell.jpeg" 
          name="Tacobell"
          location="Moris Hall"
          onViewMenu={() => handleViewMenu("Tacobell")}
      />
      </div>
       
  );
}

export default App;


