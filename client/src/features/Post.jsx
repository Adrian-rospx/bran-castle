import "../Post.css";

export default function Post() {

    return (
        <article className="post">
            <div className="post-header">
                <h2>Insert title here</h2>
                <div className="post-info">
                    <p>
                        Author <br />
                        Date xxxxxx <br />
                    </p>
                </div>
            </div>
            <div className="post-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est, tempore culpa reprehenderit explicabo placeat natus quam quod voluptatem mollitia deserunt. Molestias, itaque qui nihil in dicta deserunt commodi dolore?
                </p>
            </div>
        </article>
    );
}
