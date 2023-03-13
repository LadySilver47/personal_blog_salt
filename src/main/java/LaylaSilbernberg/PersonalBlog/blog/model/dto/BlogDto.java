package LaylaSilbernberg.PersonalBlog.blog.model.dto;

import java.util.List;

public record BlogDto(
        String title,
        String body,
        String date,

        List<String> keywords
) {
}
