package LaylaSilbernberg.PersonalBlog.blog.model.dao;

import LaylaSilbernberg.PersonalBlog.blog.model.documents.Blog;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoBlogRepository extends MongoRepository<Blog, String> {

}
