package com.spendwise.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashboardStats {
    private BigDecimal totalExpense;
    private BigDecimal monthlyExpense;
    private Long categoriesCount;
}
