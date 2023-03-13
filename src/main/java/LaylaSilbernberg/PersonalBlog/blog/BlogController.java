package LaylaSilbernberg.PersonalBlog.blog;

import LaylaSilbernberg.PersonalBlog.blog.model.BlogService;
import LaylaSilbernberg.PersonalBlog.blog.model.documents.Blog;
import LaylaSilbernberg.PersonalBlog.blog.model.dto.BlogDto;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {

    BlogService service;

    public BlogController(@Autowired BlogService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Blog> createBlog(@RequestBody BlogDto blog, HttpServletRequest request) {

        Blog body = service.createBlog(blog);

        return ResponseEntity
                .created(URI.create(request.getRequestURI() + "/" + body.getId()))
                .body(body);

    }

    @GetMapping
    public ResponseEntity<List<Blog>> getBlogList(){

        return ResponseEntity.ok(service.getBlogs());
    }

}