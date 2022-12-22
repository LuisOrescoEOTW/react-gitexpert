import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GIfExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', ]);
    // console.log(categories);

    const onAddCategory = ( newCategory) => {
        // console.log(newCategory);
        // categories.push(newCategory);
        if ( categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    }

    return (
    <>
        <h1>GIfExpertApp</h1>

        {/* input */}
        <AddCategory
            onNewCategory ={ (value) => onAddCategory( value) }
        />

        {/* <ol>
            {categories.map(( category ) =>{
                return <li key={ category}> { category} </li>
            })
            }    
        </ol> */}

        { categories.map( (category) => (
            <GifGrid
                key={ category } 
                category={ category }/>
            ))
        }        
       

    </>    
  )
}
