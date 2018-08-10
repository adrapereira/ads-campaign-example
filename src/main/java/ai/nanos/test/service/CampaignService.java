package ai.nanos.test.service;

import ai.nanos.test.domain.Campaign;
import ai.nanos.test.repository.CampaignRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing Campaign.
 */
@Service
public class CampaignService {

    private final Logger log = LoggerFactory.getLogger(CampaignService.class);

    private final CampaignRepository campaignRepository;

    public CampaignService(CampaignRepository campaignRepository) {
        this.campaignRepository = campaignRepository;
    }

    /**
     * Save a campaign.
     *
     * @param campaign the entity to save
     * @return the persisted entity
     */
    public Campaign save(Campaign campaign) {
        log.debug("Request to save Campaign : {}", campaign);
        return campaignRepository.save(campaign);
    }

    /**
     * Get all the campaigns.
     *
     * @return the list of entities
     */
    public List<Campaign> findAll() {
        log.debug("Request to get all Campaigns");
        return campaignRepository.findAll();
    }


    /**
     * Get one campaign by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    public Optional<Campaign> findOne(String id) {
        log.debug("Request to get Campaign : {}", id);
        return campaignRepository.findById(id);
    }

    /**
     * Delete the campaign by id.
     *
     * @param id the id of the entity
     */
    public void delete(String id) {
        log.debug("Request to delete Campaign : {}", id);
        campaignRepository.deleteById(id);
    }
}
