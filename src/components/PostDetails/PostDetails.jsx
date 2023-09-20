import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;

    const {postId} = useParams();
    console.log(postId);


const navigate = useNavigate()
const handleGoBack = ()=>{
    navigate(-1)
}

//   console.log(post);
  return (
    <div className="text-2xl border-2 p-3 space-y-3">
      <h3>Post Details about : From Params : {postId}</h3>
      <h3>Post Details about : {id}</h3>
      <p>Title = {title}</p>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
