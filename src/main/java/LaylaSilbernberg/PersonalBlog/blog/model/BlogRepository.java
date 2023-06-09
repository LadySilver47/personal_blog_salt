package LaylaSilbernberg.PersonalBlog.blog.model;


import LaylaSilbernberg.PersonalBlog.blog.model.dao.MongoBlogRepository;
import LaylaSilbernberg.PersonalBlog.blog.model.documents.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Repository
public class BlogRepository {

    MongoBlogRepository mongoRepository;

    public BlogRepository(@Autowired MongoBlogRepository mongoRepository) {
        this.mongoRepository = mongoRepository;
    }

    public Blog saveBlog(Blog blog) {

        return mongoRepository.save(blog);

    }

    public Page<Blog> getBlogs(Pageable pagination) {

        return mongoRepository.findAll(pagination);
    }

    public Blog getBlogById(String id) {
        return mongoRepository.findById(id).orElse(null);
    }

    public void deleteBlogById(String id) {
        mongoRepository.deleteById(id);
    }

    public List<Blog> getAllBlogs() {
        return mongoRepository.findAll();
    }
}
