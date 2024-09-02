import List from './List.jsx'

function App(){

  const fruits =  [{id: 1, name:"apple", calories: 95}, 
                  {id:2, name:"orange", calories: 45},
                  {id:3, name:"banana", calories: 105},
                  {id:4, name:"coconut", calories: 159},
                  {id:5, name:"pineapple", calories:37}];

  const vegatables =[{id: 6, name:"cabbage", calories: 54}, 
                    {id:7, name:"celery", calories: 76},
                    {id:8, name:"potatoe", calories: 24},
                    {id:9, name:"onion", calories: 67},
                    {id:10, name:"garlic", calories:23}];


    return(<>
            {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
            {vegatables.length > 0 && <List items={vegatables} category="Vegatables" /> } 
          </>)

}
export default App