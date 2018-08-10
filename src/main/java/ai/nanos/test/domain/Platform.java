
package ai.nanos.test.domain;

import com.google.gson.annotations.SerializedName;
import org.apache.commons.lang3.builder.ToStringBuilder;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class Platform implements Serializable {

    private String status;
    @SerializedName("total_budget")
    private Integer totalBudget;
    @SerializedName("remaining_budget")
    private Integer remainingBudget;
    @SerializedName("start_date")
    private Long startDate;
    @SerializedName("end_date")
    private Long endDate;
    @SerializedName("target_audiance")
    private TargetAudiance targetAudiance;
    private Creatives creatives;
    private Insights insights;
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();
    private final static long serialVersionUID = 7864324608405312536L;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Platform withStatus(String status) {
        this.status = status;
        return this;
    }

    public Integer getTotalBudget() {
        return totalBudget;
    }

    public void setTotalBudget(Integer totalBudget) {
        this.totalBudget = totalBudget;
    }

    public Platform withTotalBudget(Integer totalBudget) {
        this.totalBudget = totalBudget;
        return this;
    }

    public Integer getRemainingBudget() {
        return remainingBudget;
    }

    public void setRemainingBudget(Integer remainingBudget) {
        this.remainingBudget = remainingBudget;
    }

    public Platform withRemainingBudget(Integer remainingBudget) {
        this.remainingBudget = remainingBudget;
        return this;
    }

    public Long getStartDate() {
        return startDate;
    }

    public void setStartDate(Long startDate) {
        this.startDate = startDate;
    }

    public Platform withStartDate(Long startDate) {
        this.startDate = startDate;
        return this;
    }

    public Long getEndDate() {
        return endDate;
    }

    public void setEndDate(Long endDate) {
        this.endDate = endDate;
    }

    public Platform withEndDate(Long endDate) {
        this.endDate = endDate;
        return this;
    }

    public TargetAudiance getTargetAudiance() {
        return targetAudiance;
    }

    public void setTargetAudiance(TargetAudiance targetAudiance) {
        this.targetAudiance = targetAudiance;
    }

    public Platform withTargetAudiance(TargetAudiance targetAudiance) {
        this.targetAudiance = targetAudiance;
        return this;
    }

    public Creatives getCreatives() {
        return creatives;
    }

    public void setCreatives(Creatives creatives) {
        this.creatives = creatives;
    }

    public Platform withCreatives(Creatives creatives) {
        this.creatives = creatives;
        return this;
    }

    public Insights getInsights() {
        return insights;
    }

    public void setInsights(Insights insights) {
        this.insights = insights;
    }

    public Platform withInsights(Insights insights) {
        this.insights = insights;
        return this;
    }

    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    public Platform withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this).append("status", status).append("totalBudget", totalBudget).append("remainingBudget", remainingBudget).append("startDate", startDate).append("endDate", endDate).append("targetAudiance", targetAudiance).append("creatives", creatives).append("insights", insights).append("additionalProperties", additionalProperties).toString();
    }

}
