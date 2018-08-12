
package ai.nanos.test.domain;

import com.google.gson.annotations.SerializedName;
import org.apache.commons.lang3.builder.ToStringBuilder;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TargetAudiance implements Serializable {

    private List<String> languages = null;
    private List<String> genders = null;
    @SerializedName("age_range")
    private List<Integer> ageRange = null;
    @SerializedName("KeyWords")
    private List<String> keywords = null;
    private List<String> locations = null;
    private List<String> interests = null;
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();
    private final static long serialVersionUID = -8654631979042490608L;

    public List<String> getLanguages() {
        return languages;
    }

    public void setLanguages(List<String> languages) {
        this.languages = languages;
    }

    public TargetAudiance withLanguages(List<String> languages) {
        this.languages = languages;
        return this;
    }

    public List<String> getGenders() {
        return genders;
    }

    public void setGenders(List<String> genders) {
        this.genders = genders;
    }

    public TargetAudiance withGenders(List<String> genders) {
        this.genders = genders;
        return this;
    }

    public List<Integer> getAgeRange() {
        return ageRange;
    }

    public void setAgeRange(List<Integer> ageRange) {
        this.ageRange = ageRange;
    }

    public TargetAudiance withAgeRange(List<Integer> ageRange) {
        this.ageRange = ageRange;
        return this;
    }

    public List<String> getLocations() {
        return locations;
    }

    public void setLocations(List<String> locations) {
        this.locations = locations;
    }

    public TargetAudiance withLocations(List<String> locations) {
        this.locations = locations;
        return this;
    }

    public List<String> getInterests() {
        return interests;
    }

    public void setInterests(List<String> interests) {
        this.interests = interests;
    }

    public TargetAudiance withInterests(List<String> interests) {
        this.interests = interests;
        return this;
    }

    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    public TargetAudiance withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

    public List<String> getKeywords() {
        return keywords;
    }

    public void setKeywords(List<String> keywords) {
        this.keywords = keywords;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this).append("languages", languages).append("genders", genders).append("ageRange", ageRange).append("locations", locations).append("interests", interests).append("additionalProperties", additionalProperties).toString();
    }

}
