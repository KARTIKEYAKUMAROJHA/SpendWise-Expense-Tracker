package com.spendwise.service;

import com.spendwise.dto.CategoryWiseTotal;
import com.spendwise.dto.DashboardStats;
import com.spendwise.dto.ExpenseDTO;
import com.spendwise.dto.MonthlySummary;
import com.spendwise.entity.Expense;
import com.spendwise.entity.User;
import com.spendwise.repository.ExpenseRepository;
import com.spendwise.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private UserRepository userRepository;

    private User getCurrentUser() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public List<ExpenseDTO> getAllExpenses() {
        User user = getCurrentUser();
        return expenseRepository.findByUserOrderByExpenseDateDesc(user)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public ExpenseDTO getExpenseById(Long id) {
        User user = getCurrentUser();
        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        if (!expense.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized");
        }

        return convertToDTO(expense);
    }

    public ExpenseDTO createExpense(ExpenseDTO expenseDTO) {
        User user = getCurrentUser();

        Expense expense = new Expense();
        expense.setTitle(expenseDTO.getTitle());
        expense.setAmount(expenseDTO.getAmount());
        expense.setCategory(expenseDTO.getCategory());
        expense.setExpenseDate(expenseDTO.getExpenseDate());
        expense.setNote(expenseDTO.getNote());
        expense.setUser(user);

        Expense savedExpense = expenseRepository.save(expense);
        return convertToDTO(savedExpense);
    }

    public ExpenseDTO updateExpense(Long id, ExpenseDTO expenseDTO) {
        User user = getCurrentUser();
        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        if (!expense.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized");
        }

        expense.setTitle(expenseDTO.getTitle());
        expense.setAmount(expenseDTO.getAmount());
        expense.setCategory(expenseDTO.getCategory());
        expense.setExpenseDate(expenseDTO.getExpenseDate());
        expense.setNote(expenseDTO.getNote());

        Expense updatedExpense = expenseRepository.save(expense);
        return convertToDTO(updatedExpense);
    }

    public void deleteExpense(Long id) {
        User user = getCurrentUser();
        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        if (!expense.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized");
        }

        expenseRepository.delete(expense);
    }

    public DashboardStats getDashboardStats() {
        User user = getCurrentUser();
        List<Expense> allExpenses = expenseRepository.findByUserOrderByExpenseDateDesc(user);

        BigDecimal totalExpense = allExpenses.stream()
                .map(Expense::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        LocalDate now = LocalDate.now();
        BigDecimal monthlyExpense = allExpenses.stream()
                .filter(e -> e.getExpenseDate().getYear() == now.getYear() && e.getExpenseDate().getMonthValue() == now.getMonthValue())
                .map(Expense::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        long categoriesCount = allExpenses.stream()
                .map(Expense::getCategory)
                .distinct()
                .count();

        return new DashboardStats(totalExpense, monthlyExpense, categoriesCount);
    }

    public List<CategoryWiseTotal> getCategoryWiseTotal() {
        User user = getCurrentUser();
        List<Expense> expenses = expenseRepository.findByUserOrderByExpenseDateDesc(user);

        Map<String, BigDecimal> categoryTotals = expenses.stream()
                .collect(Collectors.groupingBy(
                        Expense::getCategory,
                        Collectors.reducing(BigDecimal.ZERO, Expense::getAmount, BigDecimal::add)
                ));

        return categoryTotals.entrySet().stream()
                .map(entry -> new CategoryWiseTotal(entry.getKey(), entry.getValue()))
                .collect(Collectors.toList());
    }

    public List<MonthlySummary> getMonthlySummary() {
        User user = getCurrentUser();
        List<Expense> expenses = expenseRepository.findByUserOrderByExpenseDateDesc(user);

        Map<YearMonth, BigDecimal> monthlySummary = expenses.stream()
                .collect(Collectors.groupingBy(
                        e -> YearMonth.from(e.getExpenseDate()),
                        Collectors.reducing(BigDecimal.ZERO, Expense::getAmount, BigDecimal::add)
                ));

        return monthlySummary.entrySet().stream()
                .sorted((a, b) -> b.getKey().compareTo(a.getKey()))
                .map(entry -> new MonthlySummary(
                        entry.getKey().format(DateTimeFormatter.ofPattern("MMM yyyy")),
                        entry.getValue()
                ))
                .collect(Collectors.toList());
    }

    private ExpenseDTO convertToDTO(Expense expense) {
        return new ExpenseDTO(
                expense.getId(),
                expense.getTitle(),
                expense.getAmount(),
                expense.getCategory(),
                expense.getExpenseDate(),
                expense.getNote()
        );
    }
}
