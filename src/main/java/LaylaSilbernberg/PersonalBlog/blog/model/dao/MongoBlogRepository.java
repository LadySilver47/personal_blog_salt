package LaylaSilbernberg.PersonalBlog.blog.model.dao;

import LaylaSilbernberg.PersonalBlog.blog.model.documents.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoBlogRepository extends MongoRepository<Blog, String> {

Page<Blog> findAll(Pageable pageable);
}
