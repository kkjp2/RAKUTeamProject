package com.example.demo.service;

import com.example.demo.entity.MoveCompany;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.MoveCompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class MoveCompanyService {
    @Autowired
    private MoveCompanyRepository repository;

    // 获取所有公司
    public List<MoveCompany> getAllCompanies() {
        return repository.findAll();
    }

//    public List<MoveCompany> getCompaniesByCity(String moveCity) {
//        // 使用数据库查询来动态获取公司列表
//        return repository.findByCityContaining(moveCity);
//    }

    public Page<MoveCompany> getCompaniesByCity(String moveCity, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return repository.findByCityContaining(moveCity, pageable);
    }


    //根据id 查找公司信息
    public MoveCompany getCompanyById(Integer id) {
        try {
            return repository.findById(id)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Company not found with id: " + id));
        } catch (Exception e) {
            // 添加调试日志以跟踪异常
            System.out.println("Error fetching company with id: " + id);
            e.printStackTrace();
            throw e; // 重新抛出异常，以便 Spring 处理
        }
    }

    // 保存公司
    public MoveCompany saveCompany(MoveCompany company) {
        return repository.save(company);
    }

    // 更新公司信息 根据사업자등록번호  假如是数据库里有的사업자 등록 번호 就进行更新
    public MoveCompany saveOrUpdateCompany(MoveCompany company) {
        Optional<MoveCompany> existingCompany = repository.findByBusinessNumber(company.getBusinessNumber());

        if (existingCompany.isPresent()) {
            MoveCompany updatedCompany = existingCompany.get();
            // 更新现有公司信息
//            updatedCompany.setName(company.getName());
//            updatedCompany.setAddress(company.getAddress());
//            updatedCompany.setPostalCode(company.getPostalCode());
//            updatedCompany.setCeo(company.getCeo());
//            updatedCompany.setService(company.getService());
//            updatedCompany.setEmail(company.getEmail());
            updatedCompany.setImg_icon(company.getImg_icon());
//            updatedCompany.setMoveCity(company.getMoveCity());
//            updatedCompany.setPhone(company.getPhone());
            return repository.save(updatedCompany);  // 执行更新
        } else {
            return repository.save(company);  // 执行添加
        }
    }

    // 删除公司
    public void deleteCompany(Integer id) {
        // 查找公司是否存在，如果不存在则抛出异常
        MoveCompany company = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("削除する会社が見つかりません: " + id));

        // 如果公司存在，执行删除
        repository.delete(company);
    }

}
