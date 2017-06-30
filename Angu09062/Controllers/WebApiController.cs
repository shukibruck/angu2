using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Angu09062.DAL;

namespace Angu09062.Controllers
{
    public class WebApiController : ApiController
    {
        /// <summary>
        /// Gets the events.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("WebApi/GetEvents")]
        public IHttpActionResult GetEvents()
        {
            var result = new List<Tasks>();
            using (var contex = new RepositoryContex())
            {
                result = contex.Tasks.ToList();
            }

            return Ok(result);
        }

        /// <summary>
        /// Adds the events.
        /// </summary>
        /// <param name="task">The task.</param>
        /// <returns></returns>
        [HttpPost]
        [Route("WebApi/AddEvent")]
        public IHttpActionResult AddEvents([FromBody] Tasks task)
        {
            int result;
            using (var contex = new RepositoryContex())
            {
                contex.Tasks.Add(task);

                result = contex.SaveChanges();
            }

            if (result == 1)
            {
                return Ok(result);
            }
            return BadRequest("Nie mogło dodać do bazy " + result);
        }

        /// <summary>
        /// Edits the event.
        /// </summary>
        /// <param name="task">The task.</param>
        /// <returns></returns>
        [HttpPost]
        [Route("WebApi/EditEvent")]
        public IHttpActionResult EditEvent([FromBody] Tasks task)
        {
            
            using (var context = new RepositoryContex())
            {
                var taskToChange = context.Tasks.Find(task.Id);
                if (taskToChange == null)
                {
                    return BadRequest("Task nie zostal odnaleziony id:" + task.Id);
                }
                taskToChange.Status = task.Status;
                var result = context.SaveChanges();

                if (result == 1)
                {
                    return Ok(result);
                }
                return BadRequest("Nie mogło dodać do bazy " + result);

            }
        }
    }
}
