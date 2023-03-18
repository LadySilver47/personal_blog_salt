package LaylaSilbernberg.PersonalBlog.blog.model;

import LaylaSilbernberg.PersonalBlog.blog.model.documents.Blog;
import LaylaSilbernberg.PersonalBlog.blog.model.dto.BlogDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class BlogService {

    BlogRepository repo;

    public BlogService(@Autowired BlogRepository repo) {
        this.repo = repo;
    }

    public Blog createBlog(BlogDto blogDto) {

        return repo.saveBlog(new Blog(
                blogDto.title(),
                blogDto.body(),
                LocalDate.now().format(DateTimeFormatter.ISO_LOCAL_DATE),
                blogDto.keywords()));
    }

    public Page<Blog> getBlogs(Pageable pagination) {

        return repo.getBlogs(pagination);
    }

    public Blog getBlogById(String id) {
        return repo.getBlogById(id);
    }

    public void deleteBlogById(String id) {
        repo.deleteBlogById(id);
    }

    public List<Blog> getAllBlogs() {
        return repo.getAllBlogs();
    }

    public Blog updateBlog(String id, BlogDto blog) {
        Blog updatedBlog = repo.getBlogById(id);
        updatedBlog.setTitle(blog.title());
        updatedBlog.setBody(blog.body());
        updatedBlog.setKeywords(blog.keywords());
        updatedBlog.setDate(LocalDate.now().format(DateTimeFormatter.ISO_LOCAL_DATE));
        return repo.saveBlog(updatedBlog);
    }
}
