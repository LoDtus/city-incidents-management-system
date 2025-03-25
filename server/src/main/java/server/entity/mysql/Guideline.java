//package server.entity.mysql;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//@Entity
//@Table(name = "guidelines")
//public class Guideline {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id")
//    private Integer id;
//
//    @Column(name = "author")
//    private Integer author;
//
//    @Column(name = "title")
//    private String title;
//
//    @Column(name = "slug")
//    private String slug;
//
//    @Column(name = "excerpt")
//    private String excerpt;
//
//    @Column(name = "thumbnail")
//    private String thumbnail;
//
//    @Column(name = "created_at")
//    private String createdAt;
//
//    @Column(name = "update_at")
//    private String updatedAt;
//
//    @Column(name = "published_at")
//    private String publishedAt;
//
//    @Column(name = "is_hidden")
//    private Integer isHidden;
//
//    @Column(name = "total_views")
//    private Integer totalViews;
//}
