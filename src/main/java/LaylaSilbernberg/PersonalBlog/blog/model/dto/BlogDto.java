package LaylaSilbernberg.PersonalBlog.blog.model.dto;

import org.springframework.lang.Nullable;

import java.util.List;

public record BlogDto(
        String title,
        String body,

        @Nullable List<String> keywords
) {
}
