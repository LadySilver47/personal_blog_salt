package LaylaSilbernberg.PersonalBlog.blog.model;


import LaylaSilbernberg.PersonalBlog.blog.model.documents.Blog;
import LaylaSilbernberg.PersonalBlog.blog.model.dto.BlogDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BlogRepository {

    MongoRepository mongoRepository;

    public BlogRepository(@Autowired MongoRepository mongoRepository) {
        this.mongoRepository = mongoRepository;
    }

    public Blog saveBlog(BlogDto blog) {

        return (Blog) mongoRepository.save(new Blog(blog.title(), blog.body(), blog.date(), blog.keywords()));

    }

    public List<Blog> getBlogs() {

        return mongoRepository.findAll();
    }
}
