package com.example.demo.controller;

import com.example.demo.entity.MoveCompany;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.MoveCompanyRepository;
import com.example.demo.service.MoveCompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/move")
public class MoveCompanyController {
    @Autowired
    private MoveCompanyService moveCompanyService;

    @ResponseBody
    @GetMapping("/companies")
    //获取公司
    public List<MoveCompany> getAllCompanies() {
        return moveCompanyService.getAllCompanies();
    }

//    //根据地区获取公司
//    @GetMapping("/companies/cityFind")
//    public ResponseEntity<List<MoveCompany>> getCompaniesByCity(@RequestParam("city") String city) {
//        List<MoveCompany> companyList = moveCompanyService.getCompaniesByCity(city);
//        return new ResponseEntity<>(companyList, HttpStatus.OK);
//    }

    @GetMapping("/companies/cityFind")
    public ResponseEntity<Page<MoveCompany>> getCompaniesByCity(
            @RequestParam("city") String city,
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "5") int size) {
        Page<MoveCompany> companyList = moveCompanyService.getCompaniesByCity(city, page, size);
        return new ResponseEntity<>(companyList, HttpStatus.OK);
    }


    @PostMapping("/companies/find")
    public ResponseEntity<MoveCompany> getCompanyByIdFromBody(@RequestBody Map<String, Integer> requestBody) {
        Integer id = requestBody.get("id");  // 从请求体中获取 id
        MoveCompany company = moveCompanyService.getCompanyById(id);
        return new ResponseEntity<>(company, HttpStatus.OK);
    }

//    @PostMapping("/companies/cityFind")
//    public ResponseEntity<List<MoveCompany>> getCompaniesByCity(@RequestBody Map<String,String> requestBody){
//        String city = requestBody.get("city");
//        List<MoveCompany> companiesByCity = moveCompanyService.getCompaniesByCity(city);
//        return new ResponseEntity<>(companiesByCity,HttpStatus.OK);
//    }


//    @PostMapping("/companies")
//    //添加公司
//    public MoveCompany addCompany(@RequestBody MoveCompany newCompany) {
//        // 保存新公司到数据库并返回保存后的对象
//        MoveCompany savedCompany = moveCompanyService.saveCompany(newCompany);
//        return savedCompany;
//    }

    @PostMapping("/companies")
    // 添加或更新公司
    public MoveCompany addOrUpdateCompany(@RequestBody MoveCompany newCompany) {
        // 调用服务层，添加或更新公司信息
        return moveCompanyService.saveOrUpdateCompany(newCompany);
    }


    // 根据id获取公司信息
    @GetMapping("/companies/{id}")
    public MoveCompany getCompanyById(@PathVariable("id") Integer id) {
        return moveCompanyService.getCompanyById(id);
    }

//    @PostMapping("/company")
//    public ResponseEntity<String> addCompany(@RequestBody Company company) {
//        // 逻辑：保存公司信息到数据库
//        return new ResponseEntity<>("Company added successfully", HttpStatus.OK);
//    }

    //删除公司信息
    @DeleteMapping("/companies/{id}")
    public ResponseEntity<String> deleteCompany(@PathVariable("id") Integer id) {
        if (id == null || id <= 0) {
            return new ResponseEntity<>("無効な会社IDです。", HttpStatus.BAD_REQUEST);  // 400 Bad Request
        }
        try {
            moveCompanyService.deleteCompany(id);
            return new ResponseEntity<>("削除が成功しました。", HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>("削除する会社が見つかりません。", HttpStatus.NOT_FOUND);  // 404 Not Found
        }
    }

//    @PostMapping("/register")
//    public ResponseEntity<String> registerCompany(@RequestBody MoveCompany companyDetails) {
//        MoveCompany registeredCompany = moveCompanyService.registerCompany(companyDetails);
//        return ResponseEntity.ok("注册成功！您的公司ID是：" + registeredCompany.getExternalId());
//    }

}
