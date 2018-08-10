
package ai.nanos.test.domain;

import com.google.gson.annotations.SerializedName;
import org.apache.commons.lang3.builder.ToStringBuilder;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class Insights implements Serializable {

    private Integer impressions;
    private Integer clicks;
    @SerializedName("nanos_score")
    private Double nanosScore;
    @SerializedName("cost_per_click")
    private Double costPerClick;
    @SerializedName("click_through_rate")
    private Double clickThroughRate;
    @SerializedName("advanced_kpi_1")
    private Double advancedKpi1;
    @SerializedName("advanced_kpi_2")
    private Double advancedKpi2;
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();
    private final static long serialVersionUID = 67699039289114575L;

    public Integer getImpressions() {
        return impressions;
    }

    public void setImpressions(Integer impressions) {
        this.impressions = impressions;
    }

    public Insights withImpressions(Integer impressions) {
        this.impressions = impressions;
        return this;
    }

    public Integer getClicks() {
        return clicks;
    }

    public void setClicks(Integer clicks) {
        this.clicks = clicks;
    }

    public Insights withClicks(Integer clicks) {
        this.clicks = clicks;
        return this;
    }

    public Double getNanosScore() {
        return nanosScore;
    }

    public void setNanosScore(Double nanosScore) {
        this.nanosScore = nanosScore;
    }

    public Insights withNanosScore(Double nanosScore) {
        this.nanosScore = nanosScore;
        return this;
    }

    public Double getCostPerClick() {
        return costPerClick;
    }

    public void setCostPerClick(Double costPerClick) {
        this.costPerClick = costPerClick;
    }

    public Insights withCostPerClick(Double costPerClick) {
        this.costPerClick = costPerClick;
        return this;
    }

    public Double getClickThroughRate() {
        return clickThroughRate;
    }

    public void setClickThroughRate(Double clickThroughRate) {
        this.clickThroughRate = clickThroughRate;
    }

    public Insights withClickThroughRate(Double clickThroughRate) {
        this.clickThroughRate = clickThroughRate;
        return this;
    }

    public Double getAdvancedKpi1() {
        return advancedKpi1;
    }

    public void setAdvancedKpi1(Double advancedKpi1) {
        this.advancedKpi1 = advancedKpi1;
    }

    public Insights withAdvancedKpi1(Double advancedKpi1) {
        this.advancedKpi1 = advancedKpi1;
        return this;
    }

    public Double getAdvancedKpi2() {
        return advancedKpi2;
    }

    public void setAdvancedKpi2(Double advancedKpi2) {
        this.advancedKpi2 = advancedKpi2;
    }

    public Insights withAdvancedKpi2(Double advancedKpi2) {
        this.advancedKpi2 = advancedKpi2;
        return this;
    }

    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    public Insights withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this).append("impressions", impressions).append("clicks", clicks).append("nanosScore", nanosScore).append("costPerClick", costPerClick).append("clickThroughRate", clickThroughRate).append("advancedKpi1", advancedKpi1).append("advancedKpi2", advancedKpi2).append("additionalProperties", additionalProperties).toString();
    }

}
