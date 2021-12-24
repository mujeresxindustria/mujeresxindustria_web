import React, { useEffect, useState } from "react";
//Components Material Ui
import {
  Card,
  Container,
  CardMedia,
  CardContent,
  Typography,
  Link,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  firstContainer: {
    padding: theme.spacing(8, 0, 4),
  },
}));

const Blog = () => {
  const [posts, setPosts] = useState([]);

  // Functions to create a short text
  const toText = (node) => {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };
  const shortenText = (text, startingPoint, maxLength) => {
    return text.length > maxLength
      ? text.slice(startingPoint, maxLength)
      : text;
  };

  useEffect(() => {
    let mounted = true;
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@writing-zen"
    )
      .then((res) => res.json())
      .then((items) => {
        if (mounted) {
          const res = items.items.filter((item) => item.categories.length > 0);
          setPosts(res);
        }
      });
    return () => (mounted = false);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.firstContainer}>
      <Container>
        <Typography
          style={{ fontWeight: "bold", marginBottom: "2rem" }}
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
        >
          Blog Mujeres por la Industria
        </Typography>
        {posts.map((post, index) => (
          <Card key={index} sx={{ maxWidth: 345 }} style={{ margin: "20px" }}>
            <CardMedia component="img" height="140" src={post.thumbnail} />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {post.title}
              </Typography>
              <Typography variant="h8" component="div">
                <b>{post.author}</b> &nbsp; {shortenText(post.pubDate, 0, 10)}
              </Typography>
              <Typography color="text.secondary" style={{ marginTop: "10px" }}>
                {"..." + shortenText(toText(post.content), 60, 300) + "..."}
              </Typography>
              <CardActions style={{ justifyContent: "center" }}>
                <Link href={post.link} target="_blank">
                  <Button
                    size="small"
                    align="center"
                    style={{ color: "#c1338f" }}
                  >
                    Leer más
                  </Button>
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
};
export default Blog;
