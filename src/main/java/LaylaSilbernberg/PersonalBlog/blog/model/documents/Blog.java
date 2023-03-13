package LaylaSilbernberg.PersonalBlog.blog.model.documents;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;
import org.springframework.lang.NonNull;

import java.time.LocalDate;
import java.util.List;

@Document("blogPosts")
public class Blog {

    @MongoId
    private String id;

    private @NonNull String title;

    private @NonNull String body;

    private @NonNull String date;

    private List<String> keywords;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public List<String> getKeywords() {
        return keywords;
    }

    public Blog() {
    }

    public Blog(String title, String body, String date, List<String> keywords) {
        this.title = title;
        this.body = body;
        this.date = date;
        this.keywords = keywords;
    }

    public void setKeywords(List<String> keywords) {
        this.keywords = keywords;


    }
}
