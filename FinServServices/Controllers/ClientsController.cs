﻿using FinServBussinessEntities;
using System.Collections.Generic;
using System.Web.Http;
using FinServUnitOfWork.Interface;
using FinServUnitOfWork.Repository;

namespace FinServServices.Controllers
{
    [RoutePrefix("API/Clients")]
    public class ClientsController : ApiController
    {
        IClients Repository = new UOWClients();

        [HttpGet]
        [Route("GetAllClients")]
        public IEnumerable<Applicants> GetAllClients()
        {
            return Repository.GetAllClients();
        }

        [HttpGet]
        [Route("GetClientDetails")]
        public Applicants GetClientDetails(string ClientID)
        {
            return Repository.GetClientDetails(ClientID);
        }

        [HttpGet]
        [Route("GetClientCommunicationDetails")]
        public List<ApplicantCommunicationDetails> GetClientCommunicationDetails(string ClientID)
        {
            return Repository.GetClientCommunicationDetails(ClientID);
        }

        [HttpGet]
        [Route("GetClientEmployementDetails")]
        public List<ApplicantEmployementDetails> GetClientEmployementDetails(string ClientID)
        {
            return Repository.GetClientEmployementDetails(ClientID);
        }
    }
}
