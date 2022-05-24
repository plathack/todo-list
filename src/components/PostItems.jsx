import React from "react";
import PostItem from "./PostItem/PostItem";


const PostItems = ({ taskData, deleteTask }) => {
    return (
        taskData.map((taskData) => <PostItem deleteTask={deleteTask} taskData={taskData} />)
    );
}

export default PostItems;