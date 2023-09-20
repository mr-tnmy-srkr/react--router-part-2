import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const handleShowDetails = ()=>{
        navigate(`/post/${id}`)
    }
    

  return (
    <div className="text-2xl border h-56 flex flex-col">
      <h4 className="mt-5">Post of Id : {id}</h4>
      <p className="mb-5 flex-grow">{title}</p>
      <div className="mb-5 flex gap-3 justify-center">
        <Link to={`/post/${id}`} className=" bg-blue-500 text-white px-2 py-2">
          Post Details
        </Link>
        
        <button onClick={handleShowDetails} className=" bg-blue-500 text-white px-2 py-2">
          Navigate
        </button>
      </div>
    </div>
  );
};

export default Post;
