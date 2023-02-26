namespace RunningThoughtsBackend
{
    public class Run
    {
        public String? Name { get; set; }

        public String? Type { get; set; }

        public String? Weather { get; set; }

        public Double? Miles { get; set; }

        public Time? Time { get; set; }

        public Time? Pace { get; set; }

        public int? AHR { get; set; }

        public int? BeforeRating { get; set; }

        public int? DuringRating { get; set; }

        public SleepTime? Sleep { get; set; }

        public int? RHR { get; set; }

        public String? Notes { get; set; }

        public Date? Date { get; set; }
    }

    public class Time
    {
        public int? Minutes { get; set; }

        public int? Seconds { get; set;}
    }

    public class SleepTime
    {
        public int? Hours { get; set; }

        public int? Minutes { get; set; }
    }

    public class Date
    {
        public int? Month { get; set; }

        public int? Day { get; set; }

        public int? Year { get; set; }
    }
}
