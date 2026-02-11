package com.spendwise.controller;

import com.spendwise.dto.CategoryWiseTotal;
import com.spendwise.dto.DashboardStats;
import com.spendwise.dto.MonthlySummary;
import com.spendwise.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    @Autowired
    private ExpenseService expenseService;

    @GetMapping("/stats")
    public ResponseEntity<DashboardStats> getStats() {
        return ResponseEntity.ok(expenseService.getDashboardStats());
    }

    @GetMapping("/category-wise-total")
    public ResponseEntity<List<CategoryWiseTotal>> getCategoryWiseTotal() {
        return ResponseEntity.ok(expenseService.getCategoryWiseTotal());
    }

    @GetMapping("/monthly-summary")
    public ResponseEntity<List<MonthlySummary>> getMonthlySummary() {
        return ResponseEntity.ok(expenseService.getMonthlySummary());
    }
}
