package com.coco.odv;

import javax.inject.Inject;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/odv")
public class IncidentResource {
	
	@Inject
	private IncidentRepository dao;	

    @GET
    @Path("/um")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUMdata(
    		@DefaultValue("1") @QueryParam("month") int month,
    		@DefaultValue("2017")@QueryParam("year") int year) {
    	return Response.ok(dao.findByMonthYear(month, year)).build();
    }
}