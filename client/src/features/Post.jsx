import "../style/Post.css";

export default function Post(props) {
    const {title, content, timestamp, author} = props;

    return (
        <article className="post">
            <div className="post-header">
                <h2> {title} </h2>
                <div className="post-info">
                    <p>
                        Author: {author} <br />
                        {timestamp} <br />
                    </p>
                </div>
            </div>
            <div className="post-content">
                <p>
                    {content}
                </p>
            </div>
        </article>
    );
}
