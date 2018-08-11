
package ai.nanos.test.domain;

import com.google.gson.annotations.SerializedName;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class Campaign implements Serializable {

    private String id;
    private String name;
    private String goal;
    @SerializedName("total_budget")
    private Integer totalBudget;
    private String status;
    private Map<String, Platform> platforms;
    private Map<String, Object> additionalProperties = new HashMap<>();
    private final static long serialVersionUID = -1971770175661876449L;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Campaign withId(String id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Campaign withName(String name) {
        this.name = name;
        return this;
    }

    public String getGoal() {
        return goal;
    }

    public void setGoal(String goal) {
        this.goal = goal;
    }

    public Campaign withGoal(String goal) {
        this.goal = goal;
        return this;
    }

    public Integer getTotalBudget() {
        return totalBudget;
    }

    public void setTotalBudget(Integer totalBudget) {
        this.totalBudget = totalBudget;
    }

    public Campaign withTotalBudget(Integer totalBudget) {
        this.totalBudget = totalBudget;
        return this;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Campaign withStatus(String status) {
        this.status = status;
        return this;
    }

    public Map<String, Platform> getPlatforms() {
        return platforms;
    }

    public void setPlatforms(Map<String, Platform> platforms) {
        this.platforms = platforms;
    }

    public Campaign withPlatforms(Map<String, Platform> platforms) {
        this.platforms = platforms;
        return this;
    }

    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    public Campaign withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (o == null || getClass() != o.getClass()) return false;

        Campaign campaign = (Campaign) o;

        return new EqualsBuilder()
            .append(id, campaign.id)
            .append(name, campaign.name)
            .append(goal, campaign.goal)
            .append(totalBudget, campaign.totalBudget)
            .append(status, campaign.status)
            .append(platforms, campaign.platforms)
            .append(additionalProperties, campaign.additionalProperties)
            .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
            .append(id)
            .append(name)
            .append(goal)
            .append(totalBudget)
            .append(status)
            .append(platforms)
            .append(additionalProperties)
            .toHashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this).append("id", id).append("name", name).append("goal", goal).append("totalBudget", totalBudget).append("status", status).append("platforms", platforms).append("additionalProperties", additionalProperties).toString();
    }

}
