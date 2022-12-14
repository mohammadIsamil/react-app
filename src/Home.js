import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState [null];

    // const [blogs, setblogs] = useState([
    //     {title: 'My First Blog', body: 'abcdefght', author: "mario", id: 1},
    //     { title: 'My Scond Blog', body: '123456789', author: "amigos", id: 2},
    //     {title: 'My third Blog', body: 'a1s2d3e4f45',author: "yoshi", id: 3}
    // ]);
    const[name, setname] = useState('mario')

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }
    useEffect(() => {
        fetch('http://localhost:8080/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
        })
                console.log("User effect run");
        console.log(name);
    },[name]);

    // const [name, setname] = useState('mario');
    // const [age, setage] = useState(25);

    // const handleClick=(e) =>{
    //     setname('luigi');
    //     setage(30);
    //     //console.log("Hello Everyone", e);
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('Hello ' + name, e.target);
    // }


    return ( 
        <div className = "Home">
           { blogs && <BlogList blogs ={blogs} title = "All Blogs!" handleDelete = {handleDelete}/>}
            <button onClick={() => setname('luigi')}>
                Change Name
            </button>
            {/* <BlogList blogs ={blogs.filter((blog) => blog.author === ('mario'))} title = "Mario's Blog" /> */}
            {/* <h2> Home Page</h2>
            <p>{ name } is { age} years old </p>
            <button onClick = {handleClick}> Click Me </button>
            <button onClick = {(e) => handleClickAgain('mario', e)}> Click Me Again </button>
        // </div> */}
        </div>
     );
}
 
export default Home;