package com.coco.odv;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;

/**
 * Repository for Incident table.
 * @author Tu
 *
 */
@ApplicationScoped
public class IncidentRepository {

	@Inject
    private EntityManager em;
	
	
	public List findByMonthYear(final int month, final int year){
		return em.createNamedQuery("Incident.findByMonthYear")
				.setParameter("month", month)
				.setParameter("year", year)
				.getResultList();
	}
	
}
