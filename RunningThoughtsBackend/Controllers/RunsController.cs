using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SQLite;
using System.Net;
using System.Text;
using System.Text.Json;

namespace RunningThoughtsBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RunsController : ControllerBase
    {
        private readonly ILogger<RunsController> _logger;
        private SQLiteConnection conn = new SQLiteConnection("DataSource=../RunningThoughtsDB/runningThoughts.sqlite");
        public RunsController(ILogger<RunsController> logger)
        {
            _logger = logger;
        }

        [Route("GetRuns/{username}/ByType")]
        [HttpGet(Name = "GetRunsByType")]
        public IEnumerable<Run> GetRuns(string username, [FromBody]string[] types)
        {
            var typeStringBuilder = new StringBuilder();
            foreach (var type in types)
            {
                typeStringBuilder.Append("'").Append(type).Append("', ");
            }
            typeStringBuilder.Remove(typeStringBuilder.Length - 2, 2);

            List<Run> runs = new List<Run>();
            try
            {
                conn.Open();
                SQLiteCommand command = conn.CreateCommand();
                command.CommandText = "SELECT * FROM RUNS WHERE Username = '" + username + "' AND Type IN (" + typeStringBuilder + ") ORDER BY Date DESC";
                using (SQLiteDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var run = new Run();
                        run.Name = reader.GetString(2);
                        run.Type = reader.GetString(3);
                        run.Weather = reader.GetString(4);
                        run.Miles = reader.GetDouble(5);
                        run.Time = ConvertToTime(reader.GetString(6));
                        run.AHR = reader.GetInt32(7);
                        run.BeforeRating = reader.GetInt32(8);
                        run.DuringRating = reader.GetInt32(9);
                        run.Sleep = ConverToSleepTime(reader.GetString(10));
                        run.RHR = reader.GetInt32(11);
                        run.Notes = reader.GetString(12);
                        run.Pace = ConvertToTime(reader.GetString(13));
                        run.Date = ConvertToDate(reader.GetString(14));
                        runs.Add(run);
                    }
                }
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
            }
            finally
            {
                conn.Close();
            }
            return runs;
        }

        [Route("GetRuns/{username}/{search}")]
        [HttpGet(Name = "GetRunsBySearch")]
        public IEnumerable<Run> GetRuns(string username, string search)
        {
            List<Run> runs = new List<Run>();
            try
            {
                conn.Open();
                SQLiteCommand command = conn.CreateCommand();
                command.CommandText = "SELECT * FROM RUNS WHERE Username = '" +username + "' AND Name LIKE '%" + search + "%' ORDER BY Date DESC";
                using (SQLiteDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var run = new Run();
                        run.Name = reader.GetString(2);
                        run.Type = reader.GetString(3);
                        run.Weather = reader.GetString(4);
                        run.Miles = reader.GetDouble(5);
                        run.Time = ConvertToTime(reader.GetString(6));
                        run.AHR = reader.GetInt32(7);
                        run.BeforeRating = reader.GetInt32(8);
                        run.DuringRating = reader.GetInt32(9);
                        run.Sleep = ConverToSleepTime(reader.GetString(10));
                        run.RHR = reader.GetInt32(11);
                        run.Notes = reader.GetString(12);
                        run.Pace = ConvertToTime(reader.GetString(13));
                        run.Date = ConvertToDate(reader.GetString(14));
                        runs.Add(run);
                    }
                }
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
            }
            finally
            {
                conn.Close();
            }
            return runs;
        }

        [Route("GetRuns/{username}")]
        [HttpGet(Name = "GetAllRuns")]
        public IEnumerable<Run> GetRuns(string username)
        {
            List<Run> runs = new List<Run>();
            try
            {
                conn.Open();
                SQLiteCommand command = conn.CreateCommand();
                command.CommandText = "SELECT * FROM RUNS WHERE Username = '" + username + "' ORDER BY Date DESC";
                using (SQLiteDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var run = new Run();
                        run.Name = reader.GetString(2);
                        run.Type = reader.GetString(3);
                        run.Weather = reader.GetString(4);
                        run.Miles = reader.GetDouble(5);
                        run.Time = ConvertToTime(reader.GetString(6));
                        run.AHR = reader.GetInt32(7);
                        run.BeforeRating = reader.GetInt32(8);
                        run.DuringRating = reader.GetInt32(9);
                        run.Sleep = ConverToSleepTime(reader.GetString(10));
                        run.RHR = reader.GetInt32(11);
                        run.Notes = reader.GetString(12);
                        run.Pace = ConvertToTime(reader.GetString(13));
                        run.Date = ConvertToDate(reader.GetString(14));
                        runs.Add(run);
                    }
                }
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
            }
            finally
            {
                conn.Close();
            }
            return runs;
        }

        [Route("AddRun/{username}")]
        [HttpPost(Name = "AddRun")]
        public HttpStatusCode AddRun([FromBody]Run run, string username)
        {
            var runID = Guid.NewGuid();

            try
            {
                conn.Open();
                SQLiteCommand command = conn.CreateCommand();
                command.CommandText = "INSERT INTO RUNS (RunID, Username, Name, Type, Weather, Miles, Time, AHR, " +
                    "Before_Rating, During_Rating, Sleep, RHR, Notes, Pace, Date) VALUES ('" + runID + "','" + username
                    + "','" + run.Name + "','" + run.Type + "','" + run.Weather + "','" + run.Miles + "','" + run.Time.Minutes
                    + ":" + run.Time.Seconds + "','" + run.AHR + "','" + run.BeforeRating + "','" + run.DuringRating + "','"
                    + run.Sleep.Hours + ":" + run.Sleep.Minutes + "','" + run.RHR + "','" + run.Notes + "','" + run.Pace.Minutes
                    + ":" + run.Pace.Seconds + "','" + run.Date.Month + "/" + run.Date.Day + "/" + run.Date.Year + "')";
                if (command.ExecuteNonQuery() == 1)
                {
                    return HttpStatusCode.OK;
                }
                else
                {
                    return HttpStatusCode.InternalServerError;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            finally
            {
                conn.Close();
            }
            return HttpStatusCode.BadRequest;
        }

        private Time ConvertToTime(string time)
        {
            Time result = new Time();
            var splitTime = time.Split(":");
            result.Minutes = int.Parse(splitTime[0]);
            result.Seconds = int.Parse(splitTime[1]);
            return result;
        }

        private SleepTime ConverToSleepTime(string time)
        {
            SleepTime result = new SleepTime();
            var splitTime = time.Split(":");
            result.Hours = int.Parse(splitTime[0]);
            result.Minutes = int.Parse(splitTime[1]);
            return result;
        }

        private Date ConvertToDate(string date)
        {
            Date result = new Date();
            var splitDate = date.Split("/");
            result.Month = int.Parse(splitDate[0]);
            result.Day= int.Parse(splitDate[1]);
            result.Year = int.Parse(splitDate[2]);
            return result;
        }
    }
}
