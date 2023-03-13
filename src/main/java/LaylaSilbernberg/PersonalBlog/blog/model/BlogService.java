package LaylaSilbernberg.PersonalBlog.blog.model;

import LaylaSilbernberg.PersonalBlog.blog.model.documents.Blog;
import LaylaSilbernberg.PersonalBlog.blog.model.dto.BlogDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {

    BlogRepository repo;

    public BlogService(@Autowired BlogRepository repo) {
        this.repo = repo;
    }

    public Blog createBlog(BlogDto blog) {
        return repo.saveBlog(blog);
    }

    public List<Blog> getBlogs() {

        return repo.getBlogs();
    }
}
