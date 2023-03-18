package LaylaSilbernberg.PersonalBlog.blog.model.dto;

import org.springframework.lang.Nullable;

import java.util.List;

public record BlogDto(

        @Nullable String id,

        String title,
        String body,

        @Nullable List<String> keywords
) {
}
