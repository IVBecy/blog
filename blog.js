// Get all blog posts
const getBlogPosts= () => {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", " https://api.github.com/repos/IVBecy/blog/contents/blog-posts", false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

// Render all blog posts
var pros = [];
const RenderBlogs = () => {
  var r = getBlogPosts();
  for (var p in r) {
    const RenderProcess = () => {
      pros.push(
        <div className="project" key={r[p].sha} style={{ "borderLeftColor": "greenyellow" }}>
          <h2>{r[p].name.split(".")[0]}</h2>
        </div>
      )
      return pros;
    };
    ReactDOM.render(<RenderProcess />, document.getElementById("posts"))
  };
};
RenderBlogs()