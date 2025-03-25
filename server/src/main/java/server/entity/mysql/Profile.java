//package server.entity.mysql;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import server.enums.Gender;
//import server.enums.TickType;
//
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//@Entity
//@Table(name = "profiles")
//public class Profile {
//    @Id
//    @Column(name = "id")
//    private Integer id;
//
//    @Column(name = "full_name")
//    private String fullName;
//
//    @Column(name = "verified")
//    private Integer verified; // 0 or xxx.xxx in email
//
//    @Column(name = "status")
//    private String status; // online or sign out at xx.xx.xx
//
//    @Column(name = "has_tick")
//    private TickType hasTick;
//
//    @Column(name = "bio")
//    private String bio;
//
//    @Column(name = "profile_img")
//    private String profileImg;
//
//    @Column(name = "phone_number")
//    private String phoneNumber;
//
//    @Column(name = "date_of_birth")
//    private String dateOfBirth;
//
//    @Column(name = "gender")
//    private Gender gender;
//
//    @Column(name = "workplace")
//    private String workplace;
//
//    @Column(name = "address")
//    private String address;
//
//    @Column(name = "lat_home")
//    private String latHome;
//
//    @Column(name = "lng_home")
//    private String lngHome;
//
//    @Column(name = "street")
//    private String street;
//
//    @Column(name = "ward")
//    private String ward; // phuong
//
//    @Column(name = "district")
//    private String district;
//
//    @Column(name = "city")
//    private String city;
//}
